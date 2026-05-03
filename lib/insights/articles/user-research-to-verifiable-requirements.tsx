import Link from "next/link";
import type { ArticleModule } from "../index";
import { Prose } from "@/components/article/Prose";
import { PullQuote } from "@/components/article/PullQuote";
import { Callout } from "@/components/article/Callout";

export const meta: ArticleModule["meta"] = {
  slug: "user-research-to-verifiable-requirements",
  title:
    "From user research to verifiable requirements: a lifecycle framework for medical-device teams",
  description:
    "User research produces narrative; design controls require verifiable inputs. A practitioner's framework for translating user-research outputs into design inputs that satisfy 21 CFR 820.30(c), align with IEC 62366-1:2015 use specifications, and produce a verification plan that audits cleanly.",
  topic: "User Research & Design Controls",
  publishedAt: "2026-05-03",
  status: "published",
  excerpt:
    "User research outputs are narrative — workflows, intended uses, use environments, pain points. Design inputs are discrete, measurable, and verifiable. A coherent framework for translating from one to the other is the difference between a design history file that audits cleanly and one that traces back to a paraphrase of the original need.",
  keywords: [
    "user research medical device",
    "design inputs",
    "21 CFR 820.30(c)",
    "IEC 62366-1:2015",
    "use specification",
    "user needs to verifiable requirements",
    "design controls traceability",
  ],
  readingMinutes: 12,
};

export const faqs: ArticleModule["faqs"] = [
  {
    question:
      "What does 21 CFR 820.30(c) actually require for design inputs?",
    answer:
      "21 CFR 820.30(c) requires that design input procedures ensure design inputs are appropriate to the device and address the intended use of the device, including the needs of the user and patient. The procedure must also include a mechanism for resolving incomplete, ambiguous, or conflicting requirements. Inputs must be documented and reviewed and approved by a designated individual, and approval recorded by date and signature. The regulation does not specify a format — it specifies properties: appropriate, addressing user/patient needs, complete, unambiguous, non-conflicting.",
  },
  {
    question:
      "What is a use specification under IEC 62366-1:2015 and how does it relate to design inputs?",
    answer:
      "IEC 62366-1:2015 §5 requires the manufacturer to prepare a use specification that documents the intended medical indication, intended patient population, intended part of the body, intended user profiles, intended use environment, and operating principle. The use specification is the primary input to the user-interface specification (§6), the use-related risk analysis (§6.2), and the user-interface evaluation plan (§7). It is also a primary input to design inputs under 820.30(c) — specifically the 'needs of the user and patient' that 820.30(c) requires design inputs to address. A complete use specification is the closest single artifact to a 'first draft of design inputs from a user perspective'.",
  },
  {
    question:
      "Should user needs and design inputs be the same artifact, or separate?",
    answer:
      "Separate. User needs are written from the user/patient perspective in narrative form ('the clinician needs to set up the device between cases without losing sterility'). Design inputs are written from the device perspective in verifiable form ('setup time from packaging removal to ready-to-use shall be ≤90 seconds with sterility maintained per ISO 11737-2'). The translation step between them is where most programs either invent the gap that haunts them later, or close it cleanly. Each design input traces to one or more user needs; the traceability record is the artifact a regulator asks for first.",
  },
  {
    question:
      "How do use-related risks become design inputs?",
    answer:
      "IEC 62366-1:2015 §6.2 requires identification of hazardous use scenarios — sequences of user actions that could lead to harm. For each hazardous use scenario, a risk control measure is identified per ISO 14971. The risk control measure becomes one of three things: an inherent design feature, a protective measure (alarms, interlocks, safeguards), or information for safety (labeling, training). The first two map directly to design inputs — the design input states what the device must do or constrain to implement the control. The third maps to labeling and training requirements that are still part of the design output. Use-related risks that do not map to either are evidence that the risk-control story is not yet complete.",
  },
  {
    question:
      "What's the most common gap in user-research-to-requirements traceability?",
    answer:
      "The most common gap is that the verification approach is decided after the design input is approved. The design input gets through review without specifying how it will be verified, the verification protocol is drafted later by people who were not in the input decisions, and the protocol verifies what is convenient rather than what was specified. The fix is to require a verification approach (test, inspection, analysis, demonstration) and a target acceptance criterion at the time the design input is approved — not at the time the protocol is written. Design verification under 820.30(f) becomes a generated artifact, not a curated one.",
  },
];

