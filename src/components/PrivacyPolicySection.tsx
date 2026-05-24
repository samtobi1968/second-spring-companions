import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  DATA_PROCESSOR_ROWS,
  DATA_RETENTION_ROWS,
  INTERNATIONAL_TRANSFER_ROWS,
  PRIVACY_CONTACT_EMAIL,
} from "@/data/privacyPolicy";

const BODY = "text-[15px] leading-relaxed text-[#37352F]";
const LINK = "text-[#0070D7] underline underline-offset-2 hover:opacity-90";

function PolicyH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-10 scroll-mt-28 text-xl font-semibold tracking-tight text-[#37352F] first:mt-8">
      {children}
    </h2>
  );
}

function PolicyP({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn(BODY, "mb-4", className)}>{children}</p>;
}

function PolicyUl({ items }: { items: readonly string[] }) {
  return (
    <ul className={cn(BODY, "mb-4 list-disc space-y-2 pl-5")}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 rounded-lg border border-[#3d3b3b] bg-[#ffffff80] p-5">
      {children}
    </div>
  );
}

function CollectionPurpose({
  title,
  intro,
  items,
  specialCategory,
  article9,
}: {
  title: string;
  intro: string;
  items: readonly string[];
  specialCategory?: string;
  article9?: string;
}) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 text-lg font-semibold text-[#37352F]">{title}</h3>
      <PolicyP>{intro}</PolicyP>
      <PolicyUl items={items} />
      {specialCategory ? (
        <PolicyP>
          <strong>Special category data collected for this purpose:</strong> {specialCategory}
        </PolicyP>
      ) : null}
      {article9 ? (
        <PolicyP>
          <strong>Article 9 condition (UK GDPR):</strong> {article9}
        </PolicyP>
      ) : null}
    </div>
  );
}

function LawfulBasisBlock({
  title,
  bases,
  legitimateInterests,
}: {
  title: string;
  bases: readonly string[];
  legitimateInterests: string;
}) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 text-lg font-semibold text-[#37352F]">{title}</h3>
      <PolicyUl items={bases} />
      <div className="rounded-lg border border-[#3d3b3b] bg-[#ffffff80] p-4">
        <p className={cn(BODY, "font-medium")}>Our legitimate interests are:</p>
        <p className={cn(BODY, "mt-2")}>{legitimateInterests}</p>
      </div>
    </div>
  );
}

