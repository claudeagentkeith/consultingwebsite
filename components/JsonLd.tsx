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
      "End-to-end product development for medical devices and combination products. User research, ideation, design and engineering, design controls and risk management (FDA 21 CFR 820/Part 4, ISO 13485, ISO 14971, IEC 62366), manufacturing transfer and commercialization, and sustaining engineering.",
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: [
      "User Research and Human-Centered Design",
      "Ideation and Product Strategy",
      "Design Engineering and Development",
      "Regulatory, Quality and Design Controls",
      "Manufacturing Transfer and Commercialization",
      "Sustaining Engineering and Lifecycle Management",
    ],
    knowsAbout: [
      "Medical Device Product Development",
      "Combination Product Development",
      "FDA 21 CFR 820",
      "FDA 21 CFR Part 4",
      "ISO 13485",
      "ISO 14971",
      "IEC 62366",
      "Design Controls",
      "Risk Management",
      "Human Factors Engineering",
      "Manufacturing Transfer",
      "Sustaining Engineering",
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

// Optional CSS selectors for Speakable. When provided, the FAQPage emits a
// SpeakableSpecification so Google Assistant / voice surfaces will read the
// FAQ aloud. The selectors should target the on-page FAQ content.
export type SpeakableSelector = {
  cssSelector?: readonly string[];
  xpath?: readonly string[];
};

export function FaqJsonLd({
  items,
  speakable,
}: {
  items: FaqItem[];
  speakable?: SpeakableSelector;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
  if (speakable && (speakable.cssSelector?.length || speakable.xpath?.length)) {
    data.speakable = {
      "@type": "SpeakableSpecification",
      ...(speakable.cssSelector?.length
        ? { cssSelector: [...speakable.cssSelector] }
        : {}),
      ...(speakable.xpath?.length ? { xpath: [...speakable.xpath] } : {}),
    };
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type ArticleJsonLdProps = {
  headline: string;
  description: string;
  slug: string; // path, e.g. "/insights/article-slug"
  datePublished: string; // ISO date
  dateModified?: string; // ISO date
  keywords?: readonly string[];
  articleSection?: string;
  // Optional Speakable specification — adds voice-assistant signal that
  // certain on-page sections are summary-quality.
  speakable?: SpeakableSelector;
};

export function ArticleJsonLd({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  keywords,
  articleSection,
  speakable,
}: ArticleJsonLdProps) {
  const url = `${SITE_URL}${slug}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en-US",
    // Author and publisher are both the firm — no personal byline.
    author: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Hitmaker Engineering",
      url: SITE_URL,
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE_URL}/opengraph-image`,
  };
  if (keywords?.length) data.keywords = keywords.join(", ");
  if (articleSection) data.articleSection = articleSection;
  if (speakable && (speakable.cssSelector?.length || speakable.xpath?.length)) {
    data.speakable = {
      "@type": "SpeakableSpecification",
      ...(speakable.cssSelector?.length
        ? { cssSelector: [...speakable.cssSelector] }
        : {}),
      ...(speakable.xpath?.length ? { xpath: [...speakable.xpath] } : {}),
    };
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export type HowToStep = { name: string; text: string };

export function HowToJsonLd({
  name,
  description,
  steps,
  totalTime,
}: {
  name: string;
  description: string;
  steps: readonly HowToStep[];
  totalTime?: string; // ISO 8601 duration
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
  if (totalTime) data.totalTime = totalTime;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// WebSite schema with SearchAction — gives Google a hint about a site search
// box and gives AI assistants a structured pointer for "how to query this
// site". The site itself does not yet host an internal search; we point the
// SearchAction at Google's site-search URL as a fallback discovery surface
// that AI tools can call.
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Hitmaker Engineering",
    description:
      "End-to-end product development for medical devices and combination products.",
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `https://www.google.com/search?q=site%3Ahitmakerengineering.com+{search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
