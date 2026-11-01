"use client";

import React from "react";
import { FormData } from "@/types/talent";
import { Languages, Activity, Check } from "lucide-react";

interface Step2ProfileProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: unknown) => void;
  errors: Partial<Record<keyof FormData, string>>;
}

const AVAILABLE_LANGUAGES = [
  "Tamil",
  "Telugu",
  "Malayalam",
  "Kannada",
  "Hindi",
  "English",
  "Bengali",
  "Marathi",
];

const SKILL_OPTIONS = [
  "Method Acting",
  "Fight Stunts & Combat",
  "Classical / Cinematic Dance",
  "Dialect Modulation",
  "Theatre Improvisation",
  "Horse Riding / Action",
  "Voiceover / Dubbing",
  "Screenwriting",
];

const EXPERIENCE_LEVELS = [
  "Fresh Talent / Aspirant (0-1 yrs)",
  "Emerging Artist (1-3 yrs)",
  "Established Lead / Character (3-7 yrs)",
  "Veteran Performer (7+ yrs)",
];

export default function Step2Profile({
  formData,
  onChange,
  errors,
}: Step2ProfileProps) {
  const toggleLanguage = (lang: string) => {
    const current = [...formData.languages];
    if (current.includes(lang)) {
      if (current.length > 1) {
        onChange(
          "languages",
          current.filter((l) => l !== lang)
        );
      }
    } else {
      onChange("languages", [...current, lang]);
    }
  };

  const toggleSkill = (skill: string) => {
    const current = [...formData.skills];
    if (current.includes(skill)) {
      onChange(
        "skills",
        current.filter((s) => s !== skill)
      );
    } else {
      onChange("skills", [...current, skill]);
    }
  };

  return (
    <div className="space-y-7 animate-in fade-in duration-300">
      <div>
        <p className="editorial-tag text-mute">Stage 02</p>
        <h3 className="font-editorial text-2xl sm:text-3xl text-ink mt-1">
          Artistic Profile & Specifications
        </h3>
        <p className="text-sm text-charcoal/70 mt-1">
          Physical measurements, multilingual fluency, and screen range.
        </p>
      </div>

      {/* Playing Age & Height */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="editorial-tag block text-charcoal mb-2">
            Playing Age Range ({formData.playingAgeMin} — {formData.playingAgeMax} yrs)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="16"
              max="45"
              value={formData.playingAgeMin}
              onChange={(e) =>
                onChange(
                  "playingAgeMin",
                  Math.min(Number(e.target.value), formData.playingAgeMax - 2)
                )
              }
              className="w-full accent-ink cursor-pointer"
            />
            <span className="text-xs font-mono text-mute shrink-0">to</span>
            <input
              type="range"
              min="20"
              max="70"
              value={formData.playingAgeMax}
              onChange={(e) =>
                onChange(
                  "playingAgeMax",
                  Math.max(Number(e.target.value), formData.playingAgeMin + 2)
                )
              }
              className="w-full accent-ink cursor-pointer"
            />
          </div>
          <p className="text-xs text-mute mt-1">
            Specify the age brackets you convincingly portray on camera.
          </p>
        </div>

        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Height in Centimeters ({formData.heightCm} cm · ~{Math.floor(formData.heightCm / 30.48)}&apos;{Math.round((formData.heightCm % 30.48) / 2.54)}&quot;)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="140"
              max="215"
              value={formData.heightCm}
              onChange={(e) => onChange("heightCm", Number(e.target.value))}
              className="sw-field"
            />
          </div>
          {errors.heightCm && (
            <p className="text-xs text-red-600 mt-1">{errors.heightCm}</p>
          )}
        </div>
      </div>

      {/* Languages Multiselect */}
      <div className="pt-2">
        <label className="editorial-tag block text-charcoal mb-2 flex items-center gap-2">
          <Languages className="w-3.5 h-3.5 text-champagne-dark" />
          Cinema Languages Spoken Fluently *
        </label>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_LANGUAGES.map((lang) => {
            const isSelected = formData.languages.includes(lang);
            return (
              <button
                key={lang}
                type="button"
                onClick={() => toggleLanguage(lang)}
                className={`py-2 px-3 text-xs tracking-wider border rounded-sm transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper hover:border-ink/50 text-charcoal"
                }`}
              >
                {isSelected && <Check className="w-3 h-3 text-champagne" />}
                {lang}
              </button>
            );
          })}
        </div>
        {errors.languages && (
          <p className="text-xs text-red-600 mt-1">{errors.languages}</p>
        )}
      </div>

      {/* Experience & Genre */}
      <div className="grid sm:grid-cols-2 gap-6 pt-2">
        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Experience Level
          </label>
          <select
            value={formData.experienceYears}
            onChange={(e) => onChange("experienceYears", e.target.value)}
            className="sw-field bg-transparent cursor-pointer"
          >
            {EXPERIENCE_LEVELS.map((level) => (
              <option key={level} value={level} className="bg-paper text-ink">
                {level}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Primary Screen Genre / Specialty
          </label>
          <input
            type="text"
            value={formData.primaryGenre}
            onChange={(e) => onChange("primaryGenre", e.target.value)}
            placeholder="e.g. Cinema Lead, Psychological Thriller, Neo-Noir"
            className="sw-field"
          />
        </div>
      </div>

      {/* Specialized Craft Skills */}
      <div className="pt-2">
        <label className="editorial-tag block text-charcoal mb-2 flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-champagne-dark" />
          Specialized Performer Skills
        </label>
        <div className="flex flex-wrap gap-2">
          {SKILL_OPTIONS.map((skill) => {
            const isSelected = formData.skills.includes(skill);
            return (
              <button
                key={skill}
                type="button"
                onClick={() => toggleSkill(skill)}
                className={`py-2 px-3 text-xs tracking-wider border transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "border-champagne bg-champagne/10 text-ink font-medium"
                    : "border-line bg-paper hover:border-ink/40 text-charcoal/80"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-champagne" : "bg-mute/40"
                  }`}
                />
                {skill}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
