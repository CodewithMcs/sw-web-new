"use client";

import React from "react";
import Link from "next/link";
import { OPEN_CASTINGS } from "@/data/castings";
import { ArrowRight, MapPin, Calendar, Briefcase } from "lucide-react";

export default function CastingSection() {
  return (
    <div className="border-t border-line">
      {/* 1. Casting Director's Desk */}
      <section id="casting" className="bg-paper-2 py-16 sm:py-24 border-b border-line text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 cols */}
            <div className="lg:col-span-6 space-y-6">
              <p className="editorial-tag text-champagne-dark flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                Casting Director&apos;s Desk
              </p>
              <h2 className="font-editorial text-4xl sm:text-6xl text-ink leading-[0.95]">
                Your next cast <br />
                <span className="italic font-normal">starts here.</span>
              </h2>
              <p className="text-sm text-charcoal/80 leading-relaxed max-w-lg">
                Brief the desk when you need a shortlist fast — actors, models, and new faces already prepared for South Indian and pan-Indian sets. We manage negotiations, screening sides, and call sheets.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:fame@shinewoods.com?subject=Casting%20Brief%20Submission"
                  className="py-3.5 px-6 bg-ink text-paper text-xs uppercase tracking-[0.2em] font-medium hover:bg-charcoal transition-all inline-flex items-center gap-2 rounded-sm"
                >
                  <span>Start a Casting Brief</span>
                  <ArrowRight className="w-4 h-4 text-champagne" />
                </a>
              </div>
            </div>

            {/* Right 5 cols: Navigation quick links */}
            <div className="lg:col-span-5 lg:col-start-8">
              <ul className="divide-y divide-line border-y border-line text-xs uppercase tracking-[0.18em] font-medium">
                <li>
                  <Link
                    href="#talent-issue"
                    className="flex items-center justify-between py-5 hover:text-champagne-dark transition-colors group"
                  >
                    <span>Browse Talent Directory</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#stars-shine"
                    className="flex items-center justify-between py-5 hover:text-champagne-dark transition-colors group"
                  >
                    <span>Stars We Shine With</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#motion"
                    className="flex items-center justify-between py-5 hover:text-champagne-dark transition-colors group"
                  >
                    <span>In Motion Video Showreels</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#stepper"
                    className="flex items-center justify-between py-5 hover:text-champagne-dark transition-colors group"
                  >
                    <span>Talent Intake Portal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Open Castings & Opportunities */}
      <section id="castings" className="bg-paper py-16 sm:py-24 text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
            <div>
              <p className="editorial-tag text-champagne-dark">Active Roles</p>
              <h2 className="font-editorial text-4xl sm:text-6xl text-ink mt-2">
                Open Castings
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              Film, advertising, fashion, and screen tests. Sample listings are active and welcoming verified candidate submissions.
            </p>
          </div>

          <ul className="divide-y divide-line border-b border-line">
            {OPEN_CASTINGS.map((call) => (
              <li
                key={call.id}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-paper-2/40 px-2 transition-colors rounded"
              >
                {/* Status Badge */}
                <div className="lg:col-span-2">
                  <span
                    className={`inline-block px-2.5 py-1 text-[0.62rem] font-mono uppercase tracking-widest rounded border ${
                      call.status === "Urgent"
                        ? "border-red-500/40 bg-red-500/10 text-red-700 font-bold"
                        : "border-line bg-paper-2 text-charcoal"
                    }`}
                  >
                    {call.status}
                  </span>
                  {call.isSample && (
                    <p className="text-[0.6rem] font-mono text-mute mt-2 uppercase tracking-widest">
                      Active Brief
                    </p>
                  )}
                </div>

                {/* Role and Synopsis */}
                <div className="lg:col-span-5 space-y-2">
                  <p className="editorial-tag text-[0.62rem] text-mute">{call.category}</p>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-ink">
                    {call.title}
                  </h3>
                  <p className="text-xs text-charcoal/80 leading-relaxed">
                    {call.synopsis}
                  </p>
                </div>

                {/* Metadata */}
                <div className="lg:col-span-3 space-y-1.5 text-xs text-charcoal">
                  <div className="flex items-center gap-1.5 text-mute">
                    <MapPin className="w-3.5 h-3.5 text-champagne-dark" />
                    <span>Location: {call.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-mute">
                    <Briefcase className="w-3.5 h-3.5 text-champagne-dark" />
                    <span>Scale: {call.compensation}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-mute">
                    <Calendar className="w-3.5 h-3.5 text-champagne-dark" />
                    <span>Timeline: {call.shootDates}</span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="lg:col-span-2 lg:text-right">
                  <Link
                    href="#stepper"
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 bg-ink text-paper text-xs uppercase tracking-wider font-medium hover:bg-charcoal transition-all rounded shadow-sm"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3 h-3 text-champagne" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
