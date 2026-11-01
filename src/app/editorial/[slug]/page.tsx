import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EDITORIAL_ARTICLES, type EditorialArticle } from "@/constants/editorials";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EDITORIAL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = EDITORIAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Editorial — ShineWoods",
      description: "Stories of talent, craft and culture."
    };
  }

  return {
    title: `${article.title} ${article.titleEm || ""} — ShineWoods Editorial`,
    description: article.lead,
    openGraph: {
      title: `${article.title} ${article.titleEm || ""} — ShineWoods Editorial`,
      description: article.lead,
      images: [article.image.src]
    }
  };
}

export default async function EditorialArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = EDITORIAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Find next article
  const currentIndex = EDITORIAL_ARTICLES.findIndex((a) => a.slug === slug);
  const nextArticle = EDITORIAL_ARTICLES[(currentIndex + 1) % EDITORIAL_ARTICLES.length];

  return (
    <main id="main">
      <article>
        {/* Hero Header */}
        <header className="relative isolate min-h-[70svh] bg-ink text-paper md:min-h-[85svh]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 overflow-hidden bg-paper-3">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: article.image.focalPosition }}
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.45)_0%,rgb(0_0_0/0.1)_40%,rgb(0_0_0/0.7)_100%)]"
            />
          </div>

          <div className="gutter relative z-10 flex min-h-[70svh] flex-col justify-end pb-12 pt-[calc(var(--header-h)+4vh)] md:min-h-[85svh] md:pb-16">
            <p className="label">{article.category}</p>
            <h1 className="display mt-6 max-w-5xl text-[clamp(3rem,9vw,8rem)]">
              {article.title}
              <br />
              {article.titleEm && <em>{article.titleEm}</em>}
            </h1>
            <p className="mt-8 max-w-xl text-lg text-paper/80 leading-relaxed">
              {article.lead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 label text-paper/60 text-xs">
              <span>ShineWoods Editorial</span>
              <span>{article.date}</span>
              <span>{article.readTimeMin} min read</span>
              <span className="text-champagne">Issue {article.issueNumber}</span>
            </div>
          </div>
        </header>

        {/* Prose Reading View */}
        <div className="gutter grid gap-16 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-3 text-charcoal">
            {article.content.map((p, idx) => (
              <p
                key={idx}
                className="text-lg md:text-xl leading-relaxed mt-6 first:mt-0 font-sans"
              >
                {p}
              </p>
            ))}

            {article.quote && (
              <blockquote className="display my-12 border-l-2 border-champagne pl-6 text-2xl md:text-3xl italic text-ink leading-snug">
                “{article.quote}”
              </blockquote>
            )}

            <div className="mt-16 border-t border-line pt-8 flex items-center justify-between">
              <Link href="/editorial" className="label link-draw">
                ← Back to Editorial
              </Link>
              <span className="label-sm text-mute">
                Issue {article.issueNumber} · ShineWoods
              </span>
            </div>
          </div>
        </div>

        {/* Next Story Aside */}
        {nextArticle && (
          <aside className="border-t border-line bg-paper-2">
            <div className="gutter grid items-center gap-10 py-16 md:grid-cols-12 md:py-24">
              <div className="relative aspect-[3/4] md:col-span-4 overflow-hidden border border-line">
                <Image
                  src={nextArticle.image.src}
                  alt={nextArticle.image.alt}
                  fill
                  sizes="33vw"
                  className="object-cover"
                  style={{ objectPosition: nextArticle.image.focalPosition }}
                />
              </div>

              <div className="md:col-span-7 md:col-start-6">
                <p className="label-sm text-mute uppercase">Next Story</p>
                <p className="label text-mute mt-2">{nextArticle.category}</p>
                <h2 className="display mt-4 text-3xl md:text-5xl">
                  {nextArticle.title} {nextArticle.titleEm && <em>{nextArticle.titleEm}</em>}
                </h2>
                <p className="mt-4 text-charcoal leading-relaxed text-base">
                  {nextArticle.lead}
                </p>
                <div className="mt-8">
                  <Link
                    href={`/editorial/${nextArticle.slug}`}
                    className="label inline-flex items-center justify-center gap-3 px-7 py-4 transition-colors duration-500 bg-ink text-paper hover:bg-charcoal"
                  >
                    Read Next Story →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        )}
      </article>
    </main>
  );
}
