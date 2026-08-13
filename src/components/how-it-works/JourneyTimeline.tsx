import { journeyStages } from "@/data/howItWorks";
import { FadeInSection, SectionEyebrow } from "./shared";

const JourneyTimeline = () => (
  <section className="py-28 md:py-36">
    <div className="container max-w-6xl">
      <FadeInSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow centered>Your Journey</SectionEyebrow>
          <h2 className="font-serif text-3xl md:text-4xl leading-[1.1]">
            A clear path from first enquiry to ongoing support.
          </h2>
        </div>
      </FadeInSection>

      {/* Desktop horizontal timeline */}
      <FadeInSection>
        <ol className="hidden lg:flex items-start justify-between gap-2" aria-label="Matching journey">
          {journeyStages.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === journeyStages.length - 1;
            return (
              <li key={stage.label} className="flex flex-1 items-start min-w-0">
                <div className="flex flex-col items-center text-center w-full relative">
                  {!isLast && (
                    <span
                      className="absolute top-6 left-[calc(50%+1.75rem)] right-0 h-px bg-border"
                      aria-hidden
                    />
                  )}
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-soft mb-4 relative z-10">
                    <Icon className="text-sage-deep" size={20} strokeWidth={1.5} aria-hidden />
                  </span>
                  <span className="text-sm font-medium text-foreground leading-snug px-1">{stage.label}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </FadeInSection>

      {/* Mobile / tablet vertical timeline */}
      <FadeInSection>
        <ol className="lg:hidden space-y-0 max-w-md mx-auto" aria-label="Matching journey">
          {journeyStages.map((stage, index) => {
            const Icon = stage.icon;
            const isLast = index === journeyStages.length - 1;
            return (
              <li key={stage.label} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card shadow-soft">
                    <Icon className="text-sage-deep" size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  {!isLast && <span className="w-px flex-1 min-h-[2rem] bg-border my-2" aria-hidden />}
                </div>
                <div className={isLast ? "pb-0 pt-2" : "pb-8 pt-2"}>
                  <span className="font-medium text-foreground">{stage.label}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </FadeInSection>
    </div>
  </section>
);

export default JourneyTimeline;
