export interface TalentProfile {
  id: string;
  name: string;
  role: string;
  location: string;
  languages: string;
  specialty: string;
  image: string;
  aspectRatio?: string;
  featured?: boolean;
}

export const TALENT_LIST: TalentProfile[] = [
  {
    id: "shravan",
    name: "Shravan",
    role: "Featured Actor / Model",
    location: "Bengaluru, India",
    languages: "Kannada, English, Hindi",
    specialty: "Screen acting · Improvisation",
    image: "/talent/shravan/hero.jpg",
    featured: true,
  },
  {
    id: "govardhan",
    name: "Govardhan",
    role: "Featured Actor / Model",
    location: "Bengaluru, India",
    languages: "Kannada, English, Hindi",
    specialty: "Screen acting · Improvisation",
    image: "/talent/govardhan/hero.jpg",
    featured: true,
  },
  {
    id: "kumaran",
    name: "Kumaran",
    role: "Character Actor",
    location: "Chennai, India",
    languages: "Tamil, Telugu",
    specialty: "Period Drama · Method Intensity",
    image: "/talent/kumaran/hero.jpg",
    featured: true,
  },
  {
    id: "ines-duarte",
    name: "Inês Duarte",
    role: "Emerging Model",
    location: "Lisbon, Portugal",
    languages: "Portuguese · English · French",
    specialty: "Editorial Runway · High Fashion",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&crop=faces%2Ccenter&ar=3%3A4&w=800&q=80&auto=format",
    featured: false,
  },
  {
    id: "kofi-mensah",
    name: "Kofi Mensah",
    role: "Character Actor",
    location: "London, United Kingdom",
    languages: "English · Twi",
    specialty: "Screen dialogue · Classical Stage",
    image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?fit=crop&crop=faces%2Ccenter&ar=3%3A4&w=800&q=80&auto=format",
    featured: false,
  },
  {
    id: "aanya-rao",
    name: "Aanya Rao",
    role: "Featured Model",
    location: "Mumbai, India",
    languages: "Hindi · Marathi · English",
    specialty: "Commercial Movement · Close Camera",
    image: "https://images.unsplash.com/photo-1557296387-5358ad7997bb?fit=crop&crop=faces%2Ccenter&ar=3%3A4&w=800&q=80&auto=format",
    featured: false,
  },
];
