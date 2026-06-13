import Link from "next/link";
import { universities } from "@/data/universities";
import UniversityExplorer from "@/components/UniversityExplorer";
import JourneyNav from "@/components/JourneyNav";

export const metadata = {
  title: "All Public Universities in Germany — Tuition-Free Directory (2026)",
  description:
    "The full directory of public universities in Germany — tuition-free, English programmes available. Search by city, state or field. All data updated June 2026.",
};

const QUICK_FILTERS = [
  { label: "Top 10 ranked", icon: "🏆", href: "/universities?sort=ranking" },
  { label: "Tuition-free only", icon: "💶", href: "/universities?free=1" },
  { label: "English programmes", icon: "🇬🇧", href: "/programs" },
  { label: "Compare 3", icon: "⚖️", href: "/compare" },
];

export default function UniversitiesPage() {
  const topUnis = [...universities]
    .sort((a, b) => a.worldRanking - b.worldRanking)
    .slice(0, 6);

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — with real photo background + value prop
          Replaces the generic PageHero. Tells users in 5 seconds
          WHY they should stay on this page.
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/cities/munich.jpg"
            alt="Munich university backdrop"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/70 to-brand-900/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-wide ring-1 ring-white/25 backdrop-blur">
              🎓 Public university directory
            </span>
            <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40 backdrop-blur">
              ✓ Updated June 2026
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl">
            Tuition-free university in Germany.{" "}
            <span className="text-brand-300">Find yours.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow sm:text-xl">
            All public universities listed. No agents. No commissions. Ranking,
            location, fees, English programmes — searchable and honest.
          </p>

          {/* Hero CTAs */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/start"
              className="rounded-lg bg-brand-500 px-6 py-3 text-base font-bold text-ink-900 shadow-lg transition hover:scale-105 hover:bg-brand-400"
            >
              🚀 Start with the 9-step guide
            </Link>
            <Link
              href="/compare"
              className="rounded-lg bg-white/15 px-6 py-3 font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/25"
            >
              ⚖️ Compare 3 universities →
            </Link>
          </div>

          {/* Trust strip — facts that make people stay */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "All public", l: "Verified universities" },
              { v: "€0", l: "Tuition in most states" },
              { v: "English", l: "Programmes available" },
              { v: "Free", l: "No agent fees, ever" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-xl font-extrabold text-brand-300">{s.v}</p>
                <p className="mt-0.5 text-xs text-white/80">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          QUICK FILTER CHIPS — gives user agency immediately
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-4 text-sm">
          <span className="font-semibold text-slate-500">Quick filter:</span>
          {QUICK_FILTERS.map((q) => (
            <Link
              key={q.label}
              href={q.href}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              {q.icon} {q.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURED — top 6 ranked universities as visual cards
          Gives users SOMETHING TO LOOK AT before the long list.
          This breaks the "list shock" that causes the bounce.
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-baseline justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
              Best of Germany
            </p>
            <h2 className="mt-1 text-2xl font-bold text-ink-900 sm:text-3xl">
              Top 6 ranked universities
            </h2>
          </div>
          <Link href="/compare" className="text-sm font-semibold text-brand-600 hover:underline">
            Compare these →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topUnis.map((u, i) => (
            <Link
              key={u.slug}
              href={`/universities/${u.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">
                  #{u.worldRanking || i + 1} worldwide
                </span>
                <span className="text-xs font-medium text-slate-500">{u.city}</span>
              </div>
              <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-700">
                {u.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{u.state}</p>

              <div className="mt-auto border-t border-slate-100 pt-3 text-xs text-slate-600">
                {u.tuitionPerSemester === 0 ? (
                  <span className="font-semibold text-emerald-700">
                    ✓ Tuition-free
                  </span>
                ) : (
                  <span>Tuition: {u.tuitionPerSemester}/sem</span>
                )}
                {" · "}
                <span>Semester fee: €{u.semesterFee}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FULL EXPLORER — the rest of the list, filterable
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
              Browse all
            </p>
            <h2 className="mt-1 text-2xl font-bold text-ink-900 sm:text-3xl">
              Every public university, searchable
            </h2>
            <p className="mt-2 text-slate-600">
              Search by name, city, or field. Filter by state. Sort by ranking or
              fee. All data verified June 2026.
            </p>
          </div>
          <UniversityExplorer />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHAT NEXT — concrete actions after browsing
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl bg-ink-900 p-6 text-white sm:p-10">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-300">
            Found a few you like?
          </p>
          <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
            Here's what to do next.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/compare"
              className="group rounded-xl bg-white/10 p-5 ring-1 ring-white/20 transition hover:bg-white/15"
            >
              <p className="text-2xl">⚖️</p>
              <p className="mt-2 font-bold">Compare side-by-side</p>
              <p className="mt-1 text-sm text-white/70">
                Pick up to 3 unis and see programmes, fees, ranking together.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-300 group-hover:text-brand-200">
                Open compare tool →
              </span>
            </Link>
            <Link
              href="/programs"
              className="group rounded-xl bg-white/10 p-5 ring-1 ring-white/20 transition hover:bg-white/15"
            >
              <p className="text-2xl">📖</p>
              <p className="mt-2 font-bold">Find your programme</p>
              <p className="mt-1 text-sm text-white/70">
                Search English-taught Bachelor's and Master's by field of study.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-300 group-hover:text-brand-200">
                Browse programmes →
              </span>
            </Link>
            <Link
              href="/calculator"
              className="group rounded-xl bg-white/10 p-5 ring-1 ring-white/20 transition hover:bg-white/15"
            >
              <p className="text-2xl">🧮</p>
              <p className="mt-2 font-bold">Estimate the cost</p>
              <p className="mt-1 text-sm text-white/70">
                See yearly cost of living in any German city, in your currency.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-300 group-hover:text-brand-200">
                Open calculator →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/start", label: "Start: Your Journey" }}
        next={{ href: "/programs", label: "Find your programme" }}
      />
    </>
  );
}
