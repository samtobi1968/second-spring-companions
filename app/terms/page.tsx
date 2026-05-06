import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service | Second Spring Companions",
  description:
    "Terms of Service for Second Spring Companions, including service scope, safety boundaries, billing, and legal terms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container max-w-3xl mx-auto">
        <div className="pt-40 pb-20 md:pt-48 md:pb-28">
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] mb-4">Second Spring Companions - Terms of Service</h1>
          <p className="text-sm text-foreground/50 mb-12 md:mb-14">Last updated: 19.04.2026</p>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">1. Who We Are</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The Services are operated by SECOND SPRING COMPANIONS LTD, a company incorporated in
              England & Wales (company number 17166866) with its registered office at 66 Paul
              Street, London, England, United Kingdom, EC2A 4NA. We are a boutique introductory
              registry that connects older adults ("Clients") and their families
              ("Representatives") with vetted companions ("Springers") for companionship and social
              engagement.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li>
                <strong>Not a care provider:</strong> We do not provide regulated personal or
                medical care.
              </li>
              <li>
                <strong>Not an employer:</strong> Springers are engaged as independent self-employed
                contractors.
              </li>
              <li>
                <strong>Not CQC Regulated:</strong> Our services do not fall under the remit of the
                Care Quality Commission as we do not perform regulated activities.
              </li>
            </ul>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">2. Our Service Model</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Second Spring provides a personal, considered companionship service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li>
                <strong>Free Consultation:</strong> Every client relationship begins with a
                complimentary conversation to understand interests, routines, and what a good
                Springer looks like for you.
              </li>
              <li>
                <strong>Bespoke Matching:</strong> We personally match each Client with a Springer
                whose personality and interests genuinely align with theirs.
              </li>
              <li>
                <strong>Introductory Meet & Greet:</strong> A relaxed first meeting takes place
                before any regular visits begin, to ensure the connection feels right.
              </li>
              <li>
                <strong>Springer Companionship:</strong> Regular companion visits for conversation,
                outings, hobbies, and genuine social connection.
              </li>
            </ul>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">3. Safety Boundaries (Strictly Prohibited Actions)</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              To protect our legal status, our insurance, and Client safety, Springers must not
              provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li><strong>Personal Care:</strong> No assistance with bathing, toileting, dressing, or hygiene.</li>
              <li><strong>Medication:</strong> No administering, sorting, or prompting of medication.</li>
              <li><strong>Manual Handling:</strong> No lifting, hoisting, or physical transfers.</li>
              <li><strong>Financial Handling:</strong> No access to bank cards, PINs, or cash withdrawals.</li>
              <li><strong>Clinical or Medical Activities:</strong> Springers do not provide nursing, medical, or clinical assessments of any kind.</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              If a Client&apos;s needs progress to requiring regulated care, the Service must be
              terminated or supplemented by an authorised CQC-regulated provider.
            </p>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">4. Fees, Billing & Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80 leading-relaxed">
              <li><strong>Initial Consultation:</strong> The introductory consultation is provided free of charge with no obligation.</li>
              <li><strong>Hourly Rate:</strong> Companion visits are charged at GBP 28 per hour, subject to a minimum visit length agreed at the point of booking.</li>
              <li><strong>Bespoke Plans:</strong> Tailored multi-visit weekly schedules are quoted on a bespoke basis.</li>
              <li><strong>Payments:</strong> Payments must be made via bank transfer to our business account as per the invoice instructions.</li>
              <li><strong>Cancellations:</strong> Visits cancelled with less than 24 hours&apos; notice will be charged at the full rate of the scheduled visit.</li>
            </ul>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">5. Your 14-Day Cooling-Off Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Under the Consumer Rights Act 2015, you have a statutory right to cancel this
              agreement within 14 days of signing.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              <strong>Waiver:</strong> If you request a Companion Visit to begin within this 14-day
              period, you acknowledge that you will be liable for the costs of any services
              delivered up to the point of cancellation.
            </p>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">6. Insurance & Driving</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              <strong>General:</strong> Springers are covered by Public Liability insurance for
              social companionship activities within the home.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              <strong>Driving:</strong> If a Springer drives a Client, they do so as an independent
              arrangement. Second Spring verifies that Springers who offer driving have a valid UK
              licence and MOT, but does not provide motor insurance.
            </p>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">7. Medical Disclaimer</h2>
            <p className="text-foreground/80 leading-relaxed">
              <strong>Important:</strong> Second Spring Companions provides social companionship
              only. It does not provide medical, nursing, or clinical services of any kind. Content
              on this website is for informational purposes only and is not a substitute for
              professional medical diagnosis, treatment, or emergency intervention. Always consult a
              GP or 111/999 for medical concerns or emergencies.
            </p>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">8. Confidentiality & Data (GDPR)</h2>
            <p className="text-foreground/80 leading-relaxed">
              Second Spring Companions is registered with the ICO. It processes limited personal
              information (including basic background and interests) to facilitate safe and
              thoughtful matching. By using these services, you consent to relevant information
              being shared with the assigned Springer for the purposes of providing the service.
            </p>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">9. Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Second Spring Companions is responsible for loss caused by its failure to use
              reasonable care in vetting Springers and facilitating introductions.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              It is not responsible for the independent acts of Springers that fall outside the
              scope of service or prohibited actions, nor for health outcomes that are part of the
              natural progression of ageing or pre-existing conditions.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Total liability is limited to the amount paid by you to Second Spring Companions in
              the 12 months prior to the claim.
            </p>
          </section>

          <section className="mb-12 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">10. Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms are governed by the laws of England and Wales. Any disputes will be
              subject to the exclusive jurisdiction of the English courts.
            </p>
          </section>

          <div className="border-t border-border pt-8 text-foreground/70 italic">
            For questions regarding these terms, please contact{" "}
            <a
              href="mailto:info@secondspringcompanions.co.uk"
              className="text-sage-deep underline underline-offset-4"
            >
              info@secondspringcompanions.co.uk
            </a>
            .
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
