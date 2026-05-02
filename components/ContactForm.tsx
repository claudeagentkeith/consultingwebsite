"use client";

import { useState } from "react";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

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
      message: String(data.get("message") || "").trim(),
      // Honeypot — must be empty
      company: String(data.get("company") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({
        kind: "error",
        message: "Please fill in name, email, and a short message.",
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
          Thanks — Keith will get back to you shortly. If it&apos;s urgent,
          email{" "}
          <a
            href="mailto:kdherrington@gmail.com"
            className="font-medium text-ink-900"
          >
            kdherrington@gmail.com
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
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="field-input"
          placeholder="A few sentences on the program, the question, and the timeline."
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

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="btn"
          disabled={status.kind === "submitting"}
        >
          {status.kind === "submitting" ? "Sending..." : "Send message"}
        </button>
        <p className="text-xs text-ink-500">
          We&apos;ll only use your email to reply.
        </p>
      </div>
    </form>
  );
}
