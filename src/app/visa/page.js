import { processSteps, blockedAccount, documents, faqs } from "@/data/visa";
import { euro } from "@/lib/format";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";

export const metadata = {
  title: "Visa & Application Process",
  description:
    "Step-by-step German student visa guide: application process, blocked account, required documents and frequently asked questions.",
};

export default function VisaPage() {
  return (
    <>
      <PageHero
        eyebrow="📋 Step-by-step"
        title="Visa & Application Process"
        subtitle="From choosing a course to getting your residence permit — here's the complete journey to studying in Germany, step by step."
      />

      {/* Timeline */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold text-ink-900">The 8-step journey</h2>
        <ol className="relative border-l-2 border-brand-200">
          {processSteps.map((s) => (
            <li key={s.step} className="mb-8 ml-6">
              <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900 ring-4 ring-white">
                {s.step}
              </span>
              <h3 className="font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Blocked account */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-ink-900">💳 Blocked account (Sperrkonto)</h2>
            <p className="mt-2 text-slate-600">{blockedAccount.note}</p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-brand-600">
                  {euro(blockedAccount.amountPerYear)}
                </div>
                <div className="text-xs text-slate-500">required for one year</div>
              </div>
              <div className="rounded-xl bg-white p-4 text-center shadow-sm">
                <div className="text-2xl font-extrabold text-brand-600">
                  {euro(blockedAccount.amountPerMonth)}
                </div>
                <div className="text-xs text-slate-500">monthly withdrawal</div>
              </div>
            </div>
            <div className="mt-5">
              <p className="mb-2 text-sm font-semibold text-ink-900">Popular providers:</p>
              <div className="flex flex-wrap gap-2">
                {blockedAccount.providers.map((p) => (
                  <span
                    key={p}
                    className="rounded-lg bg-white px-3 py-1.5 text-sm text-slate-700 shadow-sm"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-ink-900">📄 Documents checklist</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {documents.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
            >
              <span className="mt-0.5 text-emerald-500">✓</span>
              {d}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-ink-900">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-ink-900">
                  {f.q}
                  <span className="text-brand-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="mb-4 text-2xl font-bold text-ink-900">Dig deeper</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="/blocked-account"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
          >
            <p className="text-2xl">💳</p>
            <h3 className="mt-2 font-semibold text-ink-900">Blocked Account comparison</h3>
            <p className="mt-1 text-sm text-slate-600">
              Compare Expatrio, Fintiba, Coracle, Deutsche Bank and ICICI on fees, speed
              and support.
            </p>
          </a>
          <a
            href="/calculator"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
          >
            <p className="text-2xl">🧮</p>
            <h3 className="mt-2 font-semibold text-ink-900">Cost Calculator</h3>
            <p className="mt-1 text-sm text-slate-600">
              Estimate your monthly &amp; yearly budget in EUR, PKR, INR, BDT or USD.
            </p>
          </a>
          <a
            href="/guides/pakistan"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
          >
            <p className="text-2xl">🇵🇰</p>
            <h3 className="mt-2 font-semibold text-ink-900">Pakistan country guide</h3>
            <p className="mt-1 text-sm text-slate-600">
              HEC attestation, embassy in Islamabad/Karachi and tailored documents
              checklist.
            </p>
          </a>
          <a
            href="/guides/india"
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
          >
            <p className="text-2xl">🇮🇳</p>
            <h3 className="mt-2 font-semibold text-ink-900">India country guide</h3>
            <p className="mt-1 text-sm text-slate-600">
              APS certificate (mandatory since 2022), VFS Global, and India-specific
              tips.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          ⚠️ Visa requirements, fees and the blocked-account amount are updated
          regularly and vary by country. Always confirm with the German embassy or
          consulate in your country before applying.
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/calculator", label: "Plan your budget" }}
        next={{ href: "/blocked-account", label: "Open a blocked account" }}
      />
    </>
  );
}
