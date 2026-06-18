import Link from "next/link";
import { processSteps, blockedAccount, documents, faqs } from "@/data/visa";
import { euro } from "@/lib/format";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";

// Per-step timing — keyed by step number. Tells users WHEN to start and HOW
// LONG each stage takes so they can reverse-plan from a target semester.
// Conservative estimates that work for most non-EU applicants.
const STEP_TIMING = {
  1: { startBefore: "12–15 months before semester start", duration: "~4 weeks of research" },
  2: { startBefore: "10–12 months before", duration: "Language test: 2 months prep + 2 weeks for result" },
  3: { startBefore: "6–9 months before", duration: "Application: 4–6 weeks. Wait for admission: 4–10 weeks." },
  4: { startBefore: "3–4 months before", duration: "Opening + funding the account: 1–3 weeks" },
  5: { startBefore: "3 months before", duration: "Insurance signup: ≤ 1 hour online" },
  6: { startBefore: "2–3 months before", duration: "Appointment wait + decision: 4–12 weeks" },
  7: { startBefore: "Day of arrival", duration: "Anmeldung within 14 days of moving in" },
  8: { startBefore: "First 90 days", duration: "Residence permit appointment + decision: 2–6 weeks" },
};

export const metadata = {
  title: "Visa & Application Process",
  description:
    "Step-by-step German student visa guide: application process, blocked account, required documents and frequently asked questions.",
};

