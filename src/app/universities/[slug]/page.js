import Link from "next/link";
import { notFound } from "next/navigation";
import { universities, getUniversity } from "@/data/universities";
import PageHero from "@/components/PageHero";
import { euro, number } from "@/lib/format";

export function generateStaticParams() {
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const uni = getUniversity(slug);
  if (!uni) return {};
  return {
    title: uni.name,
    description: uni.description,
  };
}

export default async function UniversityDetail({ params }) {
  const { slug } = await params;
  const uni = getUniversity(slug);
  if (!uni) notFound();

  const facts = [
    { label: "Location", value: `${uni.city}, ${uni.state}` },
    { label: "Founded", value: uni.founded },
    { label: "Type", value: uni.type },
    { label: "Students", value: number(uni.students) },
    { label: "World ranking", value: `#${uni.worldRanking}` },
    {
      label: "Tuition / semester",
      value: uni.tuitionPerSemester === 0 ? "Free" : euro(uni.tuitionPerSemester),
    },
    { label: "Semester fee", value: euro(uni.semesterFee) },
    { label: "English programmes", value: uni.englishPrograms ? "Yes" : "Limited" },
  ];

  return (
    <article>
      <PageHero
        eyebrow={`🎓 World rank #${uni.worldRanking}`}
        title={uni.name}
        subtitle={`📍 ${uni.city}, ${uni.state}`}
      />

      <div className="mx-auto max-w-5xl px-4">
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <Link href="/universities" className="text-sm text-brand-600 hover:underline">
            ← Back to all universities
          </Link>
          <p className="mt-4 leading-relaxed text-slate-700">{uni.description}</p>
        </div>

        <div className="my-8 grid gap-8 md:grid-cols-3">
          {/* Key facts */}
          <aside className="md:col-span-1">
            <h2 className="mb-3 text-lg font-bold text-ink-900">Key facts</h2>
            <dl className="overflow-hidden rounded-xl border border-slate-200 bg-white text-sm shadow-sm">
              {facts.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex justify-between px-4 py-3 ${
                    i % 2 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <dt className="text-slate-500">{f.label}</dt>
                  <dd className="font-medium text-ink-900">{f.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={uni.website}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block rounded-lg bg-brand-500 px-4 py-2.5 text-center font-semibold text-ink-900 transition hover:bg-brand-400"
            >
              Visit official website ↗
            </a>
          </aside>

          {/* Programs & fields */}
          <div className="md:col-span-2">
            <h2 className="mb-3 text-lg font-bold text-ink-900">Fields of study</h2>
            <div className="mb-6 flex flex-wrap gap-2">
              {uni.fields.map((f) => (
                <span
                  key={f}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                >
                  {f}
                </span>
              ))}
            </div>

            <h2 className="mb-3 text-lg font-bold text-ink-900">Popular programmes</h2>
            <ul className="space-y-2">
              {uni.popularPrograms.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
                >
                  <span className="text-brand-500">🎓</span>
                  {p}
                </li>
              ))}
            </ul>

            {uni.tuitionPerSemester > 0 && (
              <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                ⚠️ This university is in {uni.state}, where non-EU/EEA students pay{" "}
                {euro(uni.tuitionPerSemester)} tuition per semester.
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
