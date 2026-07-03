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
  title = "Weekly Germany tips — in your inbox",
  description = "Deadlines, scholarship news and visa tips every week. No spam, unsubscribe any time.",
  cta = "Get the free guide",
  highlight = "Free guide: Application Checklist",
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

  // Success state — works for all variants
  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
        <p className="text-3xl">✅</p>
        <p className="mt-2 text-lg font-bold text-ink-900">Subscribed!</p>
        <p className="mt-1 text-sm text-emerald-700">
          Check your inbox — your free PDF is on the way.
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
