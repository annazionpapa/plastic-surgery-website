"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "소개" },
  { href: "/treatments", label: "시술 안내" },
  { href: "/gallery", label: "전후 사진" },
  { href: "/doctors", label: "의료진" },
  { href: "/reviews", label: "후기" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-obsidian/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl tracking-wide text-ivory group-hover:text-rosegold transition-colors">
              LUEUR
            </span>
            <span className="text-[11px] tracking-[0.15em] text-silver-dark font-light mt-1 hidden sm:block">
              PLASTIC SURGERY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-[13px] tracking-wide transition-colors ${
                  pathname === item.href
                    ? "text-rosegold"
                    : "text-silver hover:text-ivory"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px bg-rosegold" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex px-6 py-2.5 text-[12px] tracking-[0.15em] uppercase border border-rosegold/40 text-rosegold hover:bg-rosegold hover:text-obsidian transition-all duration-300"
          >
            상담 예약
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span
              className={`w-6 h-px bg-ivory transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4px]" : ""
              }`}
            />
            <span
              className={`w-6 h-px bg-ivory transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-px bg-ivory transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/5 bg-obsidian/95 backdrop-blur-md">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-4 text-[15px] tracking-wide rounded-lg transition-colors ${
                  pathname === item.href
                    ? "text-rosegold bg-white/5"
                    : "text-silver hover:text-ivory hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-center border border-rosegold/40 text-rosegold text-[14px] tracking-wider hover:bg-rosegold hover:text-obsidian transition-all"
              >
                상담 예약
              </Link>
              <a
                href="tel:02-1234-5678"
                className="py-2 text-center text-sm text-silver-dark tracking-wider"
              >
                02-1234-5678
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
