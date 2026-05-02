// Registry of /insights articles. Add a new entry here to publish an article.
//
// `status: "draft"` articles render with `<meta name="robots" content="noindex">`,
// are excluded from the sitemap, and don't appear in the RSS feed.
//
// To publish: set status to "published" and ensure publishedAt is real.

export type InsightStatus = "draft" | "published";

export type Insight = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  status: InsightStatus;
  // Body is JSX; lib is server-only so we keep it as a function returning a
  // React node to avoid forcing every consumer to import all article bodies.
  excerpt: string;
};

export const insights: Insight[] = [
  {
    slug: "21-cfr-part-4-where-combination-products-stall",
    title:
      "21 CFR Part 4 in practice: where combination-product programs actually stall",
    description:
      "A working note on the three places combination-product programs tend to stall under FDA 21 CFR Part 4 — and how to architect around them. (Coming soon.)",
    topic: "Combination Products",
    publishedAt: "2026-05-02",
    status: "draft",
    excerpt:
      "Combination-product programs rarely stall on the regulation itself. They stall on the interfaces — between device design controls and drug CGMP, between human factors evidence and the use-related risk file, and between change-control logic and the constituent the change actually touches. Full piece coming soon.",
  },
  {
    slug: "iso-14971-risk-file-architecture",
    title: "ISO 14971:2019 risk-file architecture",
    description:
      "How to structure a risk management file so hazard analysis, risk-control evidence, and post-production input integrate cleanly with design controls. (Coming soon.)",
    topic: "Regulatory & Quality",
    publishedAt: "2026-05-02",
    status: "draft",
    excerpt:
      "ISO 14971 is structurally simple. Implementations get complex because the risk-control traceability gets duplicated across the risk file, design history file, and verification/validation evidence — when it should live in one place and be referenced everywhere else. Full piece coming soon.",
  },
];

export function publishedInsights(): Insight[] {
  return insights
    .filter((i) => i.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function allInsightsForListing(): Insight[] {
  // Includes drafts so the index page can show "Coming soon" entries.
  return [...insights].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function findInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