export default function VisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Step-by-step"
        title="Visa & Application Process"
        subtitle="From choosing a course to getting your residence permit — here's the complete journey to studying in Germany, step by step."
        backgroundImage="https://images.unsplash.com/photo-1569163139394-de4798aa62b0?w=1600&q=80&auto=format&fit=crop"
      />

      {/* Timeline — now with concrete WHEN-to-start and HOW-LONG per step */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="mb-2 text-2xl font-bold text-ink-900">The 8-step journey</h2>
        <p className="mb-8 text-sm text-slate-600">
          Reverse-plan from your target semester. Most international students start{" "}
          <strong>12–15 months before</strong> the intake they&apos;re aiming for.
        </p>
        <ol className="relative border-l-2 border-brand-200">
          {processSteps.map((s) => {
            const timing = STEP_TIMING[s.step];
            return (
              <li key={s.step} className="mb-8 ml-6">
                <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900 ring-4 ring-white">
                  {s.step}
                </span>
                <h3 className="font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.description}</p>

                {timing && (
                  <div className="mt-3 inline-flex flex-wrap gap-2">
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
                      🟢 Start: {timing.startBefore}
                    </span>
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
                      ⏱️ {timing.duration}
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          APS CERTIFICATE CLARITY — country-by-country
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
            Free clarity
          </p>
          <h2 className="mt-1 text-2xl font-bold text-ink-900 sm:text-3xl">
            Does Pakistan need an APS certificate? (Short answer: no.)
          </h2>
          <p className="mt-2 text-slate-600">
            APS (Akademische Prüfstelle) verifies your degree before German
            universities accept your application. Whether you need one depends
            on your country — not your university.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                ✓ Pakistan — APS NOT required
              </p>
              <p className="mt-1 text-sm text-emerald-900">
                Pakistani applicants do <strong>not</strong> need APS. Instead, your
                degree must carry HEC (Higher Education Commission) attestation,
                and then Ministry of Foreign Affairs + German Embassy
                attestation. uni-assist verifies the rest.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-800">
                ⚠ APS REQUIRED for these countries
              </p>
              <ul className="mt-1 text-sm text-amber-900">
                <li>• India — APS mandatory (since 2022)</li>
                <li>• China — APS mandatory</li>
                <li>• Vietnam — APS mandatory</li>
                <li>• Mongolia — APS mandatory</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Country-by-country attestation chains are in our{" "}
            <Link href="/guides" className="font-medium text-brand-600 hover:underline">
              country guides
            </Link>
            . Always confirm the latest requirements with the German Embassy in
            your country before submitting documents.
          </p>
        </div>
      </section>

      {/* Blocked account */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-ink-900">Blocked account (Sperrkonto)</h2>
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
        <h2 className="mb-6 text-2xl font-bold text-ink-900">Documents checklist</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {documents.map((d) => (
            <div
              key={d}
              className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
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
            className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-brand-400"
          >
            <h3 className="font-semibold text-ink-900">Blocked Account comparison</h3>
            <p className="mt-1 text-sm text-slate-600">
              Compare Expatrio, Fintiba, Coracle, Deutsche Bank and ICICI on fees, speed
              and support.
            </p>
          </a>
          <a
            href="/calculator"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-brand-400"
          >
            <h3 className="font-semibold text-ink-900">Cost Calculator</h3>
            <p className="mt-1 text-sm text-slate-600">
              Estimate your monthly &amp; yearly budget in EUR or your local currency.
            </p>
          </a>
          <a
            href="/guides/pakistan"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-brand-400"
          >
            <h3 className="font-semibold text-ink-900">Pakistan country guide</h3>
            <p className="mt-1 text-sm text-slate-600">
              HEC attestation, embassy in Islamabad/Karachi and tailored documents
              checklist.
            </p>
          </a>
          <a
            href="/guides/india"
            className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-brand-400"
          >
            <h3 className="font-semibold text-ink-900">India country guide</h3>
            <p className="mt-1 text-sm text-slate-600">
              APS certificate (mandatory since 2022), VFS Global, and India-specific
              tips.
            </p>
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          <strong className="text-amber-900">Heads up:</strong> Visa requirements, fees and the blocked-account amount are updated
          regularly and vary by country. Always confirm with the German embassy or
          consulate in your country before applying.
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          VISA INTERVIEW — common questions + top rejection reasons
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
            Free interview prep
          </p>
          <h2 className="mt-1 text-2xl font-bold text-ink-900 sm:text-3xl">
            Visa interview — what they actually ask
          </h2>
          <p className="mt-2 text-slate-600">
            German embassy interviews are short (10–20 minutes) and aimed at one
            question: <em>are you a genuine student?</em> Prepare honest answers
            for these and you&apos;re already ahead of most applicants.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Common questions */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                💬 Top 10 common questions
              </p>
              <ol className="mt-3 space-y-2 text-sm text-emerald-900">
                <li>1. Why do you want to study in Germany specifically?</li>
                <li>2. Why did you choose this particular university and programme?</li>
                <li>3. Tell me about your academic background.</li>
                <li>4. Who is funding your studies? Show proof.</li>
                <li>5. Why are you switching from your current field?</li>
                <li>6. Where do you plan to live in Germany?</li>
                <li>7. What are your plans after graduation?</li>
                <li>8. Do you have family or relatives in Germany?</li>
                <li>9. Have you applied to other countries? If yes, were you rejected?</li>
                <li>10. How does this programme connect to your career goal?</li>
              </ol>
            </div>

            {/* Top rejection reasons */}
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-rose-800">
                ⚠️ Top rejection reasons (and how to avoid them)
              </p>
              <ul className="mt-3 space-y-2 text-sm text-rose-900">
                <li>
                  <strong>1. Unclear study purpose.</strong> Generic answers
                  like &quot;Germany is famous&quot; fail. Be specific about
                  programme, professor or industry.
                </li>
                <li>
                  <strong>2. Weak finances.</strong> Blocked account barely at
                  the minimum. Always overshoot by €200+.
                </li>
                <li>
                  <strong>3. Contradictions between documents.</strong> Dates,
                  spellings, addresses mismatched between your CV, application
                  and supporting docs.
                </li>
                <li>
                  <strong>4. No backup plan stated.</strong> Officers want to
                  hear that you&apos;ll return home and apply skills there —
                  even if you also explore the 18-month post-study work option.
                </li>
                <li>
                  <strong>5. Sloppy presentation.</strong> Missing copies,
                  uncertified translations, late appointment. Treat it like a
                  scholarship interview.
                </li>
              </ul>
            </div>
          </div>

          {/* Tip box */}
          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <strong className="text-ink-900">💡 The honest tip:</strong>{" "}
            Practice out loud at least 3 times before the interview. Officers
            can tell instantly whether you&apos;ve thought about your answers or
            are improvising. Most rejections happen because the applicant
            sounded uncertain, not because the documents were wrong.
          </div>
        </div>
      </section>

      {/* High-intent CTA: visa interview prep service */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 ring-1 ring-emerald-200 sm:p-8">
          <div className="grid items-center gap-6 sm:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                Want a 1-on-1 mock interview?
              </p>
              <h3 className="mt-2 text-2xl font-bold text-ink-900">
                Optional — only if free prep isn&apos;t enough.
              </h3>
              <p className="mt-2 text-slate-700">
                The questions and rejection reasons above are the same ones
                we&apos;d cover. If you&apos;d rather walk through them in a
                live mock with feedback, we offer a paid 1-on-1 session.
                Otherwise, the free prep above is genuinely sufficient.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/services"
                  className="rounded-lg bg-ink-900 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-ink-800"
                >
                  See visa interview prep
                </a>
                <a
                  href="https://wa.me/491706963809?text=Hi! I want help with my visa interview."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-emerald-600"
                >
                  Free 10-min call
                </a>
              </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Visa interview prep
              </p>
              <p className="mt-1 text-lg font-bold text-brand-600">1 hour mock</p>
              <p className="text-sm text-slate-600">Free 10-min call first</p>
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                <li>Mock interview (Zoom)</li>
                <li>20+ embassy questions</li>
                <li>Real-time feedback</li>
                <li>Document checklist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/calculator", label: "Plan your budget" }}
        next={{ href: "/blocked-account", label: "Open a blocked account" }}
      />
    </>
  );
}
