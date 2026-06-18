"use client";

import { useState } from "react";

// Newsletter signup form. Currently posts to Formspree (no backend required —
// just create a free form at formspree.io and paste the form ID below). On
// success/failure it shows inline feedback and stores a flag so the user is
// not asked again.
//
// To connect to a real list:
// 1. Create a free Formspree form at formspree.io → copy form ID
// 2. Or replace FORM_URL with Mailchimp / ConvertKit / Buttondown action URL
const FORM_URL = "https://formspree.io/f/xaqzqway";

export default function NewsletterSignup({
  variant = "default", // "default" | "compact" | "inline"
  title = "Get the free 10-page Germany application checklist",
  description = "Instant PDF download + weekly tips, deadlines and scholarship updates. No spam, unsubscribe any time.",
  cta = "Get the free PDF",
  highlight = "Free PDF · 10 pages · Updated June 2026",
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Enter a valid email");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("submitting");

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: (typeof window !== "undefined" ? window.location.pathname : "/") || "/",
        }),
      });

      if (res.ok) {
        setStatus("success");
        // Remember signup so we don't show repeatedly
        localStorage.setItem("newsletter_subscribed", "1");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  // Success state — works for all variants. Shows the immediate-download
  // link so subscribers get the PDF instantly (no waiting for an email).
  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="text-3xl">📚</p>
        <p className="mt-2 text-lg font-bold text-ink-900">You&apos;re in!</p>
        <p className="mt-1 text-sm text-emerald-800">
          Your Germany Application Checklist is ready below — and we&apos;ll
          also email you weekly tips, deadlines, and scholarship updates.
        </p>
        <a
          href="/checklist.pdf"
          download="Germany-Application-Checklist-2026.pdf"
          className="mt-4 inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
        >
          ⬇️ Download the checklist (PDF)
        </a>
        <p className="mt-3 text-xs text-emerald-700/80">
          Free, 10 pages, updated June 2026.
        </p>
      </div>
    );
  }

  // Compact variant — inline on blog posts, sidebars
  if (variant === "compact") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
        <p className="font-bold text-ink-900">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
        <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-bold text-ink-900 transition hover:bg-brand-400 disabled:opacity-60"
          >
            {status === "submitting" ? "..." : cta}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-2 text-xs text-rose-600">{error || "Couldn't subscribe, please try again."}</p>
        )}
      </div>
    );
  }

  // Default — hero / standalone section
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {highlight && (
        <p className="mb-3 inline-block rounded-full bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink-900">
          {highlight}
        </p>
      )}
      <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">{title}</h2>
      <p className="mt-3 text-slate-600">{description}</p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your-email@example.com"
          className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-base outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-lg bg-brand-500 px-6 py-2.5 font-bold text-ink-900 shadow-sm transition hover:bg-brand-400 disabled:opacity-60"
        >
          {status === "submitting" ? "Subscribing" : cta}
        </button>
      </form>

      {status === "error" && (
        <p className="mt-3 text-sm text-rose-600">
          {error || "Couldn't subscribe, please try again or email us directly."}
        </p>
      )}

      <p className="mt-4 flex items-center gap-4 text-xs text-slate-500">
        <span>✓ Free forever</span>
        <span>✓ No spam</span>
        <span>✓ Unsubscribe any time</span>
      </p>
    </div>
  );
}
