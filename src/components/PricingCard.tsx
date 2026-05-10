import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "2-hour minimum visit",
  "Enhanced DBS vetting",
  "Bespoke personality matching",
  "Consistent connection (no rotating staff)",
  "No rotations. Your Springer, every time",
];

const PricingCard = () => (
  <div className="relative max-w-2xl mx-auto bg-card border border-border shadow-elegant p-10 md:p-14">
    <div className="flex items-center gap-3 mb-6">
      <Sparkles className="text-sage-deep" size={20} />
      <span className="eyebrow text-foreground/55">Pricing & Investment</span>
    </div>
    <h3 className="font-serif text-3xl md:text-4xl mb-2">Standard Springer Visit</h3>
    <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-border">
      <span className="font-serif text-5xl text-primary sm:text-6xl tracking-tight">£26.80</span>
      <span className="text-muted-foreground">per hour</span>
    </div>
    <ul className="space-y-4 mb-10">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-foreground/80">
          <Check className="text-sage-deep mt-1 shrink-0" size={18} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <Button asChild variant="luxe" size="lg" className="w-full sm:w-auto">
      <a href="/#kindred-spirit">Start Your Personality Match</a>
    </Button>
    <p className="text-sm text-foreground/50 text-center mt-6">
      We believe genuine connection cannot be rushed. Our two-hour minimum ensures every visit is
      relaxed, meaningful, and entirely tailored to you.
    </p>
  </div>
);

export default PricingCard;