export const tableOfContents = [
  { id: "the-gap", label: "The translation gap" },
  { id: "framework", label: "A five-stage framework" },
  { id: "stage-1", label: "Stage 1 — Use specification" },
  { id: "stage-2", label: "Stage 2 — User needs and use scenarios" },
  { id: "stage-3", label: "Stage 3 — Design inputs with verification approach" },
  { id: "stage-4", label: "Stage 4 — Design outputs and traceability" },
  { id: "stage-5", label: "Stage 5 — Verification and validation" },
  { id: "summary", label: "Practitioner summary" },
  { id: "faq", label: "Frequently asked questions" },
];

export const howTo: ArticleModule["howTo"] = {
  name: "How to translate user research into verifiable design inputs",
  description:
    "A five-stage framework for taking user-research outputs and producing design inputs that satisfy 21 CFR 820.30(c), align with IEC 62366-1:2015, and produce a clean verification plan under 820.30(f).",
  steps: [
    {
      name: "Build the use specification per IEC 62366-1:2015 §5",
      text: "Document intended medical indication, intended patient population, intended body part, intended user profiles, intended use environment, and operating principle. The use specification is the upstream input to all subsequent translation work.",
    },
    {
      name: "Derive user needs and use scenarios from the use specification",
      text: "Convert the narrative use specification into discrete user-need statements (one per row) and a use-scenario inventory covering normal use, reasonably foreseeable misuse, and hazardous use scenarios per IEC 62366-1:2015 §6.2.",
    },
    {
      name: "Translate user needs into design inputs with verification approach",
      text: "For each user need, write one or more design inputs in verifiable form. Each design input must name a verification method category (test, inspection, analysis, demonstration) and a target acceptance criterion. Words like 'easy', 'fast', or 'intuitive' flag the input as not yet ready.",
    },
    {
      name: "Wire design inputs to design outputs and traceability",
      text: "Each design input traces to specific design outputs (drawings, specifications, software builds). The traceability matrix is bidirectional: every design output reference is justified by a design input, and every design input has at least one design output that implements it.",
    },
    {
      name: "Verify against design inputs (820.30(f)); validate against user needs (820.30(g))",
      text: "Design verification confirms design outputs meet design inputs. Design validation confirms the device meets user needs in actual or simulated use environments. Both reference the artifacts upstream by ID, so the design history file is generated rather than assembled.",
    },
  ],
};

