// Server Components that emit JSON-LD structured data.
//
// Uses dangerouslySetInnerHTML because Next.js sanitizes/escapes children
// inside <script> tags when set as text content; the JSON-LD spec requires
// the JSON to be parseable as-is. We JSON.stringify trusted, hard-coded
// data only — never user input — so this is safe.

const SITE_URL = "https://hitmakerengineering.com";
const ORG_ID = `${SITE_URL}/#organization`;

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "Hitmaker Engineering",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    description:
      "Senior consulting engineering for medical devices and combination products. Design controls, regulatory & quality (FDA 21 CFR 820/Part 4, ISO 13485, ISO 14971, IEC 62366), program leadership, and human-centered design.",
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "Medical Device Design Engineering",
      "Combination Products Consulting",
      "Regulatory and Quality Consulting",
      "Program Leadership",
      "Human-Centered Design",
    ],
    knowsAbout: [
      "FDA 21 CFR 820",
      "FDA 21 CFR Part 4",
      "ISO 13485",
      "ISO 14971",
      "IEC 62366",
      "Design Controls",
      "Risk Management",
      "Human Factors Engineering",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Professional Engineer (PE)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Lean Six Sigma",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Project Management Professional (PMP)",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_URL}/contact`,
      areaServed: "US",
      availableLanguage: "English",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type BreadcrumbItem = {
  name: string;
  url: string; // absolute or path; will be normalized to absolute
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type ServiceJsonLdProps = {
  name: string;
  slug: string; // path, e.g. "/services/regulatory-quality"
  description: string;
  serviceType: string;
  audienceType?: string;
};

export function ServiceJsonLd({
  name,
  slug,
  description,
  serviceType,
  audienceType = "Medical device and combination product companies",
}: ServiceJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: `${SITE_URL}${slug}`,
    description,
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "Audience", audienceType },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type FaqItem = { question: string; answer: string };

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
