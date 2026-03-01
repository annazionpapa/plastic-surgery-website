"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ContactContent />
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
          Consultation
        </p>
        <h1 className="text-3xl lg:text-5xl font-light tracking-tight">
          상담{" "}
          <span className="font-display italic text-rosegold">예약</span>
        </h1>
        <p className="text-sm text-silver-dark mt-4 max-w-md mx-auto leading-relaxed">
          전문의와의 1:1 상담으로 최적의 시술 계획을 수립해드립니다
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CONTACT CONTENT - 2컬럼 레이아웃
   ══════════════════════════════════════════ */
function ContactContent() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <ScrollReveal direction="left">
            <ContactInfo />
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="right" delay={1}>
            <ConsultationForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ── Contact Info ── */
function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl lg:text-3xl font-light text-ivory mb-8">
        오시는 길 &amp;{" "}
        <span className="font-display italic text-rosegold">연락처</span>
      </h2>

      <div className="space-y-8">
        {/* 전화번호 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center border border-white/8 flex-shrink-0">
            <svg
              className="w-5 h-5 text-rosegold/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-1">
              Phone
            </p>
            <a
              href="tel:02-1234-5678"
              className="text-lg text-ivory hover:text-rosegold transition-colors"
            >
              02-1234-5678
            </a>
          </div>
        </div>

        {/* 주소 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center border border-white/8 flex-shrink-0">
            <svg
              className="w-5 h-5 text-rosegold/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-1">
              Address
            </p>
            <p className="text-sm text-ivory leading-relaxed">
              서울특별시 강남구 테헤란로 123
              <br />
              뤼에르빌딩 5~8F
            </p>
            <p className="text-xs text-silver-dark mt-1">
              강남역 3번 출구 도보 3분
            </p>
          </div>
        </div>

        {/* 진료시간 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center border border-white/8 flex-shrink-0">
            <svg
              className="w-5 h-5 text-rosegold/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-3">
              Hours
            </p>
            <table className="text-sm">
              <tbody className="space-y-1">
                <tr>
                  <td className="text-silver pr-6 py-1">월 - 금</td>
                  <td className="text-ivory py-1">10:00 - 19:00</td>
                </tr>
                <tr>
                  <td className="text-silver pr-6 py-1">토요일</td>
                  <td className="text-ivory py-1">10:00 - 16:00</td>
                </tr>
                <tr>
                  <td className="text-silver pr-6 py-1">점심시간</td>
                  <td className="text-ivory py-1">13:00 - 14:00</td>
                </tr>
                <tr>
                  <td className="text-silver-dark pr-6 py-1">일·공휴일</td>
                  <td className="text-silver-dark py-1">휴진</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 지도 Placeholder */}
      <div className="mt-10">
        <p className="text-[10px] tracking-[0.25em] uppercase text-rosegold/70 mb-3">
          Location
        </p>
        <div className="relative aspect-video bg-charcoal-light overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.354!2d127.0276!3d37.4979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a8e487d25%3A0x7e93b6e0e8a6e0e0!2z6rCV64Ko7Jet!5e0!3m2!1sko!2skr!4v1709000000000!5m2!1sko!2skr"
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", inset: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="뤼에르 성형외과 위치"
          />
        </div>
      </div>
    </div>
  );
}

