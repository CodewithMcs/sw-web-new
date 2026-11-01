import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Post a Job — ShineWoods",
  description: "Publish a casting opportunity. Sign in as a Talent Seeker to go live — or start a free trial on Plans."
};

export default function PostJobPage() {
  return (
    <main id="main">
      <header className="gutter pb-14 pt-[calc(var(--header-h)+12vh)] md:pb-20">
        <p className="label flex items-center gap-4">
          <span>For Talent Seekers</span>
        </p>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,10rem)]">
          <span className="mask">
            <span className="mask-inner">Post a</span>
          </span>{" "}
          <span className="mask">
            <span className="mask-inner italic" style={{ animationDelay: "120ms" }}>
              Job
            </span>
          </span>
        </h1>
        <div
          className="mt-10 max-w-xl text-lg leading-relaxed text-charcoal fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Publish a casting opportunity. Sign in as a Talent Seeker to go live — or start a free trial on Plans.
        </div>
      </header>

      <div className="gutter grid gap-12 pb-28 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="label text-mute">How it works</p>
          <ol className="mt-6 space-y-6">
            <li>
              <p className="label-sm text-mute">01</p>
              <p className="display mt-2 text-2xl">Create a seeker account</p>
              <p className="mt-2 text-charcoal leading-relaxed">
                Sign in as a Talent Seeker and pick a plan.
              </p>
            </li>
            <li>
              <p className="label-sm text-mute">02</p>
              <p className="display mt-2 text-2xl">Describe the role</p>
              <p className="mt-2 text-charcoal leading-relaxed">
                Title, project type, location, age range and brief.
              </p>
            </li>
            <li>
              <p className="label-sm text-mute">03</p>
              <p className="display mt-2 text-2xl">Go live</p>
              <p className="mt-2 text-charcoal leading-relaxed">
                Talent on ShineWoods can view and apply. You get notified.
              </p>
            </li>
          </ol>
        </div>

        <div className="border border-line p-8 md:col-span-6 md:col-start-7 md:p-10 bg-paper">
          <p className="label">Ready to post?</p>
          <h2 className="display mt-4 text-3xl">Sign in as Talent Seeker</h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal">
            Job posting is available to signed-in seekers on an active plan. Basic starts at ₹1,000 / month.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              className="label block bg-ink px-6 py-4 text-center text-paper transition-colors hover:bg-charcoal"
              href="/plans"
            >
              Seeker Sign in →
            </Link>
            <Link
              className="label block border border-ink px-6 py-4 text-center transition-colors hover:bg-ink hover:text-paper"
              href="/plans"
            >
              View Plans →
            </Link>
            <a
              href="mailto:fame@shinewoods.com?subject=Post%20a%20casting%20job"
              className="label link-draw mt-2 text-center text-mute"
            >
              Or email fame@shinewoods.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
