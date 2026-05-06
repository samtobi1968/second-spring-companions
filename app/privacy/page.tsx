import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | Second Spring Companions",
  description:
    "How Second Spring Companions collects, uses, and protects personal information for thoughtful, safe companionship matching.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container max-w-3xl mx-auto">
        <div className="pt-40 pb-20 md:pt-48 md:pb-28">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4">Privacy Policy</h1>
          <p className="text-sm text-foreground/50 mb-12 md:mb-14">Last updated: 6 May 2026</p>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed">
              Second Spring Companions is committed to handling personal data with care, discretion,
              and respect. This policy explains what information we collect, why we collect it, and
              how we protect it when supporting families and companions through our introductory
              matching process.
            </p>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Data We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              To make suitable introductions, we collect the details needed to understand care
              context and compatibility. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li>Contact details for family members and representatives</li>
              <li>Basic profile details used for matching preferences and availability</li>
              <li>Information shared during enquiry forms, calls, and introductory conversations</li>
              <li>Application and vetting details for Springer candidates</li>
            </ul>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">How We Use Data</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">We use personal information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li>Assess suitability and create thoughtful companionship matches</li>
              <li>Coordinate introductions, visits, and ongoing support communications</li>
              <li>Maintain safety and service quality across our registry</li>
              <li>Meet legal and regulatory obligations, including record-keeping requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl md:text-3xl mb-4">Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">You have rights over your personal data, including the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li>Request access to the personal data we hold about you</li>
              <li>Ask us to correct inaccurate or incomplete information</li>
              <li>Request deletion where we no longer need to retain the data</li>
              <li>Object to or restrict processing in certain circumstances</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              To make a privacy request, please contact us at{" "}
              <a
                href="mailto:info@secondspringcompanions.co.uk"
                className="text-sage-deep underline underline-offset-4"
              >
                info@secondspringcompanions.co.uk
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
