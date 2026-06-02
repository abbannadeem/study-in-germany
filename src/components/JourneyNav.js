import Link from "next/link";

// "Previous / Next" navigation that appears at the bottom of every major page
// so users always know what to do next in the journey.
export default function JourneyNav({ prev, next }) {
  if (!prev && !next) return null;
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Link
            href={prev.href}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
          >
            <span className="text-2xl text-brand-500">←</span>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-slate-400">Previous step</p>
              <p className="truncate font-semibold text-ink-900 group-hover:text-brand-700">
                {prev.label}
              </p>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
        {next && (
          <Link
            href={next.href}
            className="group flex items-center justify-end gap-3 rounded-xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-4 text-right shadow-sm transition-all hover:-translate-y-1 hover:border-brand-400 hover:shadow-md"
          >
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wide text-brand-600">Next step</p>
              <p className="truncate font-semibold text-ink-900 group-hover:text-brand-700">
                {next.label}
              </p>
            </div>
            <span className="text-2xl text-brand-500">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
