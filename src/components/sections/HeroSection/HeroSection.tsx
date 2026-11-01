"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section
      aria-label="ShineWoods cover"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper"
    >
      {/* Background Media with Ken Burns effect & Cinema Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        {isPlayingVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-opacity duration-1000"
            src="/media/cover/cover.mp4"
          />
        ) : (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/cover/poster1.jpg"
              alt="ShineWoods film and ad casting cover"
              className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
              style={{ objectPosition: "50% 14%" }}
            />
          </div>
        )}

        {/* Triple-layer cinematic gradients matching Shinewoods */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_40%,rgb(0_0_0/0.12)_0%,rgb(0_0_0/0.38)_72%,rgb(0_0_0/0.62)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgb(20_16_10/0.42)_0%,rgb(0_0_0/0.08)_46%,rgb(12_10_8/0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,transparent_0%,rgb(0_0_0/0.28)_42%,rgb(0_0_0/0.78)_100%)]" />
        <div className="absolute inset-x-[var(--gutter)] top-[calc(var(--header-h)+0.85rem)] h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent" />
      </div>

      {/* Hero Content Container matching exact gutter and padding */}
      <div className="gutter relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-[calc(var(--header-h)+1.5rem)] md:pb-20">
        <div className="max-w-3xl">
          <p className="label tracking-[0.36em] text-champagne/95">
            ShineWoods · Film &amp; Ad Casting
          </p>

          <h1 className="display mt-5 text-[clamp(2.35rem,7.5vw,5.6rem)] leading-[0.92] tracking-[-0.03em]">
            <span className="block">Cast &amp; crew</span>
            <span className="block italic text-paper/92">for film &amp; ads.</span>
          </h1>

          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-paper/72 md:mt-6 md:text-[1.05rem]">
            Actors, models and technicians for cinema, OTT and commercial shoots — submit your profile or cast the unit.
          </p>

          {/* Action CTAs matching Shinewoods exactly */}
          <div className="mt-7 flex flex-wrap items-center gap-2.5 md:mt-10 md:gap-3">
            <Link
              href="#stepper"
              className="label bg-paper px-5 py-3.5 text-ink transition-colors hover:bg-paper-2 sm:px-6 rounded-none inline-block"
            >
              Apply for casting
            </Link>

            <Link
              href="#stepper"
              className="label border border-paper/55 px-5 py-3.5 text-paper transition-colors hover:bg-paper hover:text-ink sm:px-6 rounded-none inline-block"
            >
              Join the crew desk
            </Link>

            <Link
              href="#talent-issue"
              className="label link-draw px-2 py-3.5 text-paper/85 hover:text-champagne transition-colors inline-flex items-center gap-1.5"
            >
              <span>Browse cast &amp; crew →</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsPlayingVideo(!isPlayingVideo)}
              className="ml-auto label text-champagne/80 hover:text-champagne flex items-center gap-2 cursor-pointer text-[0.6rem] tracking-[0.24em]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
              <span>{isPlayingVideo ? "Pause Video" : "Play Cover Video"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
