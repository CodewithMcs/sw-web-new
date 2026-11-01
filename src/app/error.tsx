"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-6 text-ink">
      <div className="max-w-md w-full bg-paper-2 border border-line rounded-xl p-8 text-center space-y-5 shadow-lg">
        <p className="editorial-tag text-champagne-dark">Interruption</p>
        <h2 className="font-editorial text-3xl font-semibold">
          An unexpected frame issue occurred.
        </h2>
        <p className="text-xs text-charcoal/80 leading-relaxed">
          The cinema player or stage encountered a temporary render exception. You can refresh or return home.
        </p>

        <div className="flex gap-3 justify-center pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="py-3 px-5 bg-ink text-paper text-xs uppercase tracking-wider font-medium hover:bg-charcoal transition-colors rounded flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="py-3 px-5 border border-line bg-paper text-ink text-xs uppercase tracking-wider font-medium hover:border-ink transition-colors rounded flex items-center gap-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
