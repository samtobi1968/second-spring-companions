import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { stepCardClass } from "./shared";

type MatchingStepCardProps = {
  step: number;
  icon: LucideIcon;
  title: string;
  text: string;
  highlight?: string;
  className?: string;
};

const MatchingStepCard = ({ step, icon: Icon, title, text, highlight, className }: MatchingStepCardProps) => (
  <article className={cn(stepCardClass, className)}>
    <div className="flex items-start justify-between mb-6">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-sage-deep font-serif text-xl text-sage-deep transition-colors duration-300 group-hover:bg-sage-deep group-hover:text-cream"
        aria-hidden
      >
        {step}
      </span>
      <Icon className="text-sage-deep shrink-0" size={28} strokeWidth={1.5} aria-hidden />
    </div>
    <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">{title}</h3>
    <p className="text-foreground/75 leading-relaxed flex-1">{text}</p>
    {highlight && (
      <p className="mt-5 inline-flex self-start rounded-full border border-gold/50 bg-gold-soft px-4 py-2.5 text-sm font-semibold text-foreground shadow-soft">
        {highlight}
      </p>
    )}
  </article>
);

export default MatchingStepCard;
