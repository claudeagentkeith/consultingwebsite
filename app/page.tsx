import Link from "next/link";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <p className="eyebrow">Medical device & combination product consulting</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
          End-to-end product development for medical devices and combination
          products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Hitmaker Engineering helps regulated-product teams move from early
          user needs and product concepts through engineering, design controls,
          manufacturing transfer, launch, and sustaining support.
        </p>
        <p className="mt-4 max-w-2xl text-ink-600">
          We help teams clarify what to build, prove it can work, develop it
          rigorously, transfer it effectively, and sustain it after launch.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn">
            Start a Product Development Conversation
          </Link>
          <Link href="/services" className="btn-secondary">
            Explore Services
          </Link>
        </div>
      </Section>

      <Section bordered>
        <p className="eyebrow">Support across the product lifecycle</p>
        <h2 className="mt-3 max-w-3xl text-3xl">
          Support Across the Product Lifecycle
        </h2>
        <p className="mt-4 max-w-2xl text-ink-600">
          We engage across the full path from research and ideation through
          launch and post-market — and at any single phase along the way.
        </p>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {LIFECYCLE.map((phase, i) => (
            <LifecycleStep
              key={phase.title}
              index={i + 1}
              title={phase.title}
              body={phase.body}
            />
          ))}
        </ol>
      </Section>

      <Section bordered>
        <p className="eyebrow">Track record</p>
        <h2 className="mt-3 max-w-3xl text-3xl">
          Product Development Experience Across Complex Regulated Programs
        </h2>
        <p className="mt-4 max-w-2xl text-ink-600">
          Representative outcomes from prior regulated-product leadership
          include:
        </p>
        <dl className="mt-10 grid grid-cols-1 gap-8 border-t border-ink-100 pt-10 sm:grid-cols-2 lg:grid-cols-5">
          <Stat
            value="$60M+"
            label="R&D budget responsibility on a Fortune 500 medical-device portfolio"
          />
          <Stat
            value="100+"
            label="cross-functional contributors aligned on a single combination-product platform"
          />
          <Stat
            value="$80M"
            label="duplicate development cost avoided through platform consolidation"
          />
          <Stat
            value="$10M"
            label="per-product savings through FDA combination-product strategy"
          />
          <Stat
            value="150+"
            label="user and system requirements structured for development execution"
          />
        </dl>
      </Section>

      <Section bordered>
        <div className="grid gap-10 sm:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="eyebrow">When teams call us</p>
            <h2 className="mt-3 text-3xl">
              When Teams Call Hitmaker Engineering
            </h2>
            <p className="mt-5 text-ink-600">
              We engage at the points in the lifecycle where product decisions
              cross functional boundaries — where user needs, engineering
              feasibility, regulatory expectations, manufacturing realities, and
              business goals all need to be reconciled.
            </p>
          </div>
          <ul className="space-y-5 text-ink-700">
            <Bullet>
              Early user research needs to become a clear product direction.
            </Bullet>
            <Bullet>
              A promising concept needs to become a feasible architecture.
            </Bullet>
            <Bullet>
              Requirements, risks, usability, and design controls need to
              connect.
            </Bullet>
            <Bullet>
              Engineering decisions are starting to affect regulatory,
              manufacturing, or launch risk.
            </Bullet>
            <Bullet>
              A product is approaching design freeze but the evidence package
              is not ready.
            </Bullet>
            <Bullet>
              Manufacturing transfer is exposing gaps in design, process,
              suppliers, or documentation.
            </Bullet>
            <Bullet>
              A launched product needs sustaining support, cost reduction, or
              post-market improvement.
            </Bullet>
          </ul>
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl">
              Working on a medical device or combination product?
            </h2>
            <p className="mt-2 text-ink-600">
              Engagements typically start with a scoping call to map where the
              product is in the lifecycle, the decision in front of you, and
              the timeline you are working toward.
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

const LIFECYCLE = [
  {
    title: "User Research & Discovery",
    body: "Identify user needs, workflows, pain points, and product opportunities.",
  },
  {
    title: "Ideation & Concept Strategy",
    body: "Translate needs into product concepts, architecture options, and development paths.",
  },
  {
    title: "Design & Engineering",
    body: "Develop mechanisms, systems, requirements, prototypes, and technical solutions.",
  },
  {
    title: "Design Controls & Risk Management",
    body: "Connect requirements, risks, verification, validation, usability, and regulatory evidence.",
  },
  {
    title: "Manufacturing Transfer & Launch",
    body: "Support DFM, process readiness, supplier alignment, launch planning, and commercialization.",
  },
  {
    title: "Sustaining & Lifecycle Support",
    body: "Address post-launch issues, design changes, complaints, cost reduction, and product improvements.",
  },
];

function LifecycleStep({
  index,
  title,
  body,
}: {
  index: number;
  title: string;
  body: string;
}) {
  return (
    <li>
      <p className="eyebrow">{`Phase ${index}`}</p>
      <h3 className="mt-3 text-lg leading-snug">{title}</h3>
      <p className="mt-2 text-sm text-ink-600">{body}</p>
    </li>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-3xl font-semibold tracking-tight text-ink-900">
        {value}
      </dt>
      <dd className="mt-2 text-sm text-ink-600">{label}</dd>
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
