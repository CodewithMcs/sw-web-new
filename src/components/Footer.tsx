"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line bg-paper text-ink pt-20 pb-12">
      <div className="gutter space-y-16">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-line">
          {/* Col 1: Brand & Founder Story (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link aria-label="ShineWoods home" className="inline-block group" href="/">
              <span className="inline-flex min-w-0 shrink-0 items-center overflow-visible gap-2.5">
                <span className="inline-flex shrink-0 items-center gap-1.5" aria-hidden="true">
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
                    <g className="brand-reel-spin">
                      <circle cx="36" cy="18" r="13.5" fill="none" stroke="currentColor" strokeWidth="3.78" />
                      <circle cx="36" cy="18" r="2.97" fill="currentColor" />
                    </g>
                    <g className="brand-reel-spin-rev">
                      <circle cx="58" cy="18" r="13.5" fill="none" stroke="currentColor" strokeWidth="3.78" />
                      <circle cx="58" cy="18" r="2.97" fill="currentColor" />
                    </g>
                  </svg>
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
                  </svg>
                </span>
                <span className="flex min-w-0 flex-col gap-1 overflow-visible">
                  <span className="inline-block font-sans font-medium uppercase tracking-[0.2em] pe-[0.2em] text-[0.82rem] leading-none">
                    ShineWoods
                  </span>
                  <span className="text-[0.52rem] font-sans font-medium uppercase leading-none tracking-[0.24em] pe-[0.24em] opacity-60">
                    Casting &amp; Talent
                  </span>
                </span>
              </span>
            </Link>

            <p className="text-sm text-charcoal leading-relaxed max-w-sm font-sans">
              Chennai casting house with 30+ years in South Indian and pan-Indian cinema — led by Manojkrishna, connecting performers and crew with film, OTT, television and brand work.
            </p>

            <div className="space-y-2 pt-2 text-xs text-charcoal font-sans">
              <a
                href="mailto:fame@shinewoods.com"
                className="flex items-center gap-2 hover:text-champagne-dark transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-champagne-dark shrink-0" />
                <span>fame@shinewoods.com</span>
              </a>
              <a
                href="tel:+919841746751"
                className="flex items-center gap-2 hover:text-champagne-dark transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-champagne-dark shrink-0" />
                <span>+91 98417 46751</span>
              </a>
              <div className="flex items-start gap-2 text-mute">
                <MapPin className="w-3.5 h-3.5 text-champagne-dark shrink-0 mt-0.5" />
                <span>AlphaCrystal, Kodambakkam, Chennai</span>
              </div>
            </div>
          </div>

          {/* Col 2: Directory Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="label-sm text-mute uppercase tracking-[0.22em] font-medium">Directory</p>
            <ul className="space-y-2.5 text-xs font-sans tracking-wide text-charcoal">
              <li>
                <Link href="/" className="hover:text-ink link-draw transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/talent" className="hover:text-ink link-draw transition-colors">
                  Browse Talent
                </Link>
              </li>
              <li>
                <Link href="/stars-shine" className="hover:text-ink link-draw transition-colors">
                  Stars We Shine With
                </Link>
              </li>
              <li>
                <Link href="/#casting" className="hover:text-ink link-draw transition-colors">
                  Casting Desk
                </Link>
              </li>
              <li>
                <Link href="/#motion" className="hover:text-ink link-draw transition-colors">
                  Motion Showreel
                </Link>
              </li>
              <li>
                <Link href="/#events" className="hover:text-ink link-draw transition-colors">
                  Calendar &amp; Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Editorial & Opportunities (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="label-sm text-mute uppercase tracking-[0.22em] font-medium">Platform &amp; Casting</p>
            <ul className="space-y-2.5 text-xs font-sans tracking-wide text-charcoal">
              <li>
                <Link href="/editorial" className="hover:text-ink link-draw transition-colors">
                  Editorial Journal (Issues 001 &amp; 002)
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-ink link-draw transition-colors">
                  Open Casting Calls
                </Link>
              </li>
              <li>
                <Link href="/jobs/post" className="hover:text-ink link-draw transition-colors">
                  Post a Casting Requirement
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-ink link-draw transition-colors">
                  Talent Seeker Membership
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-ink link-draw transition-colors">
                  Submit Artist Profile
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ink link-draw transition-colors">
                  About ShineWoods House
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="label-sm text-mute uppercase tracking-[0.22em] font-medium">Head Office</p>
            <div className="p-5 rounded-lg border border-line bg-paper-2 space-y-2.5 text-xs text-charcoal font-sans">
              <p className="font-serif font-medium text-ink text-sm">
                SAI AURA INFOTAINMENT PVT LTD
              </p>
              <p className="text-[0.78rem] text-charcoal/85 leading-relaxed">
                G1 &amp; G2 AlphaCrystal, 5/2 Andavar Nagar 3rd St, Kodambakkam, Chennai – 600024
              </p>
              <p className="text-[0.7rem] text-mute pt-1 border-t border-line">
                Casting submissions and visits by appointment only.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.youtube.com/@manojkrishna1825"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-paper-2 text-[0.7rem] hover:border-champagne hover:text-champagne-dark transition-all"
              >
                <svg className="w-3.5 h-3.5 text-red-600 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>@manojkrishna1825</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-paper-2 text-[0.7rem] hover:border-ink transition-all"
              >
                <span>Agency Inquiries</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mute font-sans">
          <p>© 2026 ShineWoods · SAI AURA INFOTAINMENT PRIVATE LIMITED. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-[0.7rem]">Chennai · Hyderabad · Bangalore · Mumbai</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 text-ink hover:text-champagne-dark transition-colors cursor-pointer group"
              aria-label="Back to top"
            >
              <span className="label-sm">Back to top</span>
              <span className="w-6 h-6 rounded-full border border-line flex items-center justify-center group-hover:border-ink transition-colors">
                <ArrowUp className="w-3 h-3 transition-transform group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
