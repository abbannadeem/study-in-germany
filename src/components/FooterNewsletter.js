"use client";

import { useState } from "react";

// Compact newsletter signup strip for the footer.
// Configure FORM_URL to your real Formspree / Mailchimp / ConvertKit endpoint.
const FORM_URL = "https://formspree.io/f/xaqzqway";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("submitting");

    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="border-b border-white/10 bg-gradient-to-r from-ink-900 to-slate-800 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-bold text-white sm:text-xl">
            Get the free Germany application checklist
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Weekly tips, deadlines, and scholarship updates. No spam.
          </p>
        </div>

        {status === "success" ? (
          <a
            href="/checklist.pdf"
            download="Germany-Application-Checklist-2026.pdf"
            className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-600"
          >
            ✅ Subscribed — ⬇️ download your PDF
          </a>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your-email@example.com"
              className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-300 outline-none focus:border-brand-400 focus:bg-white/20"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-bold text-ink-900 transition hover:bg-brand-400 disabled:opacity-60"
            >
              {status === "submitting" ? "..." : "Subscribe →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
