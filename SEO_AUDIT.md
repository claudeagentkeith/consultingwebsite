# SEO_AUDIT.md — Hitmaker Engineering

Reconnaissance for the SEO + visibility plan. PRs 2-9 reference this file.
Audit date: 2026-05-02. Branch: `seo/01-audit`.

---

## 1. Stack

- **Framework:** Next.js 14.2.18 — **App Router** (`app/` directory). No Pages Router.
- **Styling:** Tailwind 3.4.14, single `app/globals.css`.
- **TypeScript:** 5.6.3, strict via `tsconfig.json`.
- **Email:** `resend` 4.0.1, used by `app/api/contact/route.ts`.
- **No public assets:** `public/` directory does not exist.
- **No CI:** no `.github/` directory; no GitHub Actions workflows. Vercel handles
  deploys on push to `main`.
- **No branch protection** on `main` (verified via GitHub API).

## 2. Existing routes

| Route                | File                              | Has `metadata`?           |
|----------------------|-----------------------------------|---------------------------|
| `/`                  | `app/page.tsx`                    | Inherits root only        |
| `/services`          | `app/services/page.tsx`           | Yes — title, description  |
| `/about`             | `app/about/page.tsx`              | Yes — title, description  |
| `/contact`           | `app/contact/page.tsx`            | Yes — title, description  |
| `/api/contact`       | `app/api/contact/route.ts`        | n/a (route handler)       |
| `/robots.txt`        | `app/robots.ts`                   | n/a                       |
| `/sitemap.xml`       | `app/sitemap.ts`                  | n/a                       |

## 3. Metadata coverage

### Root (`app/layout.tsx`)
Currently set:
- `metadataBase: new URL("https://hitmakerengineering.com")`
- `title.default`, `title.template`
- `description`
- `openGraph` — title, description, url, siteName, type=website
- `twitter` — card=summary_large_image, title, description
- `robots: { index: true, follow: true }`

Currently missing:
- `alternates.canonical` — never set (PR-2 must add).
- `openGraph.images` — no OG image asset exists in repo (PR-2 must add).
- `twitter.images` — same.
- `keywords` — none.
- `applicationName` — none.
- `googleBot` directives (e.g. `max-image-preview: large`).

### Per-page
- `/services`, `/about`, `/contact`: each has a `title` and `description`. None
  set `alternates.canonical`, `openGraph`, or `twitter` overrides.
- `/`: relies entirely on root metadata (no per-page override).

## 4. `robots.ts` and `sitemap.ts` — current state

`app/robots.ts`:
```ts
{ rules: [{ userAgent: "*", allow: "/" }],
  sitemap: "https://hitmakerengineering.com/sitemap.xml",
  host: "https://hitmakerengineering.com" }
```
Issues for PR-2:
- No `disallow` for `/api/`. The `/api/contact` POST endpoint shouldn't be
  crawled (small risk; mostly hygiene).
- No `disallow` for any future `/draft/` routes.

`app/sitemap.ts`:
```ts
routes = ["", "/services", "/about", "/contact"]
```
Issues for PR-2/PR-4/PR-7:
- Will need expansion when `/services/*` sub-pages and `/insights/*` exist.
- `priority` for service pages should be 0.9 once split.

## 5. JSON-LD / structured data

**None.** No `<script type="application/ld+json">` anywhere in the repo.
PR-3 adds Organization (root), ProfessionalService + Service (services pages),
BreadcrumbList (per-route), FAQPage (where Q&A exists).

## 6. Images

**Zero raster image assets in the repo.** `public/` does not exist. There are
two inline SVGs:
- `components/Nav.tsx` — 22×22 `Logo()` glyph (compact "H" wordmark).
- `app/about/page.tsx` — `Mark()` decorative 4:5 illustration.

Neither uses `next/image`. There are no `<img>` tags anywhere. Implications:
- **Zero CLS / LCP risk from images** today (rare and good).
- **Zero OG image** — social shares fall back to a generic Vercel preview.
  PR-2 must generate `og-default.png` (1200×630) at minimum.
- **No favicon** — `app/icon.*` does not exist. PR-2 should add at least a
  square favicon derived from the existing inline-SVG logo.
- `next/image` is unused but available; if PR-7 (insights) adds article hero
  images, they should use `next/image` from the start.

