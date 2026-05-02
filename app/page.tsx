import Link from "next/link";
import { Section } from "@/components/Section";

export default function HomePage() {
  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <p className="eyebrow">Medical device & combination product consulting</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.1] sm:text-5xl">
          Senior engineering for medical devices and combination products —
          from concept through commercialization.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-600">
          Hitmaker Engineering helps device and pharma teams ship platform
          products with confidence: design controls, regulatory strategy, human
          factors, and program leadership delivered by a Professional Engineer
          who has run the room on $60M R&amp;D portfolios and 100+ contributor
          programs.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/contact" className="btn">
            Start a conversation
          </Link>
          <Link href="/services" className="btn-secondary">
            See services
          </Link>
        </div>
        <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-ink-100 pt-10 sm:grid-cols-3">
          <Stat value="$60M" label="R&D engineering budget owned at Cepheid" />
          <Stat value="100+" label="contributors aligned on a single platform program" />
          <Stat value="$80M" label="duplicate development cost avoided through platform consolidation" />
        </dl>
      </Section>

      <Section bordered>
        <div className="grid gap-10 sm:grid-cols-3">
          <Pillar
            eyebrow="Design"
            title="Design engineering and architecture"
            body="Mechanical, optical, and systems leadership with a track record of novel mechanisms, automated assembly, and 50–75% unit-cost reduction at scale."
          />
          <Pillar
            eyebrow="Regulatory"
            title="Combination product strategy"
            body="FDA 21 CFR 820 / Part 4, ISO 13485, ISO 14971, IEC 62366. Direct experience negotiating Assay Migration, RRIFP, and 510(k) change-decision logic with FDA SMEs."
          />
          <Pillar
            eyebrow="Programs"
            title="Program and portfolio leadership"
            body="PMP-credentialed program ownership across hardware, firmware, software, biology/chemistry, regulatory, quality, manufacturing, and supply chain."
          />
        </div>
      </Section>

      <Section bordered>
        <div className="grid gap-10 sm:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="eyebrow">Recent work</p>
            <h2 className="mt-3 text-3xl">
              The kinds of problems Hitmaker Engineering moves the needle on.
            </h2>
            <p className="mt-5 text-ink-600">
              Engagements span platform consolidation, formative-to-summative
              human factors evidence, design history file rebuilds, and FDA
              regulatory strategy for combination products and connected
              diagnostics.
            </p>
          </div>
          <ul className="space-y-5 text-ink-700">
            <Bullet>
              Consolidated two diverging platform programs into one focused
              system, avoiding ~$80M in duplicate development cost.
            </Bullet>
            <Bullet>
              Negotiated combination-product regulatory strategy with FDA SMEs,
              saving ~$10M per product and accelerating launch by a year on
              three future products.
            </Bullet>
            <Bullet>
              Built and ran a Human Factors Experience Center for formative and
              summative HFE on connected diagnostic platforms.
            </Bullet>
            <Bullet>
              Calibrated 150+ user requirements feeding multiple combination
              product definitions, anchored in 1+ year of customer visits.
            </Bullet>
          </ul>
        </div>
      </Section>

      <Section bordered>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-ink-50 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl">Have a program that needs senior judgment?</h2>
            <p className="mt-2 text-ink-600">
              Engagements typically start with a one-hour scoping call to map
              the question, the stakeholders, and the regulatory surface area.
            </p>
          </div>
          <Link href="/contact" className="btn">
            Get in touch
          </Link>
        </div>
      </Section>
    </>
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

function Pillar({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-3 text-xl">{title}</h3>
      <p className="mt-3 text-ink-600">{body}</p>
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
