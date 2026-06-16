import Link from "next/link";
import { blockedAccountProviders } from "@/data/blockedAccount";
import { providers as insuranceProviders } from "@/data/insurance";

// Universal "Next steps" panel for university detail pages.
// Renders on every detail page (not gated by admission data) so every
// uni page funnels visitors toward visa / blocked-account / insurance
// decisions. Outbound links are tagged rel="sponsored" for affiliate
// integrations once partnerships are approved.

// "How to apply" — adapts to the uni's applyVia ("uni-assist" | "direct" | "both")
const HOW_TO_APPLY = {
  "uni-assist": [
    "Create a uni-assist account at uni-assist.de (free, English).",
    "Upload certified copies of your degree, transcripts and language test.",
    "Pay the application fee (~€75 for the first programme, ~€30 for each additional).",
    "uni-assist verifies your documents and forwards them to the university (4–6 weeks).",
    "The university makes the final admission decision and sends an offer letter.",
    "Accept the offer and enrol (Immatrikulation) to receive your enrolment letter.",
  ],
  direct: [
    "Open this university's official application portal (linked above).",
    "Create your applicant account and start a new application.",
    "Upload digital copies of your degree, transcripts, CV, motivation letter and language test.",
    "Pay the application fee if applicable (often €0–75).",
    "Track the application in the portal — admissions usually decide within 6–10 weeks.",
    "Accept the offer and complete enrolment (Immatrikulation) to receive your enrolment letter.",
  ],
  both: [
    "Check the specific programme page — it tells you whether to apply via uni-assist or direct.",
    "If uni-assist: create an account at uni-assist.de and pay ~€75 for the first application.",
    "If direct: create an account on the university's official portal (linked above).",
    "Upload certified copies of your degree, transcripts, language test, CV and motivation letter.",
    "Wait 4–10 weeks for the admission decision.",
    "Accept the offer and complete enrolment (Immatrikulation) to receive your enrolment letter.",
  ],
};

export default function UniversityNextSteps({ uni }) {
  const steps = uni.applyVia ? HOW_TO_APPLY[uni.applyVia] : null;

  // Pick the two most-recommended blocked account providers
  const topBlocked = blockedAccountProviders
    .filter((p) => p.slug === "expatrio" || p.slug === "fintiba")
    .slice(0, 2);

  // Pick top pre-arrival insurance providers (visa-friendly)
  const topInsurance = insuranceProviders
    .filter((p) => p.category === "pre-arrival")
    .slice(0, 2);

  return (
    <section className="mb-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm sm:p-8">
      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
          Next steps
        </span>
        <span className="text-xs text-slate-500">After admission — the visa pipeline</span>
      </div>
      <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
        Got admission? Here&apos;s what to do next.
      </h2>
      <p className="mt-2 text-slate-600">
        Every international student needs the same three things to study at
        this university: an offer letter, a blocked account, and health
        insurance. Here&apos;s the honest order.
      </p>

      {/* ━━━ How to apply (adaptive) ━━━ */}
      {steps && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-lg font-bold text-ink-900">
            📋 How to apply — step by step
          </h3>
          <p className="mt-1 text-xs text-slate-500">
            Tailored for this university&apos;s application route.
          </p>
          <ol className="mt-4 space-y-3 text-sm text-slate-700">
            {steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-ink-900">
                  {i + 1}
                </span>
                <span className="pt-0.5">{s}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* ━━━ Blocked account ━━━ */}
      <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
        <h3 className="text-lg font-bold text-ink-900">
          💳 Open a blocked account
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          German embassies require proof you have ~€11,904 for one year. A
          blocked account (Sperrkonto) is the standard way to show this.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {topBlocked.map((p) => (
            <a
              key={p.slug}
              href={p.website}
              target="_blank"
              rel="sponsored noopener"
              className="group flex flex-col rounded-lg border border-emerald-200 bg-white p-4 transition hover:border-emerald-400 hover:shadow-md"
            >
              <p className="font-bold text-ink-900 group-hover:text-emerald-700">
                {p.name}
              </p>
              <p className="mt-1 text-xs text-slate-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                <span>Setup: {p.setupFee}</span>
                <span>Monthly: {p.monthlyFee}</span>
              </div>
              <span className="mt-3 text-xs font-bold text-emerald-700 group-hover:underline">
                Open {p.name} →
              </span>
            </a>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <Link
            href="/blocked-account"
            className="text-sm font-semibold text-emerald-700 hover:underline"
          >
            Compare all blocked-account providers →
          </Link>
          <span className="text-[11px] text-slate-500">
            Affiliate links — disclosed in our{" "}
            <Link href="/privacy" className="underline hover:text-slate-700">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>

      {/* ━━━ Health insurance ━━━ */}
      <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50/50 p-5">
        <h3 className="text-lg font-bold text-ink-900">🩺 Health insurance</h3>
        <p className="mt-1 text-sm text-slate-600">
          You need pre-arrival travel + health insurance for your visa
          appointment. Once you arrive and enrol, switch to public insurance
          (TK / DAK) if you are under 30.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {topInsurance.map((p) => (
            <div
              key={p.slug}
              className="flex flex-col rounded-lg border border-blue-200 bg-white p-4"
            >
              <p className="font-bold text-ink-900">{p.name}</p>
              <p className="mt-1 text-xs text-slate-600">{p.bestFor}</p>
              <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                <span>{p.monthlyFee}</span>
                <span>{p.setup}</span>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/insurance"
          className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline"
        >
          Compare all insurance providers →
        </Link>
      </div>

      {/* ━━━ Visa shortcut ━━━ */}
      <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h3 className="text-lg font-bold text-ink-900">📋 Student visa process</h3>
        <p className="mt-1 text-sm text-slate-600">
          With your offer letter, blocked account, and insurance in hand,
          you&apos;re ready to apply for the student visa at your German
          embassy. Plan 4–12 weeks for the visa decision.
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/visa"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-ink-900 transition hover:bg-amber-400"
          >
            Full visa walkthrough →
          </Link>
          <Link
            href="/checklist"
            className="rounded-lg border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-800 transition hover:bg-amber-50"
          >
            Application checklist
          </Link>
        </div>
      </div>
    </section>
  );
}
