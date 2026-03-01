"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";
import { reviews } from "@/data/reviews";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <SignatureTreatments />
        <BeforeAfterGallery />
        <DoctorsSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}

/* ══════════════════════════════════════════
   1. HERO — 풀스크린 이머시브 + 슬라이드
   ══════════════════════════════════════════ */
const heroSlides = [
  {
    image: "/images/facility-lobby.jpg",
    subtitle: "Plastic Surgery",
    title: (
      <>
        자연스러운
        <br />
        아름다움의
        <br />
        <span className="font-display italic text-rosegold">완성</span>
      </>
    ),
    desc: "15년 경력 성형외과 전문의 3인이 당신의 고유한 아름다움을\n가장 자연스러운 방법으로 완성합니다.",
  },
  {
    image: "/images/treatment-nose.jpg",
    subtitle: "Natural Beauty",
    title: (
      <>
        당신만의
        <br />
        <span className="font-display italic text-rosegold">아름다움</span>을
        <br />
        디자인하다
      </>
    ),
    desc: "얼굴 구조와 비율을 정밀하게 분석하여\n조화로운 결과를 만들어냅니다.",
  },
  {
    image: "/images/treatment-eyes.jpg",
    subtitle: "Expert Care",
    title: (
      <>
        전문의의
        <br />
        <span className="font-display italic text-rosegold">섬세한</span>
        <br />
        터치
      </>
    ),
    desc: "대학병원 출신 전문의 3인이\n최소 절개, 빠른 회복을 약속합니다.",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const SLIDE_DURATION = 5000;

  useEffect(() => {
    const startTime = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const slideElapsed = elapsed % SLIDE_DURATION;
      setProgress((slideElapsed / SLIDE_DURATION) * 100);
    }, 30);

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressInterval);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Reset progress on slide change
  useEffect(() => {
    setProgress(0);
  }, [current]);

  const slide = heroSlides[current];

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1100px] overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1.5s] ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/50 to-obsidian/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-obsidian/20" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-5 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="flex items-center gap-3 mb-8">
            <span className="anim-line h-px bg-rosegold" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-rosegold">
              {slide.subtitle}
            </span>
          </div>

          {/* Title */}
          <h1
            key={`title-${current}`}
            className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-8 anim-fade-up"
          >
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p
            key={`desc-${current}`}
            className="anim-fade-up anim-fade-up-d1 text-silver leading-relaxed mb-12 text-[15px] lg:text-base whitespace-pre-line max-w-md"
          >
            {slide.desc}
          </p>

          {/* CTAs */}
          <div className="anim-fade-up anim-fade-up-d2 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-rosegold text-obsidian text-sm tracking-[0.12em] font-medium hover:bg-rosegold-light transition-colors"
            >
              무료 상담 예약
            </Link>
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-ivory text-sm tracking-[0.12em] hover:border-rosegold/50 hover:text-rosegold transition-all"
            >
              시술 안내 보기
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-5 lg:left-8 flex items-center gap-6">
        <div className="flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="relative h-[2px] overflow-hidden transition-all duration-300"
              style={{ width: i === current ? 48 : 24 }}
              aria-label={`슬라이드 ${i + 1}`}
            >
              <span className="absolute inset-0 bg-white/20" />
              {i === current && (
                <span
                  className="absolute inset-y-0 left-0 bg-rosegold transition-none"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
        <span className="text-[11px] tracking-[0.2em] text-silver-dark font-light">
          {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 right-5 lg:right-8 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] text-silver-dark uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-rosegold/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   2. STATS BAR — 카운트업 애니메이션
   ══════════════════════════════════════════ */
function StatsBar() {
  return (
    <section className="border-y border-white/5 bg-obsidian">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { end: 15, suffix: "+", label: "Years", sublabel: "전문의 경력" },
            { end: 30000, suffix: "+", label: "Cases", sublabel: "누적 시술" },
            { end: 99.2, suffix: "%", label: "Satisfaction", sublabel: "환자 만족도", decimals: 1 },
            { end: 3, suffix: "", label: "Specialists", sublabel: "전문의 팀" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={Math.min(i + 1, 4)}>
              <div
                className={`py-12 lg:py-16 text-center ${
                  i < 3 ? "lg:border-r border-white/5" : ""
                } ${i < 2 ? "border-b lg:border-b-0 border-white/5" : ""} ${
                  i % 2 === 0 ? "border-r border-white/5 lg:border-r" : ""
                }`}
              >
                <p className="text-3xl lg:text-4xl font-light text-ivory tracking-tight">
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2200}
                  />
                </p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-rosegold mt-3">
                  {stat.label}
                </p>
                <p className="text-xs text-silver-dark mt-1">{stat.sublabel}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   3. SIGNATURE TREATMENTS — 벤토 그리드
   ══════════════════════════════════════════ */
function SignatureTreatments() {
  return (
    <section className="py-28 lg:py-40 bg-obsidian-lighter/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-4">
                Our Signature
              </p>
              <h2 className="text-3xl lg:text-5xl font-light tracking-tight leading-tight">
                대표 시술
                <span className="font-display italic text-rosegold ml-3">
                  안내
                </span>
              </h2>
            </div>
            <p className="text-sm text-silver-dark max-w-sm mt-4 lg:mt-0 leading-relaxed">
              각 분야 최고의 전문의가 당신에게 맞는 최적의 시술을 제안합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Treatment Grid — 벤토 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {/* Row 1: Large + Medium */}
          <ScrollReveal direction="left" className="md:col-span-1 lg:col-span-2 lg:row-span-2">
            <TreatmentCard treatment={treatments[0]} size="large" />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={1}>
            <TreatmentCard treatment={treatments[1]} size="medium" />
          </ScrollReveal>
          <ScrollReveal direction="right" delay={2}>
            <TreatmentCard treatment={treatments[2]} size="medium" />
          </ScrollReveal>

          {/* Row 2: Three equal */}
          {treatments.slice(3).map((t, i) => (
            <ScrollReveal key={t.id} delay={Math.min(i + 1, 3)}>
              <TreatmentCard treatment={t} size="medium" />
            </ScrollReveal>
          ))}
        </div>

        {/* View All */}
        <ScrollReveal>
          <div className="text-center mt-14">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-sm text-rosegold hover:text-rosegold-light transition-colors group"
            >
              전체 시술 보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TreatmentCard({
  treatment,
  size,
}: {
  treatment: (typeof treatments)[0];
  size: "large" | "medium";
}) {
  return (
    <Link
      href={`/treatments#${treatment.id}`}
      className="group relative block overflow-hidden h-full"
    >
      <div
        className={`relative h-full ${
          size === "large" ? "aspect-[4/3] lg:aspect-auto min-h-[400px] lg:min-h-full" : "aspect-[4/3] min-h-[280px]"
        }`}
      >
        <Image
          src={treatment.image}
          alt={treatment.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <p className="text-[10px] tracking-[0.3em] uppercase text-rosegold/80 font-display italic mb-2">
            {treatment.titleEn}
          </p>
          <h3 className="text-xl lg:text-2xl font-light text-ivory mb-2">
            {treatment.title}
          </h3>
          <p className="text-sm text-silver-dark line-clamp-2 max-w-sm">
            {treatment.subtitle}
          </p>
          <div className="mt-4 flex items-center gap-2 text-rosegold/60 group-hover:text-rosegold transition-colors">
            <span className="text-xs tracking-wider">상세보기</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ══════════════════════════════════════════
   4. BEFORE/AFTER GALLERY — 가로 스크롤
   ══════════════════════════════════════════ */
function BeforeAfterGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const cases = [
    { id: 1, title: "자연유착 쌍꺼풀", category: "눈 성형", doctor: "박서연 원장", info: "20대 여성 · 3개월 경과", before: "/images/case-eyes-01-before.jpg", after: "/images/case-eyes-01-after.jpg" },
    { id: 2, title: "콧대 + 코끝 복합", category: "코 성형", doctor: "김도윤 원장", info: "30대 여성 · 6개월 경과", before: "/images/case-nose-01-before.jpg", after: "/images/case-nose-01-after.jpg" },
    { id: 3, title: "사각턱 축소술", category: "윤곽 성형", doctor: "김도윤 원장", info: "20대 여성 · 3개월 경과", before: "/images/case-contour-01-before.jpg", after: "/images/case-contour-01-after.jpg" },
    { id: 4, title: "안면거상술", category: "리프팅", doctor: "박서연 원장", info: "40대 여성 · 2개월 경과", before: "/images/case-lifting-01-before.jpg", after: "/images/case-lifting-01-after.jpg" },
    { id: 5, title: "가슴 확대 (물방울)", category: "가슴 성형", doctor: "이준혁 원장", info: "30대 여성 · 3개월 경과", before: "/images/case-breast-01-before.jpg", after: "/images/case-breast-01-after.jpg" },
    { id: 6, title: "눈매교정 + 앞트임", category: "눈 성형", doctor: "박서연 원장", info: "20대 여성 · 2개월 경과", before: "/images/case-eyes-02-before.jpg", after: "/images/case-eyes-02-after.jpg" },
  ];

  return (
    <section className="py-28 lg:py-40 bg-obsidian">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-4">
                Before &amp; After
              </p>
              <h2 className="text-3xl lg:text-5xl font-light tracking-tight">
                시술{" "}
                <span className="font-display italic text-rosegold">결과</span>
              </h2>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <button
                onClick={() => scroll("left")}
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-rosegold/40 hover:text-rosegold transition-all"
                aria-label="이전"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-rosegold/40 hover:text-rosegold transition-all"
                aria-label="다음"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div ref={scrollRef} className="gallery-scroll flex gap-5 px-5 lg:px-8">
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1280px)/2)]" />

        {cases.map((c) => (
          <div key={c.id} className="gallery-item w-[340px] sm:w-[400px] group">
            <div className="relative aspect-[3/2] bg-charcoal overflow-hidden mb-4">
              <div className="absolute inset-0 flex">
                <div className="w-1/2 relative bg-charcoal-light overflow-hidden">
                  <Image src={c.before} alt={`${c.title} Before`} fill className="object-cover object-[center_30%]" />
                  <div className="absolute bottom-3 left-3 px-2 py-1 bg-obsidian/70 text-[10px] tracking-wider text-ivory uppercase z-10">
                    Before
                  </div>
                </div>
                <div className="w-1/2 relative bg-charcoal overflow-hidden">
                  <Image src={c.after} alt={`${c.title} After`} fill className="object-cover object-[center_30%]" />
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-rosegold/80 text-[10px] tracking-wider text-obsidian uppercase z-10">
                    After
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 w-px h-full bg-rosegold/60 -translate-x-1/2 z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-rosegold flex items-center justify-center z-10">
                <svg className="w-4 h-4 text-obsidian" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
              </div>
            </div>
            <div className="px-1">
              <p className="text-[10px] tracking-[0.2em] uppercase text-rosegold/70 mb-1">
                {c.category}
              </p>
              <h3 className="text-base font-light text-ivory mb-1">
                {c.title}
              </h3>
              <p className="text-xs text-silver-dark">
                {c.info} · {c.doctor}
              </p>
            </div>
          </div>
        ))}

        <div className="flex-shrink-0 w-5 lg:w-[calc((100vw-1280px)/2)]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 mt-12">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm text-rosegold hover:text-rosegold-light transition-colors group"
        >
          전체 케이스 보기
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   5. DOCTORS — 시네마틱 프로필
   ══════════════════════════════════════════ */
function DoctorsSection() {
  const [activeDoctor, setActiveDoctor] = useState(0);
  const doc = doctors[activeDoctor];

  return (
    <section className="py-28 lg:py-40 bg-charcoal/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 lg:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-4">
              Medical Team
            </p>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight">
              의료진{" "}
              <span className="font-display italic text-rosegold">소개</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={doc.image}
                alt={doc.name}
                fill
                className="object-cover object-[center_20%] transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-display italic text-rosegold text-sm mb-1">
                  {doc.nameEn}
                </p>
                <h3 className="text-2xl font-light text-ivory">
                  {doc.name}{" "}
                  <span className="text-sm text-silver">{doc.title}</span>
                </h3>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={1}>
            <div className="flex flex-col justify-center">
              <div className="flex gap-1 mb-10 flex-wrap">
                {doctors.map((d, i) => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDoctor(i)}
                    className={`px-4 py-2 text-xs tracking-wider transition-all ${
                      i === activeDoctor
                        ? "bg-rosegold text-obsidian"
                        : "border border-white/10 text-silver hover:border-rosegold/30"
                    }`}
                  >
                    {d.name} {d.title}
                  </button>
                ))}
              </div>

              <p className="text-sm text-rosegold tracking-wide mb-4">
                {doc.specialty}
              </p>

              <p className="text-lg font-light text-ivory leading-relaxed mb-8">
                &ldquo;{doc.greeting}&rdquo;
              </p>

              <div className="divider mb-8" />

              <div className="mb-6">
                <h4 className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-3">
                  Education
                </h4>
                <ul className="space-y-1.5">
                  {doc.education.map((e, i) => (
                    <li key={i} className="text-sm text-silver-dark">{e}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-3">
                  Career
                </h4>
                <ul className="space-y-1.5">
                  {doc.career.map((c, i) => (
                    <li key={i} className="text-sm text-silver-dark">{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-3">
                  Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {doc.certifications.map((c, i) => (
                    <span key={i} className="px-3 py-1.5 text-[11px] border border-white/8 text-silver-dark">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 text-sm text-rosegold hover:text-rosegold-light transition-colors group mt-10"
              >
                의료진 더 알아보기
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Quote Bridge + Activity Photos */}
        <ScrollReveal>
          <div className="flex items-center gap-5 py-5 mt-10 mb-2 border-t border-b border-white/5">
            <svg
              className="w-7 h-7 text-rosegold/25 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            <p className="text-sm font-light text-ivory/80 leading-relaxed italic">
              {doc.greeting}
            </p>
            <span className="text-[11px] text-rosegold/40 whitespace-nowrap flex-shrink-0">
              — {doc.name}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 mt-4">
            {doc.activityImages.map((activity, i) => (
              <div key={i} className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={activity.src}
                  alt={activity.alt}
                  fill
                  className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/5 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian/80 via-obsidian/30 to-transparent">
                  <p className="text-xs text-ivory/90 tracking-wider">
                    {activity.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   6. REVIEWS — 에디토리얼 스타일
   ══════════════════════════════════════════ */
function ReviewsSection() {
  const featuredReviews = reviews.slice(0, 6);

  return (
    <section className="py-28 lg:py-40 bg-obsidian">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-4">
                Reviews
              </p>
              <h2 className="text-3xl lg:text-5xl font-light tracking-tight">
                환자{" "}
                <span className="font-display italic text-rosegold">후기</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 mt-4 lg:mt-0">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-rosegold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-silver">
                평균 <span className="text-ivory font-medium">4.9</span> / 5.0
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {featuredReviews.map((review, i) => (
            <ScrollReveal key={review.id} delay={Math.min((i % 2) + 1, 2)}>
              <div className="glass p-6 lg:p-8 group hover:border-rosegold/15 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-rosegold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] px-2.5 py-1 border border-rosegold/20 text-rosegold/70 tracking-wider">
                    {review.category}
                  </span>
                </div>

                <p className="text-[15px] text-silver-light leading-relaxed mb-6">
                  &ldquo;{review.content}&rdquo;
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-sm text-ivory">{review.name}</p>
                    <p className="text-xs text-silver-dark">
                      {review.age} · {review.treatment}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-silver-dark">{review.doctor}</p>
                    <p className="text-[10px] text-silver-dark/60">{review.date}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-14">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-sm text-rosegold hover:text-rosegold-light transition-colors group"
            >
              전체 후기 보기
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   7. CTA — 풀 와이드 (최하단)
   ══════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-obsidian-lighter to-obsidian" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-rosegold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rosegold/3 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-6">
            Consultation
          </p>
          <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-6 leading-tight">
            당신의 아름다움,
            <br />
            <span className="font-display italic text-rosegold">
              지금 시작하세요
            </span>
          </h2>
          <p className="text-silver leading-relaxed mb-12 max-w-lg mx-auto">
            전문의 1:1 맞춤 상담으로 자연스럽고 만족스러운 결과를 약속합니다.
            <br className="hidden sm:block" />
            부담 없이 문의해 주세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-rosegold text-obsidian text-sm tracking-[0.1em] font-medium hover:bg-rosegold-light transition-colors"
            >
              무료 상담 예약
            </Link>
            <a
              href="tel:02-1234-5678"
              className="px-10 py-4 border border-white/15 text-ivory text-sm tracking-[0.1em] hover:border-rosegold/40 hover:text-rosegold transition-all"
            >
              02-1234-5678
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
