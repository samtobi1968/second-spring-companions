import { supportFeatures } from "@/data/howItWorks";
import { FadeInSection, SectionEyebrow, stepCardClass } from "./shared";

const SupportFeatures = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-5xl">
      <FadeInSection>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionEyebrow centered>Your Ongoing Support</SectionEyebrow>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            We&apos;re here after the introduction.
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Once you&apos;ve found your companion, our role doesn&apos;t disappear. Our monthly support
            service gives you someone to turn to if you need help.
          </p>
        </div>
      </FadeInSection>

      <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
        {supportFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <FadeInSection key={feature.title} delay={index * 70}>
              <article className={stepCardClass}>
                <Icon className="text-sage-deep mb-5" size={26} strokeWidth={1.5} aria-hidden />
                <h3 className="font-serif text-xl md:text-2xl mb-3">{feature.title}</h3>
                <p className="text-foreground/75 leading-relaxed text-sm md:text-base">{feature.text}</p>
              </article>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default SupportFeatures;
