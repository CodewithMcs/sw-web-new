import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plans — ShineWoods",
  description: "Pick your plan. Kickstart your journey into the spotlight — post casting calls and access the talent database."
};

interface PlanTier {
  id: string;
  name: string;
  price: string;
  sublabel: string;
  tagline: string;
  badge?: string;
  isDark?: boolean;
  features: string[];
  ctaLink: string;
}

const PLANS: PlanTier[] = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "₹1,000",
    sublabel: "Essential Access",
    tagline: "Best for First-Time Seekers",
    badge: "Best Value",
    isDark: true,
    features: [
      "Post 3 casting / job opportunities per month",
      "Access to limited talent profiles (25 performers & technicians)",
      "Automated shortlisting — age, gender, height",
      "Email notifications of applicants"
    ],
    ctaLink: "/contact"
  },
  {
    id: "pro",
    name: "Pro Plan",
    price: "₹3,000",
    sublabel: "Advanced Search",
    tagline: "Designed for Growing Projects",
    features: [
      "Post 10 casting / job opportunities",
      "Access to 50 talent profiles (performers & technicians)",
      "Advanced shortlisting filters",
      "Dedicated account support for postings"
    ],
    ctaLink: "/contact"
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: "₹6,000",
    sublabel: "Elite Connections",
    tagline: "For High-End Productions",
    features: [
      "No monthly posting limits — ideal for production houses",
      "Full database access to performers & crew",
      "Your casting calls appear first to top talent",
      "Team-assisted find & filter for the right talent",
      "Faster decisions via direct elite connections"
    ],
    ctaLink: "/contact"
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    price: "₹50,000",
    sublabel: "Unlimited Power",
    tagline: "For Studios & Large Agencies",
    features: [
      "Everything in Premium",
      "Personal manager for talent sourcing & casting",
      "Specialised hiring campaigns for multi-role projects",
      "Early access to top / new industry talent",
      "Data-driven insights for better recruitment"
    ],
    ctaLink: "/contact"
  }
];

export default function PlansPage() {
  return (
    <main id="main">
      <header className="gutter pb-14 pt-[calc(var(--header-h)+12vh)] md:pb-20">
        <p className="label flex items-center gap-4">
          <span>For Talent Seekers</span>
        </p>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,10rem)]">
          <span className="mask">
            <span className="mask-inner">Step Into</span>
          </span>{" "}
          <span className="mask">
            <span className="mask-inner italic" style={{ animationDelay: "120ms" }}>
              Your Role
            </span>
          </span>
        </h1>
        <div
          className="mt-10 max-w-xl text-lg leading-relaxed text-charcoal fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Pick your plan. Kickstart your journey into the spotlight — post casting calls and access the talent database.
        </div>
      </header>

      <section className="gutter grid gap-4 pb-28 md:grid-cols-2 xl:grid-cols-4">
        {PLANS.map((plan) => {
          if (plan.isDark) {
            return (
              <article key={plan.id} className="flex flex-col border border-ink bg-ink text-paper">
                {plan.badge && (
                  <p className="label px-5 py-3 bg-champagne text-ink font-semibold tracking-wider">
                    {plan.badge}
                  </p>
                )}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="label-sm text-paper/55">{plan.sublabel}</p>
                  <h2 className="display mt-3 text-3xl">{plan.name}</h2>
                  <p className="mt-4 font-display text-4xl tracking-tight">{plan.price}</p>
                  <p className="label mt-3 text-champagne">{plan.tagline}</p>

                  <ul className="mt-8 flex-1 space-y-3 text-sm leading-relaxed text-paper/80">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span aria-hidden="true" className="text-champagne font-bold">
                          ✓
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    className="label mt-10 block px-5 py-3.5 text-center transition-colors border border-paper bg-paper text-ink hover:bg-paper-2"
                    href={plan.ctaLink}
                  >
                    Start Free Trial
                  </Link>
                </div>
              </article>
            );
          }

          return (
            <article key={plan.id} className="flex flex-col border border-line bg-paper text-ink">
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <p className="label-sm text-mute">{plan.sublabel}</p>
                <h2 className="display mt-3 text-3xl">{plan.name}</h2>
                <p className="mt-4 font-display text-4xl tracking-tight">{plan.price}</p>
                <p className="label mt-3 text-mute">{plan.tagline}</p>

                <ul className="mt-8 flex-1 space-y-3 text-sm leading-relaxed text-charcoal">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span aria-hidden="true" className="text-ink font-bold">
                        ✓
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  className="label mt-10 block px-5 py-3.5 text-center transition-colors border border-ink bg-ink text-paper hover:bg-charcoal"
                  href={plan.ctaLink}
                >
                  Start Free Trial
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
