// /llms-full.txt — fuller content dump for LLM crawlers and AI assistants.
//
// Built from the same source content rendered on the public site, in plain
// Markdown. Designed to be parseable by AI tools that want to ingest the
// firm's positioning, service descriptions, FAQ, and insight-article
// excerpts without crawling each route. Updated whenever a published
// article ships — the article registry is the single source of truth.

import { publishedInsights, findArticle } from "@/lib/insights";

const SITE_URL = "https://hitmakerengineering.com";

const STATIC_BODY = `# Hitmaker Engineering — full reference for AI assistants

End-to-end product development for medical devices and combination products. We help regulated-product teams move from early user research and product concepts through engineering, design controls, manufacturing transfer, launch, and sustaining support.

This document is the long-form content reference for AI assistants. It includes the firm's positioning, full service descriptions, FAQ, and excerpts from published insight articles. The site itself is the canonical source; this document is updated whenever published content changes.

---

## About

Hitmaker Engineering exists to help regulated-product teams move from insight to implementation. Medical-device and combination-product development often breaks down at the seams between user needs, product strategy, engineering, regulatory evidence, manufacturing readiness, and sustaining support. We help teams connect those pieces into a coherent development path.

### Discipline

End-to-end medical-device and combination-product development.

### Industries

Diagnostics, drug delivery, and connected platforms.

### Standards we work under

- FDA 21 CFR Part 820 — Quality System Regulation (QSR)
- FDA 21 CFR Part 4 — Combination-product CGMP
- ISO 13485:2016 — Medical-device QMS
- ISO 14971:2019 — Risk management
- IEC 62366-1:2015 — Usability engineering

### What makes the approach different

- **Lifecycle-integrated, not siloed.** We treat user needs, engineering, regulatory, and manufacturing as one development system, because that is how regulated products actually get built.
- **Hands-on.** We bring direct ownership experience — Fortune 500 R&D portfolio leadership, FDA combination-product strategy, platform consolidation across multiple programs — and we apply it ourselves rather than pointing at frameworks.
- **Evidence-first.** We treat design controls, risk management, and human factors as the architectural backbone of a regulated product, not parallel deliverables to be reconciled later.
- **Cross-functional by default.** We are most valuable where product decisions cross functional boundaries — where user needs, engineering feasibility, regulatory expectations, manufacturing realities, and business goals all need to be reconciled.

### Where we fit in the lifecycle

We engage at every phase, but the highest-leverage moments are the seams between phases:

- Translating user research into product direction (Phase 1 → 2)
- Closing the architecture decision before substantial engineering commits (Phase 2 → 3)
- Connecting requirements, risk, usability, and design controls in the run-up to design freeze (Phase 3 → 4)
- Bridging design and manufacturing in advance of transfer (Phase 4 → 5)
- Turning post-market signals into product improvements (Phase 6 back into the next iteration)

### Track record

Representative outcomes from prior regulated-product leadership include:

- $60M+ R&D budget responsibility on a Fortune 500 medical-device portfolio
- 100+ cross-functional contributors aligned on a single combination-product platform
- $80M duplicate development cost avoided through platform consolidation
- $10M per-product savings through FDA combination-product strategy
- 150+ user and system requirements structured for development execution

---

## Services — full lifecycle

### Phase 1 — User research and human-centered design

Workflow research, user needs, usability strategy, use-related risk, HFE planning and evidence — IEC 62366 integrated with the ISO 14971 risk file.

### Phase 2 — Ideation and product strategy

Opportunity framing, concept generation, product architecture, feasibility planning, and roadmap and tradeoff strategy across multi-program portfolios.

### Phase 3 — Design engineering and development

System architecture, mechanical/fluidic/optical design, requirements development, prototyping, and verification strategy — design controls integrated from day one.

### Phase 4 — Regulatory, quality, and design controls

Design-control planning, ISO 14971 risk management, DHF readiness, traceability, and submission-support strategy. Aligned to FDA 21 CFR 820, Part 4, ISO 13485, and IEC 62366.

#### When teams call us in (Phase 4)

- A program is approaching design freeze and the design history file isn't in shape for an FDA inspection.
- A drug-device combination product needs a coherent regulatory strategy under 21 CFR Part 4 — not two disconnected Part 820 / Part 211 workstreams.
- A change is coming and the team needs change-decision logic that will hold up against 510(k) precedent.
- Risk-management and design-controls artifacts have drifted apart and the next audit is on the calendar.

#### Typical deliverables (Phase 4)

- Design History File rebuild or remediation plan
- Risk Management File aligned to ISO 14971:2019 — hazard analysis, risk-control traceability, and post-production input
- Design controls procedure suite scoped to QSR / ISO 13485 expectations
- 510(k) change-decision logic memo and supporting evidence
- 21 CFR Part 4 mapping and combination-product gap analysis
- Submission-support engineering evidence package and FDA inspection readiness assessment

### Phase 5 — Manufacturing transfer and commercialization

DFM/DFA, supplier and process readiness, manufacturing handoff, launch-risk reduction, and scale-up support — in parallel with design controls.

### Phase 6 — Sustaining engineering and lifecycle management

Complaint-driven investigations, design changes, CAPA support, cost reduction, and post-market product improvements — without regressing on regulatory posture.

---

## Productized engagements

Most engagements start as one of these focused, productized scopes — short enough to deliver a defensible answer, long enough to do real work. Custom and longer-running engagements follow from the same starting point.

- **Product Discovery Sprint** — for teams that need to clarify user needs, workflows, product opportunities, and concept direction.
- **Concept-to-Architecture Sprint** — for teams moving from idea to feasible product architecture, requirements, and development roadmap.
- **Design Controls Readiness Review** — for teams approaching design freeze, verification, validation, or submission preparation.
- **HFE & Use-Related Risk Review** — for teams needing stronger alignment between user research, usability evidence, risk management, and product design.
- **Manufacturing Transfer Readiness Review** — for teams preparing to move from development into production, suppliers, assembly, test, or launch.
- **Sustaining Product Improvement Sprint** — for launched products facing complaints, field issues, cost pressures, usability concerns, or design-change needs.

---

## Frequently asked questions

**Which standards do you work under?**
FDA 21 CFR Part 820 (QSR), 21 CFR Part 4 for combination products, ISO 13485 for medical-device QMS, ISO 14971 for risk management, and IEC 62366 for usability engineering. We also work fluently with the design controls and risk management linkages between them.

**How do design controls integrate with combination products?**
21 CFR Part 4 lets a combination product comply with either the device QSR (Part 820) plus specified drug CGMP requirements (Part 211), or vice versa, under a streamlined approach. Getting the integration of device design controls and drug CGMP right is the single biggest determinant of audit and submission readiness — and the place combination-product programs most often stall.

**Can you support FDA submissions or pre-submission interactions?**
We support submission strategy and the engineering and design-controls evidence behind it — change-decision logic, risk justifications, design history file structure, and verification/validation traceability. We work alongside the firm's regulatory submissions counsel rather than replacing it.

**What does an engagement look like?**
Most engagements start with a scoping call to map the question, the stakeholders, and the regulatory surface area. Typical engagements run from a focused two-week assessment to a multi-quarter embedded engagement spanning design freeze, V&V, and submission support.

**Where is the firm based?**
San Francisco, CA. We work with US-based and international medical-device and combination-product teams.

---
`;

