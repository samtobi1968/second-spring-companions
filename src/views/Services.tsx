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
                <p className="mt-6 text-sm text-foreground/50">
                  Uniquely unhurried visits from £26.80 / hr · 2-hour minimum
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-foreground/75">
                  {p.featureBullets.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <span className="text-sage-deep shrink-0" aria-hidden>
                        ✓
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
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
              <span className="eyebrow text-foreground/60">When It Matters Most</span>
              <div className="rule" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-6">
              The Homecoming Service
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed">
              The NHS handles the clinical handover. We handle everything else. The first 72 hours
              at home after a hospital stay are the hardest — not medically, but practically and
              emotionally. A Springer bridges that gap with calm, capable, unhurried presence.
            </p>
          </div>

          <div className="border border-border bg-border">
            <div className="grid md:grid-cols-3 gap-px">
              {[
                {
                  icon: Home,
                  timing: "Before Discharge",
                  t: "Home Preparation",
                  c: "We ready the home before discharge, with fresh bedding, a stocked fridge, the heating on, post collected, and the lamp in the reading chair switched on.",
                  bullets: [
                    "Clear pathways and remove trip hazards",
                    "Fresh bedding and bedroom preparation",
                    "Fridge stocked with light easy foods",
                    "Pharmacy collection if prescription is ready",
                    "Post collected surfaces tidied",
                    "Heating on lamps on home ready",
                  ],
                },
                {
                  icon: Hospital,
                  timing: "Discharge Day",
                  t: "Hospital to Home",
                  c: "A friendly, familiar Springer collects your loved one from hospital, accompanies them home, and stays as long as needed to settle in.",
                  bullets: [
                    "Ward or discharge reception meet",
                    "Calm company during the wait",
                    "Accompaniment home via pre-booked car",
                    "Settled in with a hot drink and meal",
                    "Two to three hours of settling support",
                    "Family update message on arrival",
                  ],
                },
                {
                  icon: HeartHandshake,
                  timing: "Days One to Seven",
                  t: "Settling In",
                  c: "Daily visits in the first week back, with meals, conversation, gentle errands, family updates and reassurance during the most fragile days of recovery.",
                  bullets: [
                    "Daily 2-hour visits for the first seven days",
                    "Hot meal preparation and shared mealtimes",
                    "Encouragement of fluids and light nutrition",
                    "Light tidying laundry and errands",
                    "Prescription collection once issued",
                    "First short walk outside when ready",
                    "Daily family update after each visit",
                  ],
                },
              ].map((b) => (
                <div key={b.t} className="bg-background p-10">
                  <b.icon className="text-sage-deep mb-6" size={28} />
                  <div className="eyebrow text-sage-deep mb-2">{b.timing}</div>
                  <h3 className="font-serif text-2xl mb-3">{b.t}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">{b.c}</p>
                  <ul className="space-y-2.5 text-sm text-foreground/75 leading-relaxed">
                    {b.bullets.map((line) => (
                      <li key={line} className="flex gap-2.5">
                        <span className="text-sage-deep shrink-0" aria-hidden>
                          ✓
                        </span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-px border-t border-border">
              <div className="bg-background p-8 md:p-10 text-center">
                <p className="font-serif text-4xl md:text-5xl tracking-tight text-primary mb-2">£50–£80</p>
                <p className="text-sm text-foreground/70 leading-relaxed">Home preparation visit</p>
              </div>
              <div className="bg-background p-8 md:p-10 text-center">
                <p className="font-serif text-4xl md:text-5xl tracking-tight text-primary mb-2">£95–£140</p>
                <p className="text-sm text-foreground/70 leading-relaxed">Hospital to home accompaniment</p>
              </div>
              <div className="bg-background p-8 md:p-10 text-center">
                <p className="font-serif text-4xl md:text-5xl tracking-tight text-primary mb-2">From £395</p>
                <p className="text-sm text-foreground/70 leading-relaxed">Full first-week Homecoming package</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-foreground/65 mt-6 mb-14 max-w-2xl mx-auto leading-relaxed">
            Homecoming can often be arranged at short notice. Contact us directly for urgent requests.
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-10">
            <div>
              <div className="eyebrow text-sage-deep mb-4">Within our service</div>
              <ul className="space-y-2.5 text-sm text-foreground/75 leading-relaxed">
                {[
                  "Practical home preparation and errands",
                  "Meal preparation and shared mealtimes",
                  "Calm company and conversation",
                  "Pharmacy collection",
                  "Light household tasks and tidying",
                  "Family updates after every visit",
                  "Accompaniment on first walks outside",
                ].map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span className="text-sage-deep shrink-0" aria-hidden>
                      ✓
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow text-foreground/50 mb-4">Outside our service</div>
              <ul className="space-y-2.5 text-sm text-foreground/70 leading-relaxed">
                {[
                  "Administering medication",
                  "Bathing dressing or personal care",
                  "Wound care or dressing changes",
                  "Manual handling or mobility assistance",
                  "Clinical decisions of any kind",
                  "Driving clients in a Springer's vehicle",
                ].map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span className="text-foreground/45 shrink-0" aria-hidden>
                      ✕
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="border-t border-border pt-8 text-sm text-foreground/75 leading-relaxed text-center max-w-3xl mx-auto mb-12">
            If your loved one requires clinical or personal care support alongside companionship, we
            are happy to signpost you to appropriate regulated providers. Many families use both
            services in parallel.
          </p>

          <div className="border-l-4 border-sage-deep bg-cream p-6 md:p-8 flex gap-4 items-start">
            <AlertCircle className="text-sage-deep mt-1 shrink-0" size={22} />
            <p className="text-foreground/80 leading-relaxed">
              Second Spring Companions is an introductory agency. Our Springers provide
              companionship, practical and lifestyle support only. We are not a CQC-regulated
              provider and do not offer personal or clinical care. The Homecoming Service is designed
              to complement, not replace, any medical or care provision your loved one receives.
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
