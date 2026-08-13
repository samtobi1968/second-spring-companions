import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import { MATCHING_QUESTIONNAIRE_HREF } from "@/data/howItWorks";
import { SectionEyebrow } from "./shared";

const HowItWorksHero = () => (
  <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-sage">
    <div className="container max-w-4xl text-center animate-fade-up">
      <SectionEyebrow centered>How It Works</SectionEyebrow>
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground">
        Finding the right companion starts with the right match.
      </h1>
      <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto leading-relaxed">
        Tell us what you&apos;re looking for, and we&apos;ll use your preferences to introduce you to a
        companion from our network who could be a great fit.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="xl" variant="luxe">
          <a href={MATCHING_QUESTIONNAIRE_HREF}>
            Start Your Matching Questionnaire <ArrowRight size={18} className="ml-1" />
          </a>
        </Button>
        <Button asChild size="lg" variant="ghostLuxe">
          <Link href="#matching-process" className="inline-flex items-center gap-2">
            How Our Matching Works <ArrowDown size={16} aria-hidden />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default HowItWorksHero;
