import Link from "next/link";
import type { ArticleModule } from "../index";
import { Prose } from "@/components/article/Prose";
import { PullQuote } from "@/components/article/PullQuote";
import { Callout } from "@/components/article/Callout";

export const meta: ArticleModule["meta"] = {
  slug: "21-cfr-part-4-where-combination-products-stall",
  title:
    "21 CFR Part 4 in practice: where combination-product programs actually stall",
  description:
    "Combination-product programs rarely stall on the regulation itself. They stall on the interfaces between device design controls and drug CGMP. A practitioner's view of where the three predictable stall points are — and how to architect a streamlined CGMP system that survives a coordinated FDA inspection.",
  topic: "Combination Products",
  publishedAt: "2026-05-03",
  updatedAt: "2026-05-03",
  status: "published",
  excerpt:
    "21 CFR Part 4 is one of the shortest regulations in the medical-product world — but it sits at the most architecturally complex intersection. Combination-product programs do not stall on the regulation; they stall on the interfaces between the device QSR and drug CGMP, on the constituent classification underneath that, and on change-control logic that spans both. A practitioner's view of where to architect carefully.",
  keywords: [
    "21 CFR Part 4",
    "combination product",
    "streamlined CGMP",
    "device QSR drug CGMP integration",
    "primary mode of action",
    "PMOA combination product",
    "21 CFR 820.30",
    "21 CFR 211",
  ],
  readingMinutes: 13,
};

export const faqs: ArticleModule["faqs"] = [
  {
    question:
      "What is 21 CFR Part 4 and which programs does it apply to?",
    answer:
      "21 CFR Part 4 is the FDA regulation governing CGMP requirements for combination products. Subpart A (the 'streamlined CGMP' framework) applies to single-entity and co-packaged combination products and lets a manufacturer demonstrate compliance with both the device QSR (21 CFR Part 820) and drug CGMP (21 CFR Part 211) through one integrated quality system, rather than running two parallel ones. Per 21 CFR 4.3, a combination product is two or more regulated components — drug, device, biological product — that are physically combined, co-packaged, or cross-labeled. If your product includes both a drug and a device constituent, Part 4 is in play.",
  },
  {
    question:
      "What is the primary mode of action (PMOA) and why does it matter so early?",
    answer:
      "The primary mode of action is the single mode of action that provides the most important therapeutic effect of the combination product, per 21 CFR 3.2(m). The PMOA determines which FDA center has primary jurisdiction (CDER for drug-led, CDRH for device-led, CBER for biologic-led) and therefore which submission pathway, which review division, and which baseline regulatory framework the program will operate under. PMOA matters early because changing it midway through development is expensive — submission strategy, evidence package, and quality-system anchor all reset.",
  },
  {
    question:
      "How is 'streamlined CGMP' under 21 CFR 4.4 different from running both Part 820 and Part 211 in full?",
    answer:
      "Per 21 CFR 4.4, a manufacturer that operates under 21 CFR Part 820 (the device QSR) can demonstrate compliance with the drug CGMP requirements of 21 CFR Part 211 by additionally implementing a specified subset of Part 211 provisions — listed in 21 CFR 4.4(b)(1). Conversely, a manufacturer operating under Part 211 can demonstrate compliance with Part 820 by additionally implementing a specified subset of Part 820 provisions, listed in 21 CFR 4.4(b)(2). The 'streamlined' approach lets one quality system serve as the anchor; the practical work is integrating the additional specified provisions cleanly without creating a parallel shadow system.",
  },
  {
    question:
      "What's the most common stall point in combination-product programs?",
    answer:
      "The most common stall is at the interface between device design controls and drug CGMP — specifically, the integration of design control change-management with drug CGMP change-control. A device-led program can have a fully compliant 21 CFR 820.30 design controls process and a fully compliant Part 211 process, and still be non-compliant under Part 4 if a change to the device constituent that affects the drug constituent (or the drug-device interface) is not evaluated under both frameworks. This is the place inspections most often find gaps.",
  },
  {
    question:
      "How does combination-product change control differ from device or drug change control alone?",
    answer:
      "Combination-product change control has to evaluate, for any change, which constituent the change touches and which constituents the change affects. A change to the device constituent that does not modify the drug or its delivery is evaluated under 820.30(i) design changes alone. A change to the device that modifies fluid path geometry, dosing accuracy, or drug-product contact materials is also a change to the drug constituent and triggers Part 211 evaluation. Programs without a single change-control board that includes both device and drug functions tend to evaluate changes against only one framework and discover the gap during inspection or submission.",
  },
];

