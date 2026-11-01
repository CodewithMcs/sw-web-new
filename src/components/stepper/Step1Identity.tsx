"use client";

import React from "react";
import { FormData, TalentCategory } from "@/types/talent";
import { User, MapPin, Mail, Phone, Tag } from "lucide-react";

interface Step1IdentityProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: unknown) => void;
  errors: Partial<Record<keyof FormData, string>>;
}

const CATEGORIES: TalentCategory[] = [
  "Actor",
  "Model",
  "Voice Artist",
  "Technician",
];

export default function Step1Identity({
  formData,
  onChange,
  errors,
}: Step1IdentityProps) {
  return (
    <div className="space-y-7 animate-in fade-in duration-300">
      <div>
        <p className="editorial-tag text-mute">Stage 01</p>
        <h3 className="font-editorial text-2xl sm:text-3xl text-ink mt-1">
          Identity & Craft Role
        </h3>
        <p className="text-sm text-charcoal/70 mt-1">
          Please provide your legal and professional screen details.
        </p>
      </div>

      {/* Category selector pills */}
      <div className="pt-2">
        <label className="editorial-tag block text-charcoal mb-3">
          I am applying as
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {CATEGORIES.map((cat) => {
            const isSelected = formData.category === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onChange("category", cat)}
                className={`py-3 px-4 border text-xs uppercase tracking-[0.18em] font-medium transition-all text-center flex items-center justify-center gap-1.5 ${
                  isSelected
                    ? "border-ink bg-ink text-paper shadow-sm"
                    : "border-line bg-paper-2/50 text-charcoal hover:border-ink/40"
                }`}
              >
                <Tag className={`w-3 h-3 ${isSelected ? "text-champagne" : "text-mute"}`} />
                {cat}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-mute mt-2">
          {formData.category === "Actor" &&
            "Screen actors: share your showreel and monologues in Step 3."}
          {formData.category === "Model" &&
            "Fashion & editorial models: share physical measurements and runway/movement tests."}
          {formData.category === "Voice Artist" &&
            "Dubbing & VO artists: voice demo clips will be requested in Step 3."}
          {formData.category === "Technician" &&
            "Cinematographers, editors, and sound crew: portfolio links accepted."}
        </p>
      </div>

      {/* Name inputs */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Full Legal Name *
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => onChange("fullName", e.target.value)}
              placeholder="e.g. Arjun Verma"
              className="sw-field"
            />
            <User className="w-4 h-4 text-mute absolute right-2 bottom-3" />
          </div>
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Professional / Screen Name (Optional)
          </label>
          <input
            type="text"
            value={formData.professionalName}
            onChange={(e) => onChange("professionalName", e.target.value)}
            placeholder="e.g. Arjun V."
            className="sw-field"
          />
        </div>
      </div>

      {/* City and Contact Info */}
      <div className="grid sm:grid-cols-3 gap-6 pt-2">
        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Base City / Region *
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.city}
              onChange={(e) => onChange("city", e.target.value)}
              placeholder="e.g. Chennai, Tamil Nadu"
              className="sw-field"
            />
            <MapPin className="w-4 h-4 text-mute absolute right-2 bottom-3" />
          </div>
          {errors.city && (
            <p className="text-xs text-red-600 mt-1">{errors.city}</p>
          )}
        </div>

        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => onChange("email", e.target.value)}
              placeholder="arjun.verma@example.com"
              className="sw-field"
            />
            <Mail className="w-4 h-4 text-mute absolute right-2 bottom-3" />
          </div>
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="editorial-tag block text-charcoal mb-1">
            Phone / WhatsApp *
          </label>
          <div className="relative">
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              placeholder="+91 98401 23456"
              className="sw-field"
            />
            <Phone className="w-4 h-4 text-mute absolute right-2 bottom-3" />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
}
