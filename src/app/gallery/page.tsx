"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const categories = [
  "전체",
  "눈 성형",
  "코 성형",
  "윤곽 성형",
  "리프팅",
  "가슴 성형",
  "바디 성형",
] as const;

type Category = (typeof categories)[number];

interface GalleryCase {
  id: number;
  title: string;
  category: Category;
  info: string;
  doctor: string;
  period: string;
  before: string;
  after: string;
}

const galleryCases: GalleryCase[] = [
  // 눈 3
  {
    id: 1,
    title: "자연유착 쌍꺼풀",
    category: "눈 성형",
    info: "20대 여성",
    doctor: "박서연 원장",
    period: "3개월 경과",
    before: "/images/case-eyes-01-before.jpg",
    after: "/images/case-eyes-01-after.jpg",
  },
  {
    id: 2,
    title: "눈매교정 + 앞트임",
    category: "눈 성형",
    info: "20대 여성",
    doctor: "박서연 원장",
    period: "2개월 경과",
    before: "/images/case-eyes-02-before.jpg",
    after: "/images/case-eyes-02-after.jpg",
  },
  {
    id: 3,
    title: "눈밑지방 재배치",
    category: "눈 성형",
    info: "30대 여성",
    doctor: "박서연 원장",
    period: "1개월 경과",
    before: "/images/case-eyes-03-before.jpg",
    after: "/images/case-eyes-03-after.jpg",
  },
  // 코 3
  {
    id: 4,
    title: "콧대 + 코끝 복합",
    category: "코 성형",
    info: "30대 여성",
    doctor: "김도윤 원장",
    period: "6개월 경과",
    before: "/images/case-nose-01-before.jpg",
    after: "/images/case-nose-01-after.jpg",
  },
  {
    id: 5,
    title: "매부리코 교정",
    category: "코 성형",
    info: "20대 남성",
    doctor: "김도윤 원장",
    period: "3개월 경과",
    before: "/images/case-nose-02-before.jpg",
    after: "/images/case-nose-02-after.jpg",
  },
  {
    id: 6,
    title: "코재수술",
    category: "코 성형",
    info: "30대 여성",
    doctor: "김도윤 원장",
    period: "4개월 경과",
    before: "/images/case-nose-03-before.jpg",
    after: "/images/case-nose-03-after.jpg",
  },
  // 윤곽 2
  {
    id: 7,
    title: "사각턱 축소술",
    category: "윤곽 성형",
    info: "20대 여성",
    doctor: "김도윤 원장",
    period: "3개월 경과",
    before: "/images/case-contour-01-before.jpg",
    after: "/images/case-contour-01-after.jpg",
  },
  {
    id: 8,
    title: "광대 축소 + V라인",
    category: "윤곽 성형",
    info: "30대 여성",
    doctor: "김도윤 원장",
    period: "2개월 경과",
    before: "/images/case-contour-02-before.jpg",
    after: "/images/case-contour-02-after.jpg",
  },
  // 리프팅 2
  {
    id: 9,
    title: "안면거상술",
    category: "리프팅",
    info: "40대 여성",
    doctor: "박서연 원장",
    period: "2개월 경과",
    before: "/images/case-lifting-01-before.jpg",
    after: "/images/case-lifting-01-after.jpg",
  },
  {
    id: 10,
    title: "실 리프팅",
    category: "리프팅",
    info: "40대 여성",
    doctor: "박서연 원장",
    period: "1개월 경과",
    before: "/images/case-lifting-02-before.jpg",
    after: "/images/case-lifting-02-after.jpg",
  },
  // 가슴 1
  {
    id: 11,
    title: "가슴 확대 (물방울)",
    category: "가슴 성형",
    info: "30대 여성",
    doctor: "이준혁 원장",
    period: "3개월 경과",
    before: "/images/case-breast-01-before.jpg",
    after: "/images/case-breast-01-after.jpg",
  },
  // 바디 1
  {
    id: 12,
    title: "복부 지방흡입",
    category: "바디 성형",
    info: "30대 여성",
    doctor: "이준혁 원장",
    period: "2개월 경과",
    before: "/images/case-body-01-before.jpg",
    after: "/images/case-body-01-after.jpg",
  },
  // ── 신규 추가 ──
  // 눈 +1 (남성)
  {
    id: 13,
    title: "절개 쌍꺼풀 + 눈매교정",
    category: "눈 성형",
    info: "30대 남성",
    doctor: "박서연 원장",
    period: "3개월 경과",
    before: "/images/case-eyes-04-before.jpg",
    after: "/images/case-eyes-04-after.jpg",
  },
  // 코 +1
  {
    id: 14,
    title: "들창코 교정",
    category: "코 성형",
    info: "20대 여성",
    doctor: "김도윤 원장",
    period: "4개월 경과",
    before: "/images/case-nose-04-before.jpg",
    after: "/images/case-nose-04-after.jpg",
  },
  // 윤곽 +1 (남성)
  {
    id: 15,
    title: "턱끝 성형 (무턱)",
    category: "윤곽 성형",
    info: "20대 남성",
    doctor: "김도윤 원장",
    period: "3개월 경과",
    before: "/images/case-contour-03-before.jpg",
    after: "/images/case-contour-03-after.jpg",
  },
  // 리프팅 +1
  {
    id: 16,
    title: "이마거상 + 눈썹리프팅",
    category: "리프팅",
    info: "50대 여성",
    doctor: "박서연 원장",
    period: "2개월 경과",
    before: "/images/case-lifting-03-before.jpg",
    after: "/images/case-lifting-03-after.jpg",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("전체");

  const filteredCases =
    activeCategory === "전체"
      ? galleryCases
      : galleryCases.filter((c) => c.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />

        {/* Filter + Gallery */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            {/* Category Filter */}
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-12 lg:mb-16">
                {categories.map((cat) => {
                  const count =
                    cat === "전체"
                      ? galleryCases.length
                      : galleryCases.filter((c) => c.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-5 py-2.5 text-xs tracking-[0.1em] transition-all ${
                        activeCategory === cat
                          ? "bg-rosegold text-obsidian"
                          : "border border-white/10 text-silver hover:border-rosegold/30 hover:text-rosegold"
                      }`}
                    >
                      {cat}
                      <span className="ml-1.5 opacity-60">({count})</span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Results count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-silver-dark tracking-wider">
                총{" "}
                <span className="text-rosegold">{filteredCases.length}</span>개의
                케이스
              </p>
              <div className="h-px flex-1 bg-white/5 ml-6" />
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filteredCases.map((galleryCase, i) => (
                <ScrollReveal key={galleryCase.id} delay={Math.min((i % 3) + 1, 3)}>
                  <GalleryCard galleryCase={galleryCase} />
                </ScrollReveal>
              ))}

              {/* Consultation CTA card — 마지막에 삽입 */}
              <ScrollReveal delay={1}>
                <Link
                  href="/contact"
                  className="group flex flex-col items-center justify-center aspect-[3/2] border border-dashed border-white/10 hover:border-rosegold/30 transition-all duration-500 p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full border border-rosegold/20 flex items-center justify-center mb-5 group-hover:border-rosegold/50 group-hover:bg-rosegold/5 transition-all">
                    <svg
                      className="w-7 h-7 text-rosegold/50 group-hover:text-rosegold transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <p className="text-sm text-ivory/80 font-light mb-1">
                    나도 이런 변화를 원한다면?
                  </p>
                  <p className="text-xs text-rosegold/60 group-hover:text-rosegold transition-colors tracking-wider">
                    무료 상담 예약하기 →
                  </p>
                </Link>
              </ScrollReveal>
            </div>

            {/* Empty state */}
            {filteredCases.length === 0 && (
              <div className="text-center py-20">
                <p className="text-silver-dark text-sm">
                  해당 카테고리의 케이스가 없습니다.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Trust Signals */}
        <TrustSection />

        <CTASection />
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}

/* ══════════════════════════════════════════
   HERO
   ══════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative py-32 pt-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rosegold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-5">
          Before &amp; After
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-4">
          전후 사진{" "}
          <span className="font-display italic text-rosegold">갤러리</span>
        </h1>
        <p className="text-silver text-[15px] leading-relaxed max-w-lg mx-auto">
          실제 환자분들의 시술 전후 변화를 확인해 보세요
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   STATS BAR — 갤러리 실적
   ══════════════════════════════════════════ */
function StatsBar() {
  return (
    <section className="border-y border-white/5 bg-obsidian-lighter/30">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {[
            { end: 30000, suffix: "+", label: "누적 시술 건수" },
            { end: 98, suffix: "%", label: "재방문율" },
            { end: 15, suffix: "년+", label: "전문의 경력" },
            { end: 4.9, suffix: "/5.0", label: "환자 만족도", decimals: 1 },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 lg:py-10 text-center ${
                i < 3 ? "lg:border-r border-white/5" : ""
              } ${i < 2 ? "border-b lg:border-b-0 border-white/5" : ""} ${
                i % 2 === 0 ? "border-r border-white/5 lg:border-r" : ""
              }`}
            >
              <p className="text-2xl lg:text-3xl font-light text-ivory tracking-tight">
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                  duration={2000}
                />
              </p>
              <p className="text-[10px] tracking-[0.15em] text-silver-dark mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   GALLERY CARD
   ══════════════════════════════════════════ */
function GalleryCard({ galleryCase }: { galleryCase: GalleryCase }) {
  return (
    <div className="group">
      {/* Before / After side by side */}
      <div className="relative aspect-[3/2] bg-charcoal overflow-hidden mb-4">
        <div className="absolute inset-0 flex">
          {/* Before side */}
          <div className="w-1/2 relative bg-charcoal-light overflow-hidden">
            <Image
              src={galleryCase.before}
              alt={`${galleryCase.title} Before`}
              fill
              className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 px-2 py-1 bg-obsidian/70 backdrop-blur-sm text-[10px] tracking-wider text-ivory uppercase z-10">
              Before
            </div>
          </div>
          {/* After side */}
          <div className="w-1/2 relative bg-charcoal overflow-hidden">
            <Image
              src={galleryCase.after}
              alt={`${galleryCase.title} After`}
              fill
              className="object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 right-3 px-2 py-1 bg-rosegold/80 backdrop-blur-sm text-[10px] tracking-wider text-obsidian uppercase z-10">
              After
            </div>
          </div>
        </div>

        {/* Center divider line */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-rosegold/60 -translate-x-1/2 z-10" />

        {/* Center handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-rosegold flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
          <svg
            className="w-4 h-4 text-obsidian"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/10 transition-colors duration-300 z-[5]" />
      </div>

      {/* Card Info */}
      <div className="px-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-rosegold/70">
            {galleryCase.category}
          </span>
          <span className="text-[10px] text-silver-dark/50 tracking-wider">
            {galleryCase.period}
          </span>
        </div>
        <h3 className="text-base font-light text-ivory mb-1.5">
          {galleryCase.title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-xs text-silver-dark">{galleryCase.info}</p>
          <p className="text-xs text-silver-dark">{galleryCase.doctor}</p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   TRUST SIGNALS — 신뢰도 보강
   ══════════════════════════════════════════ */
function TrustSection() {
  const signals = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "실제 환자 사진",
      desc: "보정·합성 없는 실제 환자분의 시술 전후 사진만 게재합니다.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: "환자 동의 하에 공개",
      desc: "모든 사진은 환자분의 서면 동의를 받은 후 게재합니다.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
        </svg>
      ),
      title: "동일 조건 촬영",
      desc: "조명, 각도, 거리 등 동일한 조건에서 촬영하여 객관적인 비교가 가능합니다.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-obsidian-lighter/30">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {signals.map((signal) => (
              <div key={signal.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 border border-rosegold/20 flex items-center justify-center text-rosegold/60">
                  {signal.icon}
                </div>
                <div>
                  <h3 className="text-sm text-ivory font-light mb-1.5">
                    {signal.title}
                  </h3>
                  <p className="text-xs text-silver-dark leading-relaxed">
                    {signal.desc}
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
   CTA
   ══════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-obsidian-lighter to-obsidian" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-rosegold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rosegold/3 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <ScrollReveal>
          <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-6">
            Consultation
          </p>
          <h2 className="text-3xl lg:text-5xl font-light tracking-tight mb-6 leading-tight">
            나도 이런 변화,
            <br />
            <span className="font-display italic text-rosegold">
              가능할까요?
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
