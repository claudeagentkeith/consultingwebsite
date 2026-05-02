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
