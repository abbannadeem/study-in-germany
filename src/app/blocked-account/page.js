import Link from "next/link";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";
import { blockedAccountProviders as providers } from "@/data/blockedAccount";

export const metadata = {
  title: "Blocked Account Comparison",
  description:
    "Compare blocked-account (Sperrkonto) providers for the German student visa — Expatrio, Fintiba, Coracle, Deutsche Bank and ICICI on fees, speed and support.",
};

export default function BlockedAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="💳 Visa step 4"
        title="Blocked Account Comparison"
        subtitle="A blocked account (Sperrkonto) holds your €11,904/year of proof-of-funds for the visa. Pick the provider that fits your budget and timeline."
      />

      <section className="mx-auto max-w-5xl px-4 py-10">
        {/* Quick summary table */}
        <div className="mb-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Provider</th>
                  <th className="px-4 py-3">Setup</th>
                  <th className="px-4 py-3">Monthly</th>
                  <th className="px-4 py-3">Opening time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {providers.map((p) => (
                  <tr key={p.slug} className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-semibold text-ink-900">{p.name}</td>
                    <td className="px-4 py-3 text-slate-700">{p.setupFee}</td>
                    <td className="px-4 py-3 text-slate-700">{p.monthlyFee}</td>
                    <td className="px-4 py-3 text-slate-700">{p.openingTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed cards */}
        <div className="space-y-5">
          {providers.map((p) => (
            <div
              key={p.slug}
              id={p.slug}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold text-ink-900">{p.name}</h2>
                  <p className="text-sm text-slate-500">{p.description}</p>
                </div>
                <a
                  href={p.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-900 transition hover:bg-brand-400"
                >
                  Open account ↗
                </a>
              </div>

              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Setup
                  </p>
                  <p className="text-ink-900">{p.setupFee}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Monthly
                  </p>
                  <p className="text-ink-900">{p.monthlyFee}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Opening time
                  </p>
                  <p className="text-ink-900">{p.openingTime}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Languages
                  </p>
                  <p className="text-ink-900">{p.languages.join(", ")}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                    Pros
                  </p>
                  <ul className="space-y-1">
                    {p.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-emerald-500">✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                    Watch out for
                  </p>
                  <ul className="space-y-1">
                    {p.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-amber-500">!</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                💡 {p.bundleNote}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          ⚠️ Always confirm that the provider you choose is accepted by the German
          embassy/consulate in your country before you transfer money. Fees and
          monthly charges can change at any time.
        </div>

        <div className="mt-4 text-center text-sm text-slate-500">
          See the full visa journey in our{" "}
          <Link href="/visa" className="font-medium text-brand-600 hover:underline">
            Visa &amp; Process guide
          </Link>
          .
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/visa", label: "Apply & get a visa" }}
        next={{ href: "/settle", label: "Travel & settle in" }}
      />
    </>
  );
}
