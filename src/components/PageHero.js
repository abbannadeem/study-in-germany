// Consistent page header used across all listing/info pages so every page
// aligns the same way: optional eyebrow chip, big title, supporting subtitle.
export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-german text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium ring-1 ring-white/20">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
