"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Sparkles, ArrowDown } from "lucide-react";

export default function HeroCover() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section className="relative isolate min-h-[92vh] flex items-end overflow-hidden bg-ink text-paper pt-[var(--header-h)]">
      {/* Background Media with Ken Burns effect & Cinema Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
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
          <div className="relative w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/cover/poster1.jpg"
              alt="ShineWoods film and ad casting cover"
              className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
              style={{ objectPosition: "50% 14%" }}
            />
          </div>
        )}

        {/* Cinematic Vignettes and Gradients matching Shinewoods */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_40%,rgb(0_0_0/0.15)_0%,rgb(0_0_0/0.45)_72%,rgb(0_0_0/0.75)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgb(20_16_10/0.5)_0%,rgb(0_0_0/0.2)_46%,rgb(12_10_8/0.4)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-ink via-ink/70 to-transparent" />
        
        {/* Subtle champagne accent line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 w-full">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <span className="editorial-tag text-champagne tracking-[0.32em] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
              ShineWoods · Film &amp; Ad Casting House
            </span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl text-paper leading-[0.92] tracking-tight">
            Cast &amp; crew <br />
            <span className="italic font-normal text-paper/90">
              for film &amp; ads.
            </span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-paper/75 leading-relaxed font-light">
            Actors, models and technicians for cinema, OTT and commercial shoots — submit your verified profile, motion showreels, or cast the entire production unit.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="#stepper"
              className="py-3.5 px-6 bg-paper text-ink font-medium text-xs uppercase tracking-[0.2em] hover:bg-champagne hover:text-ink transition-all rounded shadow-lg flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne-dark group-hover:text-ink" />
              <span>Apply For Casting</span>
            </Link>

            <Link
              href="#motion"
              className="py-3.5 px-6 border border-paper/40 text-paper font-medium text-xs uppercase tracking-[0.2em] hover:bg-paper hover:text-ink transition-all rounded flex items-center gap-2"
            >
              <Play className="w-3.5 h-3.5 text-champagne" />
              <span>Explore Motion Reels</span>
            </Link>

            {/* Video Cover Toggle Button */}
            <button
              type="button"
              onClick={() => setIsPlayingVideo(!isPlayingVideo)}
              className="py-3.5 px-4 text-xs font-mono uppercase tracking-widest text-champagne/90 hover:text-champagne transition-colors flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              {isPlayingVideo ? "Pause Cover Reel" : "Play Cover Reel"}
            </button>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-paper/50">
          <span className="font-mono tracking-widest uppercase">
            30+ Years South Indian & Pan-Indian Casting Heritage
          </span>
          <Link
            href="#stepper"
            className="flex items-center gap-1.5 hover:text-champagne transition-colors"
          >
            <span>Scroll to Multi-Step Wizard</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}