/* ── Consultation Form ── */
function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    visitType: "first",
    date: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    alert("상담 예약이 접수되었습니다.\n빠른 시일 내에 연락드리겠습니다.");
    setFormData({
      name: "",
      phone: "",
      treatment: "",
      visitType: "first",
      date: "",
      message: "",
      privacy: false,
    });
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 text-ivory placeholder:text-silver-dark px-4 py-3 focus:border-rosegold/50 focus:outline-none transition-colors";

  return (
    <div className="glass p-8 lg:p-10">
      <h2 className="text-2xl font-light text-ivory mb-2">
        상담 예약{" "}
        <span className="font-display italic text-rosegold">신청</span>
      </h2>
      <p className="text-sm text-silver-dark mb-8">
        아래 양식을 작성해 주시면 빠른 시일 내에 연락드리겠습니다.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* 이름 */}
        <div>
          <label className="block text-[11px] tracking-[0.15em] uppercase text-silver mb-2">
            이름 <span className="text-rosegold">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="홍길동"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className={inputClass}
          />
        </div>

        {/* 연락처 */}
        <div>
          <label className="block text-[11px] tracking-[0.15em] uppercase text-silver mb-2">
            연락처 <span className="text-rosegold">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="010-0000-0000"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={inputClass}
          />
        </div>

        {/* 관심 시술 */}
        <div>
          <label className="block text-[11px] tracking-[0.15em] uppercase text-silver mb-2">
            관심 시술 <span className="text-rosegold">*</span>
          </label>
          <select
            required
            value={formData.treatment}
            onChange={(e) =>
              setFormData({ ...formData, treatment: e.target.value })
            }
            className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22%23999%22%20stroke-width%3D%221.5%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M19.5%208.25l-7.5%207.5-7.5-7.5%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat`}
          >
            <option value="" disabled>
              시술을 선택해주세요
            </option>
            <option value="눈 성형">눈 성형</option>
            <option value="코 성형">코 성형</option>
            <option value="윤곽 성형">윤곽 성형</option>
            <option value="리프팅">리프팅</option>
            <option value="가슴 성형">가슴 성형</option>
            <option value="바디 성형">바디 성형</option>
          </select>
        </div>

        {/* 상담 유형 */}
        <div>
          <label className="block text-[11px] tracking-[0.15em] uppercase text-silver mb-3">
            상담 유형
          </label>
          <div className="flex flex-wrap gap-3">
            {[
              { value: "first", label: "첫 방문" },
              { value: "revisit", label: "재방문" },
              { value: "revision", label: "재수술" },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className="relative w-4 h-4 border border-white/20 group-hover:border-rosegold/40 transition-colors flex items-center justify-center">
                  <input
                    type="radio"
                    name="visitType"
                    value={option.value}
                    checked={formData.visitType === option.value}
                    onChange={(e) =>
                      setFormData({ ...formData, visitType: e.target.value })
                    }
                    className="sr-only"
                  />
                  {formData.visitType === option.value && (
                    <div className="w-2 h-2 bg-rosegold" />
                  )}
                </div>
                <span className="text-sm text-silver group-hover:text-ivory transition-colors">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* 희망 날짜 */}
        <div>
          <label className="block text-[11px] tracking-[0.15em] uppercase text-silver mb-2">
            희망 상담 날짜
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>

        {/* 문의 내용 */}
        <div>
          <label className="block text-[11px] tracking-[0.15em] uppercase text-silver mb-2">
            문의 내용
          </label>
          <textarea
            rows={4}
            placeholder="궁금하신 점이나 상담 내용을 자유롭게 작성해주세요."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* 개인정보 동의 */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative w-4 h-4 border border-white/20 group-hover:border-rosegold/40 transition-colors flex items-center justify-center mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                checked={formData.privacy}
                onChange={(e) =>
                  setFormData({ ...formData, privacy: e.target.checked })
                }
                className="sr-only"
              />
              {formData.privacy && (
                <svg
                  className="w-3 h-3 text-rosegold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </div>
            <span className="text-xs text-silver-dark leading-relaxed">
              개인정보 수집 및 이용에 동의합니다. 수집된 정보는 상담 목적으로만
              사용되며, 상담 완료 후 즉시 파기됩니다.{" "}
              <span className="text-rosegold/60">(필수)</span>
            </span>
          </label>
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full py-4 bg-rosegold text-obsidian text-sm tracking-[0.1em] font-medium hover:bg-rosegold-light transition-colors mt-4"
        >
          상담 예약 신청하기
        </button>
      </form>
    </div>
  );
}
