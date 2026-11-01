import type { Metadata } from "next";
import StepperWizard from "@/components/stepper/StepperWizard";

export const metadata: Metadata = {
  title: "Submit Your Profile — ShineWoods",
  description: "Join ShineWoods today — land opportunities tomorrow. Applications are reviewed privately. Approval does not automatically mean public representation."
};

export default function ApplyPage() {
  return (
    <main id="main">
      <header className="gutter pb-14 pt-[calc(var(--header-h)+12vh)] md:pb-20">
        <p className="label flex items-center gap-4">
          <span>For Talent</span>
        </p>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,10rem)]">
          <span className="mask">
            <span className="mask-inner">Submit</span>
          </span>{" "}
          <span className="mask">
            <span className="mask-inner italic" style={{ animationDelay: "120ms" }}>
              your profile
            </span>
          </span>
        </h1>
        <div
          className="mt-10 max-w-xl text-lg leading-relaxed text-charcoal fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Join ShineWoods today — land opportunities tomorrow. Applications are reviewed privately. Approval does not automatically mean public representation.
        </div>
      </header>

      <div className="gutter grid gap-16 pb-28 md:grid-cols-12">
        <aside className="md:col-span-4">
          <ol className="space-y-8 sticky top-28">
            <li>
              <p className="label-sm text-mute">01</p>
              <p className="display mt-2 text-2xl">Submit</p>
              <p className="mt-2 text-charcoal leading-relaxed">
                Share your details, materials and experience.
              </p>
            </li>
            <li>
              <p className="label-sm text-mute">02</p>
              <p className="display mt-2 text-2xl">Review</p>
              <p className="mt-2 text-charcoal leading-relaxed">
                Our team reviews every application carefully.
              </p>
            </li>
            <li>
              <p className="label-sm text-mute">03</p>
              <p className="display mt-2 text-2xl">Decision</p>
              <p className="mt-2 text-charcoal leading-relaxed">
                Approved talent enters the private database — and may later be published.
              </p>
            </li>
          </ol>
        </aside>

        <section className="md:col-span-8">
          <div className="border border-line p-6 md:p-10 bg-paper">
            <StepperWizard />
          </div>
        </section>
      </div>
    </main>
  );
}