export const tableOfContents = [
  { id: "regulation-anatomy", label: "The regulation, in brief" },
  { id: "stall-1", label: "Stall 1 — Primary mode of action" },
  { id: "stall-2", label: "Stall 2 — Streamlined CGMP integration" },
  { id: "stall-3", label: "Stall 3 — Change control across the interface" },
  { id: "how-to", label: "How to stand up streamlined CGMP" },
  { id: "summary", label: "Practitioner summary" },
  { id: "faq", label: "Frequently asked questions" },
];

export const howTo: ArticleModule["howTo"] = {
  name: "How to stand up a streamlined CGMP system under 21 CFR Part 4",
  description:
    "Practitioner steps to integrate a device QSR (21 CFR Part 820) and drug CGMP (21 CFR Part 211) into one streamlined combination-product quality system, per 21 CFR 4.4.",
  totalTime: "P12W",
  steps: [
    {
      name: "Establish the constituent classification and PMOA",
      text: "Determine which constituents are drug, device, and/or biologic per 21 CFR 3.2(e), and identify the primary mode of action per 21 CFR 3.2(m). Document the classification rationale before any quality-system structure decisions are made.",
    },
    {
      name: "Choose the streamlined-CGMP anchor framework",
      text: "Per 21 CFR 4.4(a), select either Part 820 (with the specified Part 211 provisions added) or Part 211 (with the specified Part 820 provisions added) as the anchor. The anchor is typically the framework most aligned with the PMOA — but the choice has practical implications for the existing QMS and inspection cadence, so it should be deliberate.",
    },
    {
      name: "Map the additional specified provisions onto the anchor QMS",
      text: "If anchored on Part 820, integrate the additional specified Part 211 provisions listed in 21 CFR 4.4(b)(1) — including 211.84 (testing of components), 211.103 (calculation of yield), 211.137 (expiration dating), 211.165 (testing and release), 211.166 (stability testing), 211.167 (special testing requirements), and 211.170 (reserve samples). If anchored on Part 211, integrate the additional specified Part 820 provisions listed in 21 CFR 4.4(b)(2) — including 820.20 (management responsibility), 820.30 (design controls), 820.50 (purchasing controls), 820.100 (corrective and preventive action), 820.170 (installation), and 820.200 (servicing).",
    },
    {
      name: "Stand up an integrated change-control system",
      text: "Build a single change-control board with both device-engineering and drug-CGMP representation. The board evaluates every change against the constituent the change touches AND the constituents the change affects. Cross-component changes route through both frameworks before approval.",
    },
    {
      name: "Integrate design controls with drug CGMP at the artifact level",
      text: "Wire the 21 CFR 820.30(c) design inputs to the drug-product specifications they constrain, and wire 820.30(g) design validation to the drug-delivery clinical evidence. The design history file references the drug-product master file or NDA/IND content directly, not as a separate parallel record.",
    },
    {
      name: "Train one team on the integrated system",
      text: "Combination-product programs fail when device engineers know Part 820 and drug-CGMP staff know Part 211 but neither knows the other. Cross-train the team on the streamlined-CGMP framework as a single integrated system before the first major design or process change.",
    },
  ],
};

