"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface YouTubeClip {
  id: string;
  title: string;
  views: string;
  tag?: string;
  thumb: string;
  duration?: string;
}

const YOUTUBE_CLIPS: YouTubeClip[] = [
  {
    id: "AxatKO2LGoI",
    title: "Meera — Crazy In Love",
    views: "4.5K views",
    tag: "Most viewed",
    thumb: "/about/yt/meera.jpg",
    duration: "03:12"
  },
  {
    id: "UgjXYj_iwDo",
    title: "Sunshine / ShineWoods Promo",
    views: "618 views",
    tag: "Agency Reel",
    thumb: "/about/yt/sunshine.jpg",
    duration: "01:45"
  },
  {
    id: "d_Wr7tuP0iU",
    title: "Sanjana — Showreel",
    views: "364 views",
    tag: "Artist Portfolio",
    thumb: "/about/yt/sanjana.jpg",
    duration: "02:20"
  },
  {
    id: "mL55wVTRoFA",
    title: "Rajan — Showreel",
    views: "266 views",
    tag: "Artist Portfolio",
    thumb: "/about/yt/rajan.jpg",
    duration: "02:05"
  },
  {
    id: "hhbZP8Mnec0",
    title: "Vihaan — Showreel",
    views: "184 views",
    tag: "Artist Portfolio",
    thumb: "/about/yt/vihaan.jpg",
    duration: "01:50"
  }
];

const INTRODUCTIONS = [
  {
    name: "Tamannaah Bhatia",
    image: "/talent/stars/tamannaah.jpg",
    note: "Introduced to Tamil cinema — later rising into a leading pan-Indian actress.",
    credit: "Kandein Kadhalai · Paiyaa · Baahubali",
    tag: "Pan-Indian Lead",
    badge: "Breakthrough Debut"
  },
  {
    name: "Asin Thottumkal",
    image: "/talent/stars/asin.jpg",
    note: "From Hayagrivas Silks modelling into Tamil cinema leading roles and Filmfare honors.",
    credit: "M. Kumaran · Ghajini · Pokkiri · Dasavathaaram",
    tag: "South & Bollywood Star",
    badge: "Cinema Discovery"
  },
  {
    name: "Padmapriya",
    image: "/talent/stars/padmapriya.jpg",
    note: "Debut in Thavamai Thavamirundhu — earning the Filmfare Best Female Debut (Tamil).",
    credit: "Thavamai Thavamirundhu · Mirugam · Pokkisham",
    tag: "Filmfare Awardee",
    badge: "Best Female Debut"
  },
  {
    name: "Parvathy Thiruvothu",
    image: "/talent/stars/parvathy.jpg",
    note: "Lead introduction in Poo — a defining performance winning Best Actress honours.",
    credit: "Poo · Maryan · Bangalore Days · Uyare",
    tag: "National Recognition",
    badge: "Best Actress Award"
  },
  {
    name: "Namitha",
    image: "/talent/stars/namitha.jpg",
    note: "Breakthrough role opposite 'Captain' Vijayakanth in the blockbuster Engal Anna.",
    credit: "Engal Anna · Aai · Billa · Englishkaran",
    tag: "Blockbuster Fame",
    badge: "Commercial Star"
  },
  {
    name: "Tejashree",
    image: "/talent/stars/tejashree.jpg",
    note: "Transitioned from Kathak discipline and commercial modelling into Tamil cinema via ShineWoods.",
    credit: "Ottran · Madhurey · Thiruvalaiyadal Aarambam",
    tag: "Classical & Screen",
    badge: "Stage to Screen"
  }
];

