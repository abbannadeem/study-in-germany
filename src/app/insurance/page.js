import Link from "next/link";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";
import {
  insuranceIntro,
  insuranceCategories,
  providers,
  faqs,
} from "@/data/insurance";

export const metadata = {
  title: "Health Insurance for Students in Germany",
  description:
    "Student health insurance for Germany — pre-arrival travel cover for the visa (DR-WALTER, Mawista) and public insurance after enrolment (TK, DAK, AOK).",
};

const CATEGORY_COLORS = {
  "pre-arrival": "from-amber-50 to-white border-amber-200",
  public: "from-emerald-50 to-white border-emerald-200",
  private: "from-blue-50 to-white border-blue-200",
};

const CATEGORY_ICON = {
  "pre-arrival": "🛬",
  public: "🏥",
  private: "🏛️",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function InsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        eyebrow="🩺 Mandatory for visa + enrolment"
        title="Health insurance in Germany"
        subtitle={insuranceIntro.summary}
      />

      {/* Warnings strip */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-5 sm:p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-amber-800">
            ⚠️ Important
          </p>
          <ul className="mt-3 space-y-2">
            {insuranceIntro.warnings.map((w) => (
              <li key={w} className="flex items-start gap-2 text-sm text-amber-900">
                <span className="mt-1 text-amber-700">•</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Category cards */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="mb-6 text-2xl font-bold text-ink-900 sm:text-3xl">
          Two types you need to know
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {insuranceCategories.map((cat) => (
            <div
              key={cat.id}
              className={`rounded-2xl border-2 bg-gradient-to-br ${CATEGORY_COLORS[cat.id]} p-6 shadow-sm`}
            >
              <p className="text-3xl">{CATEGORY_ICON[cat.id]}</p>
              <h3 className="mt-3 text-lg font-bold text-ink-900">{cat.label}</h3>
              <p className="mt-2 text-sm text-slate-700">{cat.description}</p>
              <dl className="mt-4 space-y-2 text-xs">
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-slate-500">
                    Needed by
                  </dt>
                  <dd className="text-slate-700">{cat.needed}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-slate-500">
                    Duration
                  </dt>
                  <dd className="text-slate-700">{cat.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-wide text-slate-500">
                    Coverage
                  </dt>
                  <dd className="text-slate-700">{cat.coverage}</dd>
                </div>
              </dl>
              <a
                href={`#${cat.id}`}
                className="mt-4 inline-block text-sm font-bold text-brand-700 hover:underline"
              >
                See providers ↓
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Providers by category */}
      {insuranceCategories.map((cat) => {
        const catProviders = providers.filter((p) => p.category === cat.id);
        return (
          <section key={cat.id} id={cat.id} className="mx-auto max-w-6xl px-4 py-10">
            <div className="mb-6 flex items-baseline gap-3">
              <h2 className="text-2xl font-bold text-ink-900 sm:text-3xl">
                {CATEGORY_ICON[cat.id]} {cat.label}
              </h2>
              <span className="text-sm text-slate-500">
                {catProviders.length} providers
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {catProviders.map((p) => (
                <div
                  key={p.slug}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <h3 className="text-lg font-bold text-ink-900">{p.name}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {p.type}
                  </p>

                  <div className="my-4 grid grid-cols-2 gap-2 border-y border-slate-100 py-3 text-xs">
                    <div>
                      <p className="font-semibold text-slate-500">Cost</p>
                      <p className="text-ink-900">{p.monthlyFee}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-500">Setup</p>
                      <p className="text-ink-900">{p.setup}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-500">Coverage</p>
                      <p className="text-ink-900">{p.coverage}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-500">Bundle</p>
                      <p className="text-ink-900">{p.bundle}</p>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                      ✓ Pros
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      {p.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5">
                          <span className="mt-1 text-emerald-500">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wide text-rose-700">
                      ✗ Cons
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      {p.cons.map((con) => (
                        <li key={con} className="flex items-start gap-1.5">
                          <span className="mt-1 text-rose-500">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto rounded-lg bg-brand-50 p-3 text-xs text-brand-900">
                    <p className="font-bold text-brand-700">Best for</p>
                    <p className="mt-1 text-brand-900/90">{p.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Honest recommendation */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl bg-ink-900 p-6 text-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-300">
            Don't overthink this
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Honest decision tree
          </h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-sm font-bold text-brand-300">
                For visa application:
              </p>
              <p className="mt-1 text-sm text-white/85">
                Use the insurance bundled with your blocked account provider.{" "}
                <strong>Expatrio + DR-WALTER</strong> covers 80% of South Asian students.{" "}
                <strong>Fintiba + Mawista</strong> is the alternative.
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-sm font-bold text-brand-300">
                For long-term (under 30, degree programme):
              </p>
              <p className="mt-1 text-sm text-white/85">
                <strong>TK (Techniker Krankenkasse)</strong> — default choice. English support,
                broad network, most popular among international students.
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-sm font-bold text-brand-300">
                For over 30, language course, or Studienkolleg:
              </p>
              <p className="mt-1 text-sm text-white/85">
                <strong>Mawista Postgraduate</strong> or{" "}
                <strong>Allianz Care Student</strong>. Read the limits carefully before
                signing — private is one-way.
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/60">
            ⓘ Disclosure: Some providers (DR-WALTER, Mawista, Care Concept)
            run affiliate programmes. We may earn a commission if you sign up
            via our links — at no cost to you. We only recommend providers we'd
            choose ourselves. Final choice is always yours.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-ink-900">Common questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-ink-900">
                  {f.q}
                  <span className="text-brand-500 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
            ⚠️ Insurance providers, premiums, and rules update yearly. Always
            confirm the latest figures and bundle options directly with the
            provider before signing up.
          </div>
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/blocked-account", label: "Open a blocked account" }}
        next={{ href: "/settle", label: "Settle In" }}
      />
    </>
  );
}
