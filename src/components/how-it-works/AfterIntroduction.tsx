import { afterMatchCards } from "@/data/howItWorks";
import { FadeInSection, SectionEyebrow } from "./shared";
import AfterIntroductionCard from "./AfterIntroductionCard";

const AfterIntroduction = () => (
  <section className="py-28 md:py-36 bg-cream-deep">
    <div className="container max-w-5xl">
      <FadeInSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow centered>After the Match</SectionEyebrow>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            The introduction is just the beginning.
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Finding the right companion is important, but so is making sure the relationship continues
            to work well. That&apos;s why we remain available after the introduction.
          </p>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            Your companion provides companionship directly to you, while Second Spring Companions
            provides ongoing support to help keep the arrangement running smoothly.
          </p>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {afterMatchCards.map((card, index) => (
          <FadeInSection key={card.title} delay={index * 100}>
            <AfterIntroductionCard {...card} />
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default AfterIntroduction;
