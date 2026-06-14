import Link from "next/link";
import { notFound } from "next/navigation";
import {
  universities,
  getUniversity,
  hasAdmissionData,
  hasDeadlinesData,
  applyVenue,
} from "@/data/universities";
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

  const showAdmission = hasAdmissionData(uni);
  const showDeadlines = hasDeadlinesData(uni);
  const apply = applyVenue(uni);

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

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ADMISSION REQUIREMENTS — only renders when data exists
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {showAdmission && (
          <section className="mt-2 mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-ink-900">
              Admission requirements
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Programme-specific minimums vary — confirm on the official
              programme page before applying.
            </p>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              {uni.admission.gpa && (
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    Academic / GPA
                  </dt>
                  <dd className="mt-1 text-sm text-ink-900">{uni.admission.gpa}</dd>
                </div>
              )}
              {uni.admission.languageEnglish && (
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    English (IELTS / TOEFL)
                  </dt>
                  <dd className="mt-1 text-sm text-ink-900">
                    {uni.admission.languageEnglish}
                  </dd>
                </div>
              )}
              {uni.admission.germanLevel && (
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-4">
                  <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
                    German language
                  </dt>
                  <dd className="mt-1 text-sm text-ink-900">
                    {uni.admission.germanLevel}
                  </dd>
                </div>
              )}
              {uni.admission.otherRequirements &&
                uni.admission.otherRequirements.length > 0 && (
                  <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
                    <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Other documents &amp; expectations
                    </dt>
                    <dd className="mt-2">
                      <ul className="space-y-1.5 text-sm text-ink-900">
                        {uni.admission.otherRequirements.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
            </dl>
          </section>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            APPLICATION DEADLINES — only renders when data exists
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {showDeadlines && (
          <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-ink-900">
              Application deadlines
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Deadlines change yearly — always verify on the official programme
              page.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {uni.deadlines.winterIntake && (
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    🍂 Winter intake (starts October)
                  </p>
                  <p className="mt-1 text-sm text-ink-900">
                    {uni.deadlines.winterIntake}
                  </p>
                </div>
              )}
              {uni.deadlines.summerIntake && (
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                    🌸 Summer intake (starts April)
                  </p>
                  <p className="mt-1 text-sm text-ink-900">
                    {uni.deadlines.summerIntake}
                  </p>
                </div>
              )}
            </div>

            {uni.deadlines.notes && (
              <p className="mt-4 rounded-lg border border-slate-100 bg-slate-50 p-3 text-xs text-slate-600">
                ℹ️ {uni.deadlines.notes}
              </p>
            )}

            {apply && (
              <div className="mt-5 rounded-lg border border-brand-200 bg-brand-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
                  How to apply
                </p>
                <p className="mt-1 text-sm font-semibold text-ink-900">
                  {apply.label}
                </p>
                <p className="mt-1 text-sm text-slate-700">{apply.note}</p>
                {apply.url && (
                  <a
                    href={apply.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-bold text-brand-700 hover:underline"
                  >
                    Open the application portal →
                  </a>
                )}
              </div>
            )}
          </section>
        )}
      </div>
    </article>
  );
}
