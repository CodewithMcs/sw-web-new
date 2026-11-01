import { StepInfo } from "@/types/talent";

export const FORM_STEPS: StepInfo[] = [
  {
    number: "01",
    key: "identity",
    title: "Identity & Role",
    subtitle: "Personal information & craft discipline",
  },
  {
    number: "02",
    key: "profile",
    title: "Artistic Profile",
    subtitle: "Physical specs, languages & craft range",
  },
  {
    number: "03",
    key: "motion",
    title: "Motion & Media",
    subtitle: "Showreel links, monologues & headshot",
  },
  {
    number: "04",
    key: "review",
    title: "Review & Submit",
    subtitle: "Verify talent roster profile & credentials",
  },
];

export const EDITORIAL_STAGES = [
  {
    number: "01",
    title: "Submit Profile",
    description: "Share your credentials, motion showreel links, and headshot materials.",
  },
  {
    number: "02",
    title: "Casting Review",
    description: "Our Chennai casting house team meticulously reviews every reel for presence and screen fit.",
  },
  {
    number: "03",
    title: "Representation",
    description: "Vetted talent enters the active talent roster for South Indian, pan-Indian cinema, OTT, and commercial calls.",
  },
];

export const INITIAL_FORM_DATA = {
  fullName: "Arjun Verma",
  professionalName: "Arjun V.",
  category: "Actor" as const,
  city: "Chennai, Tamil Nadu",
  email: "arjun.verma@example.com",
  phone: "+91 98401 23456",

  playingAgeMin: 24,
  playingAgeMax: 34,
  heightCm: 182,
  languages: ["Tamil", "English", "Telugu"],
  primaryGenre: "Drama / Cinema",
  experienceYears: "3-5 years",
  skills: ["Method Acting", "Fight Stunts", "Improv", "Voice Modulation"],

  showreelUrl: "https://vimeo.com/76979871",
  monologueUrl: "https://youtube.com/watch?v=sample",
  imdbOrPortfolio: "https://imdb.com/name/sample",
  headshotUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  bio: "Trained screen actor with theatre background. Versatile lead and antagonist character range across Tamil and Telugu cinema projects.",

  representationStatus: "Non-Exclusive" as const,
  agreeTerms: true,
  agreedToCastingCalls: true,
};
