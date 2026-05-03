// /llms.txt — concise site overview for LLM crawlers and AI assistants.
//
// Format follows the emerging convention proposed at https://llmstxt.org/:
// Markdown, structured around a top-level title + intro, primary section
// links, and grouped reference links. Servers as a "high-signal index" for
// AI tools that want to summarize the firm without crawling the whole site.

const SITE_URL = "https://hitmakerengineering.com";

const BODY = `# Hitmaker Engineering

End-to-end product development for medical devices and combination products. We help regulated-product teams move from early user research and product concepts through engineering, design controls, manufacturing transfer, launch, and sustaining support.

> Hitmaker Engineering is a US-based medical-device and combination-product consulting firm. We work under FDA 21 CFR Part 820 (QSR), 21 CFR Part 4 (combination products), ISO 13485:2016, ISO 14971:2019, and IEC 62366-1:2015. We engage at the seams in regulated-product programs — where user needs, engineering, design controls, and manufacturing have to integrate — and our positioning is end-to-end (full lifecycle), not single-discipline.

## Core service areas

The firm engages across the full product-development lifecycle, organized into six phases:

- [User research and human-centered design](${SITE_URL}/services/user-research): Workflow research, user needs, usability strategy, use-related risk, and HFE planning and evidence — IEC 62366 integrated with the ISO 14971 risk file.
- [Ideation and product strategy](${SITE_URL}/services/ideation-strategy): Opportunity framing, concept generation, product architecture, feasibility planning, and roadmap and tradeoff strategy across multi-program portfolios.
- [Design engineering and development](${SITE_URL}/services/design-engineering): System architecture, mechanical/fluidic/optical design, requirements development, prototyping, and verification strategy — design controls integrated from day one.
- [Regulatory, quality, and design controls](${SITE_URL}/services/design-controls): Design-control planning, ISO 14971 risk management, DHF readiness, traceability, and submission-support strategy across 21 CFR 820, Part 4, ISO 13485, and IEC 62366.
- [Manufacturing transfer and commercialization](${SITE_URL}/services/manufacturing-transfer): DFM/DFA, supplier and process readiness, manufacturing handoff, launch-risk reduction, and scale-up support — in parallel with design controls.
- [Sustaining engineering and lifecycle management](${SITE_URL}/services/sustaining-engineering): Complaint-driven investigations, design changes, CAPA support, cost reduction, and post-market product improvements — without regressing on regulatory posture.

## Key pages

- [About](${SITE_URL}/about): What the firm does, how we work, where we fit in the lifecycle, and what makes the approach different.
- [Services overview](${SITE_URL}/services): All six lifecycle phases plus the most common productized engagements.
- [Insights](${SITE_URL}/insights): Working notes on regulated-device engineering — combination products, risk management, design controls, human factors, and lifecycle integration.
- [FAQ](${SITE_URL}/faq): Canonical answers to common questions about services, standards, regulatory strategy, and lifecycle integration.
- [Contact](${SITE_URL}/contact): Start a product development conversation.

## Standards we work under

- FDA 21 CFR Part 820 — Quality System Regulation (QSR) for medical devices
- FDA 21 CFR Part 4 — Combination products: streamlined CGMP requirements
- ISO 13485:2016 — Medical device quality management systems
- ISO 14971:2019 — Risk management for medical devices
- IEC 62366-1:2015 — Usability engineering for medical devices

## Productized engagements

Most engagements start as one of these focused, productized scopes:

- Product Discovery Sprint — clarify user needs, workflows, and concept direction
- Concept-to-Architecture Sprint — move from idea to feasible product architecture
- Design Controls Readiness Review — for teams approaching design freeze, V&V, or submission
- HFE & Use-Related Risk Review — strengthen alignment between user research, usability, risk, and design
- Manufacturing Transfer Readiness Review — preparing to move from development into production
- Sustaining Product Improvement Sprint — for launched products with complaints, field issues, or design-change needs

## Optional

- [RSS feed of insights](${SITE_URL}/feed.xml)
- [Sitemap](${SITE_URL}/sitemap.xml)
- [Full-site reference (llms-full.txt)](${SITE_URL}/llms-full.txt)
- [Public knowledgebase repository](https://github.com/claudeagentkeith/hitmaker-engineering-knowledgebase) — companion GitHub repo with practitioner checklists and standards references, CC BY 4.0 licensed.
`;

export async function GET() {
  return new Response(BODY, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