const FEATURED_PRODUCTIONS = [
  {
    title: "Baahubali (Tamil)",
    format: "Pan-Indian Epic Feature",
    studio: "Arka Media Works",
    director: "S.S. Rajamouli",
    platform: "Disney+ Hotstar",
    badge: "Historic Phenomenon"
  },
  {
    title: "K.G.F (Tamil)",
    format: "Action Landmark Franchise",
    studio: "Hombale Films",
    director: "Prashanth Neel",
    platform: "Amazon Prime Video",
    badge: "Pan-Indian Blockbuster"
  },
  {
    title: "Citadel: Honey Bunny",
    format: "Global Spy Series",
    studio: "Amazon MGM Studios / D2R Films",
    director: "Raj & DK",
    platform: "Prime Video Original",
    badge: "International OTT"
  },
  {
    title: "83 (Hindi & Tamil)",
    format: "World Cup Historical Drama",
    studio: "Reliance Entertainment",
    director: "Kabir Khan",
    platform: "Netflix & Hotstar",
    badge: "National Release"
  },
  {
    title: "Bell Bottom",
    format: "Espionage Period Feature",
    studio: "Pooja Entertainment",
    director: "Ranjit M Tewari",
    platform: "Disney+ Hotstar",
    badge: "Theatrical Feature"
  },
  {
    title: "Atrangi Re",
    format: "Musical Romance Feature",
    studio: "Colour Yellow / T-Series",
    director: "Aanand L. Rai",
    platform: "Disney+ Hotstar Special",
    badge: "Musical Landmark"
  },
  {
    title: "Aramm",
    format: "Social Political Drama",
    studio: "KJR Studios",
    director: "Gopi Nainar",
    platform: "Sun NXT / Theatrical",
    badge: "Critically Acclaimed"
  },
  {
    title: "Singam II",
    format: "Mass Action Blockbuster",
    studio: "Studio Green",
    director: "Hari",
    platform: "Sun TV / Theatrical",
    badge: "Box Office Hit"
  },
  {
    title: "Paiyaa",
    format: "Romantic Highway Thriller",
    studio: "Thirupathi Brothers",
    director: "N. Lingusamy",
    platform: "Theatrical / OTT",
    badge: "Cult Classic"
  },
  {
    title: "Aindhaam Vedham",
    format: "Mythological Mystery Series",
    studio: "Abirami Media Works",
    director: "L. Nagaraj",
    platform: "ZEE5 Original Series",
    badge: "Original Series"
  },
  {
    title: "Oru Kodai Murder Mystery",
    format: "Noir Whodunit Series",
    studio: "Fazila Allana / Kamna Menezes",
    director: "Vishal Venkat",
    platform: "ZEE5 Original Series",
    badge: "Original Series"
  },
  {
    title: "Korangi Nunchi",
    format: "Social Feature Drama",
    studio: "NFDC India",
    director: "K.N.T. Sastry",
    platform: "Cinemas of India",
    badge: "NFDC Production"
  }
];

