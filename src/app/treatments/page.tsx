"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { treatments } from "@/data/treatments";

export default function TreatmentsPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TreatmentsList />
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
          Treatments
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-4">
          시술{" "}
          <span className="font-display italic text-rosegold">안내</span>
        </h1>
        <p className="text-silver text-[15px] leading-relaxed max-w-lg mx-auto">
          각 분야 최고의 전문의가 당신에게 맞는 최적의 시술을 제안합니다
        </p>

        {/* Quick Nav */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
          {treatments.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="px-4 py-2 text-xs tracking-wider border border-white/10 text-silver hover:border-rosegold/40 hover:text-rosegold transition-all"
            >
              {t.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   TREATMENTS LIST — Alternating Layout
   ══════════════════════════════════════════ */
function TreatmentsList() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {treatments.map((treatment, index) => {
          const isOdd = index % 2 === 0; // first item = image left

          return (
            <div
              key={treatment.id}
              id={treatment.id}
              className="scroll-mt-24"
            >
              {/* Divider between sections */}
              {index > 0 && (
                <div className="divider my-16 lg:my-24" />
              )}

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  !isOdd ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <ScrollReveal direction={isOdd ? "left" : "right"}>
                  <div className="lg:[direction:ltr]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
                      {/* Category badge */}
                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase bg-obsidian/60 backdrop-blur-sm text-rosegold border border-rosegold/20">
                          {treatment.titleEn}
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal direction={isOdd ? "right" : "left"} delay={1}>
                  <div className="lg:[direction:ltr]">
                    {/* Section number */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-5xl lg:text-6xl font-light text-rosegold/10 font-display italic">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="text-[10px] tracking-[0.3em] uppercase text-rosegold mb-2">
                      {treatment.titleEn}
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-light text-ivory mb-2 tracking-tight">
                      {treatment.title}
                    </h2>
                    <p className="text-sm font-display italic text-rosegold/60 mb-6">
                      {treatment.subtitle}
                    </p>

                    <p className="text-[15px] text-silver leading-relaxed mb-8">
                      {treatment.description}
                    </p>

                    {/* Details list */}
                    <div className="mb-8">
                      <h4 className="text-[10px] tracking-[0.25em] uppercase text-rosegold/60 mb-4">
                        Procedures
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {treatment.details.map((detail) => (
                          <div
                            key={detail}
                            className="flex items-center gap-3 py-2"
                          >
                            <span className="w-1 h-1 bg-rosegold/40 flex-shrink-0" />
                            <span className="text-sm text-silver-dark">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Info grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 glass">
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-rosegold/50 mb-1">
                          Price
                        </p>
                        <p className="text-sm text-ivory font-light">
                          {treatment.priceHint}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-rosegold/50 mb-1">
                          Duration
                        </p>
                        <p className="text-sm text-ivory font-light">
                          {treatment.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-rosegold/50 mb-1">
                          Recovery
                        </p>
                        <p className="text-sm text-ivory font-light">
                          {treatment.recovery}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-rosegold/50 mb-1">
                          Anesthesia
                        </p>
                        <p className="text-sm text-ivory font-light">
                          {treatment.anesthesia}
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-4">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-rosegold text-obsidian text-xs tracking-[0.1em] font-medium hover:bg-rosegold-light transition-colors"
                      >
                        상담 예약
                      </Link>
                      <Link
                        href={`/gallery`}
                        className="inline-flex items-center gap-2 text-xs text-rosegold/70 hover:text-rosegold transition-colors group"
                      >
                        시술 결과 보기
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          );
        })}
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
            나에게 맞는 시술,
            <br />
            <span className="font-display italic text-rosegold">
              전문의와 상담하세요
            </span>
          </h2>
          <p className="text-silver leading-relaxed mb-10 max-w-lg mx-auto">
            온라인으로 간편하게 상담을 예약하시면,
            <br className="hidden sm:block" />
            전문의가 1:1 맞춤 시술을 제안해 드립니다.
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
