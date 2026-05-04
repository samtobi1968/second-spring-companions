import { useEffect } from "react";
import { Link } from "react-router-dom";
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
        a: "The Care Quality Commission (CQC) regulates certain types of health and social care in England. Second Spring Companions is an introductory agency: we introduce families to self-employed Springers for companionship and lifestyle support. We do not provide CQC-regulated personal care, and Springers are not our employees. Nothing on this site should be read as a claim of CQC registration where it does not apply.",
      },
      {
        q: "Where do you operate?",
        a: "We have deep roots in the London community and coordinate introductions from our London base. We are also proud to offer a bespoke UK-wide search for families who want the same careful matching outside the capital — timelines and logistics are discussed openly at enquiry.",
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
    ],
  },
] as const;

const Faq = () => {
  useEffect(() => {
    document.title = "FAQ | London-Based, UK-Wide Bespoke Search";
    const description =
      "Frequently asked questions about our London-based companionship service and UK-wide bespoke search matching.";
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
              Tell us about your loved one through our Kindred Spirit discovery — we read every
              submission and reply personally.
            </p>
            <Button asChild size="lg" variant="luxe">
              <Link to="/#kindred-spirit">
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
