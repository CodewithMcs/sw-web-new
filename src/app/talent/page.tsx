"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ALL_TALENTS, CATEGORIES, type Talent } from "@/constants/talents";

export default function TalentCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTalents = useMemo(() => {
    return ALL_TALENTS.filter((t) => {
      // Category match
      const matchesCategory =
        selectedCategory === "all" ||
        t.categories.includes(selectedCategory) ||
        t.disciplines.includes(selectedCategory);

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        t.name.toLowerCase().includes(query) ||
        t.city.toLowerCase().includes(query) ||
        t.region.toLowerCase().includes(query) ||
        t.languages.some((l) => l.toLowerCase().includes(query)) ||
        t.skills.some((s) => s.toLowerCase().includes(query)) ||
        t.disciplines.some((d) => d.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main id="main">
      <header className="gutter pb-14 pt-[calc(var(--header-h)+12vh)] md:pb-20">
        <p className="label flex items-center gap-4">
          <span>For Talent Seekers</span>
        </p>
        <h1 className="display mt-8 text-[clamp(3.4rem,10vw,10rem)]">
          <span className="mask">
            <span className="mask-inner">Find</span>
          </span>{" "}
          <span className="mask">
            <span className="mask-inner italic" style={{ animationDelay: "120ms" }}>
              Talents
            </span>
          </span>
        </h1>
        <div
          className="mt-10 max-w-xl text-lg leading-relaxed text-charcoal fade-in"
          style={{ animationDelay: "400ms" }}
        >
          Search performers and crew — by role, department, height, language and location — for South Indian and pan-Indian sets.
        </div>
      </header>

      {/* Filter and Search Bar */}
      <section className="gutter mb-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-y border-line py-6">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`label px-4 py-2 text-xs uppercase tracking-wider transition-colors duration-300 ${
                    active
                      ? "bg-ink text-paper"
                      : "border border-line bg-paper text-mute hover:border-ink/50 hover:text-ink"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative min-w-[240px] md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search by name, language, city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-line bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-mute focus:border-ink focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-mute hover:text-ink"
                >
                  ✕
                </button>
              )}
            </div>
            <p className="label-sm text-mute shrink-0">
              {filteredTalents.length} {filteredTalents.length === 1 ? "profile" : "profiles"}
            </p>
          </div>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="gutter pb-28">
        {filteredTalents.length === 0 ? (
          <div className="py-20 text-center border border-line">
            <p className="display text-2xl text-charcoal">No talents found</p>
            <p className="mt-2 text-sm text-mute">
              Try adjusting your search criteria or selecting another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="label mt-6 inline-block border border-ink px-6 py-2.5 text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {filteredTalents.map((talent) => (
              <Link
                key={talent.id}
                href={`/talent/${talent.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-ink/5 border border-line">
                  <div className="absolute inset-0 overflow-hidden bg-paper-3">
                    <Image
                      src={talent.heroImage.src}
                      alt={talent.heroImage.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-editorial)] group-hover:scale-105"
                      style={{
                        objectPosition: `${talent.heroImage.focalX || 50}% ${talent.heroImage.focalY || 30}%`
                      }}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <h2 className="display text-2xl transition-[font-style] group-hover:italic">
                      {talent.name}
                    </h2>
                    <span className="label-sm text-mute uppercase text-[0.7rem] tracking-wider">
                      {talent.publicId}
                    </span>
                  </div>

                  <p className="label mt-1 text-mute text-xs">
                    {talent.disciplines.join(" & ")} · {talent.city}
                  </p>

                  <p className="mt-2 text-xs text-charcoal/80 line-clamp-2 leading-relaxed">
                    {talent.descriptor}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {talent.languages.slice(0, 3).map((lang, idx) => (
                      <span
                        key={idx}
                        className="text-[0.68rem] uppercase tracking-wider text-mute border border-line px-1.5 py-0.5"
                      >
                        {lang}
                      </span>
                    ))}
                    {talent.languages.length > 3 && (
                      <span className="text-[0.68rem] text-mute border border-line px-1.5 py-0.5">
                        +{talent.languages.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
