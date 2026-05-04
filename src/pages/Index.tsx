import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PricingCard from "@/components/PricingCard";
import KindredSpiritForm from "@/components/KindredSpiritForm";
import heroImg from "@/assets/hero-companions.jpg";
import { ArrowRight, Check, Home, MapPin, BookOpen, Heart } from "lucide-react";
import { pillars } from "@/data/pillars";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="rule" />
    <span className="eyebrow text-foreground/60">{children}</span>
    
  </div>
);

const Index = () => {
  useEffect(() => {
    document.title = "Second Spring Companions | London-Based, UK-Wide Bespoke Matching";
    const description =
      "Second Spring Companions is based in London, providing bespoke matching for families across the UK.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="An older woman laughing warmly with her Springer companion at home"
          width={1600}
          height={1200}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container pb-20 md:pb-28 pt-32 text-cream">
          <div className="max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-cream/50" />
              <span className="eyebrow text-cream/80">based in London, providing bespoke matching for families across the UK</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
              Second Spring Companions
            </h1>
            <p className="mt-6 font-serif italic text-2xl md:text-3xl text-sage-soft">
              Tailored companionship. Genuine connection.
            </p>
            <p className="mt-8 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed font-light">
              We match your loved ones with dedicated 'Springers', companions chosen specifically
              for their shared interests, intellect and personality.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl" variant="sage">
                <a href="#kindred-spirit">Start Your Personality Match</a>
              </Button>
              <Button asChild size="xl" variant="ghostLuxe" className="text-cream border-cream/40 hover:bg-cream/10">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-cream/70">
              {[
                "Founder-Led Onboarding",
                "ICO Registered, GDPR Compliant",
                "DBS-Checked Springers",
                "Bespoke National Search",
              ].map((item) => (
                <div key={item} className="rounded-full border border-cream/30 px-4 py-2 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="about" className="py-28 md:py-36">
        <div className="container max-w-4xl">
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-balance max-w-4xl mb-12 md:mb-16">
            An agency for curated companionship in later life
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl">
            Second Spring Companions is a boutique introductory agency that matches older adults with{" "}
            <span className="font-semibold text-sage-deep">Springers</span>, dedicated, self-employed companions who
            provide more than just a check-in. We believe in renewal at every stage of life. By matching individuals
            based on personality and interests, we provide the intellectual spark and social energy that traditional care
            misses. Whether it&apos;s mastering a new hobby, sharing a home-cooked meal, or a long walk, a{" "}
            <span className="font-semibold text-sage-deep">Springer</span> is a carefully hand-picked catalyst for
            bringing a genuine spring back into your loved one&apos;s step.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-28 md:py-36 bg-cream-deep">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <Eyebrow>Is This For You?</Eyebrow>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Made for moments like these.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-2xl">
              Second Spring is for families navigating the quiet worry of a loved one spending too much time alone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {[
              {
                icon: Home,
                title: "A parent living alone in the family home",
                copy: "The house is full of memories but short on company. A Springer brings conversation, routine and a genuine reason to look forward to Tuesdays.",
              },
              {
                icon: MapPin,
                title: "A family spread across the country",
                copy: "You'd visit more if you could. A Springer becomes your presence when you can't be there and always keeps you updated.",
              },
              {
                icon: BookOpen,
                title: "A sharp mind that needs stimulating company",
                copy: "Your loved one has opinions, stories and curiosity to spare. They need a companion who can keep up, not just keep them company.",
              },
              {
                icon: Heart,
                title: "Someone navigating loss or a big life change",
                copy: "Bereavement, retirement, a move to somewhere smaller. A Springer offers steady, warm company during life's quieter, harder chapters.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-background p-8 hover:bg-cream transition-colors duration-300 flex flex-col"
              >
                <s.icon size={28} className="text-sage-deep mb-6" />
                <h3 className="font-serif text-2xl font-semibold mb-3 leading-tight">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="font-serif italic text-foreground/60 mb-6">
              If you recognised your family in any of these, we'd love to meet you.
            </p>
            <Button asChild size="xl" variant="luxe">
              <a href="#kindred-spirit">Start Your Personality Match</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS PREVIEW */}
      <section id="services" className="py-28 md:py-36 bg-gradient-sage">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <Eyebrow>The Four Pillars</Eyebrow>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Four pillars of <span className="italic">considered</span> companionship.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {pillars.map((p) => (
              <Link
                key={p.number}
                to={`/services#pillars`}
                className="group bg-background p-8 hover:bg-cream transition-colors duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <p.icon size={28} className="text-sage-deep" />
                  <span className="eyebrow text-foreground/40">{p.number}</span>
                </div>
                <h3 className="font-serif text-2xl mb-3 leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.hook}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage-deep">
                  Learn more
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="xl" variant="luxe">
              <Link to="/services">View All Services <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* THE SECOND SPRING STANDARD */}
      <section id="standard" className="py-28 md:py-36">
        <div className="container">
          <div className="max-w-3xl mb-20">
            <Eyebrow>Our Model</Eyebrow>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">The Second Spring Standard</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              A considered four-step process designed to build trust, connection and continuity.
            </p>
          </div>

          <div className="space-y-px bg-border">
            {[
              {
                step: "Step 1",
                meta: "Discovery",
                title: "Personality Assessment",
                copy: "We speak with you or your loved one to understand interests, routines, and what a good Springer looks like for you.",
                price: "\n",
              },
              {
                step: "Step 2",
                meta: "Thoughtful pairing",
                title: "The Springer Match",
                copy: "We match your loved one with a Springer, someone whose personality and interests genuinely align with yours. Not rotating staff.",
                price: "\n",
              },
              {
                step: "Step 3",
                meta: "No obligation",
                title: "Introductory Video call",
                copy: "A relaxed first meeting in a comfortable setting to ensure the connection feels right before any visits begin.",
                price: "\n",
              },
              {
                step: "Step 4",
                meta: "Ongoing",
                title: "Regular Visits Begin",
                copy: "Scheduled visits start at a pace that suits your loved one building familiarity, friendship and routine over time.",
                price: "From £28 / hour",
              },
            ].map((s) => (
              <div key={s.title} className="bg-background p-10 md:p-14 grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-3">
                  <div className="eyebrow text-sage-deep mb-2">{s.step}</div>
                  <div className="text-sm text-muted-foreground">{s.meta}</div>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-serif text-3xl md:text-4xl mb-4">{s.title}</h3>
                  <p className="text-foreground/75 leading-relaxed max-w-2xl">{s.copy}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <div className="font-serif text-xl text-foreground">{s.price}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button asChild size="xl" variant="luxe">
              <a href="#kindred-spirit">Start Your Personality Match</a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-28 md:py-36 bg-cream-deep">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Pricing &amp; Investment</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
              Transparent, considered pricing.
            </h2>
          </div>
          <PricingCard />
        </div>
      </section>

      {/* KINDRED SPIRIT FORM */}
      <section id="kindred-spirit" className="py-28 md:py-36 bg-gradient-sage">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="rule" />
              <span className="eyebrow text-foreground/60">The Kindred Spirit Discovery</span>
              <div className="rule" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Find their <span className="italic text-sage-deep">kindred spirit.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              A short, three-step form. Tell us when suits you best and we will personally review
              your match and call at your preferred time.
            </p>
            <p className="mt-3 text-sm text-muted-foreground/90">
              While we have deep roots in the London community, we are proud to offer a Bespoke
              National Search for families seeking springer companionship beyond.
            </p>
          </div>
          <KindredSpiritForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
