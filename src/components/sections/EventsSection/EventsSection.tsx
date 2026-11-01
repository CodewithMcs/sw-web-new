"use client";

import React from "react";
import Link from "next/link";
import { EVENTS_LIST } from "@/data/events";
import { Calendar, MapPin, Film, Sparkles, Award, Users } from "lucide-react";

export default function EventsSection() {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "screening":
        return Film;
      case "workshop":
        return Sparkles;
      case "showcase":
        return Award;
      default:
        return Users;
    }
  };

  return (
    <section id="events" className="border-t border-line bg-paper-2 text-ink py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
          <div>
            <p className="editorial-tag text-champagne-dark flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              Industry Calendar
            </p>
            <h2 className="font-editorial text-4xl sm:text-6xl text-ink mt-3 leading-[0.95]">
              On the industry <br />
              <span className="italic font-normal">calendar.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm text-charcoal/80 leading-relaxed">
              Workshops, casting days, showcases, and private screenings connecting artists with active production heads.
            </p>
            <a
              href="mailto:fame@shinewoods.com?subject=Events%20and%20Workshops"
              className="editorial-tag text-xs inline-flex items-center gap-2 text-ink hover:text-champagne-dark transition-colors"
            >
              <span>RSVP or Host an Event</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Featured Event + Events List Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Featured Visual Event: 7 cols */}
          <div className="lg:col-span-7">
            <div className="group relative aspect-[16/10] rounded-xl overflow-hidden bg-paper-3 border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?fit=crop&w=1200&q=80"
                alt="Projector beam in screening room"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "50% 40%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-paper space-y-2">
                <span className="editorial-tag text-champagne text-[0.62rem]">
                  Featured Industry Gathering
                </span>
                <h3 className="font-editorial text-2xl sm:text-4xl text-paper">
                  Private Screening &amp; Screen Test Showcase
                </h3>
                <p className="text-xs sm:text-sm text-paper/80 line-clamp-2">
                  Distributor acquisition preview and direct interaction between newly signed talent and producers.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-champagne pt-1">
                  <span>Chennai Studio Hall</span>
                  <span>·</span>
                  <span>Exclusive Invite</span>
                </div>
              </div>
            </div>
          </div>

          {/* Events List: 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            {EVENTS_LIST.map((evt) => {
              const Icon = getEventIcon(evt.iconType);
              return (
                <div
                  key={evt.id}
                  className="p-5 bg-paper rounded-lg border border-line hover:border-ink/50 transition-all space-y-2.5 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="editorial-tag text-[0.6rem] text-mute">
                      {evt.type}
                    </span>
                    <Icon className="w-4 h-4 text-champagne-dark group-hover:scale-110 transition-transform" />
                  </div>

                  <h4 className="font-editorial text-lg text-ink font-semibold group-hover:text-champagne-dark transition-colors">
                    {evt.title}
                  </h4>

                  <p className="text-xs text-charcoal/80 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="pt-2 border-t border-line flex flex-wrap items-center justify-between text-[0.68rem] text-mute font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-champagne-dark" />
                      {evt.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-champagne-dark" />
                      {evt.location}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Link to Apply */}
        <div className="mt-14 pt-8 border-t border-line text-center">
          <p className="text-sm text-charcoal/80">
            Want to present your monologues or screening cut at our next gathering?
          </p>
          <Link
            href="#stepper"
            className="inline-flex items-center gap-2 mt-3 text-xs uppercase tracking-[0.2em] font-medium text-ink hover:text-champagne-dark transition-colors"
          >
            <span>Submit Your Profile to Talent Intake</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
