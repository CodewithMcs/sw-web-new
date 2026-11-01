import React from "react";

interface SectionHeadingProps {
  tag: string;
  title: string;
  highlight?: string;
  description?: string;
  actionText?: string;
  actionHref?: string;
  dark?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  highlight,
  description,
  actionText,
  actionHref,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
      <div>
        <p
          className={`editorial-tag flex items-center gap-2 ${
            dark ? "text-champagne" : "text-champagne-dark"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
          {tag}
        </p>
        <h2
          className={`font-editorial text-4xl sm:text-5xl lg:text-6xl mt-3 leading-[0.96] ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          {title} {highlight && <br />}
          {highlight && (
            <span
              className={`italic font-normal ${
                dark ? "text-paper/90" : "text-ink/90"
              }`}
            >
              {highlight}
            </span>
          )}
        </h2>
      </div>

      {(description || actionText) && (
        <div className="max-w-md space-y-3">
          {description && (
            <p
              className={`text-sm leading-relaxed ${
                dark ? "text-paper/70" : "text-charcoal/80"
              }`}
            >
              {description}
            </p>
          )}

          {actionText && actionHref && (
            <a
              href={actionHref}
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors ${
                dark
                  ? "text-paper hover:text-champagne"
                  : "text-ink hover:text-champagne-dark"
              }`}
            >
              <span>{actionText}</span>
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