export function Body() {
  return (
    <Prose>
      <p>
        User research produces narrative artifacts. A journey map. An intended
        use statement. A list of pain points. An inventory of use
        environments. A workflow with annotated friction points.
      </p>

      <p>
        Design controls under 21 CFR 820.30 require the opposite — discrete,
        measurable design inputs that pass the test in <strong>820.30(c)</strong>:
        appropriate to the device, addressing the needs of the user and
        patient, with a mechanism for resolving incomplete, ambiguous, or
        conflicting requirements.
      </p>

      <p>
        Between the narrative artifacts of user research and the verifiable
        statements of design inputs, there is a translation step. This is a
        practitioner&apos;s framework for that translation step — what each
        stage looks like, what artifacts each stage produces, and what
        traceability each stage owes to the next.
      </p>

      <PullQuote>
        Most programs do not have a user-research problem and they do not
        have a design-input problem. They have a translation problem — and
        the translation step is the artifact that goes missing.
      </PullQuote>

      <h2 id="the-gap">The translation gap</h2>

      <p>
        A user need that says <em>&quot;the clinician should be able to set
        up the device quickly between cases without losing sterility&quot;</em>{" "}
        is not yet a design input. It is a narrative statement that compresses
        several decisions: what does &quot;quickly&quot; mean? What does
        &quot;set up&quot; include — packaging removal? device configuration?
        priming? user training? What does &quot;losing sterility&quot; mean —
        a sterility test failure, a sterile-barrier breach, a procedural
        violation?
      </p>

      <p>
        Each of those questions has to be answered before the statement
        becomes verifiable. The translation step is where the answers are
        decided and recorded. Programs that skip this step write design
        inputs that look verifiable but are actually paraphrases of the
        narrative — at verification, they are tested against an
        engineering-team interpretation of the original need, and the audit
        trail breaks in the same place every time.
      </p>

      <Callout kind="pitfall" title="Where this breaks">
        <p>
          The classic failure mode: engineering writes its own design inputs,
          derives them from a memory of the user research, and never returns
          to the research artifacts to validate the translation. By
          verification, the team is testing against a paraphrase. The
          regulator asks to see the trace from the user need to the
          verification result; the team can show two of the three artifacts
          but not the connection between them.
        </p>
      </Callout>

      <h2 id="framework">A five-stage framework</h2>

      <p>
        The framework that closes this gap has five stages, each producing a
        named artifact and each owing specific traceability to the next:
      </p>

      <ol>
        <li>
          <strong>Stage 1 — Use specification.</strong> Per IEC 62366-1:2015 §5.
          The narrative anchor.
        </li>
        <li>
          <strong>Stage 2 — User needs and use scenarios.</strong> Discrete
          user-need statements + a use-scenario inventory covering normal use,
          reasonably foreseeable misuse, and hazardous use scenarios.
        </li>
        <li>
          <strong>Stage 3 — Design inputs with verification approach.</strong>{" "}
          The translation. Each design input is verifiable and pairs with a
          method and acceptance criterion at approval time.
        </li>
        <li>
          <strong>Stage 4 — Design outputs and traceability.</strong> Drawings,
          specifications, software, processes — each tracing back to specific
          inputs.
        </li>
        <li>
          <strong>Stage 5 — Verification and validation.</strong> Verification
          confirms outputs meet inputs (820.30(f)); validation confirms the
          device meets user needs in use (820.30(g)).
        </li>
      </ol>

      <p>The remainder of this note is one section per stage.</p>

      <h2 id="stage-1">Stage 1 — Use specification (IEC 62366-1:2015 §5)</h2>

      <p>
        IEC 62366-1:2015 §5 requires the manufacturer to prepare a use
        specification that documents:
      </p>

      <ul>
        <li>The intended medical indication;</li>
        <li>The intended patient population;</li>
        <li>The intended part of the body or type of tissue applied to or interacted with;</li>
        <li>The intended user profiles;</li>
        <li>The intended use environment(s);</li>
        <li>The operating principle.</li>
      </ul>

      <p>
        The use specification is the upstream input to almost everything
        downstream — it anchors the user-interface specification (§6), the
        use-related risk analysis (§6.2), and the user-interface evaluation
        plan (§7). It is also the primary source for the &quot;needs of the
        user and patient&quot; that 21 CFR 820.30(c) requires design inputs
        to address.
      </p>

      <Callout kind="regulatory" title="IEC 62366-1:2015 §5 — Use specification">
        <p>
          The standard does not require a specific document format. It does
          require the use specification to be documented, reviewed, and
          maintained as the basis for subsequent usability work. Programs
          that treat the use specification as a marketing-adjacent narrative
          rather than a controlled engineering artifact lose the upstream
          anchor and rebuild it implicitly later.
        </p>
      </Callout>

      <h2 id="stage-2">Stage 2 — User needs and use scenarios</h2>

      <p>
        From the use specification, two derived artifacts emerge: a
        discretized list of user needs (each as a single statement, owned by
        a single user role, in narrative form) and a use-scenario inventory.
      </p>

      <h3 id="user-needs-list">User needs — discretization</h3>

      <p>
        The use specification is necessarily holistic. The user-needs list
        breaks it into atomic statements that can each be evaluated for
        feasibility and translated into a design input. A useful test: each
        user need should describe a single observable outcome from the user&apos;s
        perspective. A statement that bundles two outcomes (&quot;the device
        should set up quickly and operate quietly&quot;) becomes two user needs.
      </p>

      <h3 id="use-scenarios">Use scenarios — coverage</h3>

      <p>
        The use-scenario inventory should cover three categories: normal use
        (the typical sequence of user actions), reasonably foreseeable
        misuse, and hazardous use scenarios. IEC 62366-1:2015 §6.2 calls out
        hazardous use scenarios specifically — sequences of user actions that
        could lead to harm. Each hazardous use scenario maps to one or more
        risk control measures per ISO 14971.
      </p>

      <h2 id="stage-3">Stage 3 — Design inputs with verification approach</h2>

      <p>
        This is the translation step. Each user need produces one or more
        design inputs. Each design input is written to be verifiable and
        carries, at the time of approval, a verification approach and a
        target acceptance criterion.
      </p>

      <p>
        Continuing the earlier example, the user need:
      </p>

      <blockquote>
        The clinician should be able to set up the device quickly between
        cases without losing sterility.
      </blockquote>

      <p>
        becomes one or more design inputs of the form:
      </p>

      <blockquote>
        <strong>DI-014:</strong> The device shall complete setup from
        packaging removal to ready-to-use state within 90 seconds when
        operated by a trained clinician per the labeled procedure.{" "}
        <em>Verification approach: timed observational test, n=10 trained
        clinicians, target ≤90 seconds in 9/10 trials with 95% confidence
        (one-sided binomial).</em>
      </blockquote>

      <blockquote>
        <strong>DI-015:</strong> The sterile barrier shall remain intact
        through the labeled setup procedure when performed per the
        instructions for use.{" "}
        <em>Verification approach: bubble-leak test per ASTM F2096 on n=30
        units after simulated setup, AQL 0.65.</em>
      </blockquote>

      <p>
        Note three properties of the translation:
      </p>

      <ul>
        <li>
          The narrative word &quot;quickly&quot; has been resolved to a
          measurable target. The decision (90 seconds) is recorded at the
          design-input level, with the rationale documented in the
          requirements record.
        </li>
        <li>
          The compound need (&quot;quickly without losing sterility&quot;) has
          been split into two design inputs. Each is independently verifiable.
        </li>
        <li>
          The verification approach is named at design-input approval — not
          left for the verification team to decide later.
        </li>
      </ul>

      <PullQuote>
        Design verification is not a stage that follows design — it is a
        commitment made when the design input is written, and broken when
        the verification approach is decided after the fact.
      </PullQuote>

      <h2 id="stage-4">Stage 4 — Design outputs and traceability</h2>

      <p>
        Design outputs under 21 CFR 820.30(d) are the drawings,
        specifications, software builds, and process descriptions that
        implement the design inputs. The traceability requirement is
        bidirectional:
      </p>

      <ul>
        <li>
          Every design input has at least one design output that implements
          it (forward traceability).
        </li>
        <li>
          Every design output references the design input(s) it implements
          (backward traceability).
        </li>
      </ul>

      <p>
        The simplest tooling is a traceability matrix that names each design
        input on one axis and each design output on the other, with cells
        marking implementation. The same matrix extends to the right with
        verification protocols (§820.30(f)) and validation evidence
        (§820.30(g)).
      </p>

      <Callout kind="note" title="The matrix is not optional">
        <p>
          Programs that skip the matrix and rely on document references
          inside specifications and reports inevitably lose the bidirectional
          property. The matrix is the lowest-cost way to keep traceability
          generated, not curated. Tooling can be a requirements-management
          system (Polarion, Jama, Codebeamer) or a single owned spreadsheet —
          the discipline matters more than the platform.
        </p>
      </Callout>

      <h2 id="stage-5">Stage 5 — Verification and validation</h2>

      <p>
        21 CFR 820.30(f) requires design verification to confirm that design
        outputs meet design inputs. Because the verification approach was
        decided at the time the input was approved (Stage 3), each
        verification protocol is a near-direct restatement of the
        approach-and-acceptance-criterion already in the input — with the
        details of test setup, sample preparation, and pass/fail conditions
        elaborated.
      </p>

      <p>
        21 CFR 820.30(g) requires design validation to confirm that the
        device conforms to user needs and intended uses. Validation closes
        the loop back to the user-needs list and the use specification: each
        user need is validated, in actual or simulated use environments, by
        evidence that the device — operated through the intended use
        scenarios by the intended user profile — meets the original need as
        narrative-stated.
      </p>

      <p>
        Where design verification is testing against design inputs,
        validation is testing against user needs. The translation step in
        Stage 3 is what makes both possible without contradiction.
      </p>

      <h2 id="summary">Practitioner summary</h2>

      <p>
        The user-research-to-verifiable-requirements gap is one of the
        highest-leverage places to invest engineering rigor in a
        regulated-product program. Programs that build the translation step
        explicitly — as a named artifact, owned by a named role, reviewed
        and approved with the same rigor as the inputs themselves — produce
        design history files that audit cleanly and verification plans that
        do not surprise anyone.
      </p>

      <p>
        Programs that don&apos;t pay the cost in retroactive curation: a
        traceability matrix assembled before submission, a verification
        protocol that conveniently aligns with the design output rather than
        the design input, and a validation report that compares the device
        to a paraphrase of the original need.
      </p>

      <p>
        For where this fits in the broader lifecycle, see{" "}
        <Link href="/insights/why-medical-device-development-breaks-down">
          Why medical device development breaks down between user needs,
          engineering, and manufacturing
        </Link>
        . For the regulatory-and-design-controls service area, see{" "}
        <Link href="/services/design-controls">
          Regulatory, Quality &amp; Design Controls
        </Link>
        .
      </p>
    </Prose>
  );
}
