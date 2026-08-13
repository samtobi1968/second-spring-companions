import { matchingSteps } from "@/data/howItWorks";
import { FadeInSection, SectionEyebrow } from "./shared";
import MatchingStepCard from "./MatchingStepCard";

const MatchingSteps = () => (
  <section id="matching-process" className="py-28 md:py-36 scroll-mt-24">
    <div className="container max-w-5xl">
      <FadeInSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow centered>The Matching Process</SectionEyebrow>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            From questionnaire to companionship, step by step.
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            We privately match you with a suitable companion from our network. You do not browse or
            select from public profiles.
          </p>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {matchingSteps.map((item, index) => (
          <FadeInSection key={item.step} delay={index * 80}>
            <MatchingStepCard {...item} />
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default MatchingSteps;
