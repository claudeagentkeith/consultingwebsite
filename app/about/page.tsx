import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hitmaker Engineering helps medical-device and combination-product teams move from insight to implementation across the full product lifecycle.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Hitmaker Engineering",
    description:
      "End-to-end product development for medical-device and combination-product teams — across user research, engineering, design controls, manufacturing transfer, launch, and sustaining.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />

      <Section className="pt-20">
        <p className="eyebrow">About</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Hitmaker Engineering exists to help regulated-product teams move
          from insight to implementation.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Medical-device and combination-product development often breaks down
          at the seams between user needs, product strategy, engineering,
          regulatory evidence, manufacturing readiness, and sustaining
          support. We help teams connect those pieces into a coherent
          development path.
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
                  End-to-end medical-device &amp; combination-product
                  development
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Industries</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  Diagnostics, drug delivery, connected platforms
                </dd>
              </div>
              <div>
                <dt className="text-ink-500">Standards</dt>
                <dd className="mt-1 font-medium text-ink-900">
                  21 CFR 820 / Part 4, ISO 13485, ISO 14971, IEC 62366
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

          <div className="space-y-12 text-ink-700">
            <Block title="What we help with">
              <p className="mt-3">
                We help medical-device and combination-product teams across
                the full development lifecycle:
              </p>
              <ul className="mt-4 space-y-3">
                <Bullet>
                  Translate user research and workflow insight into product
                  direction.
                </Bullet>
                <Bullet>
                  Develop architecture, requirements, and engineering
                  solutions that meet user, regulatory, and manufacturing
                  constraints.
                </Bullet>
                <Bullet>
                  Connect design controls, risk management, usability, and
                  verification evidence into a coherent submission package.
                </Bullet>
                <Bullet>
                  Move products from development into manufacturing, supplier
                  qualification, and launch.
                </Bullet>
                <Bullet>
                  Sustain launched products through complaints, design
                  changes, cost reduction, and post-market improvements.
                </Bullet>
              </ul>
            </Block>

            <Block title="How we work">
              <ul className="mt-4 space-y-3">
                <Bullet>
                  We engage at the points in the lifecycle where decisions
                  cross functional boundaries — not as detached advisors.
                </Bullet>
                <Bullet>
                  We do real engineering and design-controls work:
                  architecture, requirements, risk analysis, change-control
                  logic, FMEA, verification strategy, and process-validation
                  planning.
                </Bullet>
                <Bullet>
                  We co-own the work with internal teams — embedded
                  leadership for a milestone or phase, a coaching role
                  alongside an internal program lead, or an independent
                  technical owner opposite a contract manufacturer.
                </Bullet>
                <Bullet>
                  We coordinate with adjacent functions — regulatory
                  submissions counsel, quality, manufacturing, supply chain
                  — rather than working in isolation.
                </Bullet>
              </ul>
            </Block>

            <Block title="Where we fit in the lifecycle">
              <p className="mt-3">
                We engage at every phase, but the highest-leverage moments
                are the seams between phases:
              </p>
              <ul className="mt-4 space-y-3">
                <Bullet>
                  Translating user research into product direction (Phase 1
                  → 2).
                </Bullet>
                <Bullet>
                  Closing the architecture decision before substantial
                  engineering commits (Phase 2 → 3).
                </Bullet>
                <Bullet>
                  Connecting requirements, risk, usability, and design
                  controls in the run-up to design freeze (Phase 3 → 4).
                </Bullet>
                <Bullet>
                  Bridging design and manufacturing in advance of transfer
                  (Phase 4 → 5).
                </Bullet>
                <Bullet>
                  Turning post-market signals into product improvements
                  (Phase 6 back into the next iteration).
                </Bullet>
              </ul>
              <p className="mt-4 text-sm">
                <Link
                  href="/services"
                  className="font-medium text-ink-900 no-underline hover:underline"
                >
                  See the full list of services across the lifecycle →
                </Link>
              </p>
            </Block>

            <Block title="What makes the approach different">
              <ul className="mt-4 space-y-3">
                <Bullet>
                  <strong className="text-ink-900">
                    Lifecycle-integrated, not siloed.
                  </strong>{" "}
                  We treat user needs, engineering, regulatory, and
                  manufacturing as one development system, because that is
                  how regulated products actually get built.
                </Bullet>
                <Bullet>
                  <strong className="text-ink-900">Hands-on.</strong> We
                  bring direct ownership experience — Fortune 500 R&amp;D
                  portfolio leadership, FDA combination-product strategy,
                  platform consolidation across multiple programs — and we
                  apply it ourselves rather than pointing at frameworks.
                </Bullet>
                <Bullet>
                  <strong className="text-ink-900">Evidence-first.</strong>{" "}
                  We treat design controls, risk management, and human
                  factors as the architectural backbone of a regulated
                  product, not parallel deliverables to be reconciled later.
                </Bullet>
                <Bullet>
                  <strong className="text-ink-900">
                    Cross-functional by default.
                  </strong>{" "}
                  We are most valuable where product decisions cross
                  functional boundaries — where user needs, engineering
                  feasibility, regulatory expectations, manufacturing
                  realities, and business goals all need to be reconciled.
                </Bullet>
              </ul>
            </Block>
          </div>
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl">Working on a regulated product?</h2>
            <p className="mt-2 text-ink-600">
              Most engagements start with a scoping call to map where the
              product is in the lifecycle and the timeline you are working
              toward.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Start a Product Development Conversation
          </Link>
        </div>
      </Section>
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl">{title}</h2>
      {children}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden="true"
        className="mt-2 inline-block h-1.5 w-1.5 flex-none rounded-full bg-ink-900"
      />
      <span>{children}</span>
    </li>
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
