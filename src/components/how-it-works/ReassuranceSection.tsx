import { FadeInSection, SectionEyebrow } from "./shared";

const ReassuranceSection = () => (
  <section className="py-28 md:py-36 bg-cream-deep">
    <div className="container max-w-3xl text-center">
      <FadeInSection>
        <SectionEyebrow centered>Take Your Time</SectionEyebrow>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
          Take your time. Finding the right match matters.
        </h2>
        <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
          We don&apos;t believe companionship should feel rushed. That&apos;s why we give you the
          opportunity to meet your potential companion over video and experience a free trial before
          your regular arrangement begins.
        </p>
        <p className="mt-6 text-foreground/70 leading-relaxed">
          If the first introduction isn&apos;t right, we&apos;ll work with you to find a better fit.
        </p>
      </FadeInSection>
    </div>
  </section>
);

export default ReassuranceSection;
