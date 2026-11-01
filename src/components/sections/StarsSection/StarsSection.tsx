"use client";

import React from "react";
import Link from "next/link";
import { STARS_LIST } from "@/data/stars";
import { Star } from "lucide-react";

export default function StarsSection() {
  return (
    <section id="stars-shine" className="border-t border-line bg-paper-2/40 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <p className="editorial-tag text-champagne-dark flex items-center gap-2">
              <Star className="w-3.5 h-3.5 fill-champagne text-champagne" />
              Stars We Shine With
            </p>
            <h2 className="font-editorial text-4xl sm:text-6xl text-ink mt-3 leading-[0.95]">
              Cinema artists <br />
              <span className="italic font-normal">on our roster.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm text-charcoal/80 leading-relaxed">
              Established faces ShineWoods has worked with across Tamil, Telugu, Malayalam, Kannada and Hindi cinema — alongside our emerging talent.
            </p>
            <Link
              href="#stepper"
              className="editorial-tag text-xs inline-flex items-center gap-2 text-ink hover:text-champagne-dark transition-colors"
            >
              <span>View all stars</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Stars Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {STARS_LIST.map((star) => (
            <div
              key={star.name}
              className="group relative bg-paper rounded border border-line p-3 flex flex-col hover:border-ink/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/5] rounded overflow-hidden bg-paper-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={star.image}
                  alt={star.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-3">
                <h3 className="font-editorial text-base sm:text-lg text-ink font-semibold group-hover:text-champagne-dark transition-colors">
                  {star.name}
                </h3>
                <p className="text-[0.68rem] uppercase tracking-wider text-mute mt-0.5">
                  {star.role}
                </p>
                <p className="text-xs text-charcoal/70 mt-1 line-clamp-1">
                  {star.languages}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
