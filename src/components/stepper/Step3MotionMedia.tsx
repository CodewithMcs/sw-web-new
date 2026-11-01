"use client";

import React, { useState } from "react";
import { FormData } from "@/types/talent";
import { Film, Image as ImageIcon, Play, ExternalLink } from "lucide-react";

interface Step3MotionMediaProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: unknown) => void;
  errors: Partial<Record<keyof FormData, string>>;
}

const SAMPLE_HEADSHOTS = [
  {
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    label: "Dramatic Portrait (Editorial)",
  },
  {
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    label: "High Fashion / Screen Test",
  },
  {
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    label: "Raw Cinematic Natural",
  },
  {
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    label: "Action / Intensity",
  },
];

export default function Step3MotionMedia({
  formData,
  onChange,
  errors,
}: Step3MotionMediaProps) {
  const [previewingVideo, setPreviewingVideo] = useState(false);

  return (
    <div className="space-y-7 animate-in fade-in duration-300">
      <div>
        <p className="editorial-tag text-mute">Stage 03</p>
        <h3 className="font-editorial text-2xl sm:text-3xl text-ink mt-1">
          Motion Showreel & Materials
        </h3>
        <p className="text-sm text-charcoal/70 mt-1">
          Video links, screen test tapes, and primary casting headshot.
        </p>
      </div>

      {/* Showreel Link Input & Live Preview Simulator */}
      <div className="p-5 border border-line bg-paper-2/60 rounded-lg space-y-4">
        <div>
          <label className="editorial-tag block text-charcoal mb-1 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-champagne-dark" />
              Primary Motion Showreel Link *
            </span>
            <span className="text-[0.62rem] text-mute uppercase tracking-widest font-mono">
              Vimeo / YouTube / Cloud Drive
            </span>
          </label>
          <input
            type="url"
            value={formData.showreelUrl}
            onChange={(e) => onChange("showreelUrl", e.target.value)}
            placeholder="https://vimeo.com/76979871"
            className="sw-field bg-paper"
          />
          {errors.showreelUrl && (
            <p className="text-xs text-red-600 mt-1">{errors.showreelUrl}</p>
          )}
        </div>

        {/* Video Reel Simulator Banner */}
        <div className="relative aspect-video max-h-56 w-full bg-ink rounded overflow-hidden flex items-center justify-center group shadow-inner">
          {previewingVideo ? (
            <video
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              {/* Poster frame */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={formData.headshotUrl || SAMPLE_HEADSHOTS[0].url}
                alt="Showreel reel preview"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30" />
              
              <button
                type="button"
                onClick={() => setPreviewingVideo(true)}
                className="relative z-10 flex flex-col items-center gap-2 text-paper group-hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 rounded-full border border-champagne bg-ink/80 flex items-center justify-center text-champagne shadow-lg group-hover:bg-champagne group-hover:text-ink transition-colors">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span className="editorial-tag text-[0.65rem] tracking-[0.25em] text-paper">
                  Preview Showreel Player
                </span>
              </button>

              <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[0.68rem] text-paper/70 font-mono">
                <span>{formData.fullName} · Screen Test</span>
                <span className="flex items-center gap-1 text-champagne">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                  HD 1080p
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Monologue & IMDB / Portfolio */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Dialogue / Monologue Clip (Optional)
          </label>
          <input
            type="url"
            value={formData.monologueUrl}
            onChange={(e) => onChange("monologueUrl", e.target.value)}
            placeholder="https://youtube.com/watch?v=clip"
            className="sw-field"
          />
        </div>

        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            IMDb / Instagram / Filmography
          </label>
          <div className="relative">
            <input
              type="url"
              value={formData.imdbOrPortfolio}
              onChange={(e) => onChange("imdbOrPortfolio", e.target.value)}
              placeholder="https://imdb.com/name/..."
              className="sw-field"
            />
            <ExternalLink className="w-4 h-4 text-mute absolute right-2 bottom-3" />
          </div>
        </div>
      </div>

      {/* Headshot Selection & Upload */}
      <div className="pt-2">
        <label className="editorial-tag block text-charcoal mb-3 flex items-center gap-2">
          <ImageIcon className="w-3.5 h-3.5 text-champagne-dark" />
          Primary Screen Headshot *
        </label>
        
        <p className="text-xs text-charcoal/70 mb-3">
          Select an editorial portrait template or provide your custom CDN photo URL:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SAMPLE_HEADSHOTS.map((hs, idx) => {
            const isSelected = formData.headshotUrl === hs.url;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onChange("headshotUrl", hs.url)}
                className={`group relative aspect-[3/4] overflow-hidden rounded border text-left transition-all ${
                  isSelected
                    ? "ring-2 ring-ink border-transparent shadow-md"
                    : "border-line opacity-75 hover:opacity-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={hs.url}
                  alt={hs.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent flex items-end p-2">
                  <span className="text-[0.6rem] text-paper font-medium leading-tight">
                    {hs.label}
                  </span>
                </div>
                {isSelected && (
                  <div className="absolute top-2 right-2 bg-champagne text-ink text-[0.55rem] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Selected
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-3">
          <input
            type="url"
            value={formData.headshotUrl}
            onChange={(e) => onChange("headshotUrl", e.target.value)}
            placeholder="Or paste external image URL: https://..."
            className="sw-field text-xs text-mute"
          />
          {errors.headshotUrl && (
            <p className="text-xs text-red-600 mt-1">{errors.headshotUrl}</p>
          )}
        </div>
      </div>

      {/* Performer Bio */}
      <div className="pt-2">
        <label className="editorial-tag block text-charcoal mb-1">
          Artistic Biography & Statement
        </label>
        <textarea
          rows={3}
          value={formData.bio}
          onChange={(e) => onChange("bio", e.target.value)}
          placeholder="Brief summary of training, notable screen work, and director collaborations..."
          className="sw-field resize-none"
        />
      </div>
    </div>
  );
}
