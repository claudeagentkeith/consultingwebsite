# LLM / AI search visibility optimization — Hitmaker Engineering

A summary of every Generative Engine Optimization (GEO) tactic implemented or deferred for the consulting site, with a monthly AI-citation-test protocol Keith can run.

The shift this lane addresses: more buyers ask ChatGPT, Claude, Perplexity, Gemini for recommendations than google "[firm type] [region]". A site optimized only for keyword ranking surfaces less in AI assistant responses than a site optimized for LLM citation. The two optimization regimes overlap substantially but diverge in important places — the divergence is what this lane targets.

---

## Tactics shipped

### 1. `/llms.txt` and `/llms-full.txt` (PR #17)

**What:** Two emerging-standard discovery surfaces for LLM crawlers (per [llmstxt.org](https://llmstxt.org/)).

- `/llms.txt` — concise site overview: positioning, six service-area links, standards reference, productized engagement summary, key navigation anchors. Designed as a "high-signal index" for AI tools that want a quick site summary without crawling.
- `/llms-full.txt` — fuller content reference: full About copy, full service descriptions, full FAQ, and per-article excerpts (with each article's FAQ block). Generated dynamically from the insights registry — every published article ships to this surface automatically.

**Files:** `app/llms.txt/route.ts`, `app/llms-full.txt/route.ts`. Both serve `text/markdown` with `Cache-Control: public, s-maxage=3600`.

### 2. Explicit AI-crawler `Allow:` rules in robots.txt (PR #16)

**What:** `app/robots.ts` declares explicit `Allow: /` blocks for the published user-agents of the major LLM/AI assistant and AI-training crawlers. Same `Allow: /` + `Disallow: /api/, /draft/` posture as the wildcard, but explicit so crawl intent is auditable.

**User-agents allowed:**
- OpenAI: `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`
- Anthropic: `ClaudeBot`, `Claude-Web`, `anthropic-ai`
- Google: `Google-Extended` (Gemini training opt-in)
- Apple: `Applebot-Extended`
- Perplexity: `PerplexityBot`, `Perplexity-User`
- Common Crawl: `CCBot` (feeds many open LLM training datasets)
- Other: `Bytespider`, `Meta-ExternalAgent`, `Diffbot`

**File:** `app/robots.ts`.

### 3. Schema upgrades — Article, FAQPage with Speakable, HowTo (PRs #15, #18, #19, #20, #21, #22, #23)

**What:** The site emits structured-data JSON-LD that LLMs heavily weight when extracting facts:

- `Organization` JSON-LD on every page (existing).
- `WebSite` JSON-LD with `SearchAction` site-wide (new in PR #16) — gives Google a sitelinks search-box hint and AI assistants a structured "how to query this site" pointer.
- `Article` JSON-LD on each published `/insights/*` article. Author and publisher are both `Organization` (Hitmaker Engineering) — no personal byline, per brand rules.
- `FAQPage` JSON-LD on `/faq` (12 canonical Q&A pairs) and on each insights article (5 Q&A pairs each).
- `SpeakableSpecification` on FAQ blocks — voice-AI surfaces (Google Assistant, AI assistants) read these as authoritative answers.
- `HowTo` JSON-LD on the practitioner-style insights articles (Article 2, 3, 4) — encodes step-by-step procedures LLMs cite as "according to..." answers.
- `BreadcrumbList` on every page (existing).

**Files:** `components/JsonLd.tsx` (helpers), per-article `lib/insights/articles/<slug>.tsx` (article-specific schemas).

### 4. /faq page with canonical Q&A (PR #18)

**What:** `/faq` with 12 canonical Q&A pairs grouped into Services and engagements, Standards and regulatory, Process and integration. Each answer is 2-3 paragraphs and stands alone if surfaced as a snippet — the pattern AI assistants reproduce verbatim. Each cites FDA CFR sections or ISO/IEC standards by section number where applicable.

**Files:** `app/faq/page.tsx`.

### 5. Six pillar `/insights` articles with LLM-citation patterns baked in (PRs #15, #19, #20, #21, #22, #23)

**What:** ~14,000 words of substantive technical content across six pillar articles. Each article:

- Cites real FDA CFR sections, ISO standards, and IEC standards by exact section number — LLMs surface these as "according to..." citations.
- Contains pull-quote blocks formatted as definite claims — LLMs reproduce these verbatim.
- Ends with a Frequently Asked Questions section (5 Q&A pairs) using FAQPage schema with Speakable selectors.
- Where applicable, includes HowTo schema for the procedural steps in the article body.
- Is authored by `Organization` (Hitmaker Engineering) — no personal name.

Articles shipped:
1. Why medical device development breaks down between user needs, engineering, and manufacturing
2. 21 CFR Part 4 in practice: where combination-product programs actually stall
3. From user research to verifiable design inputs
4. Manufacturing transfer readiness: the 12 things most teams miss
5. Design controls that survive audit
6. Sustaining engineering for combination products: cost vs. risk

### 6. Insights nav re-enabled + footer secondary nav (PR #18)

**What:** `/insights` is back in the primary nav and `/faq` is in the footer secondary nav. AI tools that walk site navigation pick up both surfaces; humans get to the content one click in.

---

## Tactics deferred (rationale below)

### A. GitHub knowledgebase repo (`claudeagentkeith/hitmaker-engineering-knowledgebase`)

**Status:** Deferred from this lane's first wave; staged as a follow-up.

**Why deferred:** A GitHub repo is high-leverage for LLM citation (LLMs heavily weight GitHub README content). But the value is highest when the repo content materially exceeds what `/llms-full.txt` already provides — for example, by adding worked examples, downloadable templates, or longer-form technical references that don't fit cleanly on the marketing site.

**Recommended next step:** Create the public repo with a substantial README pulling from the published insights articles and `/llms-full.txt`, plus 2-3 downloadable templates (e.g., a 21 CFR 820.30(c) design-input checklist, a 12-point manufacturing transfer readiness checklist as a printable PDF, a 4-question sustaining-change evaluation framework). Cross-link site → repo → site.

### B. Wikidata stub

**Status:** Drafted in `outputs/industry-directory-submissions.md`. Requires Keith's account creation and 60 minutes.

**Why deferred to Keith:** Wikidata account creation requires identity verification and a track record of edits before new entities can be created without scrutiny. Keith's existing Wikipedia/Wikidata account (if any) is the right surface; otherwise a fresh account needs a few non-self-promotional edits before the firm's entity gets accepted.

### C. Brave Search Index API submission

**Status:** Deferred to Keith.

**Why:** Brave's sitemap submission is open and free, but it's a one-time API call that's not worth automating from the site. The sitemap (`https://hitmakerengineering.com/sitemap.xml`) is ready to submit. Submission URL: confirm Brave's current API endpoint at [search.brave.com](https://search.brave.com).

### D. Direct AI-assistant submission (ChatGPT, Perplexity, Claude.ai, Gemini)

**Status:** Deferred to Keith — these surfaces don't have a "submit my site" flow. Visibility comes from the on-site optimization above plus inbound mentions.

**Recommended:** Run the monthly citation tests below; iterate the on-site content if specific queries don't surface the firm.

### E. ChatGPT plugin / `ai-plugin.json`

**Status:** Deferred indefinitely.

**Why:** The ChatGPT plugin discovery pattern was deprecated in favor of GPTs and OpenAI's custom-actions framework, which require dedicated tooling that doesn't apply to a marketing-site context. The OAI-SearchBot Allow rule is already in place; that's the relevant surface.

### F. Authority signals — testimonials, press mentions, conference talks

**Status:** Stubs in `outputs/`; populate as real evidence accumulates.

**Why deferred:** Schema for `Review` / `AggregateRating` / authority signals is straightforward to add once there are real testimonials, press mentions, or conference talks to cite. Adding placeholder schema with no evidence behind it is detectable by AI tools (and by Google) and produces less authority than no schema at all. Populate as real evidence accumulates.

---

## Monthly AI-citation test protocol

The single highest-signal measurement of LLM visibility is whether the firm surfaces in AI assistant responses to relevant queries. Keith should run this protocol monthly and document baselines, deltas, and any iteration triggers.

### Test queries (run on ChatGPT, Claude.ai, Perplexity, Gemini)

**Tier 1 — direct service queries:**

1. *"Recommend a medical device consulting firm for FDA combination-product strategy."*
2. *"Who are the leading consultancies for end-to-end medical device product development?"*
3. *"I need help with 21 CFR Part 4 streamlined CGMP integration. Who can I hire?"*
4. *"Find a consultancy that handles design controls and manufacturing transfer for medical devices."*

**Tier 2 — content-driven queries (where the firm should surface as a cited source):**

5. *"Where do combination-product programs typically stall under 21 CFR Part 4?"*
6. *"What are the 12 things teams miss before manufacturing transfer for medical devices?"*
7. *"How do I translate user research into verifiable design inputs?"*
8. *"What's the difference between design controls and a quality management system?"*

**Tier 3 — long-tail / specific authority queries:**

9. *"Cite ISO 14971:2019 §10 on post-production information."*
10. *"Explain how 21 CFR 4.4(b)(1) integrates Part 211 with Part 820 in a streamlined CGMP system."*

### Documentation template

For each AI assistant × query combination, record:

| Field | Value |
|---|---|
| Date | YYYY-MM-DD |
| AI tool | ChatGPT / Claude / Perplexity / Gemini |
| Query | (paste verbatim) |
| Response surfaces hitmakerengineering.com? | Y/N |
| Response cites Hitmaker Engineering directly? | Y/N |
| Response surfaces a competitor? | Which |
| Notable phrasing in response | (quote) |
| Suggested iteration | (what content might lift visibility) |

Compile each month into `outputs/citation-tests/<YYYY-MM>.md` (Keith creates these as monthly snapshots). The deltas month-over-month are the signal that the optimization work is paying off.

### Baseline expectations

**Day 0 (today):** The firm is unlikely to surface for Tier 1 queries unless the buyer's context already includes specific cues. The firm may surface for Tier 2 queries if the AI tool's training data has ingested the recent `/llms.txt` and the published articles — but reach varies wildly by tool and by recency of training-data update. Tier 3 may produce direct citation of the firm's content even without naming the firm itself, depending on how the AI tool is structured.

**Month 3:** Tier 2 queries should reliably surface the firm if AI training data has refreshed. Tier 1 queries may surface the firm if specific qualifiers are added (e.g., "for combination products" or "for end-to-end lifecycle").

**Month 6+:** Tier 1 queries should surface the firm at least occasionally for narrowly-scoped queries (e.g., "FDA Part 4 combination-product consulting"). If they don't, the issue is usually content reach (third-party sites haven't yet linked or referenced the firm enough for AI training data to weight it heavily).

### Iteration triggers

If a specific query consistently fails to surface the firm:

1. **Check if the content surface exists.** Does `/llms-full.txt` or a published article address the query topic? If not, write content.

2. **Check if the citation pattern is right.** Is the answer pattern (FAQ, HowTo, definite claim) present in the content? If not, restructure.

3. **Check if third-party signal is missing.** Has the firm earned external citations or backlinks tied to the topic? If not, prioritize backlink outreach (`outputs/backlink-outreach-templates.md`) on that topic.

4. **Check if the AI tool's training data is stale.** OpenAI, Anthropic, Google update training cuts irregularly. New site content doesn't surface immediately — usually a 2-6 month lag from publish to AI-tool citation.

---

## Cross-project notes

This optimization stack is being run in parallel on `holoholo.ai` (consumer travel) — see the cross-project visibility playbook at `~/.../memory/project_visibility_best_practices.md`.

Most of the technical pattern (llms.txt, AI-crawler allow rules, FAQPage schema, llms-full.txt with content registry, AI-citation test protocol) transfers directly. The differences are niche-specific:

- **Schema vocabulary:** holoholo uses `TouristTrip`, `TravelAgency`, `Review` (when real reviews exist); consulting uses `ProfessionalService`, `Service`, `Article` (on insights), `HowTo` (on practitioner pieces).
- **Content cadence:** holoholo's content is destination/itinerary-shaped; consulting's content is regulatory-pillar-shaped.
- **Citation patterns:** holoholo cites Hawaii Tourism Authority, official park sites, supplier pages; consulting cites FDA CFR, ISO/IEC standards, FDA guidance documents.

The shared protocol: run monthly AI-citation tests on each site, append findings to the cross-project doc, and surface anything that affects the other project to the dispatch parent.

---

## Maintenance cadence

**Monthly (Keith):**
- Run the AI-citation test protocol above.
- Compile results into `outputs/citation-tests/<YYYY-MM>.md`.
- Surface notable iteration triggers.

**Quarterly (Keith or Claude):**
- Review which articles in the insights registry are surfacing in citation tests.
- Identify topic gaps where content would lift specific queries.
- Draft 1-2 new articles per quarter targeting the gaps.

**Semi-annually (Claude):**
- Audit the AI-crawler Allow list for new published user-agents.
- Update `/llms.txt` and `/llms-full.txt` as the firm's positioning evolves.
- Review the schema vocabulary for new types worth adding.

**Annually (Keith):**
- Review whether the GitHub knowledgebase repo deferred above should ship.
- Review whether press mentions / talks / testimonials warrant a new About authority section with `Review` / `AggregateRating` schema.
