import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl tracking-wide text-ivory">
                LUEUR
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-silver-dark mt-1">
                PLASTIC SURGERY
              </span>
            </Link>
            <p className="text-sm text-silver-dark leading-relaxed max-w-xs">
              자연스러운 아름다움의 완성.
              <br />
              15년 경력 성형외과 전문의 3인이
              <br />
              당신만의 아름다움을 디자인합니다.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-rosegold mb-5">
              Menu
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "병원 소개" },
                { href: "/treatments", label: "시술 안내" },
                { href: "/gallery", label: "전후 사진" },
                { href: "/doctors", label: "의료진" },
                { href: "/reviews", label: "후기" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-silver-dark hover:text-rosegold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-rosegold mb-5">
              Treatments
            </h4>
            <ul className="space-y-3">
              {["눈 성형", "코 성형", "윤곽 성형", "리프팅", "가슴 성형", "바디 성형"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/treatments"
                      className="text-sm text-silver-dark hover:text-rosegold transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-rosegold mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-silver-dark">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-rosegold/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>서울특별시 강남구 테헤란로 123<br />뤼에르빌딩 5~8F</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-rosegold/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:02-1234-5678" className="hover:text-rosegold transition-colors">
                  02-1234-5678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-rosegold/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p>월~금 10:00 - 19:00</p>
                  <p>토요일 10:00 - 16:00</p>
                  <p className="text-silver-dark/60">일요일·공휴일 휴진</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-silver-dark/50">
            &copy; 2026 LUEUR Plastic Surgery. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-silver-dark/50 hover:text-silver transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-xs text-silver-dark/50 hover:text-silver transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
