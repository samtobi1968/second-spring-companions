export type DataRetentionRow = {
  category: string;
  retentionPeriod: string;
  reason: string;
};

export type DataProcessorRow = {
  organisation: string;
  purpose: string;
};

export type InternationalTransferRow = {
  organisation: string;
  category: string;
  country: string;
  safeguard: string;
};

export const DATA_RETENTION_ROWS: DataRetentionRow[] = [
  {
    category: "Financial Records (invoices, bank statements, tax receipts)",
    retentionPeriod: "6 years after financial year end",
    reason: "Required for HMRC tax audits and Companies Act 2006",
  },
  {
    category: "Client Care Records (care plans, matching profiles, daily visit notes)",
    retentionPeriod: "6 years after service ends",
    reason: "Matches the Limitation Act 1980 for contract or negligence claims",
  },
  {
    category: "Safeguarding Records (incident reports, welfare concerns)",
    retentionPeriod: "6 years from last contact",
    reason:
      "Recommended for adult social care to ensure evidence is available for inquiries",
  },
  {
    category: "Recruitment Records (CVs and interview notes for unsuccessful candidates)",
    retentionPeriod: "6 months after decision",
    reason: "Allows time for potential discrimination claims",
  },
  {
    category: "Employee Records (contracts, DBS check numbers, training logs)",
    retentionPeriod: "6 years after leaving employment",
    reason: "Necessary for references, pension queries, and PAYE compliance",
  },
  {
    category: "Communication Logs (emails/messages with families and clients)",
    retentionPeriod: "3 years after query resolved",
    reason: "Kept for service quality and history of care provided",
  },
];

export const DATA_PROCESSOR_ROWS: DataProcessorRow[] = [
  {
    organisation: "Tally",
    purpose: "Catching and filtering website form submissions.",
  },
  {
    organisation: "Notion",
    purpose: "Secure cloud storage of records and professional email communication.",
  },
  {
    organisation: "Tide Platform",
    purpose: "Managing our business banking and generating invoices for services rendered.",
  },
  {
    organisation: "WhatsApp (Meta)",
    purpose:
      "Encrypted, real-time operational communication between our staff and client families.",
  },
];

export const INTERNATIONAL_TRANSFER_ROWS: InternationalTransferRow[] = [
  {
    organisation: "Tally",
    category: "Website Form & Data Collection Processor",
    country: "European Union",
    safeguard: "UK Addendum to EU Standard Contractual Clauses (SCCs)",
  },
  {
    organisation: "WhatsApp (Meta)",
    category: "Encrypted Operational Communication Platform",
    country: "United States & other countries",
    safeguard: "UK International Data Transfer Addendum (IDTA) to EU SCCs",
  },
  {
    organisation: "Notion",
    category: "Cloud Storage and Records Platform",
    country: "United States",
    safeguard: "Standard Contractual Clauses (SCCs) / UK IDTA",
  },
];

export const PRIVACY_CONTACT_EMAIL = "info@secondspringcompanions.co.uk";
