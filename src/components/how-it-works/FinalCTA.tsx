import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MATCHING_QUESTIONNAIRE_HREF } from "@/data/howItWorks";

const FinalCTA = () => (
  <section className="py-28 md:py-36 bg-primary text-cream">
    <div className="container max-w-3xl text-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Ready to find your match?</h2>
      <p className="text-lg text-cream/85 leading-relaxed mb-10">
        Tell us a little about yourself and what you&apos;re looking for. We&apos;ll take care of the
        rest.
      </p>
      <Button asChild size="xl" variant="sage">
        <a href={MATCHING_QUESTIONNAIRE_HREF}>
          Start Your Matching Questionnaire <ArrowRight size={18} />
        </a>
      </Button>
      <p className="mt-8">
        <Link
          href="/contact"
          className="text-sm text-cream/70 hover:text-cream underline-offset-4 hover:underline transition-colors"
        >
          Have a question? Get in touch
        </Link>
      </p>
    </div>
  </section>
);

export default FinalCTA;
