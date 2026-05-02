# Hitmaker Engineering — consulting site

Next.js 14 (App Router) + Tailwind. Deployed on Vercel at
[hitmakerengineering.com](https://hitmakerengineering.com).
`npdengineering.com` 308-redirects to the canonical domain.

## Local dev

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Visit http://localhost:3000.

## Routes

| Path                              | Source                                          |
|-----------------------------------|-------------------------------------------------|
| `/`                               | `app/page.tsx`                                  |
| `/services`                       | `app/services/page.tsx` (hub linking to 5 sub-pages) |
| `/services/regulatory-quality`    | `app/services/regulatory-quality/page.tsx`      |
| `/services/program-leadership`    | `app/services/program-leadership/page.tsx`      |
| `/services/combination-products`  | `app/services/combination-products/page.tsx`    |
| `/services/design-engineering`    | `app/services/design-engineering/page.tsx`      |
| `/services/human-centered-design` | `app/services/human-centered-design/page.tsx`   |
| `/about`                          | `app/about/page.tsx`                            |
| `/insights`                       | `app/insights/page.tsx` (index)                 |
| `/insights/[slug]`                | `app/insights/[slug]/page.tsx` (per-article)    |
| `/contact`                        | `app/contact/page.tsx`                          |
| `/api/contact`                    | `app/api/contact/route.ts` (POST handler)       |
| `/feed.xml`                       | `app/feed.xml/route.ts` (RSS 2.0)               |
| `/sitemap.xml`                    | `app/sitemap.ts`                                |
| `/robots.txt`                     | `app/robots.ts`                                 |
| `/opengraph-image`                | `app/opengraph-image.tsx` (1200×630 PNG)        |
| `/icon.svg`                       | `app/icon.svg` (favicon)                        |
| `/manifest.webmanifest`           | `app/manifest.ts`                               |

## Contact API

`app/api/contact/route.ts` validates input and calls Resend. Required env vars:

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Inbox that receives submissions |
| `CONTACT_FROM_EMAIL` | Verified sender (defaults to `onboarding@resend.dev`) |

## Deploy

The repo is wired to Vercel. Pushes to `main` trigger production builds.
Custom domains (`hitmakerengineering.com`, `npdengineering.com`) are managed in
the Vercel dashboard; `npdengineering.com` is configured as a 308 redirect to
the canonical domain.

## SEO posture

Implemented across PRs 1-9 (see `SEO_AUDIT.md` for the original baseline).

### Metadata

- **Canonical URL** on every page via `metadata.alternates.canonical`. Root
  layout sets `metadataBase: new URL('https://hitmakerengineering.com')`.
- **Per-page `metadata` exports** with title, description (≤155 chars),
  `alternates.canonical`, and an `openGraph` block.
- **Dynamic OG image** at `/opengraph-image` (`next/og`, 1200×630, branded).
- **Favicon** at `app/icon.svg`; **PWA manifest** at `app/manifest.ts`.
- **Viewport / theme-color / format-detection** in the `viewport` export of
  the root layout.
- **Security headers** in `next.config.mjs`: HSTS (preload-eligible),
  `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`,
  `Permissions-Policy`.

### Structured data (JSON-LD)

Reusable Server Components in `components/JsonLd.tsx`:

| Component               | Where it's emitted                         |
|-------------------------|--------------------------------------------|
| `OrganizationJsonLd`    | Root layout (every page). Type `ProfessionalService`, `@id` keyed at `SITE_URL#organization`. |
| `BreadcrumbJsonLd`      | Every non-root page (`/services`, each sub-page, `/about`, `/contact`, `/insights`, each insight). |
| `ServiceJsonLd`         | `/services` and each `/services/*` sub-page. `provider` references the Organization `@id`. |
| `FaqJsonLd`             | Each `/services/*` sub-page (FAQ block at the bottom). |
| `Article` (inline JSON-LD) | Each **published** `/insights/[slug]` page; suppressed on drafts. |

### Robots / sitemap / IndexNow

- `app/robots.ts` allows all, disallows `/api/` and `/draft/`.
- `app/sitemap.ts` enumerates 10 static URLs (home, 5 service pages, hub,
  `/insights` index, `/about`, `/contact`) plus any **published** insights.
  Drafts are excluded.
- IndexNow key file at `public/ce111e934638afe3581e4a9ccf321c50.txt`. Submit
  with `npm run indexnow` (see below).

## Adding a new insight / case-study

1. Open `lib/insights.ts`.
2. Add a new entry to `insights`:

   ```ts
   {
     slug: "iec-62366-without-a-human-factors-background",
     title: "Reading IEC 62366-2 without a human factors background",
     description: "150 chars max, used as meta description and RSS body.",
     topic: "Human-Centered Design",
     publishedAt: "2026-06-15",
     status: "draft", // or "published"
     excerpt: "2-3 sentence teaser shown on /insights and the article page.",
   }
   ```

3. While `status: "draft"`:
   - Article renders with `<meta name="robots" content="noindex, follow">`.
   - Article is excluded from the sitemap and the RSS feed.
   - On the index page, the entry shows as a **non-link** "Coming soon" row.
4. To publish: change `status` to `"published"`, update `publishedAt` if
   needed, and (optionally) set `updatedAt` to mark a later revision.
5. Push to `main`. Vercel rebuilds; the new URL appears in the sitemap and
   feed automatically.
6. Optionally, after deploy: `npm run indexnow` to ping Bing/Yandex/Seznam.
7. The article's body currently comes from the `excerpt` field — if you want
   richer markup later, swap to MDX (`@next/mdx`) or move the body into a
   per-slug `bodies/<slug>.tsx` import map.

## Operational tasks

### `npm run indexnow`

Submits the sitemap URLs to IndexNow (Bing / Yandex / Seznam). The protocol
is permissionless — the key file at
`https://hitmakerengineering.com/<KEY>.txt` is the only credential. Run
manually after a content drop, or wire to a Vercel deploy hook (Project
Settings → Git → Deploy Hooks; have it `curl` an endpoint that runs
`scripts/indexnow-ping.mjs`).

Pass specific URLs to limit the ping:
`node scripts/indexnow-ping.mjs https://hitmakerengineering.com/insights/<slug>`

### Validating structured data after a change

- Schema validator: https://validator.schema.org/
- Google rich-results test: https://search.google.com/test/rich-results

### Lighthouse / Core Web Vitals

After deploy, run against the live URL:

```bash
npx lighthouse https://hitmakerengineering.com --view --preset=desktop
npx lighthouse https://hitmakerengineering.com --view  # mobile
```

Target: 95+ Performance, 100 Accessibility / Best Practices / SEO.

### OG / Twitter card preview

`https://www.opengraph.xyz/url/https://hitmakerengineering.com`

## Deferred to a human (Plan B from the SEO plan)

These need a real account, identity, or outreach — they cannot be
auto-completed by the agent. Listed in rough ROI order:

1. **Google Search Console** — verify domain ownership (Domain property →
   add the TXT record at the DNS registrar). Without GSC the firm has no
   visibility into queries / clicks / indexing errors. Then submit
   `/sitemap.xml` from inside GSC.
2. **Bing Webmaster Tools** — add site, choose **Import from GSC** for
   one-click setup. Confirms the IndexNow key file is reachable.
3. **LinkedIn Company Page** + a founding announcement post linking to
   `hitmakerengineering.com`. In B2B medical-device consulting, LinkedIn is
   typically the largest inbound channel for the first 6-12 months.
4. **Industry directory listings** (3-5 to start): MD+DI vendor directory,
   MedTech World, RAPS, MedCity News, MassDevice. Submit each manually.
5. **Long-form `/insights` articles** — the structural scaffold is here; the
   substance has to come from a human. The plan's recommended first six
   topics are kept in `lib/insights.ts` as drafts when seeded.
6. **Resend domain authentication** — verify `hitmakerengineering.com` in
   Resend (SPF / DKIM / DMARC) and create a branded sender like
   `contact@hitmakerengineering.com`. Until then, the contact form delivers
   via the shared `onboarding@resend.dev` sender (free tier delivers only
   to the account-owner address). See "Backlog → Branded Resend domain
   verification" below.
7. **Google Business Profile** — only if a verifiable business address is
   willing to be published. Skip if the firm is fully virtual; a GBP without
   a real address invites suspension.
8. **Paid pilot** — Google Ads exact-match on a handful of long-tail
   regulated-engineering keywords + LinkedIn Ads job-title targeting at
   medical-device companies. Useful as a signal of which keywords actually
   convert.

## Backlog

### Branded Resend domain verification

Re-add `hello@hitmakerengineering.com` to public pages once **both** of the
following are live:

1. **Resend domain verification for `hitmakerengineering.com`** — adds the
   SPF/DKIM/DMARC records to Cloudflare DNS for the zone, so Resend can
   send `from: hello@hitmakerengineering.com` (or any other branded
   address) to arbitrary recipients. Today the contact form delivers via
   Resend's shared `onboarding@resend.dev` sender, which on the free tier
   only delivers to the Resend account-owner address.
2. **Cloudflare Email Routing alias** `hello@hitmakerengineering.com` →
   `kdherrington@gmail.com` (or wherever incoming `hello@` mail should
   land). Without this, mail sent _to_ `hello@…` would bounce.

The TODO comments next to the removed surfaces — Footer, `/contact`
sidebar, ContactForm success card, and `/api/contact` error messages —
mark exactly where the public address used to render so it's easy to
reinstate when both conditions are met.

### Other deferred items

- **Verify keith@hitmakerengineering.com Email Routing forwarding** — the
  Cloudflare Email Routing rule is configured (`keith@hitmakerengineering.com`
  → `kdherrington@gmail.com`) and the destination is verified, but no
  external sender has been used to confirm end-to-end delivery yet.
- **Gmail "Send mail as" SMTP** — requires entering Resend SMTP credentials
  into Gmail's setup flow (deferred per project owner).
