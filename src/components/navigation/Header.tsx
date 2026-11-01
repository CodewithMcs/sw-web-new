"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavigation from "./MobileNavigation";

const DARK_HERO_ROUTES = [
  /^\/$/,
  /^\/about$/,
  /^\/talent\/[^\/]+$/,
  /^\/editorial\/[^\/]+$/
];

const NAV_LINKS = [
  { label: "Home", href: "/", id: "home" },
  { label: "Talent", href: "/talent", id: "talent" },
  { label: "Stars", href: "/stars-shine", id: "stars" },
  { label: "Casting", href: "/#casting", id: "casting" },
  { label: "Editorial", href: "/editorial", id: "editorial" },
  { label: "Motion", href: "/#motion", id: "motion" },
  { label: "Events", href: "/#events", id: "events" },
  { label: "About", href: "/about", id: "about" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("motion");

  const hasDarkHero = DARK_HERO_ROUTES.some((pattern) => pattern.test(pathname));

  useEffect(() => {
    let prevY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const threshold = 0.45 * window.innerHeight;
      const hasAnchor = Boolean(window.location.hash) && window.location.hash !== "#";

      // Scrolled past hero section or landing on an anchor
      setIsScrolled(currentY > threshold || (hasAnchor && currentY > 50));

      // Hide header on scroll down (>240px), reveal on scroll up
      if (currentY > 240 && currentY > prevY + 2) {
        setIsHidden(true);
      } else if (currentY < prevY - 2) {
        setIsHidden(false);
      }
      prevY = currentY;

      // Track hash
      const hash = window.location.hash.replace(/^#/, "");
      if (hash) setActiveSection(hash);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    const t1 = setTimeout(handleScroll, 100);
    const t2 = setTimeout(handleScroll, 400);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash) setActiveSection(hash);
    };
    window.addEventListener("hashchange", handleHash);
    handleHash();
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isDark = hasDarkHero && !isScrolled && !mobileMenuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-[transform,background-color,color,border-color] duration-700 ease-[var(--ease-editorial)] ${
          isHidden && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0"
        } ${isDark || mobileMenuOpen ? "text-paper" : "text-ink"} ${
          (!hasDarkHero || isScrolled) && !mobileMenuOpen
            ? "border-b border-line bg-paper/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="gutter relative flex h-full items-center justify-between gap-3 md:gap-5 xl:gap-6">
          {/* Brand Logo with Cinema Camera & SW Monogram SVG */}
          <Link
            aria-label="ShineWoods home"
            className="relative z-10 shrink-0 overflow-visible group"
            href="/"
          >
            <span className="inline-flex min-w-0 shrink-0 items-center overflow-visible gap-2">
              <span className="inline-flex shrink-0 items-center gap-1.5" aria-hidden="true">
                {/* 1. Cinema Camera with Spinning Dual Reels */}
                <svg
                  viewBox="0 0 96 72"
                  className="brand-camera text-current transition-colors duration-700 ease-[var(--ease-editorial)] h-7 w-auto"
                  role="img"
                  aria-label="ShineWoods cinema"
                  fill="currentColor"
                >
                  <path d="M38 52 L28 70 L32.2 70 L42 54 Z" />
                  <path d="M58 52 L68 70 L63.8 70 L54 54 Z" />
                  <rect x="30" y="49.5" width="36" height="3.2" rx="0.6" />
                  <rect x="24" y="28" width="40" height="22" rx="2.2" />
                  <path d="M24 32 L14 29.5 L14 36.5 L24 38 Z" />
                  <path d="M64 31 L86 26 L86 51 L64 46 Z" />
                  {/* Left reel */}
                  <g className="brand-reel-spin">
                    <circle
                      cx="36"
                      cy="18"
                      r="13.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.78"
                    />
                    <circle cx="36" cy="18" r="2.97" fill="currentColor" />
                    <path
                      d="M40.01 18.00 L45.72 18.00 M38.84 20.84 L42.87 24.87 M36.00 22.01 L36.00 27.72 M33.16 20.84 L29.13 24.87 M31.99 18.00 L26.28 18.00 M33.16 15.16 L29.13 11.13 M36.00 13.99 L36.00 8.28 M38.84 15.16 L42.87 11.13"
                      stroke="currentColor"
                      strokeWidth="1.89"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </g>
                  {/* Right reel */}
                  <g className="brand-reel-spin-rev">
                    <circle
                      cx="58"
                      cy="18"
                      r="13.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.78"
                    />
                    <circle cx="58" cy="18" r="2.97" fill="currentColor" />
                    <path
                      d="M62.01 18.00 L67.72 18.00 M60.84 20.84 L64.87 24.87 M58.00 22.01 L58.00 27.72 M55.16 20.84 L51.13 24.87 M53.99 18.00 L48.28 18.00 M55.16 15.16 L51.13 11.13 M58.00 13.99 L58.00 8.28 M60.84 15.16 L64.87 11.13"
                      stroke="currentColor"
                      strokeWidth="1.89"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </g>
                </svg>

                {/* 2. SW Monogram SVG */}
                <svg
                  viewBox="8 10 104 82"
                  className="shrink-0 h-7 w-auto"
                  role="img"
                  aria-label="ShineWoods"
                  fill="currentColor"
                >
                  <polygon points="17,30 26,30 43,86 39.5,86" />
                  <polygon points="39.5,86 41.2,86 60,38 58.8,35.5" />
                  <polygon points="57.2,30 66.2,30 83,86 79.5,86" />
                  <polygon points="79.5,86 81.2,86 101.8,30 100.2,30" />
                  <rect x="12" y="29.2" width="19" height="1.4" />
                  <rect x="52.5" y="29.2" width="18" height="1.4" />
                  <rect x="94" y="29.2" width="14" height="1.4" />
                  <path
                    d="M71 20 C 64 12, 46 13, 47 26 C 48 40, 74 44, 73 62 C 72 82, 47 84, 41 70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              {/* Exact Brand Typography */}
              <span className="flex min-w-0 flex-col gap-1 overflow-visible">
                <span
                  className="inline-block font-sans font-medium uppercase tracking-[0.2em] pe-[0.2em] text-[0.78rem] leading-none"
                  aria-label="ShineWoods"
                >
                  ShineWoods
                </span>
                <span className="text-[0.5rem] font-sans font-medium uppercase leading-none tracking-[0.22em] pe-[0.22em] opacity-55">
                  Casting &amp; Talent
                </span>
              </span>
            </span>
          </Link>

          {/* Centered Navigation matching exact reference */}
          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 xl:block"
          >
            <ul className="flex items-center gap-2.5 2xl:gap-5">
              {NAV_LINKS.map((item) => {
                const isItemActive =
                  (item.href === "/" && pathname === "/" && (!activeSection || activeSection === "home")) ||
                  (item.href === "/editorial" && pathname.startsWith("/editorial")) ||
                  (item.href === "/talent" && pathname.startsWith("/talent")) ||
                  (item.href === "/stars-shine" && pathname.startsWith("/stars-shine")) ||
                  (item.href === "/about" && pathname === "/about") ||
                  activeSection === item.id ||
                  (item.id === "motion" && (activeSection.includes("motion") || pathname === "/#motion"));

                return (
                  <li key={item.label}>
                    <Link
                      className={`label link-draw relative py-1 text-[0.62rem] 2xl:text-[0.6875rem] tracking-[0.18em] 2xl:tracking-[0.22em] transition-colors ${
                        isItemActive
                          ? "text-champagne font-semibold bg-[length:100%_1px]"
                          : "opacity-85 hover:opacity-100 hover:text-champagne"
                      }`}
                      href={item.href}
                      onClick={() => setActiveSection(item.id)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action buttons */}
          <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Casting Enquiry */}
            <Link
              className={`label hidden rounded-full px-4 py-2 text-[0.62rem] 2xl:text-[0.6875rem] tracking-[0.16em] 2xl:tracking-[0.2em] transition-all duration-300 shadow-sm md:inline-block ${
                isDark
                  ? "bg-paper text-ink hover:bg-champagne hover:text-ink"
                  : "bg-ink text-paper hover:bg-champagne-dark hover:text-paper"
              }`}
              href="/contact"
            >
              Casting Enquiry
            </Link>

            {/* Menu Trigger Button - visible only on mobile/tablet when full nav is hidden */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="site-menu"
              className="label flex xl:hidden items-center justify-center p-2 rounded-full hover:bg-current/10 transition-colors cursor-pointer focus:outline-none ml-1"
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
              {mobileMenuOpen ? (
                <span className="marquee text-[0.7rem] tracking-[0.28em] text-champagne">Close</span>
              ) : (
                <span aria-hidden="true" className="relative block h-2.5 w-5">
                  <span className="absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300" />
                  <span className="absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300" />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Feature Presentation Mobile / Drawer Navigation */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
