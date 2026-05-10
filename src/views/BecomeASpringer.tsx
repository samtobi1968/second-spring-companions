"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Check,
  Heart,
  Clock,
  Briefcase,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjglgqrr";

const Field = ({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) => (
  <label className="block">
    <span className="eyebrow text-foreground/55 block mb-2">{label}</span>
    {children}
    {hint && <span className="block mt-1 text-xs text-muted-foreground">{hint}</span>}
  </label>
);

const BecomeASpringer = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-sage pb-20 pt-32 md:pb-28 md:pt-44">
        <div className="container max-w-3xl animate-fade-up">
          <div className="mb-6 flex items-center gap-3">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">Become a Springer</span>
          </div>
          <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Make a real difference — <span className="italic text-sage-deep">on your terms.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75 md:text-xl">
            Join our community of Springers and bring warmth, conversation, and companionship to older adults in your
            area.
          </p>
          <div className="mt-10">
            <Button asChild size="xl" variant="luxe">
              <a href="#apply">Apply to Become a Springer</a>
            </Button>
          </div>
        </div>
      </section>

      {/* WHAT IS A SPRINGER */}
      <section className="py-28">
        <div className="container max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">The Role</span>
            <div className="rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-8">
            What is a Springer?
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed">
            Springers are self-employed companions who visit or call elderly clients to provide
            friendly conversation, light social activities, and a consistent, caring presence.
            They do not provide personal care or medical support.
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-28 bg-cream-deep">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="rule" />
              <span className="eyebrow text-foreground/60">Why Join Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">
              A role that fits around your life.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              { icon: Clock, t: "Flexible Hours", c: "You choose when you work. Set your own schedule around your life." },
              { icon: Briefcase, t: "Self-Employed Freedom", c: "You're your own boss. We provide the clients, you provide the warmth." },
              { icon: Heart, t: "Meaningful Work", c: "The impact you make is real. Our clients genuinely look forward to your visits." },
              { icon: Users, t: "Be Part of Something", c: "Regular check-ins with our founders, a supportive companion community, and someone always available if something feels off." },
            ].map((b) => (
              <div key={b.t} className="bg-background p-10">
                <b.icon className="text-sage-deep mb-6" size={28} />
                <h3 className="font-serif text-2xl mb-3">{b.t}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{b.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-5">
              <div className="rule" />
              <span className="eyebrow text-foreground/60">How It Works</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1]">Three simple steps to get started.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: "01", t: "Apply", c: "Fill out our short interest form below — it takes just a few minutes." },
              { n: "02", t: "Meet Us", c: "A friendly informal chat so we can get to know you and answer your questions." },
              { n: "03", t: "Get Started", c: "We match you with a client and you begin making a real difference." },
            ].map((s) => (
              <div key={s.n}>
                <div className="font-serif text-5xl text-sage-deep mb-4">{s.n}</div>
                <h3 className="font-serif text-2xl mb-2">{s.t}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{s.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELF-EMPLOYMENT & HOURS */}
      <section className="py-28 bg-primary text-cream">
        <div className="container grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-cream/40" />
              <span className="eyebrow text-cream/60">Self-Employment & Hours</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-cream mb-6">
              Flexibility that fits <span className="italic text-sage-soft">your life.</span>
            </h2>
            <p className="text-cream/80 leading-relaxed mb-8">
              Being a Springer means you're in charge. There are no zero-hours contracts, no
              pressure, and no rigid rotas — just genuine flexibility around the hours you want
              to give.
            </p>
            <ul className="space-y-5">
              {[
                "Springers are self-employed independent contractors.",
                "Springer rates are competitive and discussed at your introductory call. We are transparent about pay from the very first conversation.",
                "You invoice us for the hours you complete.",
                "Suggested starting commitment: 2–5 hours per week (flexible to grow).",
                "You set your availability — mornings, afternoons, weekends. We always share the client's preferred timings, and if you accept, it's up to you.",
                "No zero-hours contracts, no pressure — just flexibility that works for you.",
              ].map((line) => (
                <li key={line} className="flex gap-4">
                  <Check className="text-sage-soft mt-1 shrink-0" size={18} />
                  <span className="text-cream/80 leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-cream text-foreground p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="text-sage-deep" size={22} />
                <span className="eyebrow text-foreground/60">Example Patterns</span>
              </div>
              <div className="space-y-5">
                {[
                  { t: "2 visits a week", s: "1–2 hours each" },
                  { t: "Saturday mornings only", s: "2–3 hours per visit" },
                  { t: "Weekday afternoons", s: "3 hours, twice a week" },
                  { t: "One longer weekly visit", s: "4 hours every Friday" },
                ].map((p) => (
                  <div key={p.t} className="border-b border-foreground/10 pb-4 last:border-0 last:pb-0">
                    <div className="font-serif text-xl">{p.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE'RE LOOKING FOR */}
      <section className="py-28">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">Who We're Looking For</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-12">
            Warm hearts and good listeners.
          </h2>
          <ul className="space-y-6">
            {[
              "You're a good listener and genuinely enjoy people's company.",
              "You're reliable and committed to showing up for your client.",
              "You're patient, kind, and comfortable spending time with older adults.",
              "No care qualifications needed — just emotional intelligence, consistency and patience.",
            ].map((line) => (
              <li key={line} className="flex gap-5 pb-6 border-b border-border">
                <Check className="text-sage-deep mt-1 shrink-0" size={22} />
                <span className="text-lg text-foreground/80 leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-cream-deep">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="rule" />
              <span className="eyebrow text-foreground/60">Frequently Asked</span>
              <div className="rule" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">Your questions, answered.</h2>
          </div>
          <Accordion type="single" collapsible className="bg-card shadow-card px-8 md:px-10">
            {[
              {
                q: "Do I need experience working with elderly people?",
                a: "We prefer some experience, but as long as your personality fits the client and you show warmth and reliability, we'd love to hear from you.",
              },
              {
                q: "Am I employed by Second Spring Companions?",
                a: "No, you're self-employed. We connect you with clients, and you handle your own income tax.",
              },
              {
                q: "How do I get paid?",
                a: "You invoice us with your completed hours and any agreed expenses, and we pay you directly.",
              },
              {
                q: "What if I need to cancel a visit?",
                a: "We ask for as much notice as possible. Get in touch with us straight away and we'll help arrange cover or reschedule with the client.",
              },
              {
                q: "Do I need my own DBS check?",
                a: "If you already hold a valid enhanced DBS certificate, great. If not, we will guide you through obtaining one before your first visit. We do not arrange DBS checks on your behalf but we will point you in the right direction.",
              },
              {
                q: "Can I do this alongside another job or my studies?",
                a: "Absolutely. Many of our Springers fit visits around full-time work, part-time roles or university. The flexibility is genuine — you set your availability and we work around it.",
              },
              {
                q: "How quickly could I start?",
                a: "Once your vetting is complete and we have found a suitable client match, most Springers are visiting within two to four weeks of their initial chat with us.",
              },
              {
                q: "What insurance do I need?",
                a: "As a self-employed Springer you are responsible for your own public liability insurance before visits begin. This is standard for self-employed companion roles and relatively low cost. We can point you toward suitable providers at onboarding.",
              },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border last:border-0">
                <AccordionTrigger className="font-serif text-lg md:text-xl text-left py-6 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="py-28 bg-cream-deep">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="rule" />
              <span className="eyebrow text-foreground/60">Springer Application</span>
              <div className="rule" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">Begin your application.</h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Tell us about yourself. We read every word. Successful applicants hear from us within five working days.
            </p>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto mt-3">
              After we review your application we will invite you for a short informal video call — usually 20 to 30 minutes. If we think you are a great fit, we will begin matching you with a client straight away.
            </p>
          </div>

          {submitted ? (
            <div className="bg-card p-12 text-center shadow-card animate-fade-up">
              <div className="w-14 h-14 rounded-full bg-sage-soft flex items-center justify-center mx-auto mb-6">
                <Check className="text-sage-deep" size={28} />
              </div>
              <h3 className="font-serif text-3xl mb-3">Thank you.</h3>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Your application has been received. One of our founders will review it personally and be in touch within three working days.
              </p>
              <Button asChild variant="luxe">
                <Link href="/">Return Home <ArrowRight size={16} /></Link>
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              action={FORMSPREE_ENDPOINT}
              method="POST"
              className="bg-card p-10 md:p-14 shadow-card space-y-7"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Full Name">
                  <input required name="full-name" maxLength={100} className="luxe-input" />
                </Field>
                <Field label="Are you 18+?">
                  <select required name="over-18" className="luxe-input" defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </Field>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Email">
                  <input required type="email" name="email" maxLength={255} className="luxe-input" />
                </Field>
                <Field label="Mobile">
                  <input required type="tel" name="mobile-number" maxLength={20} className="luxe-input" />
                </Field>
              </div>
              <Field label="Postcode">
                <input required name="postcode" maxLength={10} className="luxe-input" />
              </Field>
              <fieldset className="border-0 p-0 m-0 min-w-0">
                <legend className="eyebrow text-foreground/55 block mb-2">
                  Availability (select all that apply)
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    { name: "availability-weekday-mornings", label: "Weekday mornings" },
                    { name: "availability-weekday-afternoons", label: "Weekday afternoons" },
                    { name: "availability-weekends", label: "Weekends" },
                    { name: "availability-flexible", label: "Flexible / open to discuss" },
                  ].map((opt) => (
                    <div key={opt.name} className="flex items-start gap-3">
                      <input
                        id={opt.name}
                        type="checkbox"
                        name={opt.name}
                        value="yes"
                        className="mt-1.5"
                      />
                      <label htmlFor={opt.name} className="text-sm text-foreground/80 leading-relaxed">
                        {opt.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              <Field label="Tell us briefly why you're drawn to working with older adults.">
                <textarea
                  required
                  name="message"
                  rows={4}
                  maxLength={600}
                  className="luxe-input"
                />
              </Field>
              <Field label="Do you have an enhanced DBS certificate?">
                <select required name="dbs-certificate" className="luxe-input" defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </Field>

              <div className="pt-2 flex items-start gap-3">
                <input id="consent" name="gdpr-consent" value="yes" type="checkbox" required className="mt-1.5" />
                <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                  I consent to Second Spring Companions processing my application in line with their{" "}
                  privacy policy, and confirm I am aged 18 or over and have the right to work in the UK.
                </label>
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <div className="pt-4 flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs text-muted-foreground">We respond within three working days.</p>
                <Button type="submit" size="lg" variant="luxe" disabled={submitting}>
                  {submitting ? "Sending..." : "Submit Application"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />

      <style>{`
        .luxe-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid hsl(var(--foreground) / 0.2);
          padding: 0.75rem 0;
          font-size: 0.95rem;
          color: hsl(var(--foreground));
          outline: none;
          transition: border-color 0.3s;
        }
        .luxe-input:focus { border-color: hsl(var(--foreground)); }
        textarea.luxe-input {
          min-height: 6rem;
          resize: vertical;
        }
      `}</style>
    </div>
  );
};

export default BecomeASpringer;