const SERVICES = [
  {
    step: "01",
    title: "Casting",
    text: "Directed shortlists for film, OTT, television, and commercials — faces and crew that fit the brief with precision.",
    icon: (
      <svg className="w-6 h-6 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    step: "02",
    title: "Portfolios",
    text: "Books, test shoots, and reels shaped specifically for casting directors and studio showrunners, not vanity social feeds.",
    icon: (
      <svg className="w-6 h-6 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    )
  },
  {
    step: "03",
    title: "Guidance",
    text: "Honest industry counsel on where a talent belongs, audition etiquette, speech, presence, and how to arrive ready.",
    icon: (
      <svg className="w-6 h-6 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
      </svg>
    )
  },
  {
    step: "04",
    title: "Discovery",
    text: "New voices scouted early across Tamil Nadu, Karnataka, Kerala, Andhra and Mumbai, prepared carefully and placed with intent.",
    icon: (
      <svg className="w-6 h-6 text-champagne" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  }
];

const APPROACH_STEPS = [
  {
    step: "01",
    title: "We find them",
    desc: "Active scouting across theatres, arts academies, print campaigns, and regional talent circles."
  },
  {
    step: "02",
    title: "We shape the book",
    desc: "Headshots, scene tapes, and voice profiles curated to meet genuine director criteria."
  },
  {
    step: "03",
    title: "We set the plan",
    desc: "Targeting the right genres, age brackets, character types, and upcoming production cycles."
  },
  {
    step: "04",
    title: "We open the door",
    desc: "Direct presentation to producers, directors, and casting agencies across South India and Mumbai."
  }
];

const METRICS = [
  { value: "30+", label: "Years Casting Experience", sub: "Since 1996 in South Cinema" },
  { value: "100+", label: "Active Productions", sub: "Film, OTT, Commercials" },
  { value: "5,000+", label: "Artistes On File", sub: "Leading, Character, Technicians" },
  { value: "2,000+", label: "Castings Completed", sub: "Across All Major Indian Languages" }
];

export default function AboutPage() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [expandedStory, setExpandedStory] = useState(false);
  const [activeClip, setActiveClip] = useState<YouTubeClip>(YOUTUBE_CLIPS[0]);
  const [isYouTubePlaying, setIsYouTubePlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .then(() => setVideoLoaded(true))
        .catch(() => {});
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  return (
    <main id="main" className="overflow-x-hidden selection:bg-champagne selection:text-ink">
      {/* SECTION 0: Full-Screen Cover Cinema Reel */}
      <section
        className="relative isolate min-h-[100svh] overflow-hidden bg-ink flex flex-col justify-between"
        aria-label="ShineWoods about cover reel"
      >
        {/* Background Video & Poster Fallback */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src="/about/cover-poster.jpg"
            alt="ShineWoods cinema reel"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_35%] transition-opacity duration-1000"
          />
          <video
            ref={videoRef}
            autoPlay
            muted={isVideoMuted}
            playsInline
            loop
            preload="auto"
            src="/about/cover.mp4"
            poster="/about/cover-poster.jpg"
            className={`absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoadedData={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
          />

          {/* Cinematic Vignette Gradients */}
          <div className="absolute inset-0 bg-ink/40 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink via-ink/70 to-transparent pointer-events-none" />
        </div>

        {/* Top Spacer for Header */}
        <div className="h-28" />

        {/* Centered Grand Hero Content */}
        <div className="gutter relative z-10 my-auto py-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-champagne/40 bg-ink/70 backdrop-blur-md text-[0.65rem] 2xl:text-[0.72rem] tracking-[0.22em] uppercase text-champagne mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            <span>Chennai · Est. 1996 · South Indian Cinema</span>
          </div>

          <h1 className="font-serif text-[clamp(2.4rem,6.8vw,5.8rem)] font-light leading-[0.94] tracking-[-0.03em] text-paper max-w-5xl">
            Thirty Years <br />
            <em className="italic text-champagne font-normal">Shaping the Frame</em>
          </h1>

          <p className="mt-6 max-w-2xl text-paper/80 text-[0.95rem] md:text-[1.12rem] font-sans font-light leading-relaxed">
            The South Indian casting house led by Manojkrishna — placing definitive faces into landmark features, pan-Indian blockbusters, and award-winning careers.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#about-intro"
              className="label inline-flex items-center gap-3 px-8 py-4 bg-paper text-ink hover:bg-champagne hover:text-ink transition-all duration-300 shadow-2xl"
            >
              <span>Explore The House</span>
              <span className="text-xs">↓</span>
            </a>
            <Link
              href="/talent"
              className="label inline-flex items-center gap-3 px-8 py-4 border border-paper/40 bg-ink/40 backdrop-blur-md text-paper hover:bg-paper hover:text-ink transition-all duration-300"
            >
              <span>Browse Artists</span>
              <span className="text-xs">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Reel Controls & Scroll Prompt */}
        <div className="gutter relative z-10 pb-8 flex items-end justify-between">
          <div className="hidden sm:flex items-center gap-3 text-paper/60 text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-champagne" />
            <span>35mm Cinema Reel · Reel 01</span>
          </div>

          <a
            href="#about-intro"
            className="mx-auto sm:mx-0 label text-paper/70 hover:text-champagne transition-colors flex items-center gap-2 group"
          >
            <span className="text-[0.7rem] tracking-[0.2em] uppercase">Scroll</span>
            <span className="transition-transform duration-300 group-hover:translate-y-1">↓</span>
          </a>

          {/* Video Play/Pause & Audio Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={togglePlay}
              className="p-2.5 rounded-full border border-paper/20 bg-ink/60 backdrop-blur-md text-paper hover:border-champagne hover:text-champagne transition-colors cursor-pointer"
              title={isVideoPlaying ? "Pause reel" : "Play reel"}
              aria-label={isVideoPlaying ? "Pause reel" : "Play reel"}
            >
              {isVideoPlaying ? (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="p-2.5 rounded-full border border-paper/20 bg-ink/60 backdrop-blur-md text-paper hover:border-champagne hover:text-champagne transition-colors cursor-pointer"
              title={isVideoMuted ? "Unmute audio" : "Mute audio"}
              aria-label={isVideoMuted ? "Unmute audio" : "Mute audio"}
            >
              {isVideoMuted ? (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 1: About Intro */}
      <section
        id="about-intro"
        className="border-t border-line bg-paper scroll-mt-[calc(var(--header-h)+0.5rem)]"
      >
        <div className="gutter grid gap-10 py-20 md:grid-cols-12 md:items-end md:gap-14 md:py-28">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne-dark" />
              <p className="label text-mute">ShineWoods · Casting House</p>
            </div>
            <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.96] tracking-[-0.03em] text-ink">
              The face <em className="italic text-ink/80 font-normal">that fits the frame.</em>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[1.02rem] leading-relaxed text-charcoal md:text-[1.12rem] font-sans">
              Thirty years of casting for South Indian and pan-Indian film, OTT, television, and commercial work — led from Chennai by founder and casting director Manojkrishna.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                className="label inline-flex items-center justify-center gap-3 px-7 py-4 transition-colors duration-500 bg-ink text-paper hover:bg-charcoal"
                href="/contact"
              >
                Cast a project
              </Link>
              <Link
                className="label inline-flex items-center justify-center gap-3 px-7 py-4 transition-colors duration-500 border border-ink/80 hover:bg-ink hover:text-paper"
                href="/apply"
              >
                Join the talent pool
              </Link>
              <a
                href="#desk"
                className="label ml-1 text-mute transition-colors hover:text-ink md:ml-2"
              >
                Meet the desk →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ZERRO Business Awards 2026 & Verified Metrics */}
      <section className="relative border-t border-line bg-ink text-paper overflow-hidden">
        {/* Subtle Ambient Golden Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-champagne/10 blur-[120px]"
        />

        <div className="gutter relative grid gap-10 py-16 md:grid-cols-12 md:items-center md:gap-14 md:py-24">
          <div className="md:col-span-6">
            <div className="inline-flex items-center gap-3 px-3.5 py-1 rounded-full border border-champagne/30 bg-champagne/10 text-champagne text-[0.68rem] font-medium tracking-[0.16em] uppercase">
              <svg className="w-4 h-4 text-champagne" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3-4.8-2.5-4.8 2.5.9-5.3-3.8-3.7 5.3-.8L12 2z" />
              </svg>
              <span>ZERRO Business Awards 2026</span>
            </div>

            <h2 className="display mt-5 text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.04] text-paper">
              Outstanding Company Leader
            </h2>
            <p className="mt-2 text-sm text-champagne font-serif italic">
              Conferred in association with Rotary International
            </p>

            <p className="mt-6 text-[1.02rem] leading-relaxed text-paper/75 font-sans">
              Recognised for identifying exceptional acting talent, building rigorous casting pipelines, and assembling creative screen ensembles for feature film, television, and national advertising campaigns. Honouring Manojkrishna, Casting Director.
            </p>
          </div>

          {/* Laurel Crest Emblem Card */}
          <div className="md:col-span-5 md:col-start-8 flex justify-center md:justify-end">
            <div className="relative p-8 rounded-2xl border border-champagne/25 bg-charcoal/50 backdrop-blur-md max-w-sm w-full text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-champagne/40 bg-champagne/10 flex items-center justify-center text-champagne">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 21h8m-4-4v4m-6-9a6 6 0 1012 0V4H6v4z" />
                </svg>
              </div>
              <p className="label-sm text-champagne uppercase tracking-[0.2em]">Citation of Excellence</p>
              <p className="display mt-2 text-xl text-paper">Manojkrishna</p>
              <p className="text-xs text-paper/60 mt-1">Founder & Lead Casting Director</p>
              <div className="mt-4 pt-4 border-t border-paper/10 text-[0.75rem] text-paper/50">
                South Indian Film Industry · 3 Decades of Industry Leadership
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Metric Pillars */}
        <div className="gutter grid grid-cols-2 gap-px border-t border-paper/12 bg-paper/10 md:grid-cols-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="group bg-ink px-6 py-9 md:px-8 md:py-12 transition-colors duration-500 hover:bg-charcoal/80"
            >
              <p className="display text-[clamp(2.1rem,3.6vw,3.2rem)] text-champagne font-normal tracking-tight">
                {metric.value}
              </p>
              <p className="label mt-2.5 text-paper/85 text-xs 2xl:text-sm font-medium">{metric.label}</p>
              <p className="mt-1 text-xs text-paper/45">{metric.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: From the desk of Manojkrishna */}
      <section
        id="desk"
        className="border-t border-line bg-paper scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="gutter grid gap-12 py-20 md:grid-cols-12 md:gap-16 md:py-28 items-center">
          {/* Manojkrishna Portrait with Film Viewfinder Framing */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne-dark" />
              <p className="label text-mute">From the desk of Manojkrishna</p>
            </div>
            <h2 className="display mt-5 text-[clamp(2.4rem,5vw,4rem)] leading-[0.92] text-ink">
              Manojkrishna
            </h2>
            <p className="label mt-3 text-champagne-dark font-medium">Casting Director & Founder</p>

            <div className="group relative mt-9 aspect-[4/5] overflow-hidden bg-ink border-2 border-line shadow-2xl rounded-sm">
              <Image
                src="/brand/manojkrishna.jpg"
                alt="Manojkrishna, Casting Director at ShineWoods"
                fill
                sizes="(max-width: 768px) 92vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ objectPosition: "48% 22%" }}
                priority
              />

              {/* Viewfinder Crosshairs */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 border border-paper/20 rounded-sm"
              >
                <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-champagne" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-champagne" />
                <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-champagne" />
                <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-champagne" />
              </div>

              {/* Dark Gradient Bottom & Studio Tag */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent"
              />
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="font-serif text-sm md:text-base italic text-paper/90">
                    Chennai · South India Film Industry
                  </p>
                  <p className="text-[0.68rem] tracking-[0.16em] uppercase text-champagne mt-0.5">
                    SAI AURA INFOTAINMENT PVT LTD
                  </p>
                </div>
                <span className="w-7 h-7 rounded-full border border-champagne/40 bg-ink/70 flex items-center justify-center text-champagne text-[0.65rem] font-serif font-bold">
                  SW
                </span>
              </div>
            </div>
          </div>

          {/* Director's Letter */}
          <div className="flex flex-col justify-center md:col-span-7 md:pl-4">
            <blockquote className="font-serif text-[clamp(1.55rem,2.8vw,2.3rem)] leading-[1.22] tracking-[-0.01em] text-ink font-light">
              &ldquo;Talent is rarely only instinct. It is sharpened — then placed where the work can find it.&rdquo;
            </blockquote>

            <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-charcoal font-sans">
              <p>
                I began in the South Indian film industry in Tamil Nadu, and have spent three decades watching how careers open: not by chance alone, but by preparation meeting the right introduction. What began as Sunshine under SAI AURA INFOTAINMENT PRIVATE LIMITED has grown into ShineWoods — a casting practice built for artistes, models, and technicians across genre and age.
              </p>

              {expandedStory && (
                <div className="space-y-5 border-l-2 border-champagne/40 pl-6 my-4 transition-all duration-500">
                  <p>
                    Years as an actor taught me what auditions ask of people — the nerves, the silence, the need for clear direction. That experience shaped this house. We cast with humility, respect, and steady work, and we stay with talent from first materials through the rooms that matter.
                  </p>
                  <p>
                    Across India and abroad, we have introduced faces to film, television, advertising, modelling, theatre, and events. The measure of the desk is simple: the right person, prepared, in the right frame.
                  </p>
                  <p className="font-serif italic text-ink/80 text-lg">
                    — Manojkrishna, Casting Director & Founder
                  </p>
                </div>
              )}
            </div>

            <div className="mt-9 flex items-center gap-6">
              <button
                type="button"
                onClick={() => setExpandedStory((prev) => !prev)}
                className="label inline-flex items-center gap-2 py-2 text-ink border-b border-ink/40 hover:border-ink transition-colors cursor-pointer"
                aria-expanded={expandedStory}
              >
                <span>{expandedStory ? "Read less" : "Continue reading the letter"}</span>
                <span>{expandedStory ? "↑" : "↓"}</span>
              </button>
              <Link href="/contact" className="label text-mute hover:text-ink transition-colors">
                Write to the desk →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: The Practice: Four disciplines. One desk */}
      <section className="gutter border-t border-line py-20 md:py-28 bg-paper">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-champagne-dark" />
            <p className="label text-mute">The Practice</p>
          </div>
          <h2 className="display mt-5 text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[0.96] text-ink">
            Four disciplines.
            <br />
            <em className="italic text-ink/80 font-normal">One desk.</em>
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-charcoal">
            We shortlist with taste, prepare with discipline, and cast with confidence for screen directors and brands.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((item) => (
            <li
              key={item.step}
              className="group relative p-7 rounded-lg border border-line bg-paper-2 hover:bg-paper transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="label text-champagne-dark font-medium">{item.step}</span>
                <div className="w-10 h-10 rounded-md border border-line bg-paper flex items-center justify-center group-hover:border-champagne/40 transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 5: Reach: Built for a wider room */}
      <section className="border-t border-line bg-paper-2">
        <div className="gutter grid gap-10 py-16 md:grid-cols-12 md:py-24 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne-dark" />
              <p className="label text-mute">Reach</p>
            </div>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3.2rem)] leading-[0.98] text-ink">
              Built for a wider room
            </h2>
          </div>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-charcoal md:col-span-7 font-sans">
            <p>
              ShineWoods brings the casting desk online — so new profiles and working talent can be seen, shortlisted, and briefed with the same care as an in-person call.
            </p>
            <p>
              Our network runs from commercial advertising to landmark feature films, with direct working relationships across leading OTT platforms, production houses, and showrunners across India.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: Our approach: From discovery to debut */}
      <section className="border-t border-line bg-ink text-paper">
        <div className="gutter py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-champagne" />
            <p className="label text-champagne">Our Approach</p>
          </div>
          <h2 className="display mt-5 text-[clamp(2.1rem,4.5vw,3.8rem)] leading-[0.95]">
            From discovery
            <br />
            <em className="italic text-champagne font-normal">to debut</em>
          </h2>
          <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-paper/70 font-sans">
            We stay with the individual from first notice through soft launch — and remain a steady desk as the work grows into major cinema credits.
          </p>

          <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH_STEPS.map((step) => (
              <li
                key={step.step}
                className="relative p-7 rounded-lg border border-paper/15 bg-charcoal/40 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="label text-champagne font-medium">{step.step}</span>
                  <span className="w-2 h-2 rounded-full bg-champagne" />
                </div>
                <h3 className="font-display text-2xl leading-snug text-paper">{step.title}</h3>
                <p className="mt-3 text-sm text-paper/60 leading-relaxed font-sans">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 7: Selected titles: Work that carries weight */}
      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="gutter">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-champagne-dark" />
                <p className="label text-mute">Selected Titles</p>
              </div>
              <h2 className="display mt-5 text-[clamp(2.1rem,4.5vw,3.8rem)] leading-[0.95] text-ink">
                Work that
                <br />
                <em className="italic text-ink/80 font-normal">carries weight</em>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-charcoal font-sans">
              Landmark South Indian and pan-Indian productions associated with the ShineWoods casting desk across theatrical releases and premier streaming platforms.
            </p>
          </div>

          {/* Productions Cinema Grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FEATURED_PRODUCTIONS.map((prod, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-lg border border-line bg-paper-2 hover:bg-ink hover:text-paper transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between text-[0.65rem] tracking-[0.16em] uppercase text-mute group-hover:text-champagne transition-colors">
                  <span>{prod.format}</span>
                  <span className="px-2 py-0.5 rounded-full border border-line group-hover:border-champagne/40 text-[0.6rem]">
                    {prod.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl md:text-2xl font-medium text-ink group-hover:text-paper group-hover:italic transition-colors">
                  {prod.title}
                </h3>
                <div className="mt-4 pt-4 border-t border-line group-hover:border-paper/15 text-xs text-charcoal group-hover:text-paper/70 space-y-1 transition-colors">
                  <p>
                    <strong className="text-ink group-hover:text-paper font-medium">Director:</strong>{" "}
                    {prod.director}
                  </p>
                  <p>
                    <strong className="text-ink group-hover:text-paper font-medium">Studio:</strong>{" "}
                    {prod.studio}
                  </p>
                  <p className="text-champagne-dark group-hover:text-champagne pt-1 font-medium">
                    {prod.platform}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Network Broadcast & Streaming Partners */}
          <div className="mt-14 pt-8 border-t border-line flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="label text-mute">Streaming & Network Alliances</p>
            <div className="flex flex-wrap items-center gap-3">
              {["Disney+ Hotstar", "Netflix", "Amazon Prime Video", "ZEE5", "Sun TV", "NFDC India"].map(
                (network, i) => (
                  <span
                    key={i}
                    className="label-sm px-3.5 py-1.5 rounded-full border border-line bg-paper-2 text-ink text-xs font-medium"
                  >
                    {network}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Motion on the channel */}
      <section className="border-t border-line bg-ink text-paper py-20 md:py-28">
        <div className="gutter">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-champagne" />
                <p className="label text-champagne">Motion Desk</p>
              </div>
              <h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[0.95]">
                On the
                <br />
                <em className="italic text-champagne font-normal">channel</em>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-paper/70 font-sans">
                Selected films, test scenes, and artist showreels from the ShineWoods YouTube desk — ordered by public viewership.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href="https://www.youtube.com/@manojkrishna1825"
                target="_blank"
                rel="noopener noreferrer"
                className="label inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-paper/20 hover:border-champagne hover:text-champagne transition-all text-paper"
              >
                <span>@manojkrishna1825</span>
                <span>→</span>
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLhry-i-fMkBftEgkOas5Qbjdw-p53Lr_V"
                target="_blank"
                rel="noopener noreferrer"
                className="label text-paper/55 transition-colors hover:text-champagne text-xs"
              >
                Full YouTube playlist →
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            {/* Primary Cinema Player */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-charcoal lg:col-span-8 border border-white/10 shadow-2xl">
              {isYouTubePlaying ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeClip.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={activeClip.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setIsYouTubePlaying(true)}
                  className="group absolute inset-0 block w-full text-left cursor-pointer"
                  aria-label={`Play ${activeClip.title}`}
                >
                  <Image
                    src={activeClip.thumb}
                    alt={activeClip.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover opacity-85 transition-all duration-700 group-hover:opacity-70 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

                  {/* Play Button Indicator */}
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-champagne bg-ink/70 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 text-champagne shadow-2xl">
                      <svg className="w-8 h-8 ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </span>
                  </span>

                  {/* Video Meta Info */}
                  <span className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                    <div>
                      {activeClip.tag && (
                        <span className="label-sm px-2.5 py-1 rounded-full bg-champagne/20 text-champagne border border-champagne/30 text-[0.65rem] tracking-wider uppercase inline-block mb-2">
                          {activeClip.tag}
                        </span>
                      )}
                      <span className="display block text-2xl md:text-3xl text-paper font-medium">
                        {activeClip.title}
                      </span>
                    </div>
                    <div className="text-right">
                      {activeClip.duration && (
                        <span className="label-sm block text-paper/60 text-xs">
                          {activeClip.duration}
                        </span>
                      )}
                      <span className="label-sm text-champagne font-medium">{activeClip.views}</span>
                    </div>
                  </span>
                </button>
              )}
            </div>

            {/* Playlist Sidebar */}
            <ul className="flex flex-col gap-4 lg:col-span-4">
              {YOUTUBE_CLIPS.map((clip) => {
                const isSelected = activeClip.id === clip.id;
                return (
                  <li key={clip.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveClip(clip);
                        setIsYouTubePlaying(true);
                      }}
                      className={`group relative flex w-full overflow-hidden text-left cursor-pointer rounded-lg border transition-all duration-300 p-2.5 ${
                        isSelected
                          ? "border-champagne bg-charcoal shadow-lg"
                          : "border-white/10 bg-charcoal/50 hover:bg-charcoal hover:border-white/30"
                      }`}
                      aria-label={`Play ${clip.title}`}
                    >
                      <div className="relative w-32 aspect-video shrink-0 rounded overflow-hidden">
                        <Image
                          src={clip.thumb}
                          alt={clip.title}
                          fill
                          sizes="128px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-ink/30 grid place-items-center">
                          <span className="w-6 h-6 rounded-full bg-ink/70 flex items-center justify-center text-paper text-xs">
                            ▶
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-center px-3.5 py-1">
                        <span className="label-sm text-paper/50 text-[0.65rem]">{clip.views}</span>
                        <p className="display mt-1 text-sm md:text-base leading-snug group-hover:text-champagne transition-colors text-paper font-medium line-clamp-2">
                          {clip.title}
                        </p>
                        <span className="label mt-2 text-champagne text-[0.65rem] uppercase tracking-wider">
                          {isSelected ? "Now Playing" : "Watch →"}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 9: Introductions: Careers we helped open */}
      <section className="border-t border-line py-20 md:py-28 bg-paper">
        <div className="gutter">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-champagne-dark" />
                <p className="label text-mute">Introductions</p>
              </div>
              <h2 className="display mt-5 text-[clamp(2.1rem,4vw,3.6rem)] leading-[0.95] text-ink">
                Careers we
                <br />
                <em className="italic text-ink/80 font-normal">helped open</em>
              </h2>
            </div>
            <Link
              className="label inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/30 hover:border-ink hover:bg-ink hover:text-paper transition-all"
              href="/stars-shine"
            >
              <span>Explore all stars we shine with</span>
              <span>→</span>
            </Link>
          </div>

          {/* Star Artiste Headshot Cards */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INTRODUCTIONS.map((artist, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col rounded-xl overflow-hidden border border-line bg-paper-2 hover:bg-paper hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Artist Photo Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top filter grayscale contrast-105 transition-all duration-700 ease-out group-hover:scale-105 group-hover:filter-none"
                  />
                  {/* Gradient & Tag Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-ink/75 backdrop-blur-md border border-champagne/40 text-champagne text-[0.62rem] font-medium tracking-[0.16em] uppercase">
                      {artist.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="label-sm text-champagne uppercase tracking-[0.18em]">
                      {artist.tag}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-medium text-paper mt-1">
                      {artist.name}
                    </h3>
                  </div>
                </div>

                {/* Card Description & Film Credits */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <p className="text-sm leading-relaxed text-charcoal font-sans">
                    {artist.note}
                  </p>
                  <div className="mt-5 pt-4 border-t border-line">
                    <p className="text-[0.68rem] tracking-[0.14em] uppercase text-mute font-medium">
                      Landmark Works
                    </p>
                    <p className="mt-1 text-xs text-ink font-serif italic">
                      {artist.credit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Begin: Brief the desk */}
      <section className="relative border-t border-line bg-ink text-paper py-20 md:py-28 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-champagne/10 blur-[130px]"
        />

        <div className="gutter relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne" />
              <p className="label text-champagne">Begin</p>
            </div>
            <h2 className="display mt-5 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.02]">
              Brief the desk —
              <br />
              <em className="italic text-champagne font-normal">or join the talent pool.</em>
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-paper/70 font-sans">
              Producers and showrunners cast with us. Artists train, hone materials, and arrive ready. One house, representing both sides of the table with thirty years of trust.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              className="label inline-flex items-center justify-center gap-3 px-8 py-4 transition-all duration-300 bg-champagne text-ink hover:bg-paper font-semibold shadow-xl"
              href="/contact"
            >
              <span>Cast a Project</span>
              <span>→</span>
            </Link>
            <Link
              className="label inline-flex items-center justify-center gap-3 px-8 py-4 transition-all duration-300 border border-paper/40 text-paper hover:bg-paper hover:text-ink backdrop-blur-md"
              href="/apply"
            >
              <span>Join Talent Pool</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: Studio */}
      <section className="border-t border-line bg-paper py-20 md:py-24">
        <div className="gutter grid gap-10 md:grid-cols-12 items-center">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne-dark" />
              <p className="label text-mute">Studio Head Office</p>
            </div>
            <p className="display mt-5 text-4xl text-ink">Chennai</p>
            <p className="mt-2 text-sm text-charcoal font-sans">
              The heart of South Indian film production and casting calls.
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 p-8 rounded-xl border border-line bg-paper-2">
            <p className="font-display text-xl md:text-2xl font-medium text-ink">
              SAI AURA INFOTAINMENT PRIVATE LIMITED
            </p>
            <ul className="mt-4 space-y-1.5 leading-relaxed text-charcoal text-sm font-sans">
              <li>G1 &amp; G2 AlphaCrystal, 5/2 Andavar Nagar 3rd Street</li>
              <li>Kodambakkam, Chennai – 600024</li>
              <li>Tamil Nadu, India</li>
              <li className="pt-2 text-xs text-mute italic">
                Casting and portfolio consultations by confirmed appointment.
              </li>
            </ul>
            <div className="mt-7 pt-6 border-t border-line flex flex-wrap gap-x-8 gap-y-3">
              <a
                href="mailto:fame@shinewoods.com"
                className="label text-ink hover:text-champagne-dark transition-colors"
              >
                fame@shinewoods.com
              </a>
              <a
                href="tel:+919841746751"
                className="label text-ink hover:text-champagne-dark transition-colors"
              >
                +91 98417 46751
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