## 7. `next.config.mjs`

Currently does:
- `reactStrictMode: true`, `poweredByHeader: false`
- 308 redirects: `npdengineering.com` → canonical, `www.npdengineering.com` →
  canonical, `www.hitmakerengineering.com` → canonical.

Missing (PR-2 / PR-6):
- `headers()` for `Strict-Transport-Security`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`.
- `images` config (only relevant once images are added).

## 8. Content scrub — names, employers, legacy URLs

Searched the repo for things the rebrand should have removed:

| Term searched            | Hits | Notes                                  |
|--------------------------|------|----------------------------------------|
| `Keith Herrington`       | 0    | Clean.                                 |
| `Cepheid`                | 0    | Clean.                                 |
| `Abbott`                 | 0    | Clean.                                 |
| `Bio-Rad` / `BioRad`     | 0    | Clean.                                 |
| `npdengineering.com` (in Markdown / source, excluding `next.config.mjs` redirects) | 1 — the README mentions the 308. Intentional and correct. | OK |
| `hello@hitmakerengineering.com` | 2 — Footer + ContactForm + Contact page + API error message. Consistent. | OK |

**No scrub needed.** The 0a1381a → 977893c rebrand commit already cleaned the
identity surface. Nothing in PR-2 onward needs to remove names.

## 9. Anonymized claims still in copy

The home and about pages still carry anonymized quantified claims that
reference Keith's actual past in non-attributable form:
- `~$60M annual engineering budgets`
- `100+ contributors`
- `~$80M in duplicate development cost avoided`
- `~$10M per product saved`, `accelerating launch by a year on three future products`
- `50–75% unit-cost reduction at 300K–1M unit/year volumes`

These are **not** prohibited by the brand rules in the kickoff prompt
(no Keith name, no specific past employers). They will stay as-is unless
Keith asks otherwise. PR-7 (insights scaffold) will use a softer
"Typical project impact" framing per the plan's anonymization rules
("we reduced cycle time materially") for any *new* content.

## 10. Performance baseline (static, pre-deploy)

Production build summary from `npm run build`:

```
Route (app)                              Size     First Load JS
┌ ○ /                                    181 B          94.1 kB
├ ○ /about                               181 B          94.1 kB
├ ○ /contact                             1.36 kB        88.4 kB
├ ○ /services                            181 B          94.1 kB
+ First Load JS shared by all            87.1 kB
```

No client-only JS on `/`, `/about`, `/services` beyond the shared chunks.
`/contact` has 1.36 kB extra for the form. No images means Lighthouse
should already be high on Performance and SEO; PR-6 will confirm
post-deploy.

## 11. PR sequence (this audit + the 8 to follow)

| #  | Branch                          | Goal                                                           |
|----|----------------------------------|----------------------------------------------------------------|
| 1  | `seo/01-audit`                   | This document.                                                 |
| 2  | `seo/02-tech-foundations`        | `robots`/`sitemap`/canonical/OG/Twitter, OG image, favicons.   |
| 3  | `seo/03-jsonld`                  | Organization, Service, BreadcrumbList, FAQ schema.             |
| 4  | `seo/04-services-split`          | Five keyword-targeted `/services/*` pages + redirects.         |
| 5  | `seo/05-on-page-sweep`           | Title/H1 alignment, meta length, alt text, anchor text.        |
| 6  | `seo/06-performance`             | Lighthouse pass; security headers; `next/image` if needed.     |
| 7  | `seo/07-insights-scaffold`       | `/insights` index + `[slug]` template + RSS at `/feed.xml`.    |
| 8  | `seo/08-indexnow`                | IndexNow key file + Bing submission.                           |
| 9  | `seo/09-readme-runbook`          | Update README with full SEO posture and deferred Plan-B items. |

## 12. Deferred to Keith (Plan B — not in this autonomous run)

- Google Search Console domain verification.
- Bing Webmaster Tools (import from GSC).
- Google Business Profile (only if a verifiable address is published).
- LinkedIn Company Page + founding announcement.
- Industry directory listings (MD+DI, RAPS, MedTech, etc.).
- Resend domain authentication (SPF/DKIM/DMARC) for branded sender.
- Long-form `/insights` content authorship.
- Paid pilot (Google Ads + LinkedIn Ads).

These are documented in the runbook landing in PR-9.
