export interface Showreel {
  id: string;
  title: string;
  talentName: string;
  category: "Film" | "Commercial" | "Screen Test" | "Fashion" | "Action";
  duration: string;
  thumbnail: string;
  videoUrl: string;
  director: string;
  synopsis: string;
  tags: string[];
}

export const SHOWREELS_LIST: Showreel[] = [
  {
    id: "reel-shravan",
    title: "Showreel 2026 — Dramatic Screen Test",
    talentName: "Shravan",
    category: "Film",
    duration: "02:14",
    thumbnail: "/talent/shravan/hero.jpg",
    videoUrl: "/media/cover/cover.mp4",
    director: "K. R. Manojkrishna",
    synopsis: "High-contrast character test exploring emotional volatility, suppressed grief, and explosive dialogue in a neo-noir framework.",
    tags: ["Cinema", "Monologue", "Neo-Noir", "4K Master"],
  },
  {
    id: "reel-ines",
    title: "Vogue Movement Study",
    talentName: "Inês Duarte",
    category: "Fashion",
    duration: "01:30",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?fit=crop&crop=faces&w=1080&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    director: "Elena Rostova",
    synopsis: "Fluid haute couture movement and fabric dynamics filmed at 120fps under natural golden-hour illumination.",
    tags: ["Fashion", "High Speed", "Editorial", "Runway"],
  },
  {
    id: "reel-govardhan",
    title: "Apex Velocity Commercial",
    talentName: "Govardhan",
    category: "Commercial",
    duration: "00:45",
    thumbnail: "/talent/govardhan/hero.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    director: "S. V. Rathnam",
    synopsis: "National television automotive commercial spot with high-intensity character conviction and dynamic close-ups.",
    tags: ["Automotive", "National TVC", "Action"],
  },
  {
    id: "reel-kofi",
    title: "The Silent Quarter — Long Take",
    talentName: "Kofi Mensah",
    category: "Screen Test",
    duration: "03:10",
    thumbnail: "https://images.unsplash.com/photo-1521119989659-a83eee488004?fit=crop&crop=faces&w=1080&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    director: "A. Chandrasekhar",
    synopsis: "Unbroken 3-minute continuous camera take capturing subtle moral hesitation and diplomatic gravity.",
    tags: ["Drama", "OTT Original", "Character Actor"],
  },
  {
    id: "reel-kumaran",
    title: "Hand-to-Hand Stunt Core",
    talentName: "Kumaran",
    category: "Action",
    duration: "01:55",
    thumbnail: "/talent/kumaran/hero.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    director: "Peter Hein Unit",
    synopsis: "Visceral combat choreography and timing with full stunt team coordination, displaying agility and stamina.",
    tags: ["Stunts", "Fight Choreo", "Pan-Indian Film"],
  },
  {
    id: "reel-aanya",
    title: "Soliloquy in Violet",
    talentName: "Aanya Rao",
    category: "Film",
    duration: "02:05",
    thumbnail: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?fit=crop&crop=faces&w=1080&q=80",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    director: "Gautham V.",
    synopsis: "Intimate close-up emotional progression exploring the tension between vulnerability and resilience.",
    tags: ["Emotional Arc", "Screen Acting", "Tamil/Telugu"],
  },
];
