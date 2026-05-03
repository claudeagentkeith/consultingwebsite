"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const PHASES = [
  "Research",
  "Ideation",
  "Engineering",
  "Design Controls",
  "Manufacturing Transfer",
  "Launch",
  "Sustaining",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "submitting" });

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      productType: String(data.get("productType") || "").trim(),
      developmentPhase: String(data.get("developmentPhase") || "").trim(),
      timeline: String(data.get("timeline") || "").trim(),
      message: String(data.get("message") || "").trim(),
      // Honeypot — must be empty
      company: String(data.get("company") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({
        kind: "error",
        message:
          "Please fill in name, email, and a short description of the challenge.",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || `Request failed (${res.status}).`);
      }
      setStatus({ kind: "success" });
      form.reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ kind: "error", message });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="rounded-xl border border-ink-100 bg-ink-50 p-6 text-ink-700">
        <p className="font-medium text-ink-900">Message sent.</p>
        <p className="mt-1 text-sm">
          Thanks — we&apos;ll get back to you shortly. If it&apos;s urgent,
          email{" "}
          <a
            href="mailto:hello@hitmakerengineering.com"
            className="font-medium text-ink-900"
          >
            hello@hitmakerengineering.com
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="field-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="field-input"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="field-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="field-input"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="productType" className="field-label">
          Product type
        </label>
        <input
          id="productType"
          name="productType"
          type="text"
          className="field-input"
          placeholder="e.g. drug-delivery device, IVD platform, surgical instrument"
        />
      </div>
      <div>
        <label htmlFor="developmentPhase" className="field-label">
          Current development phase
        </label>
        <select
          id="developmentPhase"
          name="developmentPhase"
          defaultValue=""
          className="field-input"
        >
          <option value="" disabled>
            Select a phase…
          </option>
          {PHASES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="timeline" className="field-label">
          Desired timeline
        </label>
        <input
          id="timeline"
          name="timeline"
          type="text"
          className="field-input"
          placeholder="e.g. scoping in 4 weeks, design freeze in 6 months"
        />
      </div>
      <div>
        <label htmlFor="message" className="field-label">
          Main challenge
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="field-input"
          placeholder="A few sentences on the decision or challenge in front of you. Please avoid sharing confidential technical details until an NDA is in place."
        />
      </div>

      {/* Honeypot field — hidden from real users */}
      <div aria-hidden="true" className="absolute left-[-10000px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status.kind === "error" && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {status.message}
        </p>
      )}

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          className="btn"
          disabled={status.kind === "submitting"}
        >
          {status.kind === "submitting"
            ? "Sending..."
            : "Request a Product Development Scoping Call"}
        </button>
        <p className="text-xs text-ink-500">
          We&apos;ll only use your email to reply.
        </p>
      </div>
    </form>
  );
}
