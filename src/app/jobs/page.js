import {
  workRules,
  jobTypes,
  popularJobs,
  careerPaths,
  jobPortals,
  cityJobComparison,
} from "@/data/jobs";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";

export const metadata = {
  title: "Jobs & Careers",
  description:
    "Working in Germany as an international student: part-time work rules, job types, salaries, post-study career options and job portals.",
};

const ruleCards = [
  { key: "studentHours", title: "Work hours", icon: "⏱️" },
  { key: "minimumWage", title: "Minimum wage", icon: "💶" },
  { key: "workingStudent", title: "Working student", icon: "📚" },
  { key: "miniJob", title: "Mini-jobs", icon: "🪙" },
  { key: "postStudy", title: "After graduation", icon: "🎯" },
];

export default function JobsPage() {
  return (
    <>
      <PageHero
        eyebrow="💼 Work & careers"
        title="Jobs & Careers"
        subtitle="Germany lets international students work part-time and offers excellent career prospects after graduation. Here's how it works."
      />

      {/* Work rules */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-6 text-2xl font-bold text-ink-900">The rules at a glance</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ruleCards.map((r) => (
            <div
              key={r.key}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-2 text-2xl">{r.icon}</div>
              <h3 className="mb-1 font-semibold text-ink-900">{r.title}</h3>
              <p className="text-sm text-slate-600">{workRules[r.key]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job types */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-2xl font-bold text-ink-900">Types of student jobs</h2>
          <p className="mb-6 text-slate-500">Common ways students earn while studying.</p>
          <div className="space-y-3">
            {jobTypes.map((j) => (
              <div
                key={j.title}
                className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{j.icon}</div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{j.title}</h3>
                    <p className="text-sm text-slate-600">{j.description}</p>
                  </div>
                </div>
                <span className="shrink-0 self-start rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-semibold text-emerald-700 sm:self-center">
                  {j.pay}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular odd jobs */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-2 text-2xl font-bold text-ink-900">Popular student side jobs</h2>
        <p className="mb-6 text-slate-500">
          The most common, easy-to-get jobs students actually do — with the kind of
          employers that hire and how much German you'll need.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularJobs.map((j) => (
            <div
              key={j.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-2 flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{j.icon}</span>
                  <h3 className="font-semibold text-ink-900">{j.title}</h3>
                </div>
              </div>
              <span className="mb-2 inline-block w-fit rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                {j.pay}
              </span>
              <p className="text-sm text-slate-600">{j.description}</p>
              <div className="mt-auto space-y-1 border-t border-slate-100 pt-3 text-xs text-slate-500">
                <p>🏢 {j.companies}</p>
                <p>🗣️ {j.german}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          ℹ️ These usually count as a <strong className="text-ink-900">Mini-job</strong> or
          working-student role and toward your <strong className="text-ink-900">140 full
          days / 280 half days</strong> per year limit. You'll need your tax ID and a
          German bank account first — see{" "}
          <a href="/settle" className="font-medium text-brand-600 hover:underline">Settle In</a>.
        </div>
      </section>

      {/* Big vs small cities for part-time work */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-2 text-2xl font-bold text-ink-900">Big cities vs small cities for part-time jobs</h2>
        <p className="mb-6 text-slate-500">
          Where you study changes how easy it is to find part-time work — and how
          far your earnings go.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {[cityJobComparison.big, cityJobComparison.small].map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-1 flex items-center gap-2">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="text-lg font-bold text-ink-900">{c.title}</h3>
              </div>
              <p className="mb-4 text-xs text-slate-500">e.g. {c.examples}</p>

              <p className="mb-2 text-sm font-semibold text-emerald-700">Pros</p>
              <ul className="mb-4 space-y-1.5">
                {c.pros.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 text-emerald-500">✓</span>
                    {p}
                  </li>
                ))}
              </ul>

              <p className="mb-2 text-sm font-semibold text-amber-700">Watch out for</p>
              <ul className="space-y-1.5">
                {c.cons.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 text-amber-500">!</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          ⚖️ <strong className="text-ink-900">Bottom line:</strong> {cityJobComparison.verdict}
        </div>
      </section>

      {/* Career paths */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-2 text-2xl font-bold text-ink-900">Career path after graduation</h2>
        <p className="mb-6 text-slate-500">
          Germany actively wants international graduates to stay and work.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {careerPaths.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="mb-1 font-semibold text-brand-700">{c.title}</h3>
              <p className="text-sm text-slate-600">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job portals */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-2 text-2xl font-bold text-ink-900">Where to find jobs</h2>
          <p className="mb-6 text-slate-500">Popular portals to search for student jobs and internships.</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {jobPortals.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-ink-900 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
              >
                {p.name}
                <span className="text-brand-500">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          ⚠️ Work-hour limits, minimum wage and visa rules change regularly. Always
          confirm the latest details with your university's international office and
          the official{" "}
          <a
            href="https://www.make-it-in-germany.com/en/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline"
          >
            Make it in Germany
          </a>{" "}
          portal.
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/settle", label: "Travel & settle in" }}
        next={{ href: "/start", label: "Back to start" }}
      />
    </>
  );
}
