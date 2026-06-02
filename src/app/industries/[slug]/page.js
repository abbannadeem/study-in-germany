import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, getIndustry } from "@/data/industries";
import Photo from "@/components/Photo";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getIndustry(slug);
  if (!item) return {};
  return {
    title: `Industries in ${item.state}`,
    description: item.description,
  };
}

export default async function IndustryDetail({ params }) {
  const { slug } = await params;
  const item = getIndustry(slug);
  if (!item) notFound();

  return (
    <article>
      <div className="relative h-56 w-full overflow-hidden md:h-72">
        <Photo
          src={`/industries/${item.slug}.jpg`}
          name={item.state}
          emoji="🏭"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        <div className="absolute bottom-4 left-0 right-0">
          <div className="mx-auto max-w-5xl px-4">
            <h1 className="text-3xl font-extrabold text-white drop-shadow md:text-4xl">
              {item.state}
            </h1>
            <p className="text-white/90 drop-shadow">{item.headline}</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <Link href="/industries" className="text-sm text-brand-600 hover:underline">
            ← Back to all states
          </Link>
          <p className="mt-4 leading-relaxed text-slate-700">{item.description}</p>
        </div>

        <div className="my-8 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-lg font-bold text-ink-900">Key sectors</h2>
            <div className="flex flex-wrap gap-2">
              {item.sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm font-medium text-brand-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-lg font-bold text-ink-900">Top employers</h2>
            <ul className="space-y-2">
              {item.companies.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  <span className="text-brand-500">🏢</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-12 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          💡 Studying in a state where your field is strong makes it much easier to
          find internships, working-student jobs and full-time roles after
          graduation. Explore{" "}
          <Link href="/cities" className="font-medium text-brand-600 hover:underline">
            cities
          </Link>{" "}
          and{" "}
          <Link href="/universities" className="font-medium text-brand-600 hover:underline">
            universities
          </Link>{" "}
          in {item.state}.
        </div>
      </div>
    </article>
  );
}
