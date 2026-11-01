export interface EditorialArticle {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  date: string;
  image: string;
  href: string;
}

export const FEATURED_ARTICLE: EditorialArticle = {
  id: "twelve-hours-after-dark",
  category: "Issue 04 · Feature",
  title: "Twelve Hours",
  subtitle: "After Dark",
  summary: "What really happens between call time and wrap on an independent night shoot in Chennai.",
  date: "14 October 2026",
  image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?fit=crop&crop=faces%2Ccenter&ar=16%3A9&w=1920&q=80&auto=format",
  href: "#editorial",
};

export const CONVERSATION_ARTICLE: EditorialArticle = {
  id: "kofi-mensah-on-stillness",
  category: "Conversations",
  title: "On",
  subtitle: "Stillness",
  summary: "Kofi Mensah on classical theatre, long takes, and the discipline of doing less on camera.",
  date: "3 October 2026",
  image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?fit=crop&crop=faces&ar=4%3A5&w=800&q=80",
  href: "#editorial",
};

export const FASHION_ARTICLE: EditorialArticle = {
  id: "light-as-language",
  category: "Fashion & Character",
  title: "Light as",
  subtitle: "Language",
  summary: "How cinema lighting sculpts emotion and guides performer blocking in high-contrast frames.",
  date: "28 September 2026",
  image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?fit=crop&crop=faces&ar=3%3A4&w=800&q=80",
  href: "#editorial",
};

export const NOTEBOOK_ARTICLES = [
  {
    category: "Behind the Screen",
    title: "Inside the",
    subtitle: "Casting Room",
    date: "7 October 2026",
    href: "#editorial",
  },
  {
    category: "Faces to Watch",
    title: "Five Faces",
    subtitle: "for the Season",
    date: "5 October 2026",
    href: "#editorial",
  },
];
