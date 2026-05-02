import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
} from "@/components/JsonLd";
import ServiceFaq, { type FaqEntry } from "@/components/ServiceFaq";

const SLUG = "/services/program-leadership";
const TITLE = "Program Leadership for Medical Device Programs";
const DESCRIPTION =
  "Senior, PMP-credentialed program leadership for cross-functional medical device and combination product programs — stage-gate governance, integration, and recovery.";

export const metadata: Metadata = {
  title: "Program Leadership",
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
    question:
      "What kinds of programs do you lead?",
    answer:
      "Cross-functional medical device and combination product programs that integrate hardware, firmware, software, biology/chemistry, regulatory, quality, manufacturing, and supply chain. We are typically engaged when a program is too important to leave to a part-time leader and too complex for a single function to drive end-to-end.",
  },
  {
    question:
      "Do you act as interim leadership or as an embedded advisor?",
    answer:
      "Both. Some engagements are full single-accountable program leadership through a phase or milestone. Others are an embedded coaching role for an internal program leader who needs senior backup on specific decisions.",
  },
  {
    question:
      "What governance cadence do you set up?",
    answer:
      "A working cadence (typically weekly), an integrated review (typically biweekly to monthly), and a stage-gate / phase-review structure aligned to the firm's design controls process. Risk management and design controls artifacts are first-class agenda items, not afterthoughts.",
  },
  {
    question:
      "How do you handle programs in trouble?",
    answer:
      "Quick diagnostic in the first two weeks: schedule realism, scope and risk reality, decision-rights map, and the specific hand-offs that are slipping. Recovery plan with named owners, clear escalation paths, and the minimum-viable governance to restore predictability.",
  },
];

export default function ProgramLeadershipPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: "Program Leadership", url: SLUG },
        ]}
      />
      <ServiceJsonLd
        name={TITLE}
        slug={SLUG}
        description={DESCRIPTION}
        serviceType="Program Leadership"
      />
      <FaqJsonLd
        items={faqs.map((f) => ({ question: f.question, answer: f.answer }))}
      />

      <Section className="pt-20">
        <p className="eyebrow">Services · Program Leadership</p>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">
          Senior program leadership for cross-functional medical device
          programs.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          PMP-credentialed program ownership for the kinds of programs that
          integrate hardware, firmware, software, biology/chemistry,
          regulatory, quality, manufacturing, and supply chain — with stage-gate
          governance and design-controls discipline built in.
        </p>
      </Section>

      <Section bordered>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl">When teams call us in</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                A platform program is integrating across multiple sites and
                disciplines and needs a single accountable leader.
              </Bullet>
              <Bullet>
                Two adjacent programs are diverging when they should be
                converging — and a platform-consolidation decision is overdue.
              </Bullet>
              <Bullet>
                A milestone is slipping and the team needs an outside read on
                what is actually causing the slip.
              </Bullet>
              <Bullet>
                A new program needs governance, decision rights, and stage-gate
                structure stood up before the technical work scales.
              </Bullet>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">How we approach it</h2>
            <ul className="mt-5 space-y-3 text-ink-700">
              <Bullet>
                Establish the integrated plan first — schedule, scope, risk,
                and the actual technical critical path.
              </Bullet>
              <Bullet>
                Set decision rights explicitly: who decides, who is consulted,
                what escalates, and on what cadence.
              </Bullet>
              <Bullet>
                Treat design controls and risk management as program-level
                artifacts, not function-level paperwork.
              </Bullet>
              <Bullet>
                Run reviews that surface the real status of the work — not
                green-shifted summaries.
              </Bullet>
            </ul>
          </div>
        </div>
      </Section>

      <Section bordered>
        <h2 className="text-2xl">Typical deliverables</h2>
        <ul className="mt-5 grid gap-3 text-ink-700 sm:grid-cols-2">
          <Bullet>Integrated program plan (schedule, scope, risk, governance).</Bullet>
          <Bullet>Decision-rights and escalation map.</Bullet>
          <Bullet>Stage-gate / phase-review structure aligned to design controls.</Bullet>
          <Bullet>Cross-functional working and review cadence.</Bullet>
          <Bullet>Program-recovery plan, when called for, with named owners.</Bullet>
          <Bullet>Executive briefings that hold up under scrutiny.</Bullet>
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
      <p className="eyebrow">Related services</p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        <li>
          <Link
            href="/services/regulatory-quality"
            className="text-ink-900 no-underline hover:underline"
          >
            Regulatory &amp; quality consulting →
          </Link>
        </li>
        <li>
          <Link
            href="/services/combination-products"
            className="text-ink-900 no-underline hover:underline"
          >
            Combination products consulting →
          </Link>
        </li>
        <li>
          <Link
            href="/services/design-engineering"
            className="text-ink-900 no-underline hover:underline"
          >
            Medical device design engineering →
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
          <h2 className="text-2xl">Have a program that needs senior judgment?</h2>
          <p className="mt-2 text-ink-600">
            Engagements typically start with a one-hour scoping call.
          </p>
        </div>
        <Link href="/contact" className="btn">
          Start a conversation
        </Link>
      </div>
    </Section>
  );
}
