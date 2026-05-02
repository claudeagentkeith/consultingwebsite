import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hitmaker Engineering is a senior consulting practice for medical devices and combination products. PE, LSS, and PMP credentialed; deep fluency in 21 CFR 820/Part 4, ISO 13485/14971, and IEC 62366.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Hitmaker Engineering",
    description:
      "A senior medical device and combination product consulting practice. PE, LSS, and PMP credentialed.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Senior engineering judgment, applied to medical devices and combination
          products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Hitmaker Engineering is a focused consulting practice for device and
          pharma teams. We bring 10+ years of cross-functional R&amp;D
          leadership to the moments that decide a program — architecture,
          regulatory strategy, human factors, and platform-level investment
          calls.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-[1fr,1.4fr]">
          <div>
            <Mark />
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-ink-500">Discipline</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  Medical device &amp; combination product engineering
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Industries</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  Diagnostics, drug delivery, connected platforms
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Credentials</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  Principals hold PE, LSS, PMP
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Based in</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  San Francisco, CA
                </dd>
              </div>
            </dl>
          </div>

          <div className="space-y-5 text-ink-700">
            <p>
              Hitmaker Engineering&apos;s leadership has spent the last decade
              architecting medical devices, combination products, and platform
              technologies from concept through commercialization. Our work
              spans Fortune 500 medical-device portfolios — diagnostics
              (lateral flow, molecular, and connected platforms), drug
              delivery, and broader regulated instrumentation.
            </p>
            <p>
              In senior R&amp;D leadership roles, the firm&apos;s principals
              have owned ~$60M annual engineering budgets and platform-level
              decisions on headcount, technology investment, and external
              partnerships across multi-site organizations. They were the
              single accountable leader for a next-generation systems program
              that aligned 100+ contributors across hardware, firmware,
              software, biology/chemistry, regulatory, quality, program
              management, manufacturing, and supply chain — consolidating two
              diverging platforms into one and avoiding ~$80M in duplicate
              development cost.
            </p>
            <p>
              That same leadership negotiated combination-product regulatory
              strategy with FDA subject matter experts (Assay Migration,
              RRIFP, 510(k) change-decision logic) — saving ~$10M per product
              and accelerating launch by a year on three future products. The
              firm has also stood up dedicated Human Factors capability for
              formative and summative HFE on new and existing combination
              products, integrating cleanly with design controls.
            </p>
            <p>
              Hitmaker Engineering&apos;s practice areas reflect the same
              breadth: novel pump and valve drug-delivery architectures (with
              50–75% unit-cost reduction at 300K–1M unit/year volumes),
              applied design controls and risk-based engineering (FMEA, Design
              for Reliability, GD&amp;T) across new product designs, supplier
              qualification, ISO 13485 audit readiness, and Design History
              File management within PLM systems.
            </p>
            <p>
              Our principals are licensed Professional Engineers (Mechanical),
              Lean Six Sigma Green Belts, and Project Management Professionals.
              We work with deep fluency in 21 CFR 820, 21 CFR Part 4, ISO
              13485, ISO 14971, and IEC 62366.
            </p>
          </div>
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl">Looking for senior engineering judgment?</h2>
            <p className="mt-2 text-ink-600">
              Reach out and we&apos;ll set up a scoping call.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Contact
          </Link>
        </div>
      </Section>
    </>
  );
}

// Abstract company mark — geometric, restrained. No portrait.
function Mark() {
  return (
    <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink-100 bg-ink-50">
      <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6f7f8" />
            <stop offset="100%" stopColor="#d3d8de" />
          </linearGradient>
          <linearGradient id="block" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f3742" />
            <stop offset="100%" stopColor="#12161c" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bg)" />
        {/* Stepped block — visual pun on platform consolidation. */}
        <rect x="60" y="120" width="120" height="120" rx="12" fill="url(#block)" />
        <rect x="180" y="180" width="120" height="180" rx="12" fill="#5a6573" />
        <rect x="60" y="240" width="120" height="120" rx="12" fill="#aab3bd" />
        {/* Horizon mark */}
        <rect x="40" y="430" width="320" height="2" fill="#aab3bd" />
        <rect x="40" y="438" width="180" height="2" fill="#d3d8de" />
      </svg>
    </div>
  );
}
