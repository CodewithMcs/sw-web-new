import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find Jobs — ShineWoods",
  description: "Apply to ongoing and high-demand casting calls. Actors, performers and crew — start networking across the South Indian and pan-Indian entertainment industry."
};

interface JobCard {
  id: string;
  badge: string;
  status: string;
  isSample: boolean;
  title: string;
  location: string;
  description: string;
  roles: string[];
  date: string;
  applyLink: string;
}

const JOBS: JobCard[] = [
  {
    id: "hotstar-drama",
    badge: "actor",
    status: "open",
    isSample: true,
    title: "Hotstar web series",
    location: "Ongoing casting · Chennai / Hyderabad",
    description: "Seeking a grounded South Indian presence for a premium streaming drama. Self-tapes reviewed weekly.",
    roles: ["40 yr old South Indian male", "Age 30–45"],
    date: "28 September 2026",
    applyLink: "/apply"
  },
  {
    id: "blast-thriller",
    badge: "actor",
    status: "open",
    isSample: true,
    title: "BLAST — supporting roles",
    location: "Tamil action-thriller · Chennai",
    description: "Additional casting for an upcoming Tamil action-thriller. Martial-arts experience a plus.",
    roles: ["Supporting male 25–35", "Supporting female 22–30"],
    date: "20 September 2026",
    applyLink: "/apply"
  },
  {
    id: "jewellery-brand",
    badge: "commercial",
    status: "closing soon",
    isSample: true,
    title: "Jewellery brand campaign",
    location: "TV commercial · Chennai / Hosur",
    description: "Lifestyle commercial for a South Indian jewellery house. Strong camera presence required.",
    roles: ["Female lead 20–28", "Couple look"],
    date: "1 October 2026",
    applyLink: "/apply"
  },
  {
    id: "child-artist-drama",
    badge: "actor",
    status: "open",
    isSample: true,
    title: "Child artist — family drama",
    location: "Tamil feature · Chennai",
    description: "Naturalistic child performers for an intimate family drama. Parents must accompany on set.",
    roles: ["Boy 7–10", "Girl 8–12"],
    date: "15 September 2026",
    applyLink: "/apply"
  }
];

export default function JobsPage() {
  return (
    <main id="main">
      <header className="gutter pb-14 pt-[calc(var(--header-h)+12vh)] md:pb-20">
        <p className="label flex items-center gap-4">
          <span>Casting Opportunities</span>
        </p>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,10rem)]">
          <span className="mask">
            <span className="mask-inner">Find</span>
          </span>{" "}
          <span className="mask">
            <span className="mask-inner italic" style={{ animationDelay: "120ms" }}>
              Jobs
            </span>
          </span>
        </h1>
        <div
          className="mt-10 max-w-xl text-lg leading-relaxed text-charcoal fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Apply to ongoing and high-demand casting calls. Actors, performers and crew — start networking across the entertainment industry.
        </div>
      </header>

      <div className="gutter mb-10 flex flex-wrap items-center justify-between gap-4">
        <p className="label text-mute">{JOBS.length} open opportunities</p>
        <Link
          className="label inline-flex items-center justify-center gap-3 px-7 py-4 transition-colors duration-500 border border-ink/80 hover:bg-ink hover:text-paper"
          href="/jobs/post"
        >
          Post a Job →
        </Link>
      </div>

      <section className="gutter grid gap-4 pb-28 md:grid-cols-2">
        {JOBS.map((job) => (
          <article
            key={job.id}
            className="flex flex-col border border-line p-6 md:p-8 transition-colors duration-300 hover:border-ink/40 bg-paper"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="label-sm border border-line px-2 py-1 uppercase">{job.badge}</span>
              <span className="label-sm text-mute">{job.status}</span>
              {job.isSample && <span className="label-sm text-mute">Sample</span>}
            </div>

            <h2 className="display mt-5 text-[clamp(1.6rem,3vw,2.4rem)]">{job.title}</h2>
            <p className="label mt-2 text-mute">{job.location}</p>
            <p className="mt-5 text-sm leading-relaxed text-charcoal">{job.description}</p>

            <div className="mt-6">
              <p className="label-sm text-mute">Roles hiring for</p>
              <ul className="mt-2 space-y-1 text-sm text-charcoal">
                {job.roles.map((role, idx) => (
                  <li key={idx}>➜ {role}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
              <p className="label-sm text-mute">Posted {job.date}</p>
              <Link className="label link-draw" href={job.applyLink}>
                View and apply →
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-line bg-ink text-paper">
        <div className="gutter flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <p className="label text-champagne">Trusted by leading brands and studios</p>
            <h2 className="display mt-4 text-[clamp(1.8rem,4vw,3rem)]">
              Start networking with professionals
            </h2>
          </div>
          <Link
            className="label inline-flex items-center justify-center gap-3 px-7 py-4 transition-colors duration-500 border border-paper/60 text-paper hover:bg-paper hover:text-ink"
            href="/jobs/post"
          >
            Post a Job →
          </Link>
        </div>
      </section>
    </main>
  );
}
