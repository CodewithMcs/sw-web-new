"use client";

import React from "react";
import { FORM_STEPS } from "@/constants/steps";
import { Check } from "lucide-react";

interface StepProgressProps {
  currentStep: number;
  onSelectStep: (stepIndex: number) => void;
  completedSteps: number[];
}

export default function StepProgress({
  currentStep,
  onSelectStep,
  completedSteps,
}: StepProgressProps) {
  return (
    <div className="w-full">
      {/* Editorial Step Header Bar */}
      <nav aria-label="Progress" className="w-full">
        <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-line pb-4">
          {FORM_STEPS.map((step, idx) => {
            const isActive = currentStep === idx;
            const isCompleted = completedSteps.includes(idx);
            const isSelectable = isCompleted || idx <= currentStep;

            return (
              <li key={step.key} className="relative">
                <button
                  type="button"
                  disabled={!isSelectable}
                  onClick={() => onSelectStep(idx)}
                  className={`w-full text-left transition-all group py-1.5 focus:outline-none ${
                    isSelectable ? "cursor-pointer" : "cursor-not-allowed opacity-40"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[0.65rem] tracking-[0.2em] font-mono transition-colors ${
                        isActive
                          ? "text-champagne font-bold"
                          : isCompleted
                          ? "text-ink font-semibold"
                          : "text-mute"
                      }`}
                    >
                      {step.number}
                    </span>

                    {isCompleted && !isActive ? (
                      <span className="w-3.5 h-3.5 rounded-full bg-ink text-paper inline-flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-champagne" />
                      </span>
                    ) : (
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          isActive
                            ? "bg-champagne scale-125"
                            : "bg-mute/40"
                        }`}
                      />
                    )}
                  </div>

                  <p
                    className={`text-xs uppercase tracking-[0.16em] transition-colors truncate ${
                      isActive
                        ? "text-ink font-semibold"
                        : isCompleted
                        ? "text-charcoal group-hover:text-ink"
                        : "text-mute"
                    }`}
                  >
                    {step.title}
                  </p>

                  {/* Active highlight indicator bar */}
                  <div
                    className={`h-[2px] mt-2 transition-all duration-300 ${
                      isActive
                        ? "bg-ink w-full"
                        : isCompleted
                        ? "bg-champagne/60 w-full"
                        : "bg-transparent w-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
