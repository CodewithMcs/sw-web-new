import React from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionContainer({
  id,
  className = "",
  children,
  dark = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`border-t ${
        dark
          ? "bg-ink text-paper border-line-dark"
          : "bg-paper text-ink border-line"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {children}
      </div>
    </section>
  );
}
