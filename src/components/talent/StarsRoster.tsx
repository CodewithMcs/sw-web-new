"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const FEATURED_TALENT = [
  {
    name: "Shravan",
    role: "Featured Actor / Model",
    city: "Bengaluru, India",
    languages: "Kannada, English, Hindi",
    specialty: "Screen acting · Improvisation",
    image: "/talent/shravan/hero.jpg",
  },
  {
    name: "Govardhan",
    role: "Featured Actor / Model",
    city: "Bengaluru, India",
    languages: "Kannada, English, Hindi",
    specialty: "Screen acting · Method range",
    image: "/talent/govardhan/hero.jpg",
  },
  {
    name: "Kumaran",
    role: "Character Actor",
    city: "Chennai, India",
    languages: "Tamil, Telugu",
    specialty: "Period Drama · Intense antagonist",
    image: "/talent/kumaran/hero.jpg",
  },
];

const STARS = [
  {
    name: "Shaam",
    category: "Actor",
    languages: "Tamil, Telugu",
    image: "/talent/stars/shaam.jpg",
  },
  {
    name: "J. D. Chakravarthy",
    category: "Actor, Director, Writer",
    languages: "Tamil, Telugu, Malayalam, Hindi",
    image: "/talent/stars/j-d-chakravarthy.jpg",
  },
  {
    name: "Abhirami",
    category: "Actress",
    languages: "Tamil, Telugu, Malayalam, Kannada",
    image: "/talent/stars/abhirami.jpg",
  },
  {
    name: "Santhosh Prathap",
    category: "Actor",
    languages: "Tamil, Telugu, Malayalam",
    image: "/talent/stars/santhosh-prathap.jpg",
  },
  {
    name: "Namitha",
    category: "Actress",
    languages: "Tamil, Telugu, Hindi, Kannada",
    image: "/talent/stars/namitha.jpg",
  },
  {
    name: "Thalaivasal Vijay",
    category: "Veteran Actor",
    languages: "Tamil, Telugu, Malayalam",
    image: "/talent/stars/thalaivasal-vijay.jpg",
  },
  {
    name: "Mohini",
    category: "Actress",
    languages: "Tamil, Malayalam, Telugu",
    image: "/talent/stars/mohini.jpg",
  },
  {
    name: "Y. G. Mahendran",
    category: "Veteran Theatre & Screen Legend",
    languages: "Tamil, Telugu",
    image: "/talent/stars/y-g-mahendran.jpg",
  },
];

export default function StarsRoster() {
  return (
    <section id="talent" className="py-20 sm:py-28 border-t border-line bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Section 1: Faces For The Role */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
            <div>
              <p className="editorial-tag text-champagne-dark">Talent Directory</p>
              <h2 className="font-editorial text-4xl sm:text-6xl text-ink mt-3 leading-tight">
                Faces for <br />
                <span className="italic font-normal">the role.</span>
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm text-charcoal/80 leading-relaxed">
                Curated actors, models, character performers, and emerging faces — built for casting directors who scan for screen presence, range, and script fit first.
              </p>
              <Link
                href="#stepper"
                className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-champagne-dark transition-colors"
              >
                <span>Submit Your Face to Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_TALENT.map((talent) => (
              <div key={talent.name} className="group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden rounded bg-paper-3 border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-paper">
                    <span className="text-[0.62rem] uppercase tracking-widest text-champagne font-mono block">
                      {talent.role}
                    </span>
                    <h3 className="font-editorial text-2xl font-medium mt-0.5">
                      {talent.name}
                    </h3>
                  </div>
                </div>

                <div className="pt-4 space-y-1 text-xs">
                  <p className="text-charcoal font-medium">{talent.city}</p>
                  <p className="text-mute">{talent.languages} — {talent.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Stars We Shine With */}
        <div id="stars-shine" className="pt-6 border-t border-line">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
            <div>
              <p className="editorial-tag text-champagne-dark flex items-center gap-2">
                <Star className="w-3.5 h-3.5 fill-champagne text-champagne" />
                Cinema Artists On Our Roster
              </p>
              <h2 className="font-editorial text-3xl sm:text-5xl text-ink mt-2 leading-tight">
                Stars we shine with.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-charcoal/70 leading-relaxed">
              Established luminaries ShineWoods has cast and collaborated with across Tamil, Telugu, Malayalam, Kannada and Hindi cinema over three decades.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
            {STARS.map((star) => (
              <div
                key={star.name}
                className="group relative bg-paper-2 rounded border border-line p-3 flex flex-col hover:border-ink/50 transition-all duration-300"
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
                    {star.category}
                  </p>
                  <p className="text-xs text-charcoal/70 mt-1 line-clamp-1">
                    {star.languages}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
