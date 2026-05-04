"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

// ============================================================
// FORMSPREE SETUP
// ------------------------------------------------------------
// 1. Create a free form at https://formspree.io and copy your
//    endpoint URL (looks like: https://formspree.io/f/abcdwxyz).
// 2. Paste it below, replacing the placeholder string.
// 3. That's it — submissions will be emailed to the address
//    associated with your Formspree account.
// ============================================================
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrerddvp";

const interestOptions = [
  "Books & Literature",
  "Music",
  "Gardening",
  "Art & Galleries",
  "History",
  "Cooking",
  "Travel",
  "Technology",
  "Faith",
  "Sport",
];

const pillarOptions = [
  { id: "connection", label: "Connection & Conversation", hint: "Talk, memories, intellectual company" },
  { id: "hobbies", label: "Hobbies & Games", hint: "Passion projects and rediscovered interests" },
  { id: "everyday", label: "Everyday Support", hint: "Light home help and gentle errands" },
  { id: "tech", label: "Help with Tech", hint: "Video calls, photos and digital ease" },
];

const Field = ({ label, children, hint }: { label: string; children: React.ReactNode; hint?: string }) => (
  <label className="block">
    <span className="eyebrow text-foreground/55 block mb-2">{label}</span>
    {children}
    {hint && <span className="block mt-1 text-xs text-muted-foreground">{hint}</span>}
  </label>
);

const KindredSpiritForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [pillars, setPillars] = useState<string[]>([]);
  const [personality, setPersonality] = useState("");

  const toggle = (list: string[], setter: (v: string[]) => void, val: string) =>
    setter(list.includes(val) ? list.filter((v) => v !== val) : [...list, val]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    // Append multi-select arrays explicitly
    formData.set("personality_description", personality);
    formData.delete("interests");
    interests.forEach((i) => formData.append("interests", i));
    formData.delete("pillars");
    pillars.forEach((p) => formData.append("pillars", p));
    formData.set("_subject", "New Kindred Spirit Discovery enquiry");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
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

  if (submitted) {
    return (
      <div className="bg-card p-12 md:p-16 text-center shadow-elegant animate-fade-up max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-sage-soft flex items-center justify-center mx-auto mb-6">
          <Check className="text-sage-deep" size={32} />
        </div>
        <h3 className="font-serif text-3xl md:text-4xl mb-5">Thank you.</h3>
        <p className="text-foreground/75 leading-relaxed text-lg max-w-md mx-auto">
          I review all matches personally in the evenings to ensure a perfect fit. Expect a
          consultation call between <strong>6pm–8pm</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-cream-deep p-8 md:p-14 shadow-card max-w-3xl mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3 mb-10">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex-1">
            <div className={`h-1 ${n <= step ? "bg-sage-deep" : "bg-border"} transition-colors`} />
            <div className={`mt-2 text-xs eyebrow ${n === step ? "text-foreground" : "text-foreground/40"}`}>
              Step {n}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-7">
        {/* Step 1 fields stay mounted (hidden) so FormData includes them on final submit */}
        <div className={step === 1 ? "space-y-7 animate-fade-in" : "hidden"}>
          <div>
            <h3 className="font-serif text-3xl mb-2">Personality & Interests</h3>
            <p className="text-muted-foreground text-sm">
              Help us understand who your loved one is, beyond the basics.
            </p>
          </div>
          <Field
            label="Describe their personality in a few words"
            hint="Quietly witty? Fiercely independent? A natural storyteller?"
          >
            <textarea
              required
              rows={4}
              name="personality_description"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              maxLength={500}
              className="luxe-input resize-none"
            />
          </Field>
          <Field label="Interests (select any that apply)">
            <div className="grid sm:grid-cols-2 gap-2 mt-2">
              {interestOptions.map((i) => {
                const active = interests.includes(i);
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={() => toggle(interests, setInterests, i)}
                    className={`px-4 py-3 text-sm text-left border transition-all ${
                      active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background border-border hover:border-foreground/40"
                    }`}
                  >
                    {active && "✓ "}
                    {i}
                  </button>
                );
              })}
            </div>
          </Field>
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="UK Postcode">
              <input required name="postcode" maxLength={10} className="luxe-input" />
            </Field>
            <Field label="Preferred Contact Time">
              <select required name="callback_time" className="luxe-input" defaultValue="">
                <option value="" disabled>Select…</option>
                <option>Morning (9am – 11am)</option>
                <option>Afternoon (12pm – 4pm)</option>
                <option>Evening (5pm – 8pm)</option>
              </select>
            </Field>
          </div>
        </div>

        <div className={step === 2 ? "space-y-7 animate-fade-in" : "hidden"}>
          <div>
            <h3 className="font-serif text-3xl mb-2">Required Pillars</h3>
            <p className="text-muted-foreground text-sm">
              Which pillars of companionship matter most to you?
            </p>
          </div>
          <div className="space-y-3">
            {pillarOptions.map((p) => {
              const active = pillars.includes(p.id);
              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => toggle(pillars, setPillars, p.id)}
                  className={`w-full p-5 text-left border transition-all flex items-start gap-4 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border hover:border-foreground/40"
                  }`}
                >
                  <div
                    className={`mt-1 w-5 h-5 border-2 flex items-center justify-center shrink-0 ${
                      active ? "border-cream bg-cream/10" : "border-foreground/30"
                    }`}
                  >
                    {active && <Check size={12} className="text-cream" />}
                  </div>
                  <div>
                    <div className="font-serif text-lg">{p.label}</div>
                    <div className={`text-sm ${active ? "text-cream/70" : "text-muted-foreground"}`}>
                      {p.hint}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className={step === 3 ? "space-y-7 animate-fade-in" : "hidden"}>
          <div>
            <h3 className="font-serif text-3xl mb-2">Contact Details</h3>
            <p className="text-muted-foreground text-sm">
              We will respond personally — your details are never shared.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Your Name">
              <input required={step === 3} name="name" maxLength={100} className="luxe-input" />
            </Field>
            <Field label="Relationship">
              <select required={step === 3} name="relationship" className="luxe-input">
                <option value="">Select…</option>
                <option>Adult child</option>
                <option>Spouse / partner</option>
                <option>Friend or neighbour</option>
                <option>Power of attorney</option>
                <option>Arranging for myself</option>
              </select>
            </Field>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Email">
              <input required={step === 3} type="email" name="email" maxLength={255} className="luxe-input" />
            </Field>
            <Field label="Mobile">
              <input required={step === 3} type="tel" name="mobile" maxLength={20} className="luxe-input" />
            </Field>
          </div>
          <div className="pt-2 flex items-start gap-3">
            <input id="gdpr" name="gdpr_consent" value="yes" type="checkbox" required={step === 3} className="mt-1.5" />
            <label htmlFor="gdpr" className="text-xs text-muted-foreground leading-relaxed">
              I consent to Second Spring Companions storing and processing my details to respond to
              this enquiry, in line with their privacy policy and UK GDPR.
            </label>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <div className="pt-6 flex items-center justify-between flex-wrap gap-4 border-t border-border">
          {step > 1 ? (
            <Button type="button" variant="ghost" onClick={() => setStep(step - 1)} disabled={submitting}>
              <ArrowLeft size={16} /> Back
            </Button>
          ) : (
            <span className="text-xs text-muted-foreground">Step {step} of 3</span>
          )}
          <Button type="submit" size="lg" variant="luxe" disabled={submitting}>
            {step < 3 ? (
              <>
                Continue <ArrowRight size={16} />
              </>
            ) : submitting ? (
              "Sending…"
            ) : (
              "Find My Match"
            )}
          </Button>
        </div>
      </form>

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
      `}</style>
    </div>
  );
};

export default KindredSpiritForm;
