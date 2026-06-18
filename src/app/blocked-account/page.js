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
        eyebrow="Visa step 4"
        title="Blocked Account Comparison"
        subtitle="A blocked account (Sperrkonto) holds your €11,904/year of proof-of-funds for the visa. Pick the provider that fits your budget and timeline."
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&auto=format&fit=crop"
      />

      <section className="mx-auto max-w-5xl px-4 py-10">
        {/* Affiliate disclosure */}
        <div className="mb-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm text-slate-700">
          <p>
            <strong className="text-ink-900">Honest disclosure:</strong>{" "}
            Some links below are affiliate links. If you sign up through them,
            we may receive a small commission at no extra cost to you. This
            helps keep the site free. We only feature providers that are
            officially accepted by German embassies — see our{" "}
            <Link href="/privacy" className="font-medium text-brand-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            for details.
          </p>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HOW TO OPEN A BLOCKED ACCOUNT (free step-by-step)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
            Free step-by-step
          </p>
          <h2 className="mt-1 text-2xl font-bold text-ink-900 sm:text-3xl">
            How to open a blocked account
          </h2>
          <p className="mt-2 text-slate-600">
            The whole process takes 1–3 weeks if you have the basics ready. The
            provider you choose handles the German banking side; your job is to
            send the funds and keep the confirmation letter for your visa
            interview.
          </p>

          {/* Documents you need */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-base font-bold text-ink-900">
              📄 Documents you need (have these ready BEFORE you apply)
            </h3>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>Passport — colour scan of the photo page (valid for at least 1 year)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>University admission letter (Zulassungsbescheid) — PDF</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>Your address (home country and any current German address you may have)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>A working international debit/credit card for the setup fee</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>A second photo ID is usually requested during KYC</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>SMS-capable phone for the OTP / verification step</span>
              </li>
            </ul>
          </div>

          {/* Step-by-step */}
          <ol className="mt-6 space-y-4">
            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900">
                1
              </span>
              <div>
                <p className="font-bold text-ink-900">Pick a provider and apply online</p>
                <p className="mt-1 text-sm text-slate-700">
                  Open the provider&apos;s application form (Expatrio, Fintiba
                  and Coracle all work fully in English). Fill in your personal
                  details, upload your passport and admission letter, and pay
                  the one-off setup fee with your home-country card.{" "}
                  <strong>Time: 15–20 minutes.</strong>
                </p>
              </div>
            </li>

            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900">
                2
              </span>
              <div>
                <p className="font-bold text-ink-900">Pass identity verification (video KYC)</p>
                <p className="mt-1 text-sm text-slate-700">
                  Within 24–72 hours you&apos;ll be invited to a short video
                  KYC call (or sometimes an automated identity check). Have
                  your passport ready, find decent lighting, and answer
                  honestly. <strong>Time: 10–15 minutes.</strong>
                </p>
              </div>
            </li>

            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900">
                3
              </span>
              <div>
                <p className="font-bold text-ink-900">
                  Receive your German IBAN and transfer instructions
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  After approval you get an email with the German IBAN, BIC,
                  and the recipient name to send funds to. Save this email —
                  you&apos;ll need it for the embassy.{" "}
                  <strong>Time: usually next business day.</strong>
                </p>
              </div>
            </li>

            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900">
                4
              </span>
              <div>
                <p className="font-bold text-ink-900">
                  Send €11,904 (or current minimum) into the blocked account
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Use a SEPA transfer, SWIFT wire from your bank, or a service
                  like Wise. Send a little buffer (≈ €100–€200 more) so currency
                  fluctuation doesn&apos;t leave you short. In the reference
                  line, put your full name and date of birth so the provider
                  can match the transfer to your account.{" "}
                  <strong>Time: 1–7 business days depending on route.</strong>
                </p>
              </div>
            </li>

            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900">
                5
              </span>
              <div>
                <p className="font-bold text-ink-900">
                  Get the blocked-account confirmation letter
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Once the funds land, the provider issues a PDF confirmation
                  (&quot;Sperrkontobestätigung&quot;) within 1–2 business days.
                  This is the document the German embassy asks for.{" "}
                  <strong>Print 2 copies — one for the embassy, one for you.</strong>
                </p>
              </div>
            </li>

            <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900">
                6
              </span>
              <div>
                <p className="font-bold text-ink-900">
                  Use it at the visa interview, then activate on arrival
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Hand the confirmation letter to the embassy with the rest of
                  your visa paperwork. After you land in Germany and register
                  your address (Anmeldung), the provider unlocks your monthly
                  ≈ €992 payouts. Most providers also convert the blocked
                  account into a normal current account at this stage.
                </p>
              </div>
            </li>
          </ol>

          {/* Total timeline summary */}
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">
              ⏱️ Realistic total timeline
            </p>
            <p className="mt-2 text-sm text-emerald-900">
              <strong>10–21 days</strong> from starting the application to
              having the confirmation letter in hand. Apply at least{" "}
              <strong>4–5 weeks before your visa interview</strong> so a slow
              bank transfer doesn&apos;t derail your timeline.
            </p>
          </div>

          {/* Common mistakes */}
          <div className="mt-5 rounded-xl border border-rose-200 bg-rose-50 p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-rose-800">
              ⚠️ Common mistakes that cost time and money
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-rose-900">
              <li>• Transferring exactly €11,904 — small currency drops can put you below the minimum. Always overshoot by €100–€200.</li>
              <li>• Using a non-bank money-exchange service that the provider doesn&apos;t recognise — stick to a regulated bank or Wise.</li>
              <li>• Forgetting to put your full name in the transfer reference — the provider may not match the funds to your account.</li>
              <li>• Waiting until 1–2 weeks before the visa interview — slow transfers can take a full week.</li>
              <li>• Choosing a provider not accepted by your local German embassy — verify on the embassy website first.</li>
            </ul>
          </div>
        </div>

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
                  Open account
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
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
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
                {p.bundleNote}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          <strong className="text-amber-900">Heads up:</strong> Always confirm that the provider you choose is accepted by the German
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
