// Public registry of /insights articles. Each article lives under
// `lib/insights/articles/<slug>.tsx` and contributes both metadata and the
// rendered body. To publish, set `status: "published"` on the article and
// ensure `publishedAt` is real.
//
// `status: "draft"` articles render with `<meta name="robots" content="noindex">`,
// are excluded from the sitemap, and don't appear in the RSS feed.

import type { ComponentType } from "react";
import type { FaqItem } from "@/components/JsonLd";

import * as breakdown from "./articles/why-medical-device-development-breaks-down";
import * as cfrPart4 from "./articles/21-cfr-part-4-where-combination-products-stall";
import * as userResearchToReqs from "./articles/user-research-to-verifiable-requirements";
import * as mfgTransfer from "./articles/manufacturing-transfer-readiness";
import * as designControlsAudit from "./articles/design-controls-that-survive-audit";
import * as iso14971 from "./articles/iso-14971-risk-file-architecture";

export type InsightStatus = "draft" | "published";

export type Insight = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  status: InsightStatus;
  excerpt: string;
  // Optional list of secondary keywords. Used for meta keywords on the
  // article and for internal link surfaces.
  keywords?: readonly string[];
  // Reading time in minutes. Computed by hand at publish time so we can avoid
  // shipping a word counter into the bundle.
  readingMinutes?: number;
};

export type TocEntry = { id: string; label: string };

export type ArticleModule = {
  meta: Insight;
  Body: ComponentType;
  faqs?: readonly FaqItem[];
  tableOfContents?: readonly TocEntry[];
  // Optional HowTo schema for practitioner-style articles.
  howTo?: {
    name: string;
    description: string;
    steps: readonly { name: string; text: string }[];
    totalTime?: string; // ISO 8601 duration, e.g. "PT2H"
  };
};

const articles: ArticleModule[] = [
  breakdown,
  cfrPart4,
  userResearchToReqs,
  mfgTransfer,
  designControlsAudit,
  iso14971,
];

export const insights: Insight[] = articles.map((a) => a.meta);

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

export function findArticle(slug: string): ArticleModule | undefined {
  return articles.find((a) => a.meta.slug === slug);
}

// For internal-link surfaces. Returns up to `limit` other published articles
// with at least one shared topic keyword, ranked by recency.
export function relatedInsights(slug: string, limit = 3): Insight[] {
  const current = findInsight(slug);
  if (!current) return [];
  const currentTopic = current.topic.toLowerCase();
  return publishedInsights()
    .filter((i) => i.slug !== slug)
    .sort((a, b) => {
      const sameTopicA = a.topic.toLowerCase() === currentTopic ? 1 : 0;
      const sameTopicB = b.topic.toLowerCase() === currentTopic ? 1 : 0;
      if (sameTopicA !== sameTopicB) return sameTopicB - sameTopicA;
      return b.publishedAt.localeCompare(a.publishedAt);
    })
    .slice(0, limit);
}
