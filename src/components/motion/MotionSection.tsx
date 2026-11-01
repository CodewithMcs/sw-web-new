"use client";

import React, { useState } from "react";
import { MOTION_REELS } from "@/constants/motion-reels";
import { MotionReel } from "@/types/talent";
import VideoModal from "./VideoModal";
import { Play, Film, Clock, Sparkles } from "lucide-react";

const CATEGORIES = [
  "All",
  "Film",
  "Commercial",
  "Screen Test",
  "Fashion",
  "Action",
] as const;

export default function MotionSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeReel, setActiveReel] = useState<MotionReel | null>(null);

  const filteredReels =
    selectedCategory === "All"
      ? MOTION_REELS
      : MOTION_REELS.filter((r) => r.category === selectedCategory);

  const featuredReel = MOTION_REELS[0];

  return (
    <section id="motion" className="border-t border-line-dark bg-ink text-paper py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <p className="editorial-tag text-champagne flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
              In Motion · Film & Screen Tests
            </p>
            <h2 className="font-editorial text-4xl sm:text-6xl text-paper mt-3 leading-[0.95]">
              The <br />
              <span className="italic font-normal text-paper/90">showreel.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm text-paper/70 leading-relaxed">
              Performances, fashion films, screen tests, and campaign movement —
              one frame at a time. Playback on demand; nothing autoplays in parallel.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`py-2 px-3.5 text-xs uppercase tracking-[0.16em] transition-all rounded-sm border ${
                    isSelected
                      ? "border-champagne bg-champagne text-ink font-semibold"
                      : "border-white/15 bg-white/5 text-paper/80 hover:border-white/40 hover:text-paper"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Large Reel Player Card */}
        <div className="mt-12">
          <div
            onClick={() => setActiveReel(featuredReel)}
            className="group relative aspect-[16/9] md:aspect-[21/9] w-full bg-charcoal rounded-xl overflow-hidden border border-white/10 cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.008]"
          >
            {/* Thumbnail Poster */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/talent/shravan/hero.jpg"
              alt={featuredReel.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
              style={{ objectPosition: "50% 28%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/30" />

            {/* Play Button Centerpiece */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-champagne/80 bg-ink/70 backdrop-blur-md flex items-center justify-center text-champagne group-hover:scale-110 group-hover:bg-champagne group-hover:text-ink transition-all duration-300 shadow-2xl">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
                <span className="editorial-tag text-[0.65rem] tracking-[0.25em] text-paper/90 group-hover:text-champagne transition-colors">
                  Play Featured Showreel 2026
                </span>
              </div>
            </div>

            {/* Featured Reel Details Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="editorial-tag text-champagne text-[0.65rem] flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3 h-3" />
                  Spotlight Motion Work
                </span>
                <h3 className="font-editorial text-2xl sm:text-4xl text-paper">
                  {featuredReel.title}
                </h3>
                <p className="text-xs text-paper/70 mt-1">
                  Featuring <strong className="text-paper">{featuredReel.talentName}</strong> · Directed by {featuredReel.director}
                </p>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs text-paper/80 bg-ink/80 px-3 py-1.5 rounded backdrop-blur-sm border border-white/10 self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5 text-champagne" />
                <span>{featuredReel.duration}</span>
                <span className="h-3 w-px bg-white/20" />
                <span>4K MASTER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Motion Repertoire Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReels.slice(1).map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group bg-paper-3/5 border border-white/10 rounded-lg overflow-hidden cursor-pointer hover:border-champagne/60 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden bg-charcoal">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/10 transition-colors" />

                <div className="absolute top-3 left-3 bg-ink/80 backdrop-blur-sm px-2 py-0.5 rounded text-[0.6rem] font-mono uppercase tracking-wider text-champagne border border-white/10">
                  {reel.category}
                </div>

                <div className="absolute bottom-3 right-3 bg-ink/80 backdrop-blur-sm px-2 py-0.5 rounded text-[0.65rem] font-mono text-paper flex items-center gap-1">
                  <Clock className="w-3 h-3 text-champagne" />
                  {reel.duration}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-champagne text-ink flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h4 className="font-editorial text-lg text-paper group-hover:text-champagne transition-colors">
                    {reel.title}
                  </h4>
                  <p className="text-xs text-mute mt-1">
                    {reel.talentName} · Dir. {reel.director}
                  </p>
                  <p className="text-xs text-paper/70 mt-2 line-clamp-2 leading-relaxed">
                    {reel.synopsis}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {reel.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.62rem] font-mono text-paper/60 px-2 py-0.5 bg-white/5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to submit motion materials */}
        <div className="mt-16 text-center border-t border-white/10 pt-10">
          <p className="text-sm text-paper/70">
            Have a fresh screen test, monologue, or action reel to add to our motion database?
          </p>
          <a
            href="#stepper"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-paper text-ink font-medium text-xs uppercase tracking-[0.2em] hover:bg-champagne hover:text-ink transition-all rounded shadow-md"
          >
            <Film className="w-4 h-4" />
            Submit Your Reel to Stage 03
          </a>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal reel={activeReel} onClose={() => setActiveReel(null)} />
    </section>
  );
}
