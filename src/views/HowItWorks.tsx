import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import MatchingSteps from "@/components/how-it-works/MatchingSteps";
import AfterIntroduction from "@/components/how-it-works/AfterIntroduction";
import SupportFeatures from "@/components/how-it-works/SupportFeatures";
import PricingSection from "@/components/how-it-works/PricingSection";
import JourneyTimeline from "@/components/how-it-works/JourneyTimeline";
import ReassuranceSection from "@/components/how-it-works/ReassuranceSection";
import FinalCTA from "@/components/how-it-works/FinalCTA";

const HowItWorks = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />
    <HowItWorksHero />
    <MatchingSteps />
    <AfterIntroduction />
    <SupportFeatures />
    <PricingSection />
    <JourneyTimeline />
    <ReassuranceSection />
    <FinalCTA />
    <SiteFooter />
  </div>
);

export default HowItWorks;
