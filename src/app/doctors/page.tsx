"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DoctorsList />
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
          Medical Team
        </p>
        <h1 className="text-3xl lg:text-5xl font-light tracking-tight">
          의료진{" "}
          <span className="font-display italic text-rosegold">소개</span>
        </h1>
        <p className="text-sm text-silver-dark mt-4 max-w-md mx-auto leading-relaxed">
          각 분야 최고의 전문의가 자연스러운 아름다움을 완성합니다
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   DOCTORS LIST - 풀 섹션, 교대 배치
   ══════════════════════════════════════════ */
function DoctorsList() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {doctors.map((doctor, index) => (
          <div key={doctor.id}>
            <DoctorProfile doctor={doctor} index={index} />
            {index < doctors.length - 1 && (
              <div className="divider my-16 lg:my-24" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function DoctorProfile({
  doctor,
  index,
}: {
  doctor: (typeof doctors)[0];
  index: number;
}) {
  const isOdd = index % 2 === 0;

  return (
    <div>
      {/* Top: Profile + Text — 2-column */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start`}>
        {/* Profile Image */}
        <ScrollReveal direction={isOdd ? "left" : "right"} className={isOdd ? "" : "lg:order-2"}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />
          </div>
        </ScrollReveal>

        {/* Text Content */}
        <ScrollReveal direction={isOdd ? "right" : "left"} delay={1} className={isOdd ? "" : "lg:order-1"}>
          <div className="flex flex-col justify-center lg:py-8">
            <p className="font-display italic text-rosegold text-sm mb-2">
              {doctor.nameEn}
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-ivory mb-1">
              {doctor.name}
            </h2>
            <p className="text-sm text-silver mb-2">{doctor.title}</p>
            <p className="text-sm text-rosegold/80 tracking-wide mb-8">
              {doctor.specialty}
            </p>

            <div className="mb-6">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-3">
                Education
              </h4>
              <ul className="space-y-1.5">
                {doctor.education.map((e, i) => (
                  <li key={i} className="text-sm text-silver-dark flex items-start gap-2">
                    <span className="w-1 h-1 bg-rosegold/40 rounded-full mt-2 flex-shrink-0" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-3">
                Career
              </h4>
              <ul className="space-y-1.5">
                {doctor.career.map((c, i) => (
                  <li key={i} className="text-sm text-silver-dark flex items-start gap-2">
                    <span className="w-1 h-1 bg-rosegold/40 rounded-full mt-2 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-3">
                Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctor.certifications.map((c, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-[11px] border border-white/8 text-silver-dark"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Quote Bridge */}
      <ScrollReveal>
        <div className="flex items-center gap-6 py-6 mt-6 mb-2 border-t border-b border-white/5">
          <svg
            className="w-8 h-8 text-rosegold/25 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
          </svg>
          <p className="text-[15px] font-light text-ivory/80 leading-relaxed italic">
            {doctor.greeting}
          </p>
          <span className="text-xs text-rosegold/40 whitespace-nowrap flex-shrink-0">
            — {doctor.name} {doctor.title}
          </span>
        </div>
      </ScrollReveal>

      {/* Activity Gallery — Full-width 3-column */}
      <ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5 mt-4">
          {doctor.activityImages.map((activity, i) => (
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
            전문의와 직접
            <br />
            <span className="font-display italic text-rosegold">
              상담하세요
            </span>
          </h2>
          <p className="text-silver leading-relaxed mb-10 max-w-lg mx-auto">
            1:1 맞춤 상담으로 최적의 시술 계획을 수립해드립니다.
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
