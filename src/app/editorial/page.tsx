import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EDITORIAL_ISSUES, EDITORIAL_ARTICLES } from "@/constants/editorials";

export const metadata: Metadata = {
  title: "Editorial — ShineWoods",
  description: "Stories of talent, craft and culture — structured as a living digital publication with numbered issues."
};

export default function EditorialPage() {
  const featuredArticle = EDITORIAL_ARTICLES.find((a) => a.featured) || EDITORIAL_ARTICLES[0];
  const gridArticles = EDITORIAL_ARTICLES.filter((a) => !a.featured);

  return (
    <main id="main">
      <header className="gutter pb-14 pt-[calc(var(--header-h)+12vh)] md:pb-20">
        <p className="label flex items-center gap-4">
          <span>The Magazine</span>
        </p>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,10rem)]">
          <span className="mask">
            <span className="mask-inner">Editorial</span>
          </span>{" "}
          <span className="mask">
            <span className="mask-inner italic" style={{ animationDelay: "120ms" }}>
              Journal
            </span>
          </span>
        </h1>
        <div
          className="mt-10 max-w-xl text-lg leading-relaxed text-charcoal fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Stories of talent, craft and culture — structured as a living digital publication with numbered issues.
        </div>
      </header>

      {/* Issues Section */}
      <section className="gutter pb-16 border-b border-line">
        <div className="grid gap-6 md:grid-cols-2">
          {EDITORIAL_ISSUES.map((issue) => (
            <article
              key={issue.id}
              className="group grid gap-6 border border-line p-4 sm:grid-cols-2 sm:p-0 bg-paper transition-colors duration-300 hover:border-ink/50"
            >
              <div className="photo-hover relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden bg-paper-3">
                  <Image
                    src={issue.image.src}
                    alt={issue.image.alt}
                    fill
                    sizes="40vw"
                    className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-105"
                    style={{ objectPosition: "50% 30%" }}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center sm:pr-8 py-4 sm:py-6">
                <p className="label text-mute">{issue.issueNumber}</p>
                <h3 className="display mt-4 text-3xl md:text-4xl group-hover:italic transition-[font-style]">
                  {issue.title}
                </h3>
                <p className="mt-4 text-charcoal leading-relaxed text-sm">
                  {issue.subtitle}
                </p>
                <p className="label mt-8 text-mute text-xs">
                  {issue.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Articles Section */}
      <section className="gutter py-16 md:py-24">
        <div className="grid gap-x-6 gap-y-16 md:grid-cols-12">
          {/* Featured Hero Article (Full-width) */}
          {featuredArticle && (
            <div className="md:col-span-12">
              <Link
                href={`/editorial/${featuredArticle.slug}`}
                className="group grid gap-6 md:grid-cols-2 md:items-center border border-line p-4 md:p-8 bg-paper transition-colors duration-300 hover:border-ink/50"
              >
                <div className="photo-hover relative overflow-hidden aspect-[16/10] border border-line">
                  <div className="absolute inset-0 overflow-hidden bg-paper-3">
                    <Image
                      src={featuredArticle.image.src}
                      alt={featuredArticle.image.alt}
                      fill
                      sizes="80vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-105"
                      style={{ objectPosition: featuredArticle.image.focalPosition }}
                    />
                  </div>
                </div>
                <div className="py-4 md:py-8">
                  <p className="label text-mute">{featuredArticle.category}</p>
                  <h2 className="display mt-4 group-hover:italic transition-[font-style] text-[clamp(2.4rem,4.5vw,4.5rem)]">
                    {featuredArticle.title}{" "}
                    {featuredArticle.titleEm && <em>{featuredArticle.titleEm}</em>}
                  </h2>
                  <p className="mt-4 text-charcoal leading-relaxed text-base md:text-lg">
                    {featuredArticle.lead}
                  </p>
                  <p className="label mt-6 text-mute text-xs">
                    {featuredArticle.date} · {featuredArticle.readTimeMin} min read
                  </p>
                </div>
              </Link>
            </div>
          )}

          {/* Grid Articles (3-column) */}
          {gridArticles.map((article) => (
            <article key={article.id} className="md:col-span-4">
              <Link
                href={`/editorial/${article.slug}`}
                className="group grid gap-6"
              >
                <div className="photo-hover relative overflow-hidden aspect-[4/5] border border-line">
                  <div className="absolute inset-0 overflow-hidden bg-paper-3">
                    <Image
                      src={article.image.src}
                      alt={article.image.alt}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-105"
                      style={{ objectPosition: article.image.focalPosition }}
                    />
                  </div>
                </div>
                <div>
                  <p className="label text-mute text-xs">{article.category}</p>
                  <h2 className="display mt-3 group-hover:italic transition-[font-style] text-2xl md:text-3xl">
                    {article.title} {article.titleEm && <em>{article.titleEm}</em>}
                  </h2>
                  <p className="mt-3 text-sm text-charcoal leading-relaxed line-clamp-3">
                    {article.lead}
                  </p>
                  <p className="label mt-5 text-mute text-xs">
                    {article.date} · {article.readTimeMin} min read
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
