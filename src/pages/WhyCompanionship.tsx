import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { pillars } from "@/data/pillars";
import { ArrowRight } from "lucide-react";

const benefits = [
  { pillar: "Connection & Conversation", combat: "Reduces loneliness", note: "Daily, meaningful conversation has been shown to lower the risk of depression and dementia in older adults." },
  { pillar: "Hobbies & Games", combat: "Sustains cognitive sharpness", note: "Engaging in shared hobbies and games keeps the brain agile and gives life a rhythm of small, anticipated joys." },
  { pillar: "Everyday Support", combat: "Preserves independence", note: "Light home help means an older adult can remain in the home they love, with the dignity of routine intact." },
  { pillar: "Help with Tech", combat: "Keeps families close", note: "Confident video calls, photos and messages dissolve the distance between generations and reduce isolation." },
];

const WhyCompanionship = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />

    {/* HERO */}
    <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-sage">
      <div className="container max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="rule" />
          <span className="eyebrow text-foreground/60">The Case for Companionship</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
          Why <span className="italic text-sage-deep">companionship?</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
          The evidence is clear. Genuine human connection is one of the most powerful — and most
          overlooked — interventions for healthy ageing.
        </p>
      </div>
    </section>

    {/* STATS */}
    <section className="py-28 md:py-36">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">The Evidence</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            Loneliness is a public health issue. Companionship is the answer.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            { stat: "26%", src: "The Lancet", title: "Increased risk of dementia linked to chronic social isolation in adults over 65.", copy: "A peer-reviewed meta-analysis of 11,000 participants found social isolation is among the most significant modifiable risk factors for cognitive decline." },
            { stat: "1.4M", src: "Age UK, 2024", title: "Older adults in England are chronically lonely — a figure rising year on year.", copy: "Of those, Age UK estimates over 200,000 go a full week without speaking to anyone." },
            { stat: "£3", src: "Social Finance UK", title: "Saved in NHS and social care costs for every £1 invested in social connection.", copy: "Structured companionship reduces GP visits, A&E admissions and care home transitions." },
          ].map((e) => (
            <div key={e.src} className="bg-background p-10">
              <div className="font-serif text-6xl text-sage-deep mb-2">{e.stat}</div>
              <div className="eyebrow text-foreground/50 mb-6">{e.src}</div>
              <h3 className="font-serif text-xl mb-4 leading-snug">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PILLARS COMBAT ISOLATION */}
    <section className="py-28 md:py-36 bg-cream-deep">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">Our Approach</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
            How our four pillars combat isolation and promote mental sharpness.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p, i) => {
            const b = benefits[i];
            return (
              <div key={p.number} className="bg-card p-10 border border-border shadow-soft">
                <div className="flex items-center gap-4 mb-6">
                  <p.icon size={28} className="text-sage-deep" />
                  <span className="eyebrow text-foreground/50">Pillar {p.number}</span>
                </div>
                <h3 className="font-serif text-2xl mb-2">{p.title}</h3>
                <div className="text-sage-deep font-serif italic text-lg mb-4">{b.combat}</div>
                <p className="text-foreground/70 leading-relaxed">{b.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary text-cream">
      <div className="container text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-6">Bring spring back into their step.</h2>
        <Button asChild size="xl" variant="sage">
          <a href="/#kindred-spirit">Start Your Personality Match <ArrowRight size={18} /></a>
        </Button>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default WhyCompanionship;
