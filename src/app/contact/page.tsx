"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Loader2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <main id="main" className="flex-1">
        {/* Header Hero */}
        <header className="gutter pb-14 pt-[calc(var(--header-h)+8vh)] md:pb-20">
          <p className="label flex items-center gap-4 text-champagne-dark">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span>For Finding Talent</span>
          </p>

          <h1 className="display mt-6 text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.92]">
            Contact <br />
            <span className="italic font-normal">ShineWoods</span>
          </h1>

          <div className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal font-light">
            Looking for talent for your project? Tell us about the role — film, television, commercials or campaigns. We respond personally from the Chennai desk.
          </div>
        </header>

        {/* 2-Column Content & Form */}
        <div className="gutter grid gap-16 pb-28 md:grid-cols-12">
          {/* Left Column: Direct Info */}
          <div className="md:col-span-5 space-y-8">
            <div>
              <p className="label-sm text-mute">Direct</p>
              <a
                href="mailto:fame@shinewoods.com"
                className="display mt-3 block text-2xl sm:text-3xl link-draw text-ink"
              >
                fame@shinewoods.com
              </a>
              <a
                href="tel:+919841746751"
                className="label mt-3 block link-draw text-charcoal text-sm"
              >
                +91 98417 46751
              </a>
            </div>

            <div className="pt-4 border-t border-line">
              <p className="label-sm text-mute">Studio</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">
                SAI AURA INFOTAINMENT PRIVATE LIMITED<br />
                G1 &amp; G2 AlphaCrystal, 5/2 Andavar Nagar 3rd Street<br />
                Kodambakkam, Chennai – 600024<br />
                Tamil Nadu, India
              </p>
            </div>

            <div className="pt-4 border-t border-line">
              <p className="label-sm text-mute mb-4">Casting Disciplines</p>
              <ul className="space-y-2.5 label text-charcoal font-medium">
                <li>Film Casting (Tamil, Telugu, Malayalam, Hindi)</li>
                <li>Television &amp; Web Series Shortlisting</li>
                <li>National TV Commercials (TVC)</li>
                <li>High Fashion &amp; Editorial Runway</li>
                <li>Music Videos &amp; Independent Cinema</li>
                <li>Brand Ambassador &amp; Campaign Faces</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:col-span-6 md:col-start-7">
            {status === "success" ? (
              <div className="p-8 bg-paper-2 border border-line rounded-xl space-y-4 text-ink animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-600/10 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-editorial text-3xl font-semibold">
                  Enquiry Logged
                </h3>
                <p className="text-sm text-charcoal/80 leading-relaxed">
                  Thank you, <strong className="text-ink">{formData.name}</strong>. Your project brief has been routed to Manojkrishna and our casting coordinators. We will reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", company: "", category: "", message: "" });
                  }}
                  className="label text-xs inline-flex items-center gap-2 text-ink hover:text-champagne-dark pt-2"
                >
                  <span>Submit another enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="label-sm text-mute block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="sw-field"
                    placeholder="e.g. S. V. Rathnam"
                  />
                </div>

                <div>
                  <label className="label-sm text-mute block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="sw-field"
                    placeholder="director@production.com"
                  />
                </div>

                <div>
                  <label className="label-sm text-mute block mb-1">
                    Company / Production Banner
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="sw-field"
                    placeholder="Studio or Agency name"
                  />
                </div>

                <div>
                  <label className="label-sm text-mute block mb-1">
                    Enquiry Type *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="sw-field bg-transparent cursor-pointer"
                  >
                    <option value="" disabled>Select enquiry type…</option>
                    <option value="Film Casting">Film Casting</option>
                    <option value="Model Casting">Model Casting</option>
                    <option value="Advertising">Advertising / TVC</option>
                    <option value="Fashion">Fashion &amp; Editorial</option>
                    <option value="Brand Campaign">Brand Campaign</option>
                    <option value="Other">Other Brief</option>
                  </select>
                </div>

                <div>
                  <label className="label-sm text-mute block mb-1">
                    Project Message / Brief *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="sw-field resize-none"
                    placeholder="Describe character requirements, age brackets, shoot dates, scale..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="label inline-flex items-center gap-3 bg-ink px-8 py-4 text-paper hover:bg-charcoal transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-champagne" />
                        <span>Sending Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Brief</span>
                        <Send className="w-3.5 h-3.5 text-champagne" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
  );
}
