import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
        <div className="container max-w-4xl">
          <div className="bg-card border border-border p-8 md:p-12 shadow-soft">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">
              How much does a Springer cost?
            </h2>
            <p className="text-foreground/80 leading-relaxed text-lg">
              As a boutique introductory agency, our rates reflect the exceptional caliber of our
              Springers and the bespoke nature of our matching process. Costs vary based on
              location and the specific requirements of the placement. Please contact us for a
              tailored quote.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="luxe">
                <Link to="/#kindred-spirit">
                  Contact Us for a Tailored Quote <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Faq;
