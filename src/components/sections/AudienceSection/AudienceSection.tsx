"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AudienceSection() {
  return (
    <section aria-label="Get started" className="border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: For Casting Directors (Dark Ink Card) */}
        <div className="flex flex-col justify-between gap-10 border-b border-line bg-ink px-6 sm:px-12 py-14 text-paper md:border-b-0 md:border-r md:border-line md:py-20 lg:py-24">
          <div>
            <p className="editorial-tag text-champagne tracking-[0.3em]">
              For Casting Directors
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl mt-5 leading-[0.98] text-paper">
              Find the right <br />
              <span className="italic font-normal">talent.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70 font-light">
              Discover vetted actors, browse fashion models, review authenticated motion showreels, and submit a comprehensive project brief.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-paper/70 font-mono">
              <li>
                <Link
                  href="#talent-issue"
                  className="hover:text-champagne transition-colors flex items-center gap-2 group"
                >
                  <span className="text-champagne">01.</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Discover screen actors
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#talent-issue"
                  className="hover:text-champagne transition-colors flex items-center gap-2 group"
                >
                  <span className="text-champagne">02.</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Browse commercial models
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#motion"
                  className="hover:text-champagne transition-colors flex items-center gap-2 group"
                >
                  <span className="text-champagne">03.</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Review In Motion showreels
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <a
              href="mailto:fame@shinewoods.com?subject=Project%20Brief%20Submission"
              className="py-3.5 px-6 border border-paper/55 text-paper text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:bg-paper hover:text-ink inline-flex items-center gap-2 rounded-sm"
            >
              <span>Submit a Project Brief</span>
              <ArrowRight className="w-3.5 h-3.5 text-champagne" />
            </a>
          </div>
        </div>

        {/* Right Side: For Actors & Models (Light Paper Card) */}
        <div className="flex flex-col justify-between gap-10 bg-paper px-6 sm:px-12 py-14 text-ink md:py-20 lg:py-24">
          <div>
            <p className="editorial-tag text-champagne-dark tracking-[0.3em]">
              For Actors &amp; Models
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl mt-5 leading-[0.98] text-ink">
              Your next opportunity <br />
              <span className="italic font-normal">starts here.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal/80 font-light">
              Explore open castings, submit motion showreels, and enter the active ShineWoods representation roster for cinema and brand campaigns.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-charcoal/80 font-mono">
              <li>
                <Link
                  href="#castings"
                  className="hover:text-champagne-dark transition-colors flex items-center gap-2 group"
                >
                  <span className="text-champagne-dark">01.</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Explore active auditions &amp; castings
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#stepper"
                  className="hover:text-champagne-dark transition-colors flex items-center gap-2 group"
                >
                  <span className="text-champagne-dark">02.</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Portfolio &amp; showreel intake wizard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#credentials"
                  className="hover:text-champagne-dark transition-colors flex items-center gap-2 group"
                >
                  <span className="text-champagne-dark">03.</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Representation agreement details
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Link
              href="#stepper"
              className="py-3.5 px-6 bg-ink text-paper text-xs uppercase tracking-[0.2em] font-medium hover:bg-charcoal transition-colors inline-flex items-center gap-2 rounded-sm shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span>Launch 4-Step Intake Wizard</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
