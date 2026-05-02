import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hitmaker Engineering is Keith Herrington — Professional Engineer, Lean Six Sigma Green Belt, and PMP with 10+ years architecting medical devices and combination products.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-20">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Hitmaker Engineering is Keith Herrington — PE, LSS, PMP.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Senior R&amp;D leader with 10+ years architecting medical devices,
          combination products, and platform technologies from concept through
          commercialization.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-[1fr,1.4fr]">
          <div>
            <Portrait />
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-ink-500">Currently</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  Head of Human Centered Design, Abbott
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Previously</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  Senior Director, Engineering — Cepheid
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Education</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  BS Bioengineering, UC Merced
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Credentials</dt>
                <dd className="mt-1 font-medium text-ink-900">PE, LSS, PMP</dd>
              </div>
            </dl>
          </div>

          <div className="space-y-5 text-ink-700">
            <p>
              At Abbott, Keith leads the global Human Centered Design function
              within R&amp;D — owning end-to-end user research, human factors
              engineering, industrial design, and UI architecture across the
              diagnostics combination-product portfolio (lateral flow, molecular,
              and connected platforms). He chairs the Strategic Review Board
              that arbitrates platform direction, design standards, and
              portfolio-level investment for new product development.
            </p>
            <p>
              At Cepheid, Keith was the enterprise leader for all R&amp;D
              hardware, systems, and embedded software engineering — accountable
              for a ~$60M R&amp;D engineering budget and platform-level
              decisions on headcount, technology investments, and external
              partnerships. He was the single accountable leader for the largest
              successful next-generation system program in the last decade of
              Cepheid history, aligning 100+ contributors and consolidating two
              diverging programs into one focused platform — avoiding ~$80M in
              duplicate development cost.
            </p>
            <p>
              He negotiated combination-product regulatory strategy with FDA
              SMEs (Assay Migration, RRIFP, 510(k) change-decision logic),
              saving ~$10M per product and accelerating launch by a year on
              three future products. He also proposed and stood up a Human
              Factors Experience Center for formative and summative HFE on
              new and existing combination products.
            </p>
            <p>
              Earlier roles include design engineering at BiOQ Pharma (a novel
              pump and valve drug-delivery architecture, 50–75% unit-cost
              reduction at 300K–1M units/year), Bio-Rad Laboratories (design
              controls and DHF management), and Claremont BioSolutions
              (electromechanical device design and prototype builds).
            </p>
            <p>
              Keith is a licensed Professional Engineer (Mechanical), a Lean
              Six Sigma Green Belt, and a Project Management Professional.
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

// Generic placeholder portrait — abstract geometric so it doesn't read as a
// stock medical photo. Keith will swap once mature.
function Portrait() {
  return (
    <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink-100 bg-ink-50">
      <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#eceef1" />
            <stop offset="100%" stopColor="#d3d8de" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#g1)" />
        <circle cx="200" cy="190" r="80" fill="#aab3bd" />
        <path
          d="M70 460 C 70 360, 330 360, 330 460 L 330 500 L 70 500 Z"
          fill="#aab3bd"
        />
        <rect x="32" y="32" width="60" height="6" fill="#7a8693" />
        <rect x="32" y="46" width="36" height="6" fill="#7a8693" />
      </svg>
    </div>
  );
}
