export interface IndustryEvent {
  id: string;
  type: string;
  title: string;
  date: string;
  location: string;
  description: string;
  iconType: "screening" | "workshop" | "showcase" | "casting";
}

export const EVENTS_LIST: IndustryEvent[] = [
  {
    id: "evt-screening",
    type: "Screening & Discussion",
    title: "South Cinema Emerging Cut — Private Industry Preview",
    date: "28 November 2026 · 18:30 IST",
    location: "Studio Hall A, Film Nagar, Chennai",
    description: "Exclusive showcase of upcoming festival shorts and actor screen tests before distributor acquisition.",
    iconType: "screening",
  },
  {
    id: "evt-workshop",
    type: "Masterclass Workshop",
    title: "Camera Nuance & Screen Acting Intensity",
    date: "05 December 2026 · 10:00 IST",
    location: "ShineWoods Studio, Nungambakkam, Chennai",
    description: "Intensive 2-day practical camera blocking and emotional transitions led by veteran casting directors.",
    iconType: "workshop",
  },
  {
    id: "evt-showcase",
    type: "Talent Showcase",
    title: "Commercial & Runway Lookbook Presentation",
    date: "12 December 2026 · 16:00 IST",
    location: "ITC Grand Chola, Chennai",
    description: "Direct presentation of agency models and new faces to national ad directors and brand agencies.",
    iconType: "showcase",
  },
  {
    id: "evt-casting",
    type: "Open Casting Call",
    title: "Pan-Indian Historical Epic — Screen Tests",
    date: "18 December 2026 · All Day",
    location: "ShineWoods Casting Desk, Chennai",
    description: "In-person character trials and costume tests for upcoming multi-lingual feature production.",
    iconType: "casting",
  },
];
