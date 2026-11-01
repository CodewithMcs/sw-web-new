"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MOBILE_DRAWER_LINKS } from "@/data/navigation";
import { X, ArrowUpRight } from "lucide-react";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="site-menu"
      className="fixed inset-0 z-[60] bg-ink text-paper overflow-y-auto animate-in fade-in duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-between py-8">
        {/* Top Header bar with Close Button */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-champagne/70" />
            <p className="editorial-tag text-champagne tracking-[0.35em]">
              Feature Presentation
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-white/20 text-paper hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Numbered Navigation List */}
        <nav className="py-12">
          <ul className="space-y-1">
            {MOBILE_DRAWER_LINKS.map((link) => (
              <li
                key={link.number}
                className="border-b border-white/10 last:border-b-0"
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-5 py-3 sm:py-4 transition-colors hover:text-champagne"
                >
                  <span className="font-mono text-xs text-champagne/60 tabular-nums">
                    {link.number}
                  </span>
                  <span className="font-editorial text-3xl sm:text-5xl group-hover:translate-x-2 transition-transform duration-300">
                    {link.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto text-champagne" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer info within menu */}
        <div className="border-t border-champagne/25 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-paper/70">
          <div>
            <p className="tracking-widest text-champagne uppercase">
              ShineWoods Chennai
            </p>
            <p className="text-paper/40 mt-1">
              South Indian &amp; Pan-Indian Cinema Casting House
            </p>
          </div>

          <a
            href="mailto:fame@shinewoods.com"
            className="text-paper hover:text-champagne transition-colors"
          >
            fame@shinewoods.com
          </a>
        </div>
      </div>
    </div>
  );
}
