import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { MessagesSquare, ShieldCheck, UserCheck, ArrowRight } from "lucide-react";

const OurSpringers = () => (
  <div className="min-h-screen bg-background">
    <SiteHeader />

    {/* PHILOSOPHY — page introduction */}
    <section className="border-b border-border/60 pb-16 pt-28 md:pb-20 md:pt-32 lg:pb-24 lg:pt-36">
      <div className="container max-w-3xl">
        <div className="mb-8 flex items-center justify-center gap-3 md:mb-10">
          <div className="rule max-sm:hidden" />
          <span className="eyebrow text-center text-foreground/60">Our Springers · The Philosophy</span>
          <div className="rule max-sm:hidden" />
        </div>
        <h1 className="font-serif text-balance text-center text-4xl leading-[1.06] tracking-tight text-foreground md:text-6xl lg:text-[3.5rem] lg:leading-[1.08]">
          What is a <span className="italic text-sage-deep">Springer?</span>
        </h1>
        <div className="mx-auto mt-10 max-w-2xl space-y-6 text-center text-lg leading-relaxed text-foreground/75 md:mt-12 md:text-xl">
          <p>
            A Springer is not a carer, a cleaner or a visitor. They are a presence — chosen specifically
            because something about them will resonate with your loved one. We look for people with
            intellectual curiosity, warmth, patience and the rare ability to make an hour feel like ten
            minutes.
          </p>
          <p>
            Our Springers come from a range of backgrounds — educators, creative professionals, people with
            decades of life experience who want to give something back. What unites them is not their CV but
            their character.
          </p>
          <p>
            Every Springer is introduced to you before any visit begins. If the connection does not feel
            right, we go back to the registry and find someone who does. No pressure, no obligation.
          </p>
        </div>
      </div>
    </section>

    {/* PLACEHOLDER PROFILE */}
    <section className="bg-cream-deep py-20">
      <div className="container">
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="rule" />
          <span className="eyebrow text-foreground/60">A Springer, in their own words</span>
          <div className="rule" />
        </div>
        <div className="mx-auto max-w-2xl border border-border bg-card p-10 shadow-soft">
          <p className="font-serif text-xl italic leading-relaxed text-foreground/80">
            I have always been drawn to people with stories to tell. My clients have lived through things I
            can only read about. Every visit teaches me something.
          </p>
          <p className="mt-6 text-sm text-foreground/50">— Springer, South London registry</p>
        </div>
      </div>
    </section>

    {/* VETTING */}
    <section className="bg-primary py-28 text-cream md:py-36">
      <div className="container">
        <div className="mb-16 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-10 bg-cream/40" />
            <span className="eyebrow text-cream/60">Our Vetting Process</span>
          </div>
          <h2 className="mb-6 font-serif text-4xl leading-[1.1] text-cream md:text-5xl">
            Springers aren&apos;t just staff. They are chosen.
          </h2>
          <p className="text-lg leading-relaxed text-cream/80">
            We select them based on conversational skills, interests and emotional intelligence. Every Springer
            undergoes an enhanced DBS check and rigorous face-to-face interviews before any visits.
          </p>
        </div>

        <div className="grid gap-px border border-cream/15 bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MessagesSquare,
              t: "Conversational Selection",
              c: "We interview every applicant in person to assess warmth, intellect, and the ease with which they hold a meaningful conversation.",
            },
            {
              icon: ShieldCheck,
              t: "Enhanced DBS Check",
              c: "Every Springer holds a current enhanced DBS certificate and provides two professional references which we verify directly.",
            },
            {
              icon: UserCheck,
              t: "Founder Interview",
              c: "No Springer joins our registry without meeting our founders face-to-face. We make every selection personally.",
            },
            {
              icon: ShieldCheck,
              t: "Public Liability Insurance",
              c: "Every Springer operating through Second Spring holds public liability insurance before their first visit begins. Your family's peace of mind is built into our process, not an afterthought.",
            },
          ].map((b) => (
            <div key={b.t} className="bg-primary p-10">
              <b.icon className="mb-6 text-sage-soft" size={28} />
              <h3 className="mb-3 font-serif text-2xl text-cream">{b.t}</h3>
              <p className="text-sm leading-relaxed text-cream/70">{b.c}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <span className="eyebrow text-cream/60">What we select for</span>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              "Intellectual curiosity",
              "Warmth and patience",
              "Conversational depth",
              "Emotional intelligence",
              "Reliability",
              "Genuine interest in older adults",
            ].map((label) => (
              <span
                key={label}
                className="rounded-full border border-cream/30 px-5 py-2 text-sm text-cream/80"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTAs */}
    <section className="bg-cream-deep py-28">
      <div className="container grid gap-8 md:grid-cols-2">
        <div className="bg-card p-12 shadow-soft">
          <h3 className="mb-4 font-serif text-3xl">For Families</h3>
          <p className="mb-8 leading-relaxed text-foreground/70">
            Begin our bespoke matching process and meet the Springer who will bring a genuine spring back into
            your loved one&apos;s step.
          </p>
          <Button asChild size="lg" variant="luxe">
            <a href="/#kindred-spirit">
              Find Your Match <ArrowRight size={16} />
            </a>
          </Button>
        </div>
        <div className="bg-primary p-12 text-cream shadow-elegant">
          <h3 className="mb-4 font-serif text-3xl text-cream">Could You Be a Springer?</h3>
          <p className="mb-8 leading-relaxed text-cream/80">
            We are always looking for warm, intellectually curious people to join our registry.
          </p>
          <Button asChild size="lg" variant="sage">
            <a href="/become-a-springer">
              Apply to Join <ArrowRight size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>

    <SiteFooter />
  </div>
);

export default OurSpringers;
