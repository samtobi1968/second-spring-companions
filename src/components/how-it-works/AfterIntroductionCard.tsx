import type { LucideIcon } from "lucide-react";
import { goldCardClass } from "./shared";

type AfterIntroductionCardProps = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const AfterIntroductionCard = ({ icon: Icon, title, text }: AfterIntroductionCardProps) => (
  <article className={goldCardClass}>
    <Icon className="text-sage-deep mb-6" size={28} strokeWidth={1.5} aria-hidden />
    <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">{title}</h3>
    <p className="text-foreground/75 leading-relaxed">{text}</p>
  </article>
);

export default AfterIntroductionCard;
