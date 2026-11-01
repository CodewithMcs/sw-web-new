"use client";

import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Film, Users } from "lucide-react";

export default function AboutSection() {
  const credentials = [
    {
      stat: "30+",
      label: "Years in Cinema",
      desc: "Guiding casting and unit management across South Indian and pan-Indian cinema since the early 1990s.",
      icon: Film,
    },
    {
      stat: "500+",
      label: "Feature & OTT Projects",
      desc: "Placing leads, supporting ensembles, and specialized character actors for premier productions.",
      icon: Award,
    },
    {
      stat: "10,000+",
      label: "Vetted Roster",
      desc: "A verified database of performers, models, and technical crew with documented screen test sides.",
      icon: Users,
    },
    {
      stat: "100%",
      label: "Confidential Intake",
      desc: "Direct agency protection and representation contracts safeguarding talent intellectual property.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="credentials" className="border-t border-line bg-paper text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
          <div>
            <p className="editorial-tag text-champagne-dark flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              Credentials &amp; Heritage
            </p>
            <h2 className="font-editorial text-4xl sm:text-6xl text-ink mt-3 leading-[0.95]">
              Built on <br />
              <span className="italic font-normal">cinema credit.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm text-charcoal/80 leading-relaxed">
              Led by Manojkrishna, ShineWoods operates as a bridge between production houses, casting directors, and disciplined artists ready for high-stakes sets.
            </p>
            <Link
              href="#casting"
              className="editorial-tag text-xs inline-flex items-center gap-2 text-ink hover:text-champagne-dark transition-colors"
            >
              <span>Connect with our casting desk</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-6 bg-paper-2 rounded border border-line flex flex-col justify-between space-y-4 hover:border-ink/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-4xl sm:text-5xl font-semibold text-ink">
                    {item.stat}
                  </span>
                  <Icon className="w-5 h-5 text-champagne-dark" />
                </div>
                <div>
                  <h3 className="font-editorial text-lg text-ink font-medium">
                    {item.label}
                  </h3>
                  <p className="text-xs text-charcoal/70 mt-1.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founder Editorial Quote */}
        <div className="mt-16 p-8 sm:p-12 bg-ink text-paper rounded-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <p className="editorial-tag text-champagne">The Casting Philosophy</p>
            <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl leading-snug italic font-normal text-paper/90">
              &ldquo;Casting is not matching faces to descriptions. It is identifying screen authority, emotional endurance, and the cadence of genuine truth before the camera rolls.&rdquo;
            </blockquote>
            <p className="text-xs font-mono tracking-widest text-champagne uppercase pt-2">
              — K. R. Manojkrishna · Head of Casting, ShineWoods
            </p>
          </div>
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
