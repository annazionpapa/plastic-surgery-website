"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";

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
  },
  {
    id: 2,
    title: "눈매교정 + 앞트임",
    category: "눈 성형",
    info: "20대 여성",
    doctor: "박서연 원장",
    period: "2개월 경과",
  },
  {
    id: 3,
    title: "눈밑지방 재배치",
    category: "눈 성형",
    info: "30대 여성",
    doctor: "박서연 원장",
    period: "1개월 경과",
  },
  // 코 3
  {
    id: 4,
    title: "콧대 + 코끝 복합",
    category: "코 성형",
    info: "30대 여성",
    doctor: "김도윤 원장",
    period: "6개월 경과",
  },
  {
    id: 5,
    title: "매부리코 교정",
    category: "코 성형",
    info: "20대 남성",
    doctor: "김도윤 원장",
    period: "3개월 경과",
  },
  {
    id: 6,
    title: "코재수술",
    category: "코 성형",
    info: "30대 여성",
    doctor: "김도윤 원장",
    period: "4개월 경과",
  },
  // 윤곽 2
  {
    id: 7,
    title: "사각턱 축소술",
    category: "윤곽 성형",
    info: "20대 여성",
    doctor: "김도윤 원장",
    period: "3개월 경과",
  },
  {
    id: 8,
    title: "광대 축소 + V라인",
    category: "윤곽 성형",
    info: "30대 여성",
    doctor: "김도윤 원장",
    period: "2개월 경과",
  },
  // 리프팅 2
  {
    id: 9,
    title: "안면거상술",
    category: "리프팅",
    info: "40대 여성",
    doctor: "박서연 원장",
    period: "2개월 경과",
  },
  {
    id: 10,
    title: "실 리프팅",
    category: "리프팅",
    info: "40대 여성",
    doctor: "박서연 원장",
    period: "1개월 경과",
  },
  // 가슴 1
  {
    id: 11,
    title: "가슴 확대 (물방울)",
    category: "가슴 성형",
    info: "30대 여성",
    doctor: "이준혁 원장",
    period: "3개월 경과",
  },
  // 바디 1
  {
    id: 12,
    title: "복부 지방흡입",
    category: "바디 성형",
    info: "30대 여성",
    doctor: "이준혁 원장",
    period: "2개월 경과",
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

        {/* Filter + Gallery */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            {/* Category Filter */}
            <ScrollReveal>
              <div className="flex flex-wrap gap-2 mb-12 lg:mb-16">
                {categories.map((cat) => (
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
                  </button>
                ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCases.map((galleryCase, i) => (
                <ScrollReveal key={galleryCase.id} delay={Math.min((i % 3) + 1, 3)}>
                  <GalleryCard galleryCase={galleryCase} />
                </ScrollReveal>
              ))}
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
   GALLERY CARD
   ══════════════════════════════════════════ */
function GalleryCard({ galleryCase }: { galleryCase: GalleryCase }) {
  return (
    <div className="group">
      {/* Before / After side by side */}
      <div className="relative aspect-[4/3] bg-charcoal overflow-hidden mb-4">
        <div className="absolute inset-0 flex">
          {/* Before side */}
          <div className="w-1/2 relative bg-charcoal-light">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-silver-dark/20 text-xs tracking-[0.2em] uppercase">
                Before
              </span>
            </div>
            <div className="absolute bottom-3 left-3 px-2 py-1 bg-obsidian/70 backdrop-blur-sm text-[10px] tracking-wider text-ivory uppercase z-10">
              Before
            </div>
          </div>
          {/* After side */}
          <div className="w-1/2 relative bg-charcoal">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-silver-dark/20 text-xs tracking-[0.2em] uppercase">
                After
              </span>
            </div>
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
        <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/20 transition-colors duration-300 z-[5]" />
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
   CTA
   ══════════════════════════════════════════ */
function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
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
          <p className="text-silver leading-relaxed mb-10 max-w-lg mx-auto">
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
