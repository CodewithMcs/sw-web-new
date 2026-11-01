import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { STAR_ROSTER } from "@/constants/talents";

export const metadata: Metadata = {
  title: "Stars We Shine With — ShineWoods",
  description: "Established actors and actresses from Tamil, Telugu, Malayalam, Kannada and Hindi cinema — represented and collaborated with through ShineWoods."
};

const STAR_PROFILES = [
  {
    slug: "shaam",
    name: "Shaam",
    role: "Actor",
    languages: "Tamil, Telugu",
    image: "/talent/stars/shaam.jpg"
  },
  {
    slug: "j-d-chakravarthy",
    name: "J. D. Chakravarthy",
    role: "Actor",
    languages: "Telugu, Hindi",
    image: "/talent/stars/j-d-chakravarthy.jpg"
  },
  {
    slug: "abhirami",
    name: "Abhirami",
    role: "Actress",
    languages: "Malayalam, Tamil",
    image: "/talent/stars/abhirami.jpg"
  },
  {
    slug: "santhosh-prathap",
    name: "Santhosh Prathap",
    role: "Actor",
    languages: "Tamil",
    image: "/talent/stars/santhosh-prathap.jpg"
  },
  {
    slug: "namitha",
    name: "Namitha",
    role: "Actress",
    languages: "Tamil, Telugu",
    image: "/talent/stars/namitha.jpg"
  },
  {
    slug: "thalaivasal-vijay",
    name: "Thalaivasal Vijay",
    role: "Actor",
    languages: "Tamil, Malayalam",
    image: "/talent/stars/thalaivasal-vijay.jpg"
  },
  {
    slug: "mohini",
    name: "Mohini",
    role: "Actress",
    languages: "Tamil, Malayalam",
    image: "/talent/stars/mohini.jpg"
  },
  {
    slug: "y-g-mahendran",
    name: "Y. G. Mahendran",
    role: "Actor",
    languages: "Tamil",
    image: "/talent/stars/y-g-mahendran.jpg"
  },
  {
    slug: "urvashi-archana",
    name: "Urvashi Archana",
    role: "Actress",
    languages: "Tamil, Telugu",
    image: "/talent/stars/urvashiarchana.jpg"
  },
  {
    slug: "padmapriya",
    name: "Padmapriya",
    role: "Actress",
    languages: "Malayalam, Tamil",
    image: "/talent/stars/padmapriya.jpg"
  },
  {
    slug: "sandhya",
    name: "Sandhya",
    role: "Actress",
    languages: "Tamil, Malayalam",
    image: "/talent/stars/sandhya.jpg"
  },
  {
    slug: "tejashree",
    name: "Tejashree",
    role: "Actress",
    languages: "Tamil, Telugu",
    image: "/talent/stars/tejashree.jpg"
  },
  {
    slug: "mathew-varghese",
    name: "Mathew Varghese",
    role: "Actor",
    languages: "Malayalam, Tamil",
    image: "/talent/stars/mathew-varghese.jpg"
  }
];

export default function StarsShinePage() {
  return (
    <main id="main">
      <header className="gutter pb-14 pt-[calc(var(--header-h)+12vh)] md:pb-20">
        <p className="label flex items-center gap-4">
          <span>Roster</span>
        </p>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,10rem)]">
          <span className="mask">
            <span className="mask-inner">Stars</span>
          </span>{" "}
          <span className="mask">
            <span className="mask-inner italic" style={{ animationDelay: "120ms" }}>
              We Shine With
            </span>
          </span>
        </h1>
        <div
          className="mt-10 max-w-xl text-lg leading-relaxed text-charcoal fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Established actors and actresses from Tamil, Telugu, Malayalam, Kannada and Hindi cinema — represented and collaborated with through ShineWoods.
        </div>
      </header>

      <div className="gutter grid grid-cols-2 gap-x-4 gap-y-12 pb-28 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
        {STAR_PROFILES.map((star) => (
          <Link key={star.slug} className="group block" href={`/talent/${star.slug}`}>
            <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 border border-line">
              <div className="absolute inset-0 overflow-hidden bg-paper-3">
                <Image
                  src={star.image}
                  alt={star.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover object-[50%_28%] transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-105"
                />
              </div>
            </div>
            <h2 className="mt-4 font-display text-[1.25rem] leading-tight tracking-tight group-hover:underline">
              {star.name}
            </h2>
            <p className="mt-1.5 text-[0.72rem] uppercase tracking-[0.14em] text-mute">
              {star.role}
            </p>
            <p className="mt-1 text-[0.88rem] text-charcoal/80">
              {star.languages}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
