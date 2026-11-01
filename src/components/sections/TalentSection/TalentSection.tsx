"use client";

import React from "react";
import Link from "next/link";
import { TALENT_LIST } from "@/data/talent";
import { ArrowRight } from "lucide-react";

export default function TalentSection() {
  const shravan = TALENT_LIST[0];
  const govardhan = TALENT_LIST[1];
  const kumaran = TALENT_LIST[2];
  const emergingTalent = TALENT_LIST.slice(3, 6);

  return (
    <section id="talent-issue" className="border-t border-line bg-paper text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <p className="editorial-tag text-champagne-dark flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              Talent Directory
            </p>
            <h2 className="font-editorial text-4xl sm:text-6xl text-ink mt-3 leading-tight">
              Faces for <br />
              <span className="italic font-normal">the role.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="text-sm text-charcoal/80 leading-relaxed">
              Curated actors, models, character performers, and emerging faces — built for casting directors who scan for presence, range, and suitability first.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.18em] font-medium">
              <Link href="#stepper" className="hover:text-champagne-dark transition-colors">
                Actors →
              </Link>
              <Link href="#stepper" className="hover:text-champagne-dark transition-colors">
                Models →
              </Link>
              <Link href="#stepper" className="hover:text-champagne-dark transition-colors">
                New Faces →
              </Link>
              <Link href="#stepper" className="hover:text-champagne-dark transition-colors text-mute">
                Full search →
              </Link>
            </div>
          </div>
        </div>

        {/* Asymmetrical Featured Talent Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
          {/* Main 7-col Feature: Shravan */}
          <div className="lg:col-span-7">
            <Link href="#motion" className="group block">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded bg-paper-3 border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shravan.image}
                  alt={shravan.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "50% 28%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <p className="editorial-tag text-[0.62rem] text-mute">{shravan.role}</p>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-ink group-hover:italic transition-all">
                    {shravan.name}
                  </h3>
                  <p className="text-xs text-mute mt-1">{shravan.location}</p>
                  <p className="text-xs text-charcoal/80 mt-1 max-w-sm">{shravan.languages} — {shravan.specialty}</p>
                </div>
                <span className="editorial-tag text-xs inline-flex items-center gap-1.5 text-ink group-hover:text-champagne-dark">
                  View Reel <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>

          {/* Side 5-col Stack: Govardhan & Kumaran */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {/* Govardhan */}
            <Link href="#motion" className="group block">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded bg-paper-3 border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={govardhan.image}
                  alt={govardhan.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "50% 28%" }}
                />
              </div>
              <div className="mt-3">
                <p className="editorial-tag text-[0.6rem] text-mute">{govardhan.role}</p>
                <h3 className="font-editorial text-2xl text-ink group-hover:italic transition-all">
                  {govardhan.name}
                </h3>
                <p className="text-xs text-mute">{govardhan.location}</p>
              </div>
            </Link>

            {/* Kumaran */}
            <Link href="#motion" className="group block">
              <div className="relative aspect-[16/9] overflow-hidden rounded bg-paper-3 border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={kumaran.image}
                  alt={kumaran.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "50% 28%" }}
                />
              </div>
              <div className="mt-3">
                <p className="editorial-tag text-[0.6rem] text-mute">{kumaran.role}</p>
                <h3 className="font-editorial text-xl text-ink group-hover:italic transition-all">
                  {kumaran.name}
                </h3>
                <p className="text-xs text-mute">{kumaran.location}</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Secondary 3-Col Emerging Talent Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-line">
          {emergingTalent.map((talent) => (
            <div key={talent.id} className="flex gap-4 items-center group">
              <div className="relative w-24 h-32 shrink-0 rounded overflow-hidden bg-paper-3 border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1 text-xs">
                <p className="editorial-tag text-[0.6rem] text-mute">{talent.role}</p>
                <h4 className="font-editorial text-xl text-ink group-hover:italic transition-all">
                  {talent.name}
                </h4>
                <p className="text-charcoal">{talent.location}</p>
                <p className="text-mute">{talent.languages}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