export function Body() {
  return (
    <Prose>
      <p>
        21 CFR Part 4 is one of the shortest regulations in the medical-product
        world. Subpart A — the streamlined CGMP framework that governs how a
        combination product can comply with both the device Quality System
        Regulation and drug CGMP through one integrated system — runs to a
        few pages. The brevity is deceptive. Part 4 sits at the most
        architecturally complex intersection in regulated-product development:
        the place where two regulatory frameworks, two quality vocabularies,
        two inspection cadences, and two engineering disciplines have to be
        integrated into a single coherent system that survives a coordinated
        inspection.
      </p>

      <p>
        Combination-product programs rarely stall on Part 4 itself. They stall
        in three predictable places. This is a practitioner&apos;s note on
        what those stall points are and how to architect around them.
      </p>

      <PullQuote>
        Programs do not stall on Part 4. They stall on the interfaces — between
        device design controls and drug CGMP, between constituent
        classification and submission pathway, and between two change-control
        systems that should be one.
      </PullQuote>

      <h2 id="regulation-anatomy">The regulation, in brief</h2>

      <p>
        21 CFR Part 4 has two subparts:{" "}
        <strong>Subpart A</strong> covers CGMP requirements for combination
        products (the streamlined framework), and{" "}
        <strong>Subpart B</strong> covers post-market safety reporting. The
        structural backbone is in <strong>Subpart A, §4.4</strong>:
      </p>

      <ul>
        <li>
          A manufacturer can demonstrate compliance with Part 820 alone, with
          Part 211 alone, with both in full, or with one as the anchor and the
          additional <em>specified</em> provisions of the other added on top.
          The fourth option is the streamlined framework.
        </li>
        <li>
          §4.4(b)(1) lists the specific Part 211 provisions a Part-820-anchored
          manufacturer must implement: 211.84 (component testing), 211.103
          (yield calculation), 211.137 (expiration dating), 211.165 (testing
          and release), 211.166 (stability), 211.167 (special testing), and
          211.170 (reserve samples).
        </li>
        <li>
          §4.4(b)(2) lists the specific Part 820 provisions a Part-211-anchored
          manufacturer must implement: 820.20 (management responsibility),
          820.30 (design controls), 820.50 (purchasing controls), 820.100
          (CAPA), 820.170 (installation), and 820.200 (servicing).
        </li>
      </ul>

      <Callout kind="regulatory" title="The framework of Subpart A">
        <p>
          §4.4(a) is the structural choice: pick an anchor (820 or 211), and
          add the specified provisions of the other framework. §4.4(b) is the
          ingredient list. Programs that read §4.4 as an option matrix and
          pick deliberately ship faster than programs that drift into the
          framework retroactively.
        </p>
      </Callout>

      <h2 id="stall-1">Stall 1 — Primary mode of action</h2>

      <p>
        Constituent classification, and specifically the determination of the
        primary mode of action under <strong>21 CFR 3.2(m)</strong>, is the
        decision that anchors everything downstream. PMOA determines:
      </p>

      <ul>
        <li>
          Which FDA center has primary jurisdiction (CDER for drug-led, CDRH
          for device-led, CBER for biologic-led);
        </li>
        <li>
          Which submission pathway is primary (NDA, BLA, 510(k), de novo,
          PMA);
        </li>
        <li>
          Which framework anchors the streamlined CGMP system under §4.4(a);
        </li>
        <li>
          Which review division within the lead center handles the
          application.
        </li>
      </ul>

      <p>
        Programs stall here when the PMOA argument is made too late, or made
        in a form that does not survive the FDA&apos;s Office of Combination
        Products review. The PMOA determination is not a marketing decision
        — it has to align with how the product actually achieves its primary
        therapeutic effect, supported by mechanism-of-action data and clinical
        evidence. A program that designs around a device-led PMOA and
        discovers during pre-submission that the agency views the product as
        drug-led pays the cost twice: in the submission strategy and in the
        already-implemented quality system that was anchored on Part 820.
      </p>

      <Callout kind="pitfall" title="Where this breaks">
        <p>
          The most common pattern: a device-engineering team builds a product
          around a familiar Part 820 framework, the PMOA determination is
          treated as a regulatory-affairs deliverable rather than an
          architectural decision, and the agency&apos;s view of PMOA differs
          from the team&apos;s — surfaced too late to redesign the quality
          system. The fix is to make PMOA a Phase 1 decision, validated
          through a pre-IND or pre-submission meeting before substantial
          engineering commits.
        </p>
      </Callout>

      <h2 id="stall-2">Stall 2 — Streamlined CGMP integration</h2>

      <p>
        Once PMOA is set and the anchor framework is chosen, the next stall
        point is the integration of the additional specified provisions. The
        regulation lists the provisions; it does not specify how to integrate
        them. Programs frequently default to one of two patterns, and both
        produce inspection findings:
      </p>

      <h3 id="anti-pattern-shadow">Anti-pattern: the shadow system</h3>

      <p>
        A device-anchored program implements 21 CFR 820 in full and stands up
        a parallel set of procedures for the additional Part 211 provisions —
        often with different document numbering, different review boards, and
        different training paths. The two systems coexist but do not
        integrate. When a deviation occurs in the drug constituent, the
        device QMS does not capture it; when a CAPA opens for a device issue
        that affects drug stability, the Part 211 system does not see it.
        Inspections find the gap.
      </p>

      <h3 id="anti-pattern-blended">Anti-pattern: the blended system without anchor</h3>

      <p>
        The opposite failure: a program tries to integrate Part 820 and Part
        211 in equal weight, with no clear anchor. The result is procedures
        that try to address both frameworks at once and end up addressing
        neither cleanly. Inspectors arrive expecting either a 820-anchored or
        a 211-anchored streamlined system per §4.4(a), find neither, and
        write findings against both frameworks.
      </p>

      <PullQuote>
        Streamlined CGMP works when the anchor is unambiguous and the
        additional specified provisions are integrated as procedures within
        the anchor system — not as a parallel system, and not as a hybrid
        without an anchor.
      </PullQuote>

      <p>
        The pattern that does work is structural: pick the anchor explicitly
        (per §4.4(a)), implement the anchor framework as the primary QMS, and
        integrate the additional specified provisions as named procedures
        within that QMS — referenced by their §4.4(b) provision number, owned
        by the same management responsibility chain as the anchor framework,
        and subject to the same internal-audit cadence.
      </p>

      <h2 id="stall-3">Stall 3 — Change control across the interface</h2>

      <p>
        The third stall is at the most expensive seam: change control that
        spans the device-drug interface. A change-control system that handles
        a device change correctly under 21 CFR 820.30(i) and a drug-process
        change correctly under Part 211 can still be non-compliant under
        Part 4 if a change that touches the device but{" "}
        <em>affects</em> the drug constituent is not evaluated under both
        frameworks.
      </p>

      <p>
        Examples of cross-interface changes that frequently miss
        dual-framework evaluation:
      </p>

      <ul>
        <li>
          A change to a fluid path component that is technically a device
          change, but alters drug-product contact materials and therefore
          extractables/leachables risk under Part 211 stability testing
          (§211.166).
        </li>
        <li>
          A software change to a delivery device that is a device design
          change under 820.30(i), but modifies the delivered dose profile and
          therefore the drug-product specification.
        </li>
        <li>
          A supplier change for a primary container-closure component that is
          a purchasing controls change under 820.50, but is also a
          drug-product contact-surface change under 211.84 (component
          testing).
        </li>
      </ul>

      <Callout kind="note" title="The single change-control board pattern">
        <p>
          The architectural fix is one change-control board with both
          device-engineering and drug-CGMP representation. Every change is
          evaluated for two questions: which constituent does the change{" "}
          <em>touch</em>, and which constituents does the change{" "}
          <em>affect</em>. Cross-interface changes route through both
          frameworks before approval. Same board, same record, two
          evaluations.
        </p>
      </Callout>

      <h2 id="how-to">How to stand up streamlined CGMP — six steps</h2>

      <p>
        The HowTo schema embedded in this article&apos;s structured data
        captures the full step sequence; the practitioner version is shorter:
      </p>

      <ol>
        <li>
          <strong>Establish constituent classification and PMOA</strong> per
          21 CFR 3.2(e) and 3.2(m). Document the rationale before any QMS
          decision is made.
        </li>
        <li>
          <strong>Choose the anchor framework</strong> per §4.4(a). The
          choice usually aligns with the PMOA, but the existing QMS, the
          inspection cadence, and the team&apos;s expertise matter — make it
          a deliberate decision.
        </li>
        <li>
          <strong>Map the additional specified provisions</strong> from
          §4.4(b) onto the anchor QMS as named procedures, owned by the same
          management chain as the anchor framework.
        </li>
        <li>
          <strong>Stand up an integrated change-control system</strong> with
          one board, dual representation, and explicit dual-framework
          evaluation logic.
        </li>
        <li>
          <strong>Integrate design controls with drug CGMP at the artifact
          level.</strong> Design inputs reference drug-product specifications
          they constrain; design validation references drug-delivery clinical
          evidence directly.
        </li>
        <li>
          <strong>Train the team on the integrated system.</strong> Device
          engineers and drug-CGMP staff each learn the other framework well
          enough to evaluate cross-interface changes correctly. The system is
          only as integrated as the people running it.
        </li>
      </ol>

      <h2 id="summary">Practitioner summary</h2>

      <p>
        21 CFR Part 4 is short. The architectural decisions it requires are
        not. The three places combination-product programs stall —
        constituent classification and PMOA, streamlined CGMP integration,
        and change control across the device-drug interface — are not
        regulatory ambiguities. They are points where the regulation defers
        to the program&apos;s own design choices, and programs that defer
        those choices pay the cost in submission delay, inspection findings,
        or both.
      </p>

      <p>
        Programs that architect Part 4 deliberately — choosing the anchor
        framework explicitly, integrating §4.4(b) provisions cleanly, and
        running one change-control board across the interface — pass
        coordinated inspections without surprises and route their submissions
        through the right center the first time.
      </p>

      <p>
        For the design-controls side of the work, see{" "}
        <Link href="/services/design-controls">
          Regulatory, Quality &amp; Design Controls
        </Link>
        . For where programs typically stall in the lifecycle more broadly,
        see{" "}
        <Link href="/insights/why-medical-device-development-breaks-down">
          Why medical device development breaks down between user needs,
          engineering, and manufacturing
        </Link>
        .
      </p>
    </Prose>
  );
}
