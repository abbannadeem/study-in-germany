import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/data/cities";
import CityImage from "@/components/CityImage";
import { euro, number } from "@/lib/format";

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return { title: city.name, description: city.description };
}

export default async function CityDetail({ params }) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const costs = [
    { label: "Monthly budget", value: `~${euro(city.monthlyBudget)}`, icon: "💶" },
    { label: "Average rent", value: `~${euro(city.avgRent)}`, icon: "🏠" },
    {
      label: "Transport pass",
      value: city.transportPass === 0 ? "Often included" : `~${euro(city.transportPass)}`,
      icon: "🚆",
    },
    { label: "Population", value: number(city.population), icon: "👥" },
  ];

  return (
    <article>
      <div className="relative h-56 w-full overflow-hidden md:h-72">
        <CityImage city={city} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-0 right-0">
          <div className="mx-auto max-w-5xl px-4">
            <h1 className="text-3xl font-extrabold text-white drop-shadow md:text-4xl">
              {city.name}
            </h1>
            <p className="text-white/90 drop-shadow">{city.germanName} · {city.state}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/cities" className="text-sm text-brand-600 hover:underline">
              ← Back to all cities
            </Link>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
              {city.vibe}
            </span>
          </div>
          <p className="mt-4 leading-relaxed text-slate-700">{city.description}</p>
        </div>

        {/* Cost cards */}
        <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {costs.map((c) => (
            <div
              key={c.label}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <div className="text-2xl">{c.icon}</div>
              <div className="mt-1 text-lg font-bold text-ink-900">{c.value}</div>
              <div className="text-xs text-slate-500">{c.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-lg font-bold text-ink-900">Why students love it</h2>
            <ul className="space-y-2">
              {city.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  <span className="text-emerald-500">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-ink-900">Universities here</h2>
            <ul className="space-y-2">
              {city.universities.map((u) => (
                <li
                  key={u}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  <span className="text-brand-500">🎓</span>
                  {u}
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              💡 {city.costNote}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
