# ShineWoods — Next.js Cinema Casting & Talent Platform

Recreation and redesign of the **ShineWoods** platform inspired by [https://shinewoods.vercel.app/#motion](https://shinewoods.vercel.app/#motion) and the original `ShineWoods-Homepage-Design` pack.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Architecture Overview

```
src/
├── app/
│   ├── layout.tsx         # Playfair Display & Plus Jakarta Sans typography
│   ├── page.tsx           # Orchestrates all 11 sections + Step Intake Wizard
│   ├── globals.css        # ShineWoods design tokens & vintage camera spinning reel animations
│   ├── loading.tsx        # Next.js App Router loading state
│   ├── error.tsx          # Error boundary with recovery actions
│   └── not-found.tsx      # Custom 404 cutting room page
├── components/
│   ├── common/
│   │   ├── SectionContainer.tsx # Reusable section wrapper with gutters
│   │   └── SectionHeading.tsx   # Reusable editorial serif section heading
│   ├── ui/
│   │   └── PrimaryButton.tsx    # Primary & Secondary action buttons
│   ├── navigation/
│   │   ├── Header.tsx           # Cinema camera SVG + spinning reels + navigation
│   │   └── MobileNavigation.tsx # Full-screen "Feature Presentation" overlay
│   ├── sections/
│   │   ├── HeroSection/         # Cover video (cover.mp4), posters & Ken Burns
│   │   ├── TalentSection/       # Faces for the role (Shravan, Govardhan, Kumaran, etc.)
│   │   ├── StarsSection/        # Cinema artists on our roster (Shaam, Abhirami, etc.)
│   │   ├── AboutSection/        # Built on cinema credit (30+ years, Manojkrishna)
│   │   ├── MotionSection/       # In Motion Showreels (#motion) with video modal player
│   │   ├── EditorialSection/    # Cinema & fashion journal (Issue 04 feature essays)
│   │   ├── CastingSection/      # Casting Director's Desk & Open Castings (Hotstar series)
│   │   ├── EventsSection/       # On the industry calendar (screenings & workshops)
│   │   ├── AudienceSection/     # Dual audience cards (Casting Directors & Performers)
│   │   └── NewsletterSection/   # The Dispatch newsletter subscription
│   ├── motion/
│   │   ├── MotionSection.tsx    # Core #motion showreel player & category filters
│   │   └── VideoModal.tsx       # Cinema video modal with director credits
│   └── stepper/
│       ├── StepperWizard.tsx          # 4-stage talent intake wizard controller
│       ├── StepProgress.tsx           # Editorial step progress bar (01 You, 02 Profile...)
│       ├── StepOverview.tsx           # 3-stage intake protocol (Submit, Review, Decision)
│       ├── Step1Identity.tsx          # Role pills (Actor, Model, VO, Technician) & name
│       ├── Step2Profile.tsx           # Playing age sliders, height, languages, skills
│       ├── Step3MotionMedia.tsx       # Showreel preview player, monologues, headshots
│       ├── Step4Review.tsx            # Live luxury casting card preview & representation
│       └── SubmissionSuccessModal.tsx # Generated Casting ID (SW-2026-XXXX) & slip download
└── data/
    ├── navigation.ts
    ├── talent.ts
    ├── stars.ts
    ├── showreels.ts
    ├── editorial.ts
    ├── events.ts
    └── castings.ts
```

---

## Key Features

1. **Editorial Luxury Cinema Aesthetic**:
   - Palette: Deep Ink (`#0d0d0c`), Warm Paper (`#f8f7f4`), Paper-2 (`#f2efe8`), Champagne Gold (`#c8a261`).
   - Typography: High-contrast Playfair Display serif paired with Plus Jakarta Sans and letter-spaced micro-caps (`tracking-[0.2em] font-mono`).
   - Vintage Cinema Camera: SVG camera with synchronized rotating film reels.

2. **In Motion Showreel Section (`#motion`)**:
   - Recreates the exact `#motion` showcase from the live reference.
   - Interactive category filters: `All`, `Film`, `Commercial`, `Screen Test`, `Fashion`, `Action`.
   - Full cinema video modal player with pause-on-switch mechanics, duration badges, and director credits.

3. **Multi-Step Talent Intake Wizard (`#stepper`)**:
   - 2-column layout matching `/apply`.
   - Step 1: Identity & Category pills (`Actor`, `Model`, `Voice Artist`, `Technician`).
   - Step 2: Physical & Artistic Profile (dual age slider, height cm, multi-language toggles, skills).
   - Step 3: Motion & Media (video preview player simulator, sample headshots, bio).
   - Step 4: Live Casting Card Preview (how casting directors view the candidate) + Representation agreement.
   - Confirmation: Unique generated dossier ID (`SW-2026-XXXX`) and downloadable text intake summary slip.
   - Local draft autosave & 1-click **"Auto-Fill Sample Talent"** test helper.

4. **All 11 Sections Implemented**:
   - Hero cover with real `/media/cover/cover.mp4` & poster fallbacks.
   - Talent Directory ("Faces for the role").
   - Stars We Shine With ("Cinema artists on our roster").
   - About ShineWoods / Credentials (30+ years, 500+ projects cast).
   - In Motion showreel showcase.
   - Cinema & fashion journal (Issue 04).
   - Casting Director's Desk & Open Castings.
   - On the industry calendar (Events).
   - Dual audience gateway (Casting Directors vs Performers).
   - The Dispatch newsletter intake with live feedback.
   - Cinema house footer with legal information and back-to-top.

---

## Running Locally

```bash
# Start Next.js development server
npm run dev

# Run production build
npm run build
```
The site runs locally on `http://localhost:3000`.
