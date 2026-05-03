import type { MetadataRoute } from "next";
import { publishedInsights } from "@/lib/insights";

const BASE = "https://hitmakerengineering.com";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/services/user-research", priority: 0.9 },
  { path: "/services/ideation-strategy", priority: 0.9 },
  { path: "/services/design-engineering", priority: 0.9 },
  { path: "/services/design-controls", priority: 0.9 },
  { path: "/services/manufacturing-transfer", priority: 0.9 },
  { path: "/services/sustaining-engineering", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, priority }) => ({
      url: `${BASE}${path}`,
      lastModified,
      changeFrequency: "monthly",
      priority,
    }),
  );

  // Only include published insight slugs. Drafts are noindex and excluded.
  const insightEntries: MetadataRoute.Sitemap = publishedInsights().map(
    (insight) => ({
      url: `${BASE}/insights/${insight.slug}`,
      lastModified: insight.updatedAt
        ? new Date(insight.updatedAt)
        : new Date(insight.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [...staticEntries, ...insightEntries];
}
