"use client";

import React, { useState, useEffect, useRef, useId } from "react";

const SOCIAL_ITEMS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919841746751",
    className: "bg-[#25D366] text-white",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  },
  {
    id: "twitter",
    label: "X (Twitter)",
    href: "https://x.com/shinewoods",
    className: "bg-ink text-paper",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.7 10.3L22 2h-2.2l-6.1 6.9L8.9 2H2l7.7 10.9L2 22h2.2l6.6-7.5L15.1 22H22l-7.3-11.7zm-2.3 2.6l-.8-1.1L4.8 3.6h2.6l5.1 7.2.8 1.1 7.1 10h-2.6l-5.4-7z" />
      </svg>
    )
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/shinewoods",
    className: "bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] text-white",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M7.5 3h9A4.5 4.5 0 0121 7.5v9A4.5 4.5 0 0116.5 21h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm0 1.75A2.75 2.75 0 004.75 7.5v9a2.75 2.75 0 002.75 2.75h9a2.75 2.75 0 002.75-2.75v-9a2.75 2.75 0 00-2.75-2.75h-9zM12 8a4 4 0 110 8 4 4 0 010-8zm0 1.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM17.1 6.2a1 1 0 110 2 1 1 0 010-2z" />
      </svg>
    )
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/shinewoods",
    className: "bg-[#1877F2] text-white",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
      </svg>
    )
  }
];

function MessageIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 6.75A2.75 2.75 0 017.75 4h8.5A2.75 2.75 0 0119 6.75v6.5A2.75 2.75 0 0116.25 16H10l-3.6 2.7a.75.75 0 01-1.2-.6V16h-.45A2.75 2.75 0 013 13.25v-6.5z"
        fill="currentColor"
      />
      <path d="M8.25 9h7.5M8.25 12h5" stroke="#141311" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function SiteChrome() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      document.body.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setShowScrollTop(scrollPos > 250);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        e.target instanceof Node &&
        !containerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("touchstart", handleClickOutside, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed bottom-5 right-4 z-[99] flex flex-col items-center gap-3 md:bottom-8 md:right-7"
    >
      {/* 1. Back to Top Arrow Button */}
      <button
        type="button"
        aria-label="Back to top"
        onClick={handleScrollToTop}
        className={`pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-ink/80 bg-paper text-ink shadow-[0_6px_18px_rgb(0_0_0/0.12)] transition-[opacity,transform] duration-500 hover:bg-paper-2 hover:scale-105 active:scale-95 cursor-pointer ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <span aria-hidden="true" className="text-lg leading-none font-sans font-medium">
          ↑
        </span>
      </button>

      {/* 2. Message / Speed-Dial Contact Container */}
      <div className="relative flex flex-col items-center">
        {/* Speed Dial Menu Links expanding upwards */}
        <ul
          id={menuId}
          className="absolute bottom-[calc(100%+0.65rem)] flex flex-col-reverse items-center gap-3"
          aria-hidden={!isOpen}
        >
          {SOCIAL_ITEMS.map((item, idx) => (
            <li
              key={item.id}
              className={`transition-[opacity,transform] duration-300 ease-[var(--ease-editorial)] ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${40 + 45 * idx}ms` : "0ms"
              }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                aria-label={item.label}
                className={`pointer-events-auto grid h-12 w-12 place-items-center rounded-full shadow-[0_8px_22px_rgb(0_0_0/0.18)] transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer ${item.className}`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Floating Trigger Button (Speech Bubble / Close) */}
        <button
          type="button"
          aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((prev) => !prev)}
          className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full bg-ink text-paper shadow-[0_10px_28px_rgb(0_0_0/0.22)] transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {isOpen ? <CloseIcon /> : <MessageIcon />}
        </button>
      </div>
    </div>
  );
}
