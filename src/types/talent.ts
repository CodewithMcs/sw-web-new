export type TalentCategory = "Actor" | "Model" | "Voice Artist" | "Technician";

export interface FormData {
  // Step 1: Identity & Category
  fullName: string;
  professionalName: string;
  category: TalentCategory;
  city: string;
  email: string;
  phone: string;

  // Step 2: Physical & Artistic Profile
  playingAgeMin: number;
  playingAgeMax: number;
  heightCm: number;
  languages: string[];
  primaryGenre: string;
  experienceYears: string;
  skills: string[];

  // Step 3: Motion & Materials
  showreelUrl: string;
  monologueUrl: string;
  imdbOrPortfolio: string;
  headshotUrl: string;
  bio: string;

  // Step 4: Representation & Consent
  representationStatus: "Exclusive" | "Non-Exclusive" | "Independent";
  agreeTerms: boolean;
  agreedToCastingCalls: boolean;
}

export interface MotionReel {
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

export type StepKey = "identity" | "profile" | "motion" | "review";

export interface StepInfo {
  number: string;
  key: StepKey;
  title: string;
  subtitle: string;
}
