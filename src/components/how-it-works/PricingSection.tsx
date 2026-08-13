import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MATCHING_QUESTIONNAIRE_HREF, pricingTiers } from "@/data/howItWorks";
import { FadeInSection, SectionEyebrow, stepCardClass } from "./shared";

const PricingSection = () => (
  <section id="pricing" className="py-28 md:py-36 bg-cream-deep scroll-mt-24">
    <div className="container max-w-5xl">
      <FadeInSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow centered>Pricing</SectionEyebrow>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Simple, transparent pricing.
          </h2>
        </div>
      </FadeInSection>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {pricingTiers.map((tier, index) => (
          <FadeInSection key={tier.title} delay={index * 100}>
            <article className={`${stepCardClass} relative`}>
              <div className="mb-6 pb-6 border-b border-border">
                <p className="font-serif text-5xl md:text-6xl text-primary tracking-tight">
                  {tier.price}
                  {tier.period && (
                    <span className="text-2xl md:text-3xl text-muted-foreground font-normal">
                      {tier.period}
                    </span>
                  )}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl mt-3">{tier.title}</h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{tier.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground/80">
                    <Check className="text-sage-deep mt-0.5 shrink-0" size={18} aria-hidden />
                    <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              {tier.note && (
                <p className="text-xs md:text-sm text-foreground/60 leading-relaxed mb-6 border-l-2 border-sage-deep/40 pl-4">
                  {tier.note}
                </p>
              )}
              {tier.cta && (
                <Button asChild variant="luxe" size="lg" className="w-full sm:w-auto">
                  <a href={MATCHING_QUESTIONNAIRE_HREF}>{tier.cta}</a>
                </Button>
              )}
            </article>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
