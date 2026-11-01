"use client";

import React from "react";
import { FormData } from "@/types/talent";
import { ShieldCheck, Video, MapPin, CheckCircle, Sparkles } from "lucide-react";

interface Step4ReviewProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: unknown) => void;
  errors: Partial<Record<keyof FormData, string>>;
}

export default function Step4Review({
  formData,
  onChange,
  errors,
}: Step4ReviewProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div>
        <p className="editorial-tag text-champagne-dark">Stage 04 · Final Verification</p>
        <h3 className="font-editorial text-2xl sm:text-3xl text-ink mt-1">
          Review & Representation Protocol
        </h3>
        <p className="text-sm text-charcoal/70 mt-1">
          Inspect how your profile renders on the ShineWoods casting director desk.
        </p>
      </div>

      {/* Luxury Casting Card Preview */}
      <div className="border border-ink/20 bg-ink text-paper rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-44 h-44 bg-champagne/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Headshot thumbnail */}
          <div className="relative w-32 sm:w-40 aspect-[3/4] shrink-0 rounded-lg overflow-hidden border border-white/20 bg-charcoal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={formData.headshotUrl}
              alt={formData.fullName}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-ink/80 backdrop-blur-sm px-2 py-1 rounded text-center">
              <span className="text-[0.6rem] uppercase tracking-widest text-champagne font-mono">
                {formData.category}
              </span>
            </div>
          </div>

          {/* Profile details */}
          <div className="flex-1 space-y-3 min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <h4 className="font-editorial text-2xl sm:text-3xl text-paper tracking-wide">
                  {formData.fullName}
                </h4>
                {formData.professionalName && (
                  <p className="text-xs text-champagne/90 tracking-wider">
                    Known as &ldquo;{formData.professionalName}&rdquo;
                  </p>
                )}
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] uppercase tracking-wider font-mono bg-champagne/15 text-champagne border border-champagne/30">
                <Sparkles className="w-3 h-3" />
                Vetting Ready
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs text-paper/80 pt-1">
              <div>
                <span className="block text-[0.65rem] text-mute uppercase tracking-widest">
                  Location
                </span>
                <span className="flex items-center gap-1 mt-0.5 text-paper">
                  <MapPin className="w-3 h-3 text-champagne" />
                  {formData.city || "Not specified"}
                </span>
              </div>

              <div>
                <span className="block text-[0.65rem] text-mute uppercase tracking-widest">
                  Playing Age
                </span>
                <span className="mt-0.5 block text-paper font-mono">
                  {formData.playingAgeMin} — {formData.playingAgeMax} yrs
                </span>
              </div>

              <div>
                <span className="block text-[0.65rem] text-mute uppercase tracking-widest">
                  Height
                </span>
                <span className="mt-0.5 block text-paper font-mono">
                  {formData.heightCm} cm
                </span>
              </div>

              <div className="col-span-2">
                <span className="block text-[0.65rem] text-mute uppercase tracking-widest">
                  Languages
                </span>
                <span className="mt-0.5 block text-paper">
                  {formData.languages.join(", ")}
                </span>
              </div>

              <div>
                <span className="block text-[0.65rem] text-mute uppercase tracking-widest">
                  Showreel
                </span>
                <span className="mt-0.5 inline-flex items-center gap-1 text-champagne font-mono text-[0.7rem]">
                  <Video className="w-3 h-3" />
                  Attached & Ready
                </span>
              </div>
            </div>

            {formData.bio && (
              <p className="text-xs text-paper/70 line-clamp-2 italic border-t border-white/5 pt-2">
                &ldquo;{formData.bio}&rdquo;
              </p>
            )}

            {/* Skills pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {formData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[0.65rem] text-paper/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Representation Status Selector */}
      <div className="pt-2">
        <label className="editorial-tag block text-charcoal mb-3">
          Agency Representation Status
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(["Exclusive", "Non-Exclusive", "Independent"] as const).map(
            (status) => {
              const isSelected = formData.representationStatus === status;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => onChange("representationStatus", status)}
                  className={`p-4 border text-left transition-all rounded ${
                    isSelected
                      ? "border-ink bg-ink text-paper shadow-md"
                      : "border-line bg-paper-2 hover:border-ink/50 text-charcoal"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-editorial text-lg font-medium">
                      {status}
                    </span>
                    {isSelected && (
                      <CheckCircle className="w-4 h-4 text-champagne" />
                    )}
                  </div>
                  <p
                    className={`text-xs ${
                      isSelected ? "text-paper/70" : "text-charcoal/70"
                    }`}
                  >
                    {status === "Exclusive" &&
                      "Full agency management & pan-Indian contract negotiations."}
                    {status === "Non-Exclusive" &&
                      "Selective project-based casting calls across South cinema."}
                    {status === "Independent" &&
                      "Direct contact for audition briefs without management tie-in."}
                  </p>
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Consents & Agreements */}
      <div className="p-4 bg-paper-2/50 border border-line rounded-lg space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.agreeTerms}
            onChange={(e) => onChange("agreeTerms", e.target.checked)}
            className="mt-1 w-4 h-4 accent-ink rounded cursor-pointer"
          />
          <span className="text-xs text-charcoal leading-relaxed">
            I certify that the photos, showreel links, and performance credits
            provided are authentic and represent my genuine work. I grant
            ShineWoods casting permission to showcase my profile to directors and
            producers. *
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.agreedToCastingCalls}
            onChange={(e) => onChange("agreedToCastingCalls", e.target.checked)}
            className="mt-1 w-4 h-4 accent-ink rounded cursor-pointer"
          />
          <span className="text-xs text-charcoal leading-relaxed">
            Notify me via WhatsApp and email for urgent character tests, audition
            sides, and call-sheet notifications.
          </span>
        </label>

        {errors.agreeTerms && (
          <p className="text-xs text-red-600 font-medium">
            {errors.agreeTerms}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 text-xs text-mute">
        <ShieldCheck className="w-4 h-4 text-champagne-dark" />
        <span>
          Bank-grade 256-bit encryption. Your contact credentials are never sold or made public.
        </span>
      </div>
    </div>
  );
}
