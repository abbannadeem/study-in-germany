import Link from "next/link";
import { universities } from "@/data/universities";
import PageHero from "@/components/PageHero";
import UniversityNextSteps from "@/components/UniversityNextSteps";
import { euro } from "@/lib/format";

export const metadata = {
  title: "Top 10 English-Taught Universities in Germany (2026)",
  description:
    "The best German universities offering English-taught Bachelor's and Master's programmes. Real comparison of fees, ranking and admission requirements.",
};

export default function TopEnglishUniversitiesPage() {
  const top = [...universities]
    .filter((u) => u.englishPrograms === true && u.worldRanking)
    .sort((a, b) => a.worldRanking - b.worldRanking)
    .slice(0, 10);

  return (
    <>
      <PageHero
        eyebrow="🇬🇧 English programmes"
        title="Top 10 English-Taught Universities in Germany"
        subtitle="Germany has thousands of English-taught Bachelor's and Master's programmes — but these ten universities lead in both ranking and the number of English options. Data updated June 2026."
      />

      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
          <h2 className="text-xl font-bold text-ink-900">
            Don&apos;t speak German? You still have great options.
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Germany now offers more than 2,000 fully English-taught
            programmes, especially at Master&apos;s level. You can earn a
            tuition-free German degree in English. German language is helpful
            for daily life, but not required for most of these programmes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-4 md:grid-cols-2">
          {top.map((u, i) => (
            <Link
              key={u.slug}
              href={`/universities/${u.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-brand-500 px-2.5 py-1 text-xs font-bold text-ink-900">
                  #{i + 1}
                </span>
                <span className="text-xs text-slate-500">
                  World rank #{u.worldRanking}
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-700">
                {u.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{u.city}, {u.state}</p>
              <p className="mt-3 text-sm text-slate-700 line-clamp-3">
                {u.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                <span>Tuition: {u.tuitionPerSemester === 0 ? "Free" : euro(u.tuitionPerSemester)}/sem</span>
                <span>Semester fee: {euro(u.semesterFee)}</span>
              </div>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-600 group-hover:underline">
                See full profile →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12">
        <UniversityNextSteps uni={{ applyVia: null }} />
      </section>
    </>
  );
}
