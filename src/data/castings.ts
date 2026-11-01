export interface OpenCasting {
  id: string;
  status: "Open" | "Urgent" | "Shortlisting";
  isSample?: boolean;
  category: string;
  title: string;
  synopsis: string;
  location: string;
  compensation: string;
  shootDates: string;
}

export const OPEN_CASTINGS: OpenCasting[] = [
  {
    id: "cast-1",
    status: "Open",
    isSample: true,
    category: "Actor · Ongoing casting",
    title: "Hotstar Web Series",
    synopsis: "Seeking a grounded South Indian presence for a premium streaming drama. Character requires naturalistic conversational delivery and emotional restraint.",
    location: "Chennai & Hyderabad",
    compensation: "Industry Standard Scale",
    shootDates: "Jan — March 2027",
  },
  {
    id: "cast-2",
    status: "Urgent",
    isSample: true,
    category: "Model / Actor · National Commercial",
    title: "Pan-Indian Automotive TVC",
    synopsis: "High-energy commercial ad requiring athletic presence and intense cinematic gaze for national broadcast across 5 languages.",
    location: "Bengaluru & Mumbai",
    compensation: "A-List Commercial Day Rate",
    shootDates: "December 2026",
  },
  {
    id: "cast-3",
    status: "Shortlisting",
    isSample: true,
    category: "Character Lead · Feature Film",
    title: "Period Drama Feature Film",
    synopsis: "Prominent supporting antagonist role with classical dialect requirements and action blocking.",
    location: "Tamil Nadu locations",
    compensation: "Feature Contract + Representation",
    shootDates: "February 2027",
  },
];
