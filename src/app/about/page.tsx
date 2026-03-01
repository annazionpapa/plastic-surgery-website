"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandStory />
        <CoreValues />
        <Facilities />
        <Location />
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
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rosegold/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-5">
          About Us
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-tight mb-4">
          뤼에르 성형외과
          <br />
          <span className="font-display italic text-rosegold">소개</span>
        </h1>
        <p className="text-silver text-[15px] leading-relaxed max-w-lg mx-auto">
          자연스러운 아름다움을 철학으로, 안전과 신뢰를 원칙으로
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   BRAND STORY
   ══════════════════════════════════════════ */
function BrandStory() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Quote */}
          <ScrollReveal direction="left">
            <div>
              <div className="relative">
                {/* Large decorative quote mark */}
                <svg
                  className="absolute -top-8 -left-4 w-20 h-20 text-rosegold/10"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="text-2xl lg:text-3xl font-light text-ivory leading-relaxed tracking-tight relative z-10">
                  자연스러운 아름다움을
                  <br />
                  가장 <span className="font-display italic text-rosegold">아름답게</span>
                  <br />
                  완성하는 곳
                </p>
              </div>
              <div className="divider my-8" />
              <p className="text-silver leading-relaxed text-[15px]">
                뤼에르(LUEUR)는 프랑스어로 &lsquo;빛&rsquo;을 뜻합니다.
                모든 사람이 가진 고유한 아름다움에 빛을 더하는 것,
                그것이 뤼에르 성형외과의 철학입니다.
              </p>
              <p className="text-silver leading-relaxed text-[15px] mt-4">
                2011년 개원 이래, 저희는 단 한 가지 원칙을 지켜왔습니다.
                과하지 않은, 그러나 확실한 변화. 환자 한 분 한 분의 얼굴 구조와
                개성을 존중하며, 가장 자연스러운 방법으로 아름다움을 완성합니다.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={1}>
            <div className="relative">
              <div className="aspect-[4/3] bg-charcoal overflow-hidden relative">
                <Image
                  src="/images/facility-lobby.jpg"
                  alt="뤼에르 성형외과 인테리어"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-rosegold/20" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-rosegold/10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CORE VALUES
   ══════════════════════════════════════════ */
