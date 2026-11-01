export interface EditorialArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  titleEm?: string;
  lead: string;
  date: string;
  readTimeMin: number;
  featured?: boolean;
  image: {
    src: string;
    alt: string;
    aspectRatio: string;
    focalPosition: string;
  };
  issueNumber: string;
  content: string[];
  quote?: string;
}

export interface EditorialIssue {
  id: string;
  issueNumber: string;
  title: string;
  subtitle: string;
  date: string;
  image: {
    src: string;
    alt: string;
  };
}

export const EDITORIAL_ISSUES: EditorialIssue[] = [
  {
    id: "e-002",
    issueNumber: "Issue 002",
    title: "Modern Icons",
    subtitle: "Specific, local and unmistakably themselves.",
    date: "1 October 2026",
    image: {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&crop=faces,center&ar=3:4",
      alt: "Inês Duarte, model, blue-lit portrait"
    }
  },
  {
    id: "e-001",
    issueNumber: "Issue 001",
    title: "The New Face",
    subtitle: "Discovery, stillness and the first frame.",
    date: "10 September 2026",
    image: {
      src: "/talent/shravan/hero.jpg",
      alt: "Shravan, actor and model, portrait"
    }
  }
];

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: "a-bts",
    slug: "inside-the-casting-room",
    category: "Behind the Scene",
    title: "Inside the",
    titleEm: "Casting Room",
    lead: "How casting directors actually watch a self-tape — and the three mistakes 90% of performers make before the 10-second mark.",
    date: "7 October 2026",
    readTimeMin: 5,
    featured: true,
    issueNumber: "002",
    image: {
      src: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?fit=crop&crop=faces,center&ar=16:9",
      alt: "Empty red cinema seats",
      aspectRatio: "16/10",
      focalPosition: "50% 35%"
    },
    quote: "The camera is never looking for perfection. It is searching for honesty.",
    content: [
      "In a darkened screening suite off Cathedral Road, four monitors glow simultaneously. A casting director watches four self-tapes side by side, sound muted on three, listening intently to the rhythm of breathing in the fourth.",
      "Most actors assume casting is a test of memorisation. In truth, casting directors make an emotional decision within seven seconds. The stillness in the eyes, the weight of pause between sentences, the unforced posture — that is what registers before any spoken line.",
      "The first mistake: rushing to show intensity. The screen amplifies everything four-fold; subtle composure almost always outplays theatrical projection.",
      "The second mistake: failing to ground the character in physical space. When you inhabit your environment with sensory certainty, the viewer immediately forgets they are watching a recorded submission."
    ]
  },
  {
    id: "a-rising",
    slug: "five-faces-for-the-season",
    category: "Rising",
    title: "Five Faces",
    titleEm: "for the Season",
    lead: "The new faces we're watching, from Dubai to Manchester and across South Indian cinema.",
    date: "5 October 2026",
    readTimeMin: 3,
    issueNumber: "002",
    image: {
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?fit=crop&crop=faces,center&ar=3:4",
      alt: "Noor Haddad, new face, against a pink wall",
      aspectRatio: "4/5",
      focalPosition: "50% 32%"
    },
    quote: "A fresh face brings not just novelty, but an untouched vocabulary of emotion.",
    content: [
      "Cinema is cyclical. Every decade, storytelling demands a departure from habitual expressions and welcomes an unvarnished generation of screen performers.",
      "From Bengaluru's emerging independent cinema circuits to cross-continental editorial shoots in Dubai, these five performers balance contemporary stillness with classical discipline.",
      "They represent an era where language barriers are fluid, and regional identity is celebrated as a unique cinematic signature."
    ]
  },
  {
    id: "a-interview",
    slug: "kofi-mensah-on-stillness",
    category: "The Interview",
    title: "On",
    titleEm: "Stillness",
    lead: "Kofi Mensah on classical theatre, long takes and the discipline of doing less.",
    date: "3 October 2026",
    readTimeMin: 7,
    issueNumber: "002",
    image: {
      src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?fit=crop&crop=faces,center&ar=3:4",
      alt: "Kofi Mensah, actor, in a black roll-neck",
      aspectRatio: "4/5",
      focalPosition: "50% 30%"
    },
    quote: "If you don't believe your own silence, no dialogue will save you.",
    content: [
      "Trained on the West End stages before transitioning to international arthouse cinema, Kofi Mensah speaks of screen presence as a sculpture carved out of restraint.",
      "'On stage, your energy must reach the back row of the gallery,' he notes. 'In front of a cinema anamorphic prime lens, a flicker of the eyelid is an earthquake.'",
      "In this comprehensive interview, he details the physical disciplines that allow an actor to hold the center of a two-minute uninterrupted take without speaking a single syllable."
    ]
  },
  {
    id: "a-edit",
    slug: "modern-icons",
    category: "The Edit",
    title: "Modern",
    titleEm: "Icons",
    lead: "Style. Substance. The next wave of global talent redefining cinematic beauty standards.",
    date: "1 October 2026",
    readTimeMin: 4,
    issueNumber: "002",
    image: {
      src: "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?fit=crop&crop=faces,center&ar=3:2",
      alt: "Close portrait in a dark hood",
      aspectRatio: "4/5",
      focalPosition: "50% 40%"
    },
    quote: "True iconography is not about symmetry, but distinct character.",
    content: [
      "What turns an actor into an icon? It is rarely perfection. More often, it is an asymmetry, an unconventional gaze, or a distinct rhythm that refuses to blend into the commercial mainstream.",
      "Here, we examine modern portraiture and editorial styling that highlight individuality over standard beauty archetypes."
    ]
  },
  {
    id: "a-frame",
    slug: "light-as-language",
    category: "Frame",
    title: "Light as",
    titleEm: "Language",
    lead: "A photographer's notes on shooting faces for film and fashion under single-source chiaroscuro.",
    date: "22 September 2026",
    readTimeMin: 4,
    issueNumber: "001",
    image: {
      src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?fit=crop&crop=faces,center&ar=4:5",
      alt: "Profile portrait in violet light",
      aspectRatio: "4/5",
      focalPosition: "50% 35%"
    },
    quote: "Shadow does not obscure character; it defines it.",
    content: [
      "Lighting an actor's face is an act of storytelling. The placement of a single key light reveals bone structure, vulnerability, or moral ambiguity.",
      "In this photo essay, cinema lighting technicians and photographers reflect on the craft of sculptural lighting in low-key cinematography."
    ]
  },
  {
    id: "a-onset",
    slug: "twelve-hours-on-a-night-shoot",
    category: "On Set",
    title: "Twelve Hours",
    titleEm: "After Dark",
    lead: "What really happens between call time and wrap on an independent night shoot in Chennai.",
    date: "18 September 2026",
    readTimeMin: 6,
    issueNumber: "001",
    image: {
      src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?fit=crop&crop=faces,center&ar=16:9",
      alt: "Projector beam in a dark room",
      aspectRatio: "4/5",
      focalPosition: "50% 35%"
    },
    quote: "At 3 AM, film sets run on caffeine, adrenaline, and absolute faith.",
    content: [
      "6:00 PM: Call time. Rain machines are calibrated in an abandoned industrial yard off Old Mahabalipuram Road.",
      "As midnight approaches, the rhythm shifts from chaotic setup to electric concentration. An entire crew moves in silent synchronization to capture the single high-emotion climax before dawn."
    ]
  },
  {
    id: "a-shravan",
    slug: "shravan-the-quiet-intensity",
    category: "The New Face",
    title: "Talent",
    titleEm: "in Focus",
    lead: "Shravan on stillness, Bengaluru, and learning to let the camera come to him.",
    date: "12 September 2026",
    readTimeMin: 5,
    issueNumber: "001",
    image: {
      src: "/talent/shravan/hero.jpg",
      alt: "Shravan, actor and model, portrait",
      aspectRatio: "4/5",
      focalPosition: "50% 28%"
    },
    quote: "The camera can hear what you're thinking even when your mouth is closed.",
    content: [
      "Shravan sits with effortless posture, his voice low and deliberate. Having trained across theatre workshops and martial arts, he treats acting as a state of relaxed awareness.",
      "'Early on, you want to prove that you can act,' he smiles. 'Later, you realize the best thing you can do is simply exist in character and let the camera discover you.'"
    ]
  }
];
