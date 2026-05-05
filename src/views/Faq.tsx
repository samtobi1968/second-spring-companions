"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "The Model",
    items: [
      {
        q: "What is a Springer?",
        a: "Springers are the companions on our registry: warm, curious people we introduce to your loved one after a careful personality match. They visit or call to share conversation, hobbies, and gentle routine — not as rotating agency staff, but as a consistent presence chosen to feel like a natural fit.",
      },
      {
        q: "How does Second Spring Companions work?",
        a: "We are a boutique introductory agency based in London. We learn what matters to your family, then match you with a Springer whose temperament and interests align. We facilitate introductions and ongoing coordination; your relationship is directly with your Springer, supported by us throughout.",
      },
      {
        q: "What do you mean by a personality match?",
        a: "We look beyond availability to chemistry: values, humour, pace of conversation, and the small things that make someone easy to spend an afternoon with. Our Kindred Spirit discovery on the homepage is the starting point — tell us about your loved one and we will personally review every detail before we suggest a Springer.",
      },
    ],
  },
  {
    title: "Safety & Trust",
    items: [
      {
        q: "How are Springers vetted?",
        a: "Every Springer on our registry completes an enhanced DBS check, verified references, and a face-to-face interview with our founders. We only introduce people we would trust with our own families.",
      },
      {
        q: "Are you regulated by the CQC?",
        a: "Second Spring Companions is an introductory agency. We introduce families to self-employed Springers for companionship and lifestyle support. We do not provide CQC-regulated personal care.",
      },
      {
        q: "Where do you operate?",
        a: "We have deep roots in the London community and coordinate introductions from our London base. We are also proud to offer a bespoke UK-wide search for families who want the same careful matching outside the capital — timelines and logistics are discussed openly at enquiry.",
      },
      {
        q: "Are your Springers insured?",
        a: "Yes. Every Springer operating through Second Spring Companions holds public liability insurance before any visits begin. This sits alongside their enhanced DBS check and verified references as part of our standard vetting process.",
      },
      {
        q: "What happens if the match does not feel right?",
        a: "We would rather know early than have your loved one feel uncomfortable. If the first introduction does not feel like a natural fit, we go back to the matching process and find someone who does. There is no additional placement fee for a rematch in the first 30 days.",
      },
      {
        q: "Can Springers support someone living with dementia or memory difficulties?",
        a: "We do not provide clinical or personal care, but we have experience matching Springers who are calm, patient and comfortable in the company of people with early to moderate memory conditions. We discuss this openly at the enquiry stage so we can find the right person for your loved one's specific situation.",
      },
    ],
  },
  {
    title: "Fees & Logistics",
    items: [
      {
        q: "How much does a Springer cost?",
        a: "Rates reflect the calibre of our Springers and the bespoke nature of each placement. Costs vary by location, frequency, and the shape of visits you agree with your Springer. Use the personality match form on our homepage and we will come back with a clear, tailored outline — no surprises.",
      },
      {
        q: "Who employs the Springer?",
        a: "Springers work with you as self-employed companions. We introduce you and stay involved to support the relationship; contracts and day-to-day arrangements are agreed between you and your Springer in line with our introductory model.",
      },
      {
        q: "What happens after we enquire?",
        a: "We read every Kindred Spirit submission personally, then reach out at the time you prefer for a thoughtful conversation. If we believe we can help, we outline next steps, timing, and fees before any introduction is made.",
      },
      {
        q: "How quickly can a Springer start?",
        a: "For standard placements, we typically complete matching and introductions within one to two weeks of your initial conversation with us. If your situation is urgent — for example following a hospital discharge or sudden change in circumstances — contact us directly and we will do everything we can to move faster.",
      },
      {
        q: "What does the introductory fee cover?",
        a: "The placement fee covers your loved one's personality assessment, our search and vetting of suitable Springers, the matching process, coordination of the introductory video call, and our ongoing support throughout the relationship. Springer visit rates are agreed separately and paid directly to your Springer.",
      },
    ],
  },
  {
    title: "The Homecoming Service",
    items: [
      {
        q: "What is the Homecoming Service?",
        a: "The Homecoming Service is a dedicated offering for the days surrounding a hospital discharge. A Springer prepares the home before your loved one arrives back, accompanies them from the ward to their front door, and visits daily in the first week to provide meals, company, errands and family updates. It is designed to fill the practical and emotional gap that the NHS cannot.",
      },
      {
        q: "Does the Homecoming Service include medical or personal care?",
        a: "No. Springers provide companionship, practical support and lifestyle assistance only. They do not administer medication, assist with bathing or dressing, or provide any CQC-regulated care. If clinical support is also needed, we are happy to signpost you to appropriate regulated providers — many families use both in parallel.",
      },
      {
        q: "Can the Homecoming Service be arranged at short notice?",
        a: "Yes, in many cases. Hospital discharges are often sudden and we understand families do not always have time to plan ahead. Contact us directly for urgent Homecoming requests and we will prioritise your enquiry.",
      },
    ],
  },
] as const;

const Faq = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-sage">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">FAQ</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Frequently asked questions.
          </h1>
        </div>
      </section>

      <section className="py-24 md:py-28">
        <div className="container max-w-4xl space-y-12 md:space-y-16">
          {faqCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={catIndex > 0 ? "pt-12 md:pt-14 border-t border-border" : undefined}
            >
              <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-6 md:mb-8">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="bg-card border border-border shadow-soft px-6 md:px-10">
                {category.items.map((item, i) => (
                  <AccordionItem
                    key={item.q}
                    value={`${category.title}-${i}`}
                    className="border-border last:border-b-0"
                  >
                    <AccordionTrigger
                      className="group py-5 md:py-6 text-left hover:no-underline font-serif font-bold text-lg md:text-xl gap-4 text-[#7D8C7C] [&>svg:last-child]:hidden"
                    >
                      <span className="pr-2 leading-snug">{item.q}</span>
                      <Plus
                        className="h-5 w-5 shrink-0 transition-transform duration-200 ease-out group-data-[state=open]:rotate-45"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 leading-relaxed text-base pb-6 pt-0">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

          <div className="rounded-lg border border-border bg-card p-8 md:p-12 shadow-soft text-center">
            <h2 className="font-serif text-2xl md:text-3xl leading-tight mb-4">
              Have a specific question?
            </h2>
            <p className="text-foreground/75 leading-relaxed max-w-xl mx-auto mb-8">
              Tell us about your loved one through our Kindred Spirit discovery, we read every
              submission and reply personally.
            </p>
            <Button asChild size="lg" variant="luxe">
              <Link href="/#kindred-spirit">
                Start your personality match <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Faq;
