import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-paper text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-charcoal active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ink/30 text-ink text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