function CoreValues() {
  const values = [
    {
      number: "01",
      titleEn: "Natural",
      title: "자연스러움",
      description:
        "티 나지 않는 자연스러운 결과를 추구합니다. 얼굴의 고유한 비율과 조화를 존중하며, 과하지 않으면서도 확실한 변화를 만들어냅니다.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
        </svg>
      ),
    },
    {
      number: "02",
      titleEn: "Safety",
      title: "안전",
      description:
        "모든 수술은 대학병원급 안전 시스템 하에 진행됩니다. 전문 마취과 의사 상주, 무균 수술실, 실시간 모니터링으로 환자의 안전을 최우선으로 합니다.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      number: "03",
      titleEn: "Communication",
      title: "소통",
      description:
        "충분한 상담과 소통을 통해 환자의 기대와 현실적인 결과 사이의 간극을 줄입니다. 수술 전후 과정을 투명하게 안내하며, 신뢰를 쌓아갑니다.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
    },
    {
      number: "04",
      titleEn: "Technology",
      title: "기술력",
      description:
        "15년 이상의 경력을 가진 전문의 3인이 최신 장비와 검증된 기술을 바탕으로 시술합니다. 지속적인 연구와 학회 활동으로 최신 트렌드를 반영합니다.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-obsidian-light">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-4">
              Core Values
            </p>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight">
              핵심{" "}
              <span className="font-display italic text-rosegold">가치</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={value.number} delay={Math.min(i + 1, 4)}>
              <div className="glass p-8 lg:p-10 h-full group hover:border-rosegold/15 transition-all duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-rosegold/40 group-hover:text-rosegold/70 transition-colors">
                    {value.icon}
                  </div>
                  <span className="text-[11px] tracking-[0.2em] text-rosegold/30 font-display italic">
                    {value.number}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-rosegold/60 mb-2">
                  {value.titleEn}
                </p>
                <h3 className="text-xl lg:text-2xl font-light text-ivory mb-4">
                  {value.title}
                </h3>
                <p className="text-sm text-silver-dark leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FACILITIES
   ══════════════════════════════════════════ */
function Facilities() {
  const facilities = [
    { title: "프리미엄 상담실", desc: "프라이빗한 1:1 상담 공간", image: "/images/facility-consultation.jpg" },
    { title: "무균 수술실", desc: "대학병원급 수술 환경", image: "/images/facility-or.jpg" },
    { title: "회복 케어룸", desc: "쾌적한 수술 후 회복 공간", image: "/images/facility-recovery.jpg" },
    { title: "첨단 장비실", desc: "최신 의료 장비 구비", image: "/images/equipment-3dct.jpg" },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-4">
                Facilities
              </p>
              <h2 className="text-3xl lg:text-5xl font-light tracking-tight">
                병원{" "}
                <span className="font-display italic text-rosegold">시설</span>
              </h2>
            </div>
            <p className="text-sm text-silver-dark max-w-sm mt-4 lg:mt-0 leading-relaxed">
              쾌적하고 안전한 환경에서 최상의 의료 서비스를 제공합니다.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {facilities.map((facility, i) => (
            <ScrollReveal key={facility.title} delay={Math.min(i + 1, 4)}>
              <div className="group">
                <div className="aspect-[4/3] bg-charcoal overflow-hidden mb-4 relative">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-base font-light text-ivory mb-1">
                  {facility.title}
                </h3>
                <p className="text-xs text-silver-dark">{facility.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Full-width interior description */}
        <ScrollReveal>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pt-16 border-t border-white/5">
            <div>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-rosegold mb-3">
                Premium Interior
              </h3>
              <p className="text-sm text-silver-dark leading-relaxed">
                뤼에르 성형외과는 환자분의 심리적 안정을 위해 호텔급 인테리어를
                갖추고 있습니다. 따뜻한 조명과 세련된 공간에서 편안하게 상담받으실 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-rosegold mb-3">
                Safety System
              </h3>
              <p className="text-sm text-silver-dark leading-relaxed">
                전문 마취과 의사가 상주하며, 수술 중 실시간 생체 모니터링 시스템을 운영합니다.
                모든 수술실은 헤파 필터 기반 무균 시스템을 갖추고 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-rosegold mb-3">
                Recovery Care
              </h3>
              <p className="text-sm text-silver-dark leading-relaxed">
                수술 후 전담 간호사의 1:1 케어를 받으실 수 있으며,
                쾌적한 회복실에서 충분한 안정을 취하신 후 퇴원하실 수 있습니다.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   LOCATION
   ══════════════════════════════════════════ */
function Location() {
  const hours = [
    { day: "월요일 - 금요일", time: "10:00 - 19:00" },
    { day: "토요일", time: "10:00 - 16:00" },
    { day: "일요일 / 공휴일", time: "휴진", highlight: true },
    { day: "점심시간", time: "13:00 - 14:00" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-obsidian-light">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-rosegold mb-4">
              Location
            </p>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight">
              오시는{" "}
              <span className="font-display italic text-rosegold">길</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Map placeholder */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="aspect-[4/3] bg-charcoal-light overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-rosegold/30 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-silver-dark/40 text-xs tracking-wider">MAP PLACEHOLDER</p>
                    <p className="text-silver-dark/30 text-[10px] tracking-wider mt-1">
                      Kakao / Naver Map
                    </p>
                  </div>
                </div>
                {/* Decorative grid lines */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full" style={{
                    backgroundImage: "linear-gradient(rgba(196,149,106,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(196,149,106,0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                  }} />
                </div>
              </div>

              {/* Address info */}
              <div className="glass p-6">
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-rosegold/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="text-ivory text-sm mb-1">
                      서울특별시 강남구 테헤란로 123, 뤼에르빌딩 5~8F
                    </p>
                    <p className="text-silver-dark text-xs">
                      강남역 3번 출구 도보 3분 | 주차: 건물 내 지하주차장 2시간 무료
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Hours + Contact Info */}
          <ScrollReveal direction="right" delay={1}>
            <div>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-rosegold mb-6">
                Hours
              </h3>

              <div className="space-y-0">
                {hours.map((h, i) => (
                  <div
                    key={h.day}
                    className={`flex items-center justify-between py-4 ${
                      i < hours.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <span className="text-sm text-silver">{h.day}</span>
                    <span
                      className={`text-sm ${
                        h.highlight ? "text-rosegold/70" : "text-ivory"
                      }`}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="divider my-8" />

              <h3 className="text-[10px] tracking-[0.25em] uppercase text-rosegold mb-6">
                Contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg className="w-4 h-4 text-rosegold/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-silver-dark mb-1">Phone</p>
                    <a href="tel:02-1234-5678" className="text-sm text-ivory hover:text-rosegold transition-colors">
                      02-1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-4 h-4 text-rosegold/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-silver-dark mb-1">Email</p>
                    <span className="text-sm text-ivory">
                      info@lueur-ps.co.kr
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <svg className="w-4 h-4 text-rosegold/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-silver-dark mb-1">KakaoTalk</p>
                    <span className="text-sm text-ivory">
                      @뤼에르성형외과
                    </span>
                  </div>
                </div>
              </div>

              {/* Transport info */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <h3 className="text-[10px] tracking-[0.25em] uppercase text-rosegold mb-4">
                  Transportation
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 text-[10px] bg-green-900/30 text-green-400 tracking-wider flex-shrink-0 mt-0.5">
                      지하철
                    </span>
                    <p className="text-xs text-silver-dark">
                      2호선 강남역 3번 출구 도보 3분
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 text-[10px] bg-blue-900/30 text-blue-400 tracking-wider flex-shrink-0 mt-0.5">
                      버스
                    </span>
                    <p className="text-xs text-silver-dark">
                      강남역 정류장 하차 (140, 144, 145, 471)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-0.5 text-[10px] bg-yellow-900/30 text-yellow-400 tracking-wider flex-shrink-0 mt-0.5">
                      주차
                    </span>
                    <p className="text-xs text-silver-dark">
                      건물 내 지하주차장 2시간 무료 (이후 30분당 1,000원)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
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
            직접 만나
            <br />
            <span className="font-display italic text-rosegold">
              상담받아 보세요
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
