import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_TALENTS, type Talent } from "@/constants/talents";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_TALENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const talent = ALL_TALENTS.find((t) => t.slug === slug);

  if (!talent) {
    return {
      title: "Talent Profile — ShineWoods",
      description: "Search the ShineWoods talent database."
    };
  }

  return {
    title: `${talent.name} — ShineWoods Roster`,
    description: talent.descriptor,
    openGraph: {
      title: `${talent.name} — ShineWoods Roster`,
      description: talent.descriptor,
      images: [talent.heroImage.src]
    }
  };
}

export default async function TalentDetailPage({ params }: Props) {
  const { slug } = await params;
  const talent = ALL_TALENTS.find((t) => t.slug === slug);

  if (!talent) {
    notFound();
  }

  // Recommended talents (exclude current)
  const rosterRecommendations = ALL_TALENTS.filter((t) => t.slug !== slug).slice(0, 4);

  return (
    <main id="main">
      {/* 1. Hero Section */}
      <section className="relative isolate min-h-[100svh] bg-ink text-paper">
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden bg-paper-3">
            <Image
              src={talent.heroImage.src}
              alt={talent.heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{
                objectPosition: `${talent.heroImage.focalX || 50}% ${talent.heroImage.focalY || 28}%`
              }}
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.4)_0%,rgb(0_0_0/0)_30%,rgb(0_0_0/0.7)_100%)]"
          />
        </div>

        <div className="gutter relative z-10 flex min-h-[100svh] flex-col justify-end pb-12 pt-[calc(var(--header-h)+4vh)] md:pb-16">
          <p className="label fade-in text-paper/80 uppercase tracking-widest">
            {talent.disciplines.join(" / ")}
          </p>
          <h1
            className="display mt-4 uppercase leading-[0.82] tracking-[-0.02em]"
            style={{
              fontSize: "clamp(3.2rem, min(14vw, (100vw - 2 * var(--gutter)) / 4.62), 14rem)"
            }}
          >
            <span className="mask">
              <span className="mask-inner">{talent.name}</span>
            </span>
          </h1>

          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="label text-paper/90">
              {talent.city}, {talent.country}
            </p>
            <Link
              className="label inline-flex items-center justify-center gap-3 px-7 py-4 transition-colors duration-500 border border-paper/60 text-paper hover:bg-paper hover:text-ink"
              href={`/contact?talent=${talent.slug}`}
            >
              Contact / Enquire
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Specifications & About */}
      <section className="gutter grid gap-12 border-b border-line py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="label flex items-center gap-4">
            <span>About</span>
          </p>
          <blockquote className="display mt-10 text-[clamp(1.6rem,3vw,2.4rem)] italic leading-[1.15]">
            “The camera is looking for honesty.”
          </blockquote>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <p className="text-lg leading-relaxed text-charcoal">{talent.descriptor}</p>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="label-sm text-mute">Age</dt>
              <dd className="mt-1 font-display text-xl">{talent.ageYears} yrs</dd>
            </div>
            <div>
              <dt className="label-sm text-mute">Height</dt>
              <dd className="mt-1 font-display text-xl">{talent.heightCm} cm</dd>
            </div>
            <div>
              <dt className="label-sm text-mute">Representation</dt>
              <dd className="mt-1 font-display text-xl capitalize">{talent.representation}</dd>
            </div>
            <div>
              <dt className="label-sm text-mute">Availability</dt>
              <dd className="mt-1 font-display text-xl capitalize">{talent.availability}</dd>
            </div>
            <div>
              <dt className="label-sm text-mute">Public ID</dt>
              <dd className="mt-1 font-display text-xl">{talent.publicId}</dd>
            </div>
            <div>
              <dt className="label-sm text-mute">Market</dt>
              <dd className="mt-1 font-display text-xl">{talent.market}</dd>
            </div>
          </dl>

          <div className="mt-10 border-t border-line pt-8">
            <h3 className="label-sm text-mute">Languages</h3>
            <p className="mt-2 text-sm text-charcoal">{talent.languages.join(" · ")}</p>
          </div>

          <div className="mt-6">
            <h3 className="label-sm text-mute">Skills & Disciplines</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {talent.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs uppercase tracking-wider text-mute border border-line px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact CTA */}
      <section className="gutter grid gap-10 border-t border-line py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="label flex items-center gap-4">
            <span>Contact</span>
          </p>
          <h2 className="display mt-6 text-[clamp(2.2rem,4vw,3.6rem)]">
            Enquire about
            <br />
            <em>{talent.name}</em>
          </h2>
          <p className="mt-6 max-w-md text-charcoal leading-relaxed">
            Casting directors, brands and production houses: contact the agency to request availability, materials or a full casting pack.
          </p>
          <Link
            className="label inline-flex items-center justify-center gap-3 px-7 py-4 transition-colors duration-500 bg-ink text-paper hover:bg-charcoal mt-10"
            href={`/contact?talent=${talent.slug}`}
          >
            Contact ShineWoods →
          </Link>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <p className="label-sm text-mute">Social / Professional</p>
          <ul className="mt-6 space-y-4">
            <li>
              <a
                href={`https://instagram.com/`}
                target="_blank"
                rel="noreferrer"
                className="display text-2xl link-draw"
              >
                @{talent.slug} →
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Recommendations Roster */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="gutter mb-10 flex items-end justify-between">
          <p className="label flex items-center gap-4">
            <span>Also in the roster</span>
          </p>
          <Link className="label link-draw" href="/talent">
            View all →
          </Link>
        </div>

        <div className="gutter grid grid-cols-2 gap-4 md:grid-cols-4">
          {rosterRecommendations.map((rec) => (
            <div key={rec.id} className="group">
              <Link href={`/talent/${rec.slug}`}>
                <div className="photo-hover relative aspect-[3/4] overflow-hidden border border-line">
                  <div className="absolute inset-0 overflow-hidden bg-paper-3">
                    <Image
                      src={rec.heroImage.src}
                      alt={rec.heroImage.alt}
                      fill
                      sizes="25vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-105"
                      style={{
                        objectPosition: `${rec.heroImage.focalX || 50}% ${rec.heroImage.focalY || 28}%`
                      }}
                    />
                  </div>
                </div>
                <p className="display mt-4 text-2xl group-hover:italic">{rec.name}</p>
                <p className="label-sm text-mute mt-1 capitalize">
                  {rec.disciplines[0]} · {rec.city}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Schema.org Person LD+JSON */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: talent.name,
            jobTitle: talent.disciplines.join(" / "),
            description: talent.descriptor,
            image: talent.heroImage.src,
            url: `https://shinewoods.vercel.app/talent/${talent.slug}`,
            address: {
              "@type": "PostalAddress",
              addressLocality: talent.city,
              addressCountry: talent.countryCode
            },
            worksFor: {
              "@type": "Organization",
              name: "ShineWoods",
              url: "https://shinewoods.vercel.app"
            }
          })
        }}
      />
    </main>
  );
}
