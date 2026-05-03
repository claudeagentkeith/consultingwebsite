import Link from "next/link";
import type { ArticleModule } from "../index";
import { Prose } from "@/components/article/Prose";
import { PullQuote } from "@/components/article/PullQuote";
import { Callout } from "@/components/article/Callout";

export const meta: ArticleModule["meta"] = {
  slug: "why-medical-device-development-breaks-down",
  title:
    "Why medical device development breaks down between user needs, engineering, and manufacturing",
  description:
    "Most medical-device programs do not fail on the technology. They fail at the seams — where user needs, engineering, design controls, and manufacturing should integrate but don't. A practitioner's anatomy of where, why, and how to architect around it.",
  topic: "Lifecycle & Program Management",
  publishedAt: "2026-05-03",
  status: "published",
  excerpt:
    "Medical-device programs rarely break on the technology. They break at the seams — where user needs hand off to engineering, where engineering hands off to design controls, and where design hands off to manufacturing. Each seam is a translation problem, and each translation problem has predictable failure modes you can architect around.",
  keywords: [
    "medical device product development",
    "design controls",
    "user needs to design inputs",
    "manufacturing transfer",
    "ISO 13485",
    "21 CFR 820.30",
    "lifecycle integration",
  ],
  readingMinutes: 14,
};

export const faqs: ArticleModule["faqs"] = [
  {
    question:
      "Why do medical-device programs fail at the handoff between user research and engineering, even with strong individual contributors?",
    answer:
      "User research outputs are usually narrative — workflows, pain points, intended uses. Engineering inputs need to be discrete, measurable, and verifiable. Without a deliberate translation step that converts user needs into testable design inputs, engineering builds against an interpretation of the research instead of the research itself, and the audit trail breaks. FDA 21 CFR 820.30(c) requires design inputs to be appropriate to the intended use and the needs of the user; the regulation does not specify how to bridge the gap, which is why programs that lack an explicit user-needs-to-design-inputs translation almost always discover the gap during verification.",
  },
  {
    question:
      "What is the most common cause of late-stage design changes in regulated programs?",
    answer:
      "Late-stage design changes are most often driven by manufacturing or process realities that surface only when a real supplier engages with real drawings, real materials, and a real process FMEA. The root cause is usually a lack of manufacturing voice during design — design-for-manufacture is treated as a downstream review rather than an upstream constraint. The cost is amplified because changes after design freeze trigger re-verification, risk-file updates, and sometimes regulatory change-decision logic.",
  },
  {
    question:
      "What does 'integrating design controls with risk management' actually mean?",
    answer:
      "ISO 14971:2019 expects risk management to inform design inputs, design outputs, verification, validation, and post-production input. In practice, that means hazards identified during risk analysis become design inputs (or design constraints) on the next iteration of the requirements document; risk controls are verified and validated as part of design verification and validation; and post-market data feeds back into the risk file. Programs that treat the risk file as a parallel deliverable instead of a forcing function on the requirements end up with traceability gaps that show up at audit.",
  },
  {
    question:
      "When should a combination-product program engage manufacturing, regulatory, and human factors functions?",
    answer:
      "All three should be at the table by the time design inputs are stabilizing — typically before the design output phase begins in earnest. Manufacturing engagement before that point informs design-for-manufacture; regulatory engagement before that point informs the regulatory strategy under 21 CFR Part 4 and the appropriate predicate or de novo path; and human factors engagement before that point informs the use-related risk file and the use scenarios that anchor verification and validation. Engaging any of them later is recoverable, but each month of delay compounds rework cost.",
  },
  {
    question:
      "Is this just a process problem? Can a better tool fix it?",
    answer:
      "Tools help, but the failure mode is structural, not tooling. The structural problem is that user needs, engineering decisions, regulatory evidence, and manufacturing readiness are managed by different functions on different cadences with different deliverables — and integrating them requires deliberate handoff design, shared traceability, and a single program owner who reconciles them. A requirements-management tool with end-to-end traceability is necessary but not sufficient; the integration logic still has to be authored by a person.",
  },
];

