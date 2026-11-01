import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-6 text-ink">
      <div className="max-w-md w-full text-center space-y-4">
        <p className="font-mono text-sm text-champagne-dark tracking-widest uppercase">
          404 · Frame Not Found
        </p>
        <h1 className="font-editorial text-5xl sm:text-6xl text-ink font-normal">
          Lost in the <br />
          <span className="italic">cutting room.</span>
        </h1>
        <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed pt-2">
          The requested page or dossier archive cannot be found. Return to the main presentation to browse talent, stars, and motion reels.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-3.5 px-6 bg-ink text-paper text-xs uppercase tracking-[0.2em] font-medium hover:bg-charcoal transition-all rounded shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-champagne" />
            <span>Return to Feature Presentation</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
