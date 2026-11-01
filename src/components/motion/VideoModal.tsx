"use client";

import React, { useEffect, useRef } from "react";
import { MotionReel } from "@/types/talent";
import { X, Film, Volume2, Shield } from "lucide-react";

interface VideoModalProps {
  reel: MotionReel | null;
  onClose: () => void;
}

export default function VideoModal({ reel, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!reel) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-ink border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col">
        {/* Top cinema header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-ink/90 text-paper">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-champagne/15 text-champagne border border-champagne/30 flex items-center justify-center">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <p className="editorial-tag text-[0.62rem] text-champagne">
                ShineWoods Motion Player · {reel.category}
              </p>
              <h3 className="font-editorial text-lg text-paper">
                {reel.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-paper/70 hover:text-paper hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Element */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={reel.videoUrl}
            poster={reel.thumbnail}
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Metadata Bar */}
        <div className="px-6 py-4 bg-charcoal/40 border-t border-white/10 text-paper/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs text-paper font-medium">
              Featured Artist: <span className="text-champagne">{reel.talentName}</span> · Director: {reel.director}
            </p>
            <p className="text-xs text-mute line-clamp-1">{reel.synopsis}</p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 text-xs text-mute font-mono">
              <Volume2 className="w-3.5 h-3.5 text-champagne" />
              <span>Stereo Mastered</span>
            </div>
            <span className="h-3 w-px bg-white/20" />
            <div className="flex items-center gap-1 text-xs text-mute font-mono">
              <Shield className="w-3.5 h-3.5 text-champagne" />
              <span>Casting Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
