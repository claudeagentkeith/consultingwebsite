import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/ideation-strategy";
const TITLE = "Ideation & Product Strategy for Medical Devices";
const DESCRIPTION =
  "Ideation and product strategy for medical-device and combination-product teams — opportunity framing, concept generation, product architecture, feasibility planning, and roadmap strategy.";

export const metadata: Metadata = {
  title: "Ideation & Product Strategy",
  description: DESCRIPTION,
  alternates: { canonical: SLUG },
  openGraph: {
    title: `${TITLE} · Hitmaker Engineering`,
    description: DESCRIPTION,
    url: SLUG,
    type: "website",
  },
};

const faqs: FaqEntry[] = [
  {
    question: "Where in the lifecycle does ideation engagement typically start?",
    answer:
      "Most often after early user research has surfaced a need and before substantial engineering work has been committed. We engage to translate insight into multiple product concepts, evaluate them against feasibility, regulatory, and manufacturing realities, and converge on a defensible architecture and development path.",
  },
  {
    question: "How does product strategy connect to design controls?",
    answer:
      "We treat the architecture decision as the entry point into design controls, not separate from it. The product concept and architecture become the seed of the design inputs, the high-level risk analysis, and the verification strategy. That way the development team starts on a defensible footing instead of retrofitting design controls onto a frozen architecture.",
  },
  {
    question: "Do you do feasibility prototyping?",
    answer:
      "Yes — at the level needed to retire architecture risk. Breadboards, alpha prototypes, and bench rigs that test the specific feasibility questions that would block development if wrong. We do not run large prototype builds at this phase; the goal is to inform the architecture decision, not to skip ahead into engineering.",
  },
  {
    question: "Can you support platform consolidation across multiple programs?",
    answer:
      "Yes. The principals have led platform consolidation that aligned 100+ contributors on a single next-generation system and avoided ~$80M in duplicate development cost. We bring structured architecture trade studies, capacity and tradeoff strategy across a multi-program portfolio, and the governance to land an actual platform decision.",
  },
];

export default function IdeationStrategyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Ideation & Product Strategy", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Ideation and Product Strategy"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Phase 2</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Ideation and product strategy for medical devices and combination
          products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Translate user needs into product concepts, architecture options,
          and a development path the rest of the program can build on — with
          regulatory, manufacturing, and lifecycle realities in scope from the
          start.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A promising concept needs to become a feasible product
                architecture.
              </Bullet>
              <Bullet>
                A platform decision is approaching and the team needs
                structured architecture options before committing.
              </Bullet>
              <Bullet>
                Two adjacent programs are diverging when they should be
                converging — and a platform-consolidation decision is overdue.
              </Bullet>
              <Bullet>
                An R&amp;D portfolio has multiple opportunities and a roadmap
                and tradeoff strategy is needed to allocate limited capacity.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Anchor on the user need and the decision being made — not on
                the technology in front of you.
              </Bullet>
              <Bullet>
                Generate multiple concepts, then narrow with explicit
                feasibility, regulatory, and manufacturing tests.
              </Bullet>
              <Bullet>
                Architecture before optimization — the right system topology
                makes the rest of engineering cheap.
              </Bullet>
              <Bullet>
                Tie product strategy to commercial reality — manufacturing
                scale, regulatory burden, sustaining cost — not just the
                prototype.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>Opportunity framing and prioritization memo.</Bullet>
          <Bullet>Concept generation and downselect record.</Bullet>
          <Bullet>Product architecture and trade studies.</Bullet>
          <Bullet>
            Feasibility and risk plan tied to the development roadmap.
          </Bullet>
          <Bullet>
            Capacity and tradeoff strategy across a multi-program portfolio.
          </Bullet>
          <Bullet>
            Stage-gate readiness package for early development phase entry.
          </Bullet>
        </ul>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Frequently asked questions</h2>
        <div className="mt-6 max-w-3xl">
          <ServiceFaq items={faqs} />
        </div>
      </Section>

      <CrossLinks />
      <CtaBlock />
    </>
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

function CrossLinks() {
  return (
    <Section bordered>
      <p className="eyebrow">Adjacent phases</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        <li>
          <Link
            href="/services/user-research"
            className="text-ink-900 no-underline hover:underline"
          >
            User research &amp; human-centered design →
          </Link>
        </li>
        <li>
          <Link
            href="/services/design-engineering"
            className="text-ink-900 no-underline hover:underline"
          >
            Design engineering &amp; development →
          </Link>
        </li>
        <li>
          <Link
            href="/services/design-controls"
            className="text-ink-900 no-underline hover:underline"
          >
            Regulatory, quality &amp; design controls →
          </Link>
        </li>
      </ul>
    </Section>
  );
}

function CtaBlock() {
  return (
    <Section bordered>
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
        <div className="max-w-xl">
          <h2 className="text-2xl">
            Moving from concept to architecture?
          </h2>
          <p className="mt-2 text-ink-600">
            Engagements typically start with a scoping call to clarify the
            decision in front of you and the timeline you are working toward.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Start a Product Development Conversation
        </Link>
      </div>
    </Section>
  );
}
