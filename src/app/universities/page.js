import Link from "next/link";
import UniversityExplorer from "@/components/UniversityExplorer";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";

export const metadata = {
  title: "Universities",
  description:
    "Browse top public universities in Germany — search and filter by state, field of study and tuition fees.",
};

export default function UniversitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="🎓 400+ public universities"
        title="Find your university"
        subtitle="Germany has over 400 public universities — most of them tuition-free. Search and filter to find the right fit for your field and budget."
      />

      {/* First-time visitor nudge — pushes new users to /start (low bounce) */}
      <section className="mx-auto max-w-6xl px-4 pt-8">
        <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[240px]">
              <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                New to applying to Germany?
              </p>
              <p className="mt-1 text-base font-semibold text-ink-900 sm:text-lg">
                Don't scroll the list blind — start with our 9-step guided journey.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                We'll walk you through what to do first, when, and how — so this list actually makes sense.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/start"
                className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-bold text-ink-900 shadow-sm transition hover:bg-brand-400"
              >
                Start your journey →
              </Link>
              <Link
                href="/compare"
                className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 ring-1 ring-slate-200 transition hover:bg-slate-50"
              >
                Compare 3 unis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <UniversityExplorer />
      </section>

      {/* "What next" — gives users something concrete after browsing */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-2xl bg-ink-900 p-6 text-white sm:p-8">
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
