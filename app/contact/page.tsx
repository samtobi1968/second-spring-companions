import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us | Second Spring Companions",
  description:
    "Reach Second Spring Companions by email to discuss companionship, coverage, or a bespoke enquiry anywhere in the UK.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pb-24 pt-32 md:pt-40">
        <div className="container max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="rule" />
            <span className="eyebrow text-foreground/60">Contact</span>
            <div className="rule" />
          </div>
          <h1 className="font-serif text-5xl leading-[1.08] tracking-tight md:text-6xl">Get in touch.</h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Whether you are exploring companionship for the first time or checking coverage beyond our core
            locations, our team replies thoughtfully — usually within one working day.
          </p>

          <div className="mt-12 rounded-none border border-border bg-card p-10 shadow-card md:p-12">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Mail size={24} aria-hidden />
            </div>
            <p className="font-serif text-xl text-foreground md:text-2xl">Email our registrar</p>
            <a
              href="mailto:info@secondspringcompanions.co.uk"
              className="mt-4 inline-block text-base font-medium text-primary underline-offset-4 hover:underline"
            >
              info@secondspringcompanions.co.uk
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild variant="luxe" size="lg">
              <a href="mailto:info@secondspringcompanions.co.uk">Send an email</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/our-locations">Our locations</Link>
            </Button>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