function RetentionTable() {
  return (
    <div className="mb-8">
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left text-sm text-[#37352F]">
          <thead>
            <tr className="border-b border-[#3d3b3b]">
              <th className="py-3 pr-4 font-semibold">Category of data</th>
              <th className="py-3 pr-4 font-semibold">Retention period</th>
              <th className="py-3 font-semibold">Why</th>
            </tr>
          </thead>
          <tbody>
            {DATA_RETENTION_ROWS.map((row) => (
              <tr key={row.category} className="border-b border-[#3d3b3b]/40 align-top">
                <td className="py-3 pr-4">{row.category}</td>
                <td className="py-3 pr-4 whitespace-nowrap">{row.retentionPeriod}</td>
                <td className="py-3">{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-4 md:hidden">
        {DATA_RETENTION_ROWS.map((row) => (
          <article
            key={row.category}
            className="rounded-lg border border-[#3d3b3b] bg-[#ffffff80] p-4"
          >
            <p className={cn(BODY, "font-semibold")}>{row.category}</p>
            <p className={cn(BODY, "mt-2")}>
              <span className="font-medium">Retention: </span>
              {row.retentionPeriod}
            </p>
            <p className={cn(BODY, "mt-2")}>
              <span className="font-medium">Why: </span>
              {row.reason}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProcessorTable() {
  return (
    <div className="mb-8">
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left text-sm text-[#37352F]">
          <thead>
            <tr className="border-b border-[#3d3b3b]">
              <th className="py-3 pr-4 font-semibold">Organisation</th>
              <th className="py-3 font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {DATA_PROCESSOR_ROWS.map((row) => (
              <tr key={row.organisation} className="border-b border-[#3d3b3b]/40 align-top">
                <td className="py-3 pr-4 font-medium">{row.organisation}</td>
                <td className="py-3">{row.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-4 md:hidden">
        {DATA_PROCESSOR_ROWS.map((row) => (
          <article
            key={row.organisation}
            className="rounded-lg border border-[#3d3b3b] bg-[#ffffff80] p-4"
          >
            <p className={cn(BODY, "font-semibold")}>{row.organisation}</p>
            <p className={cn(BODY, "mt-2")}>{row.purpose}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function InternationalTransferTable() {
  return (
    <div className="mb-8">
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-left text-sm text-[#37352F]">
          <thead>
            <tr className="border-b border-[#3d3b3b]">
              <th className="py-3 pr-3 font-semibold">Organisation</th>
              <th className="py-3 pr-3 font-semibold">Category</th>
              <th className="py-3 pr-3 font-semibold">Country</th>
              <th className="py-3 font-semibold">How transfer complies with UK law</th>
            </tr>
          </thead>
          <tbody>
            {INTERNATIONAL_TRANSFER_ROWS.map((row) => (
              <tr key={row.organisation} className="border-b border-[#3d3b3b]/40 align-top">
                <td className="py-3 pr-3 font-medium">{row.organisation}</td>
                <td className="py-3 pr-3">{row.category}</td>
                <td className="py-3 pr-3">{row.country}</td>
                <td className="py-3">{row.safeguard}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-4 lg:hidden">
        {INTERNATIONAL_TRANSFER_ROWS.map((row) => (
          <article
            key={row.organisation}
            className="rounded-lg border border-[#3d3b3b] bg-[#ffffff80] p-4"
          >
            <p className={cn(BODY, "font-semibold")}>{row.organisation}</p>
            <dl className="mt-3 space-y-2">
              {(
                [
                  ["Category", row.category],
                  ["Country", row.country],
                  ["Safeguard", row.safeguard],
                ] as const
              ).map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-[#37352F]/70">
                    {label}
                  </dt>
                  <dd className={cn(BODY, "mt-0.5")}>{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}

const PrivacyPolicySection = () => {
  return (
    <section id="privacy-policy" className="font-sans">
      <div className="mx-auto w-full max-w-[700px] px-6">
        <header className="mb-8 border-b border-[#3d3b3b]/30 pb-8">
          <p className="text-sm font-medium tracking-wide text-[#37352F]/80">
            Second Spring Companions Limited
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#37352F] md:text-4xl">
            Customer Privacy Notice
          </h1>
          <p className="mt-3 text-sm text-[#37352F]/70">Version 1.1 | Last reviewed: 26 April 2026</p>
          <p className="mt-4 text-sm font-medium text-[#37352F]">
            Non-CQC Regulated Social Companionship and Home Support Service
          </p>
        </header>

        <Callout>
          <p className={cn(BODY, "font-medium")}>
            Social companionship only — not clinical or regulated care
          </p>
          <p className={cn(BODY, "mt-2 text-[#37352F]/90")}>
            Second Spring Companions provides non-regulated social companionship and home support.
            We do not provide nursing, medical, or clinical services, regulated personal care, or
            CQC-regulated activities. Information we hold supports safe matching, attendance, and
            welfare — not medical diagnosis or treatment.
          </p>
        </Callout>

        <PolicyP>
          This privacy notice tells you what to expect us to do with your personal information.
        </PolicyP>

        <PolicyH2>Contact details</PolicyH2>
        <PolicyP>
          Email:{" "}
          <a href={`mailto:${PRIVACY_CONTACT_EMAIL}`} className={LINK}>
            {PRIVACY_CONTACT_EMAIL}
          </a>
        </PolicyP>

        <PolicyH2>What information we collect, use, and why</PolicyH2>

        <CollectionPurpose
          title="Providing non-regulated social companionship and home support services"
          intro="We collect or use the following personal information to provide our companionship and home support services:"
          items={[
            "Name, address and contact details",
            "Date of birth",
            "Next of kin details including any support networks",
            "Emergency contact details",
            "Photographs (collected only with your explicit written consent — see note below)",
            "Health information (including medical conditions, allergies and dietary requirements)",
            "Information about care needs (including disabilities, home conditions and general care provisions)",
            "Payment details (including card or bank information for transfers and direct debits)",
            "Records of meetings and decisions",
            "Records of consent, where appropriate",
            "Time-stamped geolocation data (arrival/departure logs) for service verification and safety",
            "Payment transaction metadata via third-party banking provider (Tide/Adyen)",
          ]}
        />
        <PolicyP>
          <strong>Note on photographs:</strong> Photographs are collected only with your explicit
          written consent and will not be shared with third parties without your further consent. You
          may withdraw this consent at any time by contacting us.
        </PolicyP>
        <PolicyP>
          We also collect the following special category information to provide our services. This
          information is subject to additional protection due to its sensitive nature:
        </PolicyP>
        <PolicyUl items={["Racial or ethnic origin", "Religious or philosophical beliefs", "Health information"]} />
        <PolicyP>
          <strong>Article 9 condition (UK GDPR):</strong> We process special category data on the basis
          of substantial public interest for social care purposes (Schedule 1, Part 2, paragraph 18 of
          the Data Protection Act 2018), and where necessary to protect your vital interests.
        </PolicyP>

        <CollectionPurpose
          title="Safeguarding and public protection"
          intro="We collect or use the following information for safeguarding or public protection reasons:"
          items={[
            "Name, address and contact details",
            "Emergency contact details",
            "Health information (including medical conditions, allergies and medical history)",
            "Information about care needs (including disabilities, home conditions and dietary requirements)",
          ]}
          specialCategory="racial or ethnic origin; health information."
          article9="Substantial public interest — safeguarding of children and individuals at risk (Schedule 1, Part 2, paragraph 18, DPA 2018), and vital interests where there is an urgent risk to life."
        />

        <CollectionPurpose
          title="Prevention, detection, investigation or prosecution of crimes"
          intro="We collect or use the following personal information for crime prevention and detection purposes:"
          items={[
            "Name, address and contact details",
            "Witness statements and contact details",
            "Relevant information from previous investigations",
            "Financial information (e.g. for fraud prevention or detection)",
          ]}
          specialCategory="racial or ethnic origin; religious or philosophical beliefs; health information."
          article9="Substantial public interest — prevention or detection of unlawful acts (Schedule 1, Part 2, paragraph 10, DPA 2018)."
        />

        <CollectionPurpose
          title="Complying with legal requirements"
          intro="We collect or use the following personal information to comply with our legal obligations:"
          items={[
            "Name and contact information",
            "Financial information",
            "Right to work documentation",
            "Tax information",
            "Safeguarding information",
          ]}
          specialCategory="health information."
          article9="Legal obligation / substantial public interest (Schedule 1, Part 2, paragraph 6, DPA 2018)."
        />

        <CollectionPurpose
          title="Recruitment purposes"
          intro="We collect or use the following personal information for recruitment of companions and staff:"
          items={["Contact details (name, address, telephone number or personal email address)"]}
          specialCategory="racial or ethnic origin; religious or philosophical beliefs; health information."
          article9="Explicit consent of the data subject, or substantial public interest for equality of opportunity monitoring (Schedule 1, Part 2, paragraph 8, DPA 2018)."
        />

        <CollectionPurpose
          title="Dealing with queries, complaints or claims"
          intro="We collect or use the following personal information to handle queries, complaints and legal claims:"
          items={[
            "Names and contact details",
            "Addresses",
            "Payment details",
            "Service history",
            "Witness statements and contact details",
            "Relevant information from previous investigations",
            "Information relating to health and safety (including incident investigation details and accident records)",
            "Correspondence",
          ]}
          specialCategory="racial or ethnic origin; health information."
          article9="Legal claims / substantial public interest (Schedule 1, Part 2, paragraph 18, DPA 2018)."
        />

        <PolicyH2>Lawful bases and data protection rights</PolicyH2>
        <PolicyP>
          Under UK data protection law, we must have a lawful basis for collecting and using your
          personal information. You can find out more about lawful bases on the ICO&apos;s website at{" "}
          <a href="https://ico.org.uk" className={LINK} target="_blank" rel="noopener noreferrer">
            ico.org.uk
          </a>
          .
        </PolicyP>
        <PolicyP>Which lawful basis we rely on may affect your data protection rights, which are set out briefly below:</PolicyP>
        <PolicyUl
          items={[
            "Your right of access — you have the right to ask us for copies of your personal information.",
            "Your right to rectification — you have the right to ask us to correct or delete information you think is inaccurate or incomplete.",
            "Your right to erasure — you have the right to ask us to delete your personal information.",
            "Your right to restriction of processing — you have the right to ask us to limit how we use your information.",
            "Your right to object to processing — you have the right to object to the processing of your personal data.",
            "Your right to data portability — you have the right to ask us to transfer your information to another organisation or to you.",
            "Your right to withdraw consent — where we rely on consent, you have the right to withdraw it at any time.",
          ]}
        />
        <PolicyP>
          If you make a request, we must respond to you without undue delay and in any event within one
          month. To make a data protection rights request, please contact us using the details at the
          top of this notice.
        </PolicyP>

        <LawfulBasisBlock
          title="Lawful bases for providing companionship and home support services"
          bases={[
            "Contract — we need to collect or use the information to enter into or carry out our service agreement with you.",
            "Legitimate interests — see box below.",
            "Vital interests — where there is an urgent or serious risk to your physical or mental health or wellbeing.",
          ]}
          legitimateInterests="Ensuring the safety and wellbeing of elderly clients during visits; maintaining accurate attendance and geolocation logs to verify that companions have arrived and departed safely; retaining health and care need information to match clients with suitable companions and to respond appropriately in an emergency; and processing next of kin details to enable prompt family communication where a client's welfare is at risk."
        />

        <LawfulBasisBlock
          title="Lawful bases for safeguarding and public protection"
          bases={[
            "Legal obligation — we must collect or use your information to comply with the law.",
            "Legitimate interests — see box below.",
            "Vital interests — where there is an urgent or serious risk to your physical or mental health or wellbeing.",
          ]}
          legitimateInterests="Identifying and responding to signs of abuse, neglect, or exploitation of vulnerable elderly clients; sharing relevant welfare concerns with local authority safeguarding teams, social workers, or emergency services where a client's safety is at serious risk; and maintaining records of safeguarding actions taken to demonstrate our duty of care."
        />

        <LawfulBasisBlock
          title="Lawful bases for prevention, detection and investigation of crime"
          bases={[
            "Legal obligation — we must collect or use your information to comply with the law.",
            "Legitimate interests — see box below.",
          ]}
          legitimateInterests="Protecting our business and clients from financial fraud, including verifying payment transactions and detecting unusual billing activity; safeguarding our staff and clients from potential abuse or exploitation; and maintaining records of incidents or concerns to support any future police or regulatory investigation."
        />

        <LawfulBasisBlock
          title="Lawful bases for complying with legal requirements"
          bases={[
            "Legal obligation — we must collect or use your information to comply with the law.",
            "Legitimate interests — see box below.",
          ]}
          legitimateInterests="Maintaining accurate financial and operational records to meet HMRC obligations and Companies Act requirements; retaining contractual records to defend or pursue legal claims within the Limitation Act timeframe; and demonstrating compliance with data protection law through documented policies and procedures."
        />

        <LawfulBasisBlock
          title="Lawful bases for recruitment"
          bases={[
            "Contract — we need to collect or use the information to enter into or carry out an employment or contractor agreement.",
            "Legal obligation — we must collect or use your information to comply with the law (e.g. right to work, DBS checks).",
            "Legitimate interests — see box below.",
          ]}
          legitimateInterests="Assessing the suitability of candidates to work with vulnerable elderly adults; verifying employment history and qualifications relevant to companionship and home support roles; and retaining records of recruitment decisions to respond to any employment or discrimination claims within the statutory limitation period."
        />

        <LawfulBasisBlock
          title="Lawful bases for dealing with queries, complaints and claims"
          bases={[
            "Contract — we need the information to carry out or enforce our service agreement with you.",
            "Legal obligation — we must collect or use your information to comply with the law.",
            "Legitimate interests — see box below.",
          ]}
          legitimateInterests="Investigating and resolving complaints about the quality or conduct of our services; maintaining correspondence records to provide continuity of care and accurate service history; and retaining evidence of decisions made in relation to client or family concerns to protect our business in the event of a legal claim."
        />

        <PolicyH2>Where we get personal information from</PolicyH2>
        <PolicyUl
          items={[
            "Directly from you",
            "Family members or carers",
            "Companions who provide service verification logs, attendance records, and incident reports",
          ]}
        />

        <PolicyH2>How long we keep information</PolicyH2>
        <PolicyP>
          We retain personal information only for as long as is necessary for the purposes set out in
          this notice, or as required by law. Our retention schedule is as follows:
        </PolicyP>
        <RetentionTable />
        <PolicyP>
          For more information on how long we store your personal information, or to request details
          about the criteria we use to determine retention periods, please contact us using the
          details above.
        </PolicyP>

        <PolicyH2>Who we share information with</PolicyH2>
        <h3 className="mb-3 text-lg font-semibold text-[#37352F]">Data processors</h3>
        <PolicyP>We use the following organisations to process personal data on our behalf:</PolicyP>
        <ProcessorTable />

        <h3 className="mb-3 mt-8 text-lg font-semibold text-[#37352F]">
          Others we share personal information with
        </h3>
        <PolicyUl
          items={[
            "Organisations we need to share information with for safeguarding reasons",
            "Emergency services",
            "Professional advisors (e.g. solicitors, accountants)",
            "Organisations we are legally obliged to share personal information with (e.g. HMRC, courts)",
          ]}
        />

        <PolicyH2>Duty of confidentiality</PolicyH2>
        <PolicyP>
          We are subject to a common law duty of confidentiality. However, there are circumstances
          where we will share relevant health and care information:
        </PolicyP>
        <PolicyUl
          items={[
            "Where you have provided us with your consent (implied for care provision, or explicit for other uses);",
            "Where we have a legal requirement (including court orders) to collect, share or use the data;",
            "Where, on a case-by-case basis, the public interest in sharing the data overrides the duty of confidentiality (for example, sharing information with the police to support the detection or prevention of serious crime);",
            "Where the requirements of The Health Service (Control of Patient Information) Regulations 2002 are satisfied.",
          ]}
        />

        <PolicyH2>Data breaches</PolicyH2>
        <PolicyP>
          In the event of a personal data breach that is likely to result in a risk to your rights and
          freedoms, we will notify you without undue delay. Where required, we will also report the
          breach to the Information Commissioner&apos;s Office (ICO) within 72 hours of becoming aware
          of it. We maintain an internal record of all data breaches, including those that do not
          require notification.
        </PolicyP>

        <PolicyH2>Automated decision-making and profiling</PolicyH2>
        <PolicyP>
          We do not carry out any automated decision-making or profiling that produces legal or
          similarly significant effects on you. All decisions relating to your care and service
          provision are made by our staff.
        </PolicyP>

        <PolicyH2>Cookies and our website</PolicyH2>
        <PolicyP>
          Our website (secondspringcompanions.co.uk) may use cookies or similar technologies. Where this
          is the case, we provide a separate{" "}
          <Link href="/cookie-policy" className={LINK}>
            Cookie Policy
          </Link>{" "}
          explaining what cookies we use, why we use them, and how you can manage your preferences. If
          you have questions about our website cookies, please contact us using the details above.
        </PolicyP>

        <PolicyH2>Sharing information outside the UK</PolicyH2>
        <PolicyP>
          Where necessary, our data processors may share personal information outside of the UK. When
          doing so, they comply with the UK GDPR, making sure appropriate safeguards are in place. The
          table below summarises these transfers:
        </PolicyP>
        <InternationalTransferTable />
        <PolicyP>
          For further information or to obtain a copy of the appropriate safeguard for any of the above
          transfers, please contact us using the contact details provided above.
        </PolicyP>

        <PolicyH2>How to complain</PolicyH2>
        <PolicyP>
          If you have any concerns about our use of your personal data, please raise them with us first
          using the contact details at the top of this notice. We will respond promptly and take your
          concerns seriously.
        </PolicyP>
        <PolicyP>If you remain unhappy after raising a complaint with us, you can also complain to the ICO:</PolicyP>
        <address className={cn(BODY, "not-italic")}>
          <strong>Information Commissioner&apos;s Office</strong>
          <br />
          Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
          <br />
          Helpline: 0303 123 1113
          <br />
          Website:{" "}
          <a
            href="https://ico.org.uk/make-a-complaint"
            className={LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            ico.org.uk/make-a-complaint
          </a>
        </address>

        <footer className="mt-12 border-t border-[#3d3b3b]/30 pt-8 text-sm text-[#37352F]/70">
          Second Spring Companions Limited | Version 1.1 | 26 April 2026
        </footer>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
