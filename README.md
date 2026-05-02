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

## Pages

- `/` — Home
- `/services` — Services
- `/about` — About
- `/contact` — Contact (POSTs to `/api/contact`)

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
