// Consistent page header used across all listing/info pages so every page
// aligns the same way: optional eyebrow chip, big title, supporting subtitle,
// and an automatic "Updated June 2026" freshness badge for trust.
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  hideUpdated = false,
  backgroundImage,
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-ink-900/80 to-ink-900/40"
          />
        </>
      )}
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {eyebrow && (
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium ring-1 ring-white/20">
              {eyebrow}
            </span>
          )}
          {!hideUpdated && (
            <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40">
              Updated June 2026
            </span>
          )}
        </div>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
