"use client";

import React from "react";
import Link from "next/link";
import {
  FEATURED_ARTICLE,
  CONVERSATION_ARTICLE,
  FASHION_ARTICLE,
  NOTEBOOK_ARTICLES,
} from "@/data/editorial";
import { ArrowRight } from "lucide-react";

export default function EditorialSection() {
  return (
    <section id="editorial" className="border-t border-line bg-paper text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
          <div>
            <p className="editorial-tag text-champagne-dark flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              Journal &amp; Dispatches
            </p>
            <h2 className="font-editorial text-4xl sm:text-6xl text-ink mt-3 leading-[0.95]">
              Cinema &amp; <br />
              <span className="italic font-normal">fashion journal.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-3">
            <p className="text-sm text-charcoal/80 leading-relaxed">
              Essays, photographic series, performer conversations, and backstage observations from South Indian sets and international runways.
            </p>
            <Link
              href="#editorial"
              className="editorial-tag text-xs inline-flex items-center gap-2 text-ink hover:text-champagne-dark transition-colors"
            >
              <span>Browse all journal entries</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Lead Feature Article */}
        <div className="mt-12">
          <Link href="#editorial" className="group block">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-paper-3 border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "50% 40%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-paper max-w-2xl space-y-2">
                <span className="editorial-tag text-[0.65rem] text-champagne">
                  {FEATURED_ARTICLE.category} · {FEATURED_ARTICLE.date}
                </span>
                <h3 className="font-editorial text-3xl sm:text-5xl leading-tight">
                  {FEATURED_ARTICLE.title} <span className="italic font-normal">{FEATURED_ARTICLE.subtitle}</span>
                </h3>
                <p className="text-xs sm:text-sm text-paper/80 line-clamp-2">
                  {FEATURED_ARTICLE.summary}
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* 2-Column Stories: Conversation & Fashion */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Conversation: Kofi Mensah */}
          <div className="lg:col-span-7 p-6 bg-paper-2 rounded border border-line">
            <p className="editorial-tag text-mute mb-4">{CONVERSATION_ARTICLE.category}</p>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 relative aspect-[4/5] rounded overflow-hidden bg-paper-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CONVERSATION_ARTICLE.image}
                  alt={CONVERSATION_ARTICLE.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-7 space-y-3">
                <h4 className="font-editorial text-2xl sm:text-3xl text-ink">
                  {CONVERSATION_ARTICLE.title} <span className="italic font-normal">{CONVERSATION_ARTICLE.subtitle}</span>
                </h4>
                <p className="text-xs text-charcoal/80 leading-relaxed">
                  {CONVERSATION_ARTICLE.summary}
                </p>
                <p className="text-[0.65rem] text-mute font-mono">{CONVERSATION_ARTICLE.date}</p>
                <span className="editorial-tag text-xs inline-flex items-center gap-1.5 text-ink hover:text-champagne-dark">
                  Read Conversation <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Fashion: Light as Language */}
          <div className="lg:col-span-5 p-6 bg-paper-2 rounded border border-line flex flex-col justify-between">
            <p className="editorial-tag text-mute mb-4">{FASHION_ARTICLE.category}</p>
            <div className="relative aspect-[16/10] rounded overflow-hidden bg-paper-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FASHION_ARTICLE.image}
                alt={FASHION_ARTICLE.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-editorial text-2xl text-ink">
                {FASHION_ARTICLE.title} <span className="italic font-normal">{FASHION_ARTICLE.subtitle}</span>
              </h4>
              <p className="text-xs text-charcoal/80 mt-1 leading-relaxed">
                {FASHION_ARTICLE.summary}
              </p>
            </div>
          </div>
        </div>

        {/* Industry Notebook List */}
        <div className="mt-12 border-t border-line pt-10">
          <p className="editorial-tag text-mute mb-6">Industry Notebook</p>
          <ul className="divide-y divide-line border-y border-line">
            {NOTEBOOK_ARTICLES.map((note) => (
              <li key={note.title}>
                <Link
                  href={note.href}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-2 hover:bg-paper-2 px-2 transition-colors"
                >
                  <div>
                    <span className="editorial-tag text-[0.6rem] text-mute block">
                      {note.category}
                    </span>
                    <h5 className="font-editorial text-xl sm:text-2xl text-ink group-hover:italic transition-all">
                      {note.title} <em>{note.subtitle}</em>
                    </h5>
                  </div>
                  <span className="text-xs text-mute font-mono">{note.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
