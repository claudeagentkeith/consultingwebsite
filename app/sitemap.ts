import type { MetadataRoute } from "next";

const BASE = "https://hitmakerengineering.com";

const ROUTES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/services/regulatory-quality", priority: 0.9 },
  { path: "/services/program-leadership", priority: 0.9 },
  { path: "/services/combination-products", priority: 0.9 },
  { path: "/services/design-engineering", priority: 0.9 },
  { path: "/services/human-centered-design", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
