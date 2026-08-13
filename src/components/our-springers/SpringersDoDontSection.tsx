"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Coffee,
  Laptop,
  Move,
  Pill,
  UserRound,
  Users,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const doActivities = [
  {
    icon: Users,
    title: "Friendly Connection",
    text: "Conversation, sharing tea, hobbies, games, or reading together.",
  },
  {
    icon: Coffee,
    title: "Outings & Errands",
    text: "Trips to the local café, light shopping, or gentle walks around the neighbourhood.",
  },
  {
    icon: Laptop,
    title: "Practical Support",
    text: "Help with technology, light admin, or organising things around the house.",
  },
] as const;

const dontActivities = [
  {
    icon: UserRound,
    title: "Personal Care",
    text: "Washing, dressing, or toileting.",
  },
  {
    icon: Pill,
    title: "Medication",
    text: "Giving, prompting, or managing prescribed meds.",
  },
  {
    icon: Move,
    title: "Physical Transfers",
    text: "Lifting, hoisting, or manual handling.",
  },
  {
    icon: Wallet,
    title: "Financial Help",
    text: "Banking, handling cards/PINs, or cash withdrawals.",
  },
] as const;

const cardClass =
  "rounded-2xl border border-border bg-background p-8 md:p-10 shadow-soft transition-shadow duration-300 hover:shadow-card h-full";

const blockClass =
  "overflow-hidden rounded-2xl border border-border bg-card shadow-soft border-b-0 last:border-b";

const SpringersDoDontSection = () => (
  <section id="springers-do-dont" className="py-28 md:py-36 bg-background scroll-mt-24">
    <div className="container max-w-5xl">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="rule" />
          <span className="eyebrow text-foreground/60">What Springers Do / Don&apos;t Do</span>
          <div className="rule" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl leading-[1.08] tracking-tight text-foreground">
          What You&apos;ll Actually Be Doing
        </h2>
        <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
          The easiest way to picture it? Anything a friend or family member would do.
        </p>
      </div>

      <Accordion
        type="multiple"
        defaultValue={["do"]}
        className="flex flex-col gap-4"
      >
        <AccordionItem value="do" className={blockClass}>
          <AccordionTrigger
            className={cn(
              "px-6 md:px-10 py-6 md:py-7 font-serif text-xl md:text-2xl text-left",
              "text-sage-deep hover:no-underline hover:text-sage-deep/90",
              "[&[data-state=open]]:border-b [&[data-state=open]]:border-border",
            )}
          >
            What Springers Do
          </AccordionTrigger>
          <AccordionContent className="px-6 md:px-10 pb-8 md:pb-10 pt-6 md:pt-8">
            <div className="grid gap-6 md:grid-cols-3">
              {doActivities.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className={cardClass}>
                    <Icon className="mb-5 text-sage-deep" size={28} strokeWidth={1.5} aria-hidden />
                    <h3 className="font-serif text-xl md:text-2xl mb-3 leading-tight">{item.title}</h3>
                    <p className="text-foreground/75 leading-relaxed text-sm md:text-base">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="dont" className={blockClass}>
          <AccordionTrigger
            className={cn(
              "px-6 md:px-10 py-6 md:py-7 font-serif text-xl md:text-2xl text-left",
              "text-sage-deep hover:no-underline hover:text-sage-deep/90",
              "[&[data-state=open]]:border-b [&[data-state=open]]:border-border",
            )}
          >
            Companions, Not Carers — What Springers Do Not Do
          </AccordionTrigger>
          <AccordionContent className="px-6 md:px-10 pb-8 md:pb-10 pt-6 md:pt-8">
            <p className="mb-8 max-w-3xl text-foreground/75 leading-relaxed text-sm md:text-base">
              Second Spring Companions provides social connection, not regulated social or medical care.
              Springers do not provide:
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {dontActivities.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className={cardClass}>
                    <Icon className="mb-5 text-foreground/45" size={26} strokeWidth={1.5} aria-hidden />
                    <h3 className="font-serif text-xl mb-2 leading-tight">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{item.text}</p>
                  </article>
                );
              })}
            </div>

            <p className="mt-8 max-w-3xl text-sm text-foreground/55 leading-relaxed">
              If regulated care or clinical medical support is needed, this must be arranged separately with
              an appropriately qualified provider.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

export default SpringersDoDontSection;
