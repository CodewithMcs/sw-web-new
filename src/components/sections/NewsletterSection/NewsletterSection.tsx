"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Loader2, Sparkles, Film, Award, Users } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid industry or personal email address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="relative border-t border-line bg-paper-2 text-ink py-20 lg:py-28 overflow-hidden">
      {/* Subtle Ambient Film Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-20 opacity-[0.03] text-ink select-none font-serif text-[18rem] leading-none"
      >
        SW
      </div>

      <div className="gutter relative max-w-7xl mx-auto">
        <div className="relative rounded-2xl border border-line bg-paper p-8 sm:p-12 lg:p-16 shadow-xl">
          {/* Top Label & Issue Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-champagne-dark" />
              <p className="label text-champagne-dark tracking-[0.26em]">
                The ShineWoods Dispatch
              </p>
            </div>
            <span className="label-sm px-3 py-1 rounded-full border border-champagne/40 bg-champagne/10 text-champagne-dark text-[0.62rem] tracking-[0.2em] uppercase font-medium">
              Bulletin Vol. 2026
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)] text-ink leading-[0.98] font-light">
                Editorial releases, <br />
                <em className="italic text-ink/80 font-normal">castings &amp; events.</em>
              </h2>

              <p className="text-[1.02rem] text-charcoal leading-relaxed max-w-xl font-sans">
                Subscribe to receive curated casting notices, newly signed talent discoveries, urgent audition sides, and invitations to South Indian industry screenings.
              </p>

              {/* Publication Value Pillars */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-paper-2 text-xs text-charcoal font-sans">
                  <Film className="w-3.5 h-3.5 text-champagne-dark" />
                  <span>Audition Sides &amp; Briefs</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-paper-2 text-xs text-charcoal font-sans">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
                  <span>Fresh Faces &amp; Profiles</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-paper-2 text-xs text-charcoal font-sans">
                  <Award className="w-3.5 h-3.5 text-champagne-dark" />
                  <span>Festival &amp; Release Dates</span>
                </span>
              </div>
            </div>

            {/* Right Subscription Form Column */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-xl border border-line bg-paper-2 shadow-inner">
                {status === "success" ? (
                  <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-start gap-3.5 text-emerald-900 animate-in fade-in duration-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs space-y-1">
                      <strong className="block font-medium text-sm text-emerald-950 font-serif">
                        Subscribed to The Dispatch.
                      </strong>
                      <p className="text-emerald-800/90 leading-relaxed font-sans">
                        You have been added to our private casting bulletin circulation. Expect verified briefs on release days.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="dispatch-email" className="label text-[0.65rem] text-charcoal font-medium">
                        Production / Talent Email
                      </label>
                      <div className="relative">
                        <input
                          id="dispatch-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="producer@studio.com or artist@mail.com"
                          required
                          className="w-full bg-paper px-4 py-3.5 text-sm border border-line rounded-lg text-ink placeholder:text-mute focus:outline-none focus:border-champagne focus:ring-2 focus:ring-champagne/20 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 px-6 bg-ink text-paper label text-[0.68rem] tracking-[0.22em] font-medium hover:bg-champagne hover:text-ink transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 rounded-lg shadow-md cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-champagne" />
                          <span>Adding to Dispatch...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe to Dispatch</span>
                          <Send className="w-3.5 h-3.5 text-champagne" />
                        </>
                      )}
                    </button>

                    {status === "error" && (
                      <p className="text-xs text-red-600 font-medium font-sans">
                        {errorMessage}
                      </p>
                    )}

                    <div className="pt-2 flex items-center justify-between text-[0.7rem] text-mute font-sans">
                      <span>✓ No spam guarantee</span>
                      <span>✓ One-click unsubscribe</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
