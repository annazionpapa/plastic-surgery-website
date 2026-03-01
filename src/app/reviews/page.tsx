"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { reviews, reviewCategories } from "@/data/reviews";

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ReviewsContent />
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
    <section className="relative py-32 pt-40 bg-gradient-to-b from-charcoal to-obsidian">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rosegold/3 rounded-full blur-[120px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-4">
          Reviews
        </p>
        <h1 className="text-3xl lg:text-5xl font-light tracking-tight">
          환자{" "}
          <span className="font-display italic text-rosegold">후기</span>
        </h1>
        <p className="text-sm text-silver-dark mt-4 max-w-md mx-auto leading-relaxed">
          뤼에르에서 새로운 아름다움을 경험한 분들의 솔직한 이야기
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   REVIEWS CONTENT
   ══════════════════════════════════════════ */
function ReviewsContent() {
  const [activeCategory, setActiveCategory] = useState<string>("전체");

  const filteredReviews =
    activeCategory === "전체"
      ? reviews
      : reviews.filter((r) => r.category === activeCategory);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-16">
            {/* 평균 별점 */}
            <div className="glass p-6 lg:p-8 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-rosegold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-3xl font-light text-ivory">4.9</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-silver-dark mt-1">
                평균 별점
              </p>
            </div>

            {/* 총 후기 */}
            <div className="glass p-6 lg:p-8 text-center">
              <div className="flex justify-center mb-3">
                <svg
                  className="w-8 h-8 text-rosegold/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <p className="text-3xl font-light text-ivory">{reviews.length}</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-silver-dark mt-1">
                총 후기
              </p>
            </div>

            {/* 재방문율 */}
            <div className="glass p-6 lg:p-8 text-center">
              <div className="flex justify-center mb-3">
                <svg
                  className="w-8 h-8 text-rosegold/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"
                  />
                </svg>
              </div>
              <p className="text-3xl font-light text-ivory">87%</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-silver-dark mt-1">
                재방문율
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-12">
            {reviewCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-wider transition-all ${
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredReviews.map((review, i) => (
            <ScrollReveal key={review.id} delay={Math.min((i % 2) + 1, 2)}>
              <div className="glass p-6 lg:p-8 group hover:border-rosegold/15 transition-all duration-500 h-full">
                {/* Top: Rating & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-3.5 h-3.5 text-rosegold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] px-2.5 py-1 border border-rosegold/20 text-rosegold/70 tracking-wider">
                    {review.category}
                  </span>
                </div>

                {/* Content */}
                <p className="text-[15px] text-silver-light leading-relaxed mb-6">
                  &ldquo;{review.content}&rdquo;
                </p>

                {/* Bottom Info */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-sm text-ivory">{review.name}</p>
                    <p className="text-xs text-silver-dark">
                      {review.age} &middot; {review.treatment}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-silver-dark">{review.doctor}</p>
                    <p className="text-[10px] text-silver-dark/60">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Empty State */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-silver-dark">
              해당 카테고리의 후기가 없습니다.
            </p>
          </div>
        )}
      </div>
    </section>
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
            당신도 변화의
            <br />
            <span className="font-display italic text-rosegold">
              주인공이 되세요
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
