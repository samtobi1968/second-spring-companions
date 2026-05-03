import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { pillars } from "@/data/pillars";
import { ArrowRight, Home, Hospital, HeartHandshake, AlertCircle } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-sage">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">Our Services</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            <span className="italic text-sage-deep">Springer Companionship</span>, considered in four pillars.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            Every Springer visit is shaped around what genuinely matters to your loved one,
            conversation, passions, comfort and connection.
          </p>
        </div>
      </section>

      {/* THE FOUR PILLARS */}
      <section id="pillars" className="py-28 md:py-36">
        <div className="container space-y-24">
          {pillars.map((p, i) => (
            <div
              key={p.number}
              className={`grid lg:grid-cols-12 gap-12 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5">
                <div className="font-serif text-7xl md:text-8xl text-sage-deep mb-4">{p.number}</div>
                <p.icon size={36} className="text-sage-deep" />
              </div>
              <div className="lg:col-span-7">
                <div className="eyebrow text-foreground/55 mb-3">{p.subtitle}</div>
                <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">{p.title}</h2>
                <p className="text-sage-deep font-serif italic text-xl mb-6">{p.hook}</p>
                <div className="space-y-4 text-foreground/75 leading-relaxed">
                  {p.description.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOMECOMING SERVICE */}
      <section id="homecoming" className="py-28 md:py-36 bg-cream-deep">
        <div className="container max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="rule" />
              <span className="eyebrow text-foreground/60">A Distinct Service</span>
              <div className="rule" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6">
              The Homecoming Service
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed">
              A specialised offering for the days surrounding a hospital discharge. Calm,
              attentive, social support, designed to make returning home feel safe and gentle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border mb-10">
            {[
              { icon: Home, t: "Home Preparation", c: "We ready the home before discharge, with fresh bedding, a stocked fridge, the heating on, post collected, and the lamp in the reading chair switched on." },
              { icon: Hospital, t: "Hospital to Home Accompaniment", c: "A friendly, familiar Springer collects your loved one from hospital, accompanies them home, and stays as long as needed to settle in." },
              { icon: HeartHandshake, t: "Settling In Support", c: "Daily visits in the first week back, with meals, conversation, gentle errands, family updates and reassurance during the most fragile days of recovery." },
            ].map((b) => (
              <div key={b.t} className="bg-background p-10">
                <b.icon className="text-sage-deep mb-6" size={28} />
                <h3 className="font-serif text-2xl mb-3">{b.t}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{b.c}</p>
              </div>
            ))}
          </div>

          <div className="border-l-4 border-sage-deep bg-cream p-6 md:p-8 flex gap-4 items-start">
            <AlertCircle className="text-sage-deep mt-1 shrink-0" size={22} />
            <p className="text-foreground/80 leading-relaxed">
              <strong>Please note:</strong> Second Spring is an introductory
              agency. Our Springers provide companionship and lifestyle support; we do not provide
              regulated personal care.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 md:py-36">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="rule" />
              <span className="eyebrow text-foreground/60">Investment</span>
              <div className="rule" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
              Transparent, considered pricing.
            </h2>
          </div>
          <PricingCard />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 bg-primary text-cream">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">Ready to find their kindred spirit?</h2>
          <Button asChild size="xl" variant="sage">
            <a href="/#kindred-spirit">Start Your Personality Match <ArrowRight size={18} /></a>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Services;
