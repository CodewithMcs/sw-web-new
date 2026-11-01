import HeroSection from "@/components/sections/HeroSection/HeroSection";
import TalentSection from "@/components/sections/TalentSection/TalentSection";
import StarsSection from "@/components/sections/StarsSection/StarsSection";
import AboutSection from "@/components/sections/AboutSection/AboutSection";
import MotionSection from "@/components/sections/MotionSection/MotionSection";
import EditorialSection from "@/components/sections/EditorialSection/EditorialSection";
import CastingSection from "@/components/sections/CastingSection/CastingSection";
import EventsSection from "@/components/sections/EventsSection/EventsSection";
import AudienceSection from "@/components/sections/AudienceSection/AudienceSection";
import NewsletterSection from "@/components/sections/NewsletterSection/NewsletterSection";
import StepperWizard from "@/components/stepper/StepperWizard";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      {/* 1. Feature Presentation & Video Cover */}
      <HeroSection />

      {/* 2. Interactive Multi-Step Application Wizard */}
      <StepperWizard />

      {/* 3. Faces for the Role / Talent Directory */}
      <TalentSection />

      {/* 4. Stars We Shine With */}
      <StarsSection />

      {/* 5. Credentials & Heritage (About ShineWoods) */}
      <AboutSection />

      {/* 6. In Motion / The Showreel Section */}
      <MotionSection />

      {/* 7. Cinema & Fashion Journal (Editorial) */}
      <EditorialSection />

      {/* 8. Casting Director's Desk & Open Castings */}
      <CastingSection />

      {/* 9. On the Industry Calendar (Events) */}
      <EventsSection />

      {/* 10. Audience Split: For Casting Directors & For Performers */}
      <AudienceSection />

      {/* 11. The Dispatch Newsletter */}
      <NewsletterSection />
    </main>
  );
}