export function Body() {
  return (
    <Prose>
      <p>
        Most medical-device programs do not fail on the technology. They fail
        at the seams — the places where one discipline hands off to another and
        one set of assumptions has to be translated into another. Each seam is
        a translation problem. Each translation problem has predictable
        failure modes. And every program that breaks down between user needs,
        engineering, and manufacturing has broken down at one or more of the
        same five seams.
      </p>

      <p>
        This is a working note on what those seams are, what they look like
        when they are mishandled, and how to architect a program so they hold
        up — including under <strong>FDA 21 CFR 820.30</strong> design controls,
        <strong> ISO 13485:2016</strong> quality management, and{" "}
        <strong>ISO 14971:2019</strong> risk management.
      </p>

      <PullQuote>
        Programs do not fail on novel chemistry or novel mechanisms. They fail
        on translation — between user research and design inputs, between
        design inputs and risk controls, between drawings and a process that
        can be validated.
      </PullQuote>

      <h2 id="seam-1">Seam 1 — User research to design inputs</h2>

      <p>
        User research produces narrative artifacts: a journey map, a workflow,
        an intended use statement, a list of pain points, an inventory of use
        environments. Engineering needs the opposite — discrete, testable
        statements that pass the design-input test in 21 CFR 820.30(c): each
        input must be appropriate to the device, address the needs of the
        user and the patient, and be verifiable.
      </p>

      <p>
        A user need that says <em>&quot;the clinician should be able to set up
        the device quickly between cases&quot;</em> is not yet a design input.
        It becomes a design input only when it is restated in a form that
        another engineer can write a verification protocol for. That
        restatement — from narrative to verifiable — is where most programs
        either invent the gap that will haunt them later, or close it.
      </p>

      <Callout kind="pitfall" title="Where this breaks">
        <p>
          The most common failure mode is that the engineering team writes its
          own design inputs, derives them from a memory of the research, and
          never returns to the research artifacts to validate the translation.
          By verification, the team is testing against a paraphrase of the
          original need, and the audit trail back to the user is broken in two
          places: the research artifact does not link cleanly to the input,
          and the input does not document the assumption that connects them.
        </p>
      </Callout>

      <p>
        The architectural fix is a deliberate translation step that produces
        three artifacts, not two: the user research output, the design input,
        and a traceability record connecting them. The traceability record is
        the only one that frequently goes missing, and it is the one a
        regulator will ask to see first.
      </p>

      <h3 id="user-needs-checklist">Practitioner checklist — user needs to design inputs</h3>

      <ul>
        <li>
          Each design input names the user need it serves, the use environment
          it applies to, and the verification approach (test, inspection,
          analysis, or demonstration).
        </li>
        <li>
          Statements that include the words &quot;easy,&quot; &quot;fast,&quot;
          or &quot;intuitive&quot; are flagged as user needs, not design
          inputs, until they are decomposed into measurable performance
          targets.
        </li>
        <li>
          Use-related risks identified through IEC 62366 task analysis appear
          as design inputs or constraints in the requirements document, not
          only in the use-specification.
        </li>
        <li>
          Each user need has at least one design input; each design input
          traces to at least one user need or to a regulatory or standard
          requirement that itself traces to a user/patient outcome.
        </li>
      </ul>

      <h2 id="seam-2">Seam 2 — Design inputs to risk-controlled design</h2>

      <p>
        ISO 14971:2019 is structurally simple: identify hazards, estimate and
        evaluate risk, control unacceptable risk, and feed information from
        production and post-production back into the risk file. The structural
        simplicity hides where it actually breaks. The break is almost always
        at the boundary between the risk file and the design inputs.
      </p>

      <p>
        When risk analysis is run as a parallel deliverable — a hazard
        analysis spreadsheet that lives in QA's drive while engineering owns
        the requirements document — the risk controls become an afterthought
        layered on top of an already-fixed design. The team identifies
        hazards, lists controls, and writes them up; but the controls are not
        propagated back into the requirements document as design inputs or
        constraints, so when the requirements change, the controls do not
        track.
      </p>

      <Callout kind="regulatory" title="ISO 14971:2019 — Section 7.4">
        <p>
          Section 7.4 (Implementation of risk control measures) requires that
          implementation of each risk control measure is verified, and that
          its effectiveness is verified. Programs that treat the risk file as
          a parallel deliverable struggle here because the verification
          evidence sits in design verification, the control sits in the risk
          file, and there is no cross-reference until someone builds one
          retroactively for an audit.
        </p>
      </Callout>

      <p>
        The architectural fix is to treat the risk file as the forcing
        function on the requirements document, not as a downstream consumer of
        it. Hazards become design inputs. Controls become design inputs.
        Residual risks become design constraints. The requirements document is
        the single source of truth for what the device must do; the risk file
        is the analysis that justifies why the requirements include the
        controls they do.
      </p>

      <p>
        Done correctly, this means the design history file does not require a
        separate &quot;risk-controls implementation&quot; section — the
        controls are already in the requirements, already verified, and
        already validated. The risk file references them by ID. Traceability
        is structural, not curated.
      </p>

      <h2 id="seam-3">Seam 3 — Engineering to verifiable evidence</h2>

      <p>
        21 CFR 820.30(f) requires design verification to confirm that design
        outputs meet design inputs. The regulation is specific; the practice
        often is not. The most common failure mode at this seam is that
        verification protocols are written late, by people who were not in
        the requirements decisions, and they verify what is convenient to
        verify rather than what was specified.
      </p>

      <PullQuote>
        Design verification is not a stage that follows design — it is a
        commitment made when the design input is written, and broken when the
        verification approach is decided after the fact.
      </PullQuote>

      <p>
        A design input that says <em>&quot;the device shall remain sterile
        through a 12-month shelf life under specified storage conditions&quot;</em>{" "}
        is not, by itself, ready for verification. It is ready when it has
        been paired with a verification approach: which test method (ISO
        11737-2 sterility test, ASTM F1980 accelerated aging, real-time
        aging), which sample size and acceptance criterion, which conditions.
        That pairing should happen at the time the input is approved, not at
        the time the verification protocol is drafted.
      </p>

      <Callout kind="note" title="Where to encode verification approach">
        <p>
          Some teams keep the verification approach in the requirements
          document next to the input. Others keep a verification matrix as a
          separate artifact and reference each input by ID. Either works, as
          long as one is the single source of truth and the other is generated
          from it. What does not work is having two parallel sources that
          drift.
        </p>
      </Callout>

      <h3 id="verification-checklist">Practitioner checklist — design verification readiness</h3>

      <ul>
        <li>
          Every design input names a verification method category (test,
          inspection, analysis, demonstration) and a target acceptance
          criterion.
        </li>
        <li>
          Where the method is a recognized standard, the standard is named at
          the input level, not only in the protocol — so the input itself is
          stable across revisions of the protocol.
        </li>
        <li>
          Sample size and statistical confidence are decided before protocols
          are written, not negotiated during execution. Reliability/confidence
          targets trace back to the risk file.
        </li>
        <li>
          Verification of risk controls is identified explicitly in the
          verification matrix; controls without a verification entry are
          flagged as gaps before design freeze.
        </li>
      </ul>

      <h2 id="seam-4">Seam 4 — Design to manufacturing</h2>

      <p>
        Design transfer under 21 CFR 820.30(h) requires that the device design
        is correctly translated into production specifications. The regulation
        is short. The practice is the most expensive seam in the program.
      </p>

      <p>
        The pattern: engineering finalizes a design that works on the bench
        with a small batch of hand-built units. The manufacturing team — often
        a contract manufacturer — engages, runs DFM analysis, and finds tens
        of issues that would not be visible at bench scale. Tolerances that
        are achievable in a machine shop are not achievable in production
        injection molding. Bond lines that are uniform when applied by hand are
        non-uniform when applied by automated dispense. Test fixtures that
        work at engineering verification do not survive a production cycle
        time.
      </p>

      <p>
        Each issue triggers a design change, which triggers re-verification,
        which triggers a risk-file update, which on a Class II combination
        product can trigger 510(k) change-decision logic. The cost is not the
        change itself — it is the cascade.
      </p>

      <Callout kind="pitfall" title="The manufacturing-voice gap">
        <p>
          The structural cause is that manufacturing is engaged after design
          freeze. By that point, the design is already locked, and DFM
          findings are no longer suggestions — they are change requests
          against a frozen baseline. The fix is to have manufacturing engaged
          during design output, not after. Even a single
          manufacturing-engineering reviewer in the design output reviews
          changes the dynamic — they are no longer a downstream gate; they
          are a forcing function on the design.
        </p>
      </Callout>

      <p>
        The architectural fix is a manufacturing readiness lane that runs in
        parallel with design verification, owned by a manufacturing engineer
        embedded in the design team — not by the contract manufacturer&apos;s
        program manager. The lane produces three things: a process FMEA that
        cross-references the design FMEA, a DFM/DFA analysis that tracks open
        items as engineering tickets in the same backlog as design changes,
        and a process-validation plan that names the qualification approach
        (IQ, OQ, PQ) for each high-risk process step.
      </p>

      <h2 id="seam-5">Seam 5 — Launch back to development</h2>

      <p>
        The fifth seam is the one most programs ignore: the loop from
        post-production data back into design and risk. ISO 14971:2019 Section
        10 (Production and post-production activities) requires that
        information from production and post-production is collected,
        reviewed, and used to update the risk file as needed. In practice,
        complaints, field observations, returns analysis, and post-market
        surveillance data are collected — but rarely make it back into the
        next development iteration with enough fidelity to change a design
        input.
      </p>

      <p>
        The cost is paid in the next product. A complaint pattern that
        existed for two years is rediscovered as a user need during the
        ideation phase of the next platform, and the team congratulates
        itself on a fresh insight that was already in the complaint database.
      </p>

      <Callout kind="note" title="What an effective post-market loop looks like">
        <p>
          The minimum viable version: complaints are categorized against the
          hazard analysis taxonomy, not a free-text complaint code system.
          Each complaint type maps to one or more hazards, and the rate of
          complaints per hazard is tracked as a post-production input to the
          next risk-file revision. When a hazard exceeds its expected rate,
          it triggers a CAPA whose closure can include a design change. The
          design change feeds the next platform&apos;s design inputs.
        </p>
      </Callout>

      <h2 id="program-architecture">What this looks like as a program architecture</h2>

      <p>
        The five seams above are not five separate problems. They are the
        same problem in different costumes — translation between disciplines
        that operate on different cadences, with different deliverables, and
        for different stakeholders. The architectural fix has the same shape
        in each case:
      </p>

      <ol>
        <li>
          <strong>One shared traceability spine.</strong> User needs, design
          inputs, risk hazards, risk controls, design outputs, verification
          evidence, and validation evidence all carry IDs that reference each
          other. The structure is the audit trail; nothing has to be curated
          retroactively.
        </li>
        <li>
          <strong>Cross-disciplinary review at every gate.</strong>{" "}
          Manufacturing, regulatory, and human factors are not downstream
          gates — they are reviewers in the same forum where engineering
          design decisions are made. Each gate has a defined output, but the
          decision is shared.
        </li>
        <li>
          <strong>The program owner reconciles, daily.</strong> The program
          owner&apos;s job is not to manage the schedule — it is to surface
          and reconcile the conflicts between disciplines before they become
          rework. Schedule slippage is a symptom of unreconciled conflict.
        </li>
        <li>
          <strong>The design history file is built incrementally, not
          assembled.</strong> Programs that build the DHF as the work happens
          ship faster and pass audits more cleanly than programs that
          assemble it before submission. The difference is whether the DHF is
          a generated artifact or a curated narrative.
        </li>
      </ol>

      <PullQuote>
        The design history file should be a generated artifact, not a curated
        narrative. If you have to assemble it for a submission, the
        traceability was missing during the program.
      </PullQuote>

      <h2 id="practitioner-summary">Practitioner summary</h2>

      <p>
        The seams between user needs, engineering, design controls, and
        manufacturing are the highest-leverage places to intervene in a
        regulated-product program — higher leverage than any single
        deliverable, methodology, or tool. Programs that architect explicitly
        for the seams ship faster, audit more cleanly, and absorb late
        discoveries with less rework. Programs that don&apos;t pay the cost in
        the same predictable places, in the same predictable order.
      </p>

      <p>
        If you recognize one of these patterns in a program you are running,
        the move is rarely a wholesale restructure. The move is to find the
        seam where the next handoff is about to happen, and architect that
        single handoff well — usually within a two-to-six week window — so
        the next gate produces evidence the gate after that can build on.
      </p>

      <p>
        For a closer look at how design controls integrate with combination
        products under 21 CFR Part 4, see{" "}
        <Link href="/services/design-controls">
          Regulatory, Quality &amp; Design Controls
        </Link>
        . For where these seams are most often handled in our engagements,
        see{" "}
        <Link href="/services">the full lifecycle services page</Link>.
      </p>
    </Prose>
  );
}

export const tableOfContents = [
  { id: "seam-1", label: "User research to design inputs" },
  { id: "seam-2", label: "Design inputs to risk-controlled design" },
  { id: "seam-3", label: "Engineering to verifiable evidence" },
  { id: "seam-4", label: "Design to manufacturing" },
  { id: "seam-5", label: "Launch back to development" },
  { id: "program-architecture", label: "Program architecture" },
  { id: "practitioner-summary", label: "Practitioner summary" },
  { id: "faq", label: "Frequently asked questions" },
];