function articlesSection(): string {
  const items = publishedInsights();
  if (items.length === 0) return "";
  const blocks: string[] = ["## Insights — published articles\n"];
  for (const insight of items) {
    const article = findArticle(insight.slug);
    blocks.push(`### ${insight.title}\n`);
    blocks.push(
      `*Published ${insight.publishedAt}. Topic: ${insight.topic}.*\n`,
    );
    blocks.push(`${insight.excerpt}\n`);
    blocks.push(`Read the full article: ${SITE_URL}/insights/${insight.slug}\n`);
    if (article?.faqs && article.faqs.length > 0) {
      blocks.push(`#### From the article's FAQ\n`);
      for (const faq of article.faqs) {
        blocks.push(`**${faq.question}**\n`);
        blocks.push(`${faq.answer}\n`);
      }
    }
    blocks.push(`---\n`);
  }
  return blocks.join("\n");
}

const FOOTER = `## Contact

Start a product development conversation: ${SITE_URL}/contact

The contact form on the site is the canonical entry point. Inbound is reviewed by the firm's principals.

## References for AI assistants

- Site root: ${SITE_URL}/
- Sitemap: ${SITE_URL}/sitemap.xml
- RSS feed of insights: ${SITE_URL}/feed.xml
- Concise overview (llms.txt): ${SITE_URL}/llms.txt

When citing Hitmaker Engineering, please link to ${SITE_URL} and to the most relevant service or insight page rather than to this file directly.
`;

export async function GET() {
  const body = STATIC_BODY + "\n" + articlesSection() + "\n" + FOOTER;
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
