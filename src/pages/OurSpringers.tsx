import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { MessagesSquare, ShieldCheck, UserCheck, ArrowRight } from "lucide-react";
import portrait from "@/assets/springer-portrait.jpg";

const OurSpringers = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />

    {/* HERO */}
    <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-sage">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-6">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">Our Springers</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Meet our <span className="italic text-sage-deep">Springers.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            Carefully chosen companions — selected for warmth, intellect and the rare gift of
            making conversation feel effortless.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img
            src={portrait}
            alt="A thoughtful Springer companion"
            className="w-full aspect-[4/5] object-cover shadow-elegant"
          />
        </div>
      </div>
    </section>

    {/* WHAT IS A SPRINGER */}
    <section className="py-28 md:py-36">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="rule" />
          <span className="eyebrow text-foreground/60">The Philosophy</span>
        </div>
        <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-10">
          What is a Springer?
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          Our Springers are companions who embody our philosophy that life in later years should
          be a season of renewal. Coming from a range of backgrounds — from students to
          professionals — they bring something unique you can relate to and learn from, ensuring
          you feel revitalised.
        </p>
      </div>
    </section>

    {/* VETTING */}
    <section className="py-28 md:py-36 bg-primary text-cream">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-cream/40" />
            <span className="eyebrow text-cream/60">Our Vetting Process</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-cream mb-6">
            Springers aren't just staff. They are chosen.
          </h2>
          <p className="text-cream/80 leading-relaxed text-lg">
            We select them based on conversational skills, interests and emotional intelligence.
            Every Springer undergoes an enhanced DBS check and rigorous face-to-face interviews
            before any visits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-cream/10 border border-cream/15">
          {[
            { icon: MessagesSquare, t: "Conversational Selection", c: "We interview every applicant in person to assess warmth, intellect, and the ease with which they hold a meaningful conversation." },
            { icon: ShieldCheck, t: "Enhanced DBS Check", c: "Every Springer holds a current enhanced DBS certificate and provides two professional references which we verify directly." },
            { icon: UserCheck, t: "Founder Interview", c: "No Springer joins our registry without meeting our founders face-to-face. We make every selection personally." },
          ].map((b) => (
            <div key={b.t} className="bg-primary p-10">
              <b.icon className="text-sage-soft mb-6" size={28} />
              <h3 className="font-serif text-2xl mb-3 text-cream">{b.t}</h3>
              <p className="text-cream/70 text-sm leading-relaxed">{b.c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTAs */}
    <section className="py-28 bg-cream-deep">
      <div className="container grid md:grid-cols-2 gap-8">
        <div className="bg-card p-12 shadow-soft">
          <h3 className="font-serif text-3xl mb-4">For Families</h3>
          <p className="text-foreground/70 mb-8 leading-relaxed">
            Begin our bespoke matching process and meet the Springer who will bring a genuine
            spring back into your loved one's step.
          </p>
          <Button asChild size="lg" variant="luxe">
            <a href="/#kindred-spirit">Find Your Match <ArrowRight size={16} /></a>
          </Button>
        </div>
        <div className="bg-primary text-cream p-12 shadow-elegant">
          <h3 className="font-serif text-3xl mb-4 text-cream">Could You Be a Springer?</h3>
          <p className="text-cream/80 mb-8 leading-relaxed">
            We are always looking for warm, intellectually curious people to join our boutique
            registry.
          </p>
          <Button asChild size="lg" variant="sage">
            <a href="/become-a-springer">Apply to Join <ArrowRight size={16} /></a>
          </Button>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default OurSpringers;
