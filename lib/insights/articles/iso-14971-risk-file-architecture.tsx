import type { ArticleModule } from "../index";

export const meta: ArticleModule["meta"] = {
  slug: "iso-14971-risk-file-architecture",
  title: "ISO 14971:2019 risk-file architecture",
  description:
    "How to structure a risk management file so hazard analysis, risk-control evidence, and post-production input integrate cleanly with design controls. (Coming soon.)",
  topic: "Regulatory & Quality",
  publishedAt: "2026-05-02",
  status: "draft",
  excerpt:
    "ISO 14971 is structurally simple. Implementations get complex because the risk-control traceability gets duplicated across the risk file, design history file, and verification/validation evidence — when it should live in one place and be referenced everywhere else. Full piece coming soon.",
};

export function Body() {
  return null;
}
