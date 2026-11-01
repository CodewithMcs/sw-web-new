"use client";

import React, { useState, useEffect } from "react";
import { FormData } from "@/types/talent";
import { INITIAL_FORM_DATA, FORM_STEPS } from "@/constants/steps";
import StepProgress from "./StepProgress";
import StepOverview from "./StepOverview";
import Step1Identity from "./Step1Identity";
import Step2Profile from "./Step2Profile";
import Step3MotionMedia from "./Step3MotionMedia";
import Step4Review from "./Step4Review";
import SubmissionSuccessModal from "./SubmissionSuccessModal";
import { ArrowLeft, ArrowRight, Sparkles, Check, Loader2 } from "lucide-react";

export default function StepperWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedCastingId, setSubmittedCastingId] = useState<string | null>(null);

  // Load saved draft from localStorage if available
  useEffect(() => {
    try {
      const saved = localStorage.getItem("shinewoods_talent_draft");
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save changes to localStorage
  const updateField = (field: keyof FormData, value: unknown) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      try {
        localStorage.setItem("shinewoods_talent_draft", JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });

    // Clear error for that field if resolved
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  // Step Validation logic
  const validateStep = (stepIdx: number): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (stepIdx === 0) {
      if (!formData.fullName.trim()) errs.fullName = "Legal full name is required";
      if (!formData.city.trim()) errs.city = "Base city is required";
      if (!formData.email.trim() || !formData.email.includes("@"))
        errs.email = "Valid email address is required";
      if (!formData.phone.trim()) errs.phone = "Phone or WhatsApp contact is required";
    }

    if (stepIdx === 1) {
      if (formData.languages.length === 0)
        errs.languages = "Select at least one cinema language";
      if (!formData.heightCm || formData.heightCm < 120 || formData.heightCm > 230)
        errs.heightCm = "Height must be between 120 and 230 cm";
    }

    if (stepIdx === 2) {
      if (!formData.showreelUrl.trim())
        errs.showreelUrl = "Motion showreel or screen test link is required";
      if (!formData.headshotUrl.trim())
        errs.headshotUrl = "Screen headshot is required";
    }

    if (stepIdx === 3) {
      if (!formData.agreeTerms)
        errs.agreeTerms = "You must accept the submission & representation terms";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      if (currentStep < FORM_STEPS.length - 1) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({
          top: document.getElementById("stepper-card")?.offsetTop || 200,
          behavior: "smooth",
        });
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({
        top: document.getElementById("stepper-card")?.offsetTop || 200,
        behavior: "smooth",
      });
    }
  };

  const handleSelectStep = (idx: number) => {
    // Only allow navigating backwards or to validated step
    if (idx < currentStep || completedSteps.includes(idx - 1)) {
      setCurrentStep(idx);
    }
  };

  const handleSubmit = () => {
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomId = `SW-${new Date().getFullYear()}-${Math.floor(
        1000 + Math.random() * 9000
      )}`;
      setSubmittedCastingId(randomId);
    }, 1200);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(0);
    setCompletedSteps([]);
    setErrors({});
    setSubmittedCastingId(null);
    localStorage.removeItem("shinewoods_talent_draft");
  };

  const handleFillDemo = () => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  };

  return (
    <section id="stepper" className="py-16 sm:py-24 border-t border-line bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
          <div>
            <p className="editorial-tag text-champagne-dark flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
              For Actors, Models & Technicians
            </p>
            <h1 className="font-editorial text-4xl sm:text-6xl text-ink mt-3 leading-tight">
              Submit your profile <br />
              <span className="italic font-normal">&amp; motion reel.</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              type="button"
              onClick={handleFillDemo}
              className="editorial-tag text-[0.65rem] border border-line bg-paper-2 px-3 py-2 text-charcoal hover:text-ink hover:border-ink transition-colors rounded flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
              Auto-Fill Sample Talent
            </button>
            <span className="text-xs text-mute font-mono">
              Step {currentStep + 1} of {FORM_STEPS.length}
            </span>
          </div>
        </div>

        {/* 2-Column Editorial Layout matching Shinewoods /apply */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Column: Editorial Stages */}
          <div className="lg:col-span-4">
            <StepOverview />
          </div>

          {/* Right Column: Interactive Multi-Step Form Card */}
          <div
            id="stepper-card"
            className="lg:col-span-8 bg-paper border border-line rounded-2xl p-6 sm:p-10 shadow-sm space-y-8"
          >
            {/* Step Progress Bar */}
            <StepProgress
              currentStep={currentStep}
              onSelectStep={handleSelectStep}
              completedSteps={completedSteps}
            />

            {/* Error Banner if any */}
            {Object.keys(errors).length > 0 && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-xs text-red-700">
                Please complete the required fields highlighted below before advancing.
              </div>
            )}

            {/* Step Content Switcher */}
            <div className="min-h-[380px]">
              {currentStep === 0 && (
                <Step1Identity
                  formData={formData}
                  onChange={updateField}
                  errors={errors}
                />
              )}
              {currentStep === 1 && (
                <Step2Profile
                  formData={formData}
                  onChange={updateField}
                  errors={errors}
                />
              )}
              {currentStep === 2 && (
                <Step3MotionMedia
                  formData={formData}
                  onChange={updateField}
                  errors={errors}
                />
              )}
              {currentStep === 3 && (
                <Step4Review
                  formData={formData}
                  onChange={updateField}
                  errors={errors}
                />
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="border-t border-line pt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`py-3 px-5 border text-xs uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2 rounded ${
                  currentStep === 0
                    ? "opacity-30 cursor-not-allowed border-line text-mute"
                    : "border-ink/30 text-ink hover:border-ink hover:bg-paper-2"
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-xs text-mute hidden sm:inline-block">
                  Auto-saved to local draft
                </span>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isSubmitting}
                  className="py-3 px-6 bg-ink text-paper text-xs uppercase tracking-[0.2em] font-medium hover:bg-charcoal transition-all flex items-center gap-2.5 rounded shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-champagne" />
                      <span>Transmitting Dossier...</span>
                    </>
                  ) : currentStep === FORM_STEPS.length - 1 ? (
                    <>
                      <Check className="w-4 h-4 text-champagne" />
                      <span>Submit to Casting Desk</span>
                    </>
                  ) : (
                    <>
                      <span>Continue to Stage 0{currentStep + 2}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-champagne" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {submittedCastingId && (
        <SubmissionSuccessModal
          formData={formData}
          castingId={submittedCastingId}
          onClose={() => setSubmittedCastingId(null)}
          onReset={handleReset}
        />
      )}
    </section>
  );
}
