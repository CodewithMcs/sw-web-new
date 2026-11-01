"use client";

import React from "react";
import { FormData } from "@/types/talent";
import { CheckCircle2, Film, Download, ArrowRight, RotateCcw } from "lucide-react";

interface SubmissionSuccessModalProps {
  formData: FormData;
  castingId: string;
  onClose: () => void;
  onReset: () => void;
}

export default function SubmissionSuccessModal({
  formData,
  castingId,
  onClose,
  onReset,
}: SubmissionSuccessModalProps) {
  const handleDownloadSlip = () => {
    const textContent = `================================================
SHINEWOODS TALENT DISCOVERY & CASTING
OFFICIAL INTAKE SUMMARY SLIP
================================================
Casting Dossier ID: ${castingId}
Date: ${new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}

TALENT PROFILE:
Full Name: ${formData.fullName}
Professional Screen Name: ${formData.professionalName || "N/A"}
Craft Role: ${formData.category}
Location: ${formData.city}
Email: ${formData.email}
Phone: ${formData.phone}

PHYSICAL & ARTISTIC ATTRIBUTES:
Playing Age: ${formData.playingAgeMin} - ${formData.playingAgeMax} years
Height: ${formData.heightCm} cm
Languages: ${formData.languages.join(", ")}
Experience Level: ${formData.experienceYears}
Primary Genre: ${formData.primaryGenre}
Specialized Skills: ${formData.skills.join(", ")}

MOTION & PORTFOLIO:
Showreel Link: ${formData.showreelUrl}
Monologue Link: ${formData.monologueUrl || "N/A"}
IMDb/Portfolio: ${formData.imdbOrPortfolio || "N/A"}
Headshot: ${formData.headshotUrl}

REPRESENTATION & STATUS:
Agreement: ${formData.representationStatus}
Evaluation Status: PENDING CASTING DIRECTOR AUDIT

Sai Aura Infotainment Pvt. Ltd. / ShineWoods
fame@shinewoods.com
================================================`;

    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ShineWoods-Intake-${castingId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-xl bg-paper border border-ink/20 rounded-2xl p-6 sm:p-10 shadow-2xl text-ink space-y-6">
        {/* Cinema Clapperboard / Reel Header */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-champagne/20 text-champagne-dark border border-champagne/40 flex items-center justify-center">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <p className="editorial-tag text-champagne-dark">ShineWoods Casting</p>
              <h3 className="font-editorial text-2xl font-semibold">
                Application Logged
              </h3>
            </div>
          </div>
          <span className="font-mono text-xs text-mute tracking-widest bg-paper-2 px-2.5 py-1 rounded border border-line">
            CONFIDENTIAL
          </span>
        </div>

        {/* Success badge & Casting ID */}
        <div className="p-5 bg-paper-2/80 rounded-xl border border-line text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-emerald-600/10 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-mute font-mono">
            Official Casting Dossier ID
          </p>
          <p className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-ink">
            {castingId}
          </p>
          <p className="text-xs text-charcoal/80 max-w-md mx-auto pt-1 leading-relaxed">
            Thank you, <strong className="text-ink">{formData.fullName}</strong>.
            Your motion showreel and profile have entered the review queue for
            upcoming South Indian & pan-Indian production briefs.
          </p>
        </div>

        {/* Summary Details */}
        <div className="grid grid-cols-2 gap-3 text-xs bg-paper border border-line p-4 rounded-lg">
          <div>
            <span className="text-mute block text-[0.65rem] uppercase tracking-wider">
              Category
            </span>
            <span className="font-medium text-ink">{formData.category}</span>
          </div>
          <div>
            <span className="text-mute block text-[0.65rem] uppercase tracking-wider">
              Location
            </span>
            <span className="font-medium text-ink">{formData.city}</span>
          </div>
          <div>
            <span className="text-mute block text-[0.65rem] uppercase tracking-wider">
              Representation
            </span>
            <span className="font-medium text-ink">
              {formData.representationStatus}
            </span>
          </div>
          <div>
            <span className="text-mute block text-[0.65rem] uppercase tracking-wider">
              Languages
            </span>
            <span className="font-medium text-ink">
              {formData.languages.slice(0, 3).join(", ")}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleDownloadSlip}
            className="flex-1 py-3 px-4 border border-ink text-ink text-xs uppercase tracking-[0.18em] font-medium hover:bg-paper-2 transition-colors flex items-center justify-center gap-2 rounded"
          >
            <Download className="w-4 h-4" />
            Download Slip
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-ink text-paper text-xs uppercase tracking-[0.18em] font-medium hover:bg-charcoal transition-colors flex items-center justify-center gap-2 rounded"
          >
            <span>View Roster</span>
            <ArrowRight className="w-4 h-4 text-champagne" />
          </button>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-mute hover:text-ink transition-colors inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3 h-3" />
            Submit another talent profile
          </button>
        </div>
      </div>
    </div>
  );
}
