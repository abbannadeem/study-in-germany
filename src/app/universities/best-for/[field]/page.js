import Link from "next/link";
import { notFound } from "next/navigation";
import { universities } from "@/data/universities";
import PageHero from "@/components/PageHero";
import UniversityNextSteps from "@/components/UniversityNextSteps";
import { euro } from "@/lib/format";

// Field-specific comparison landing pages. Each `field` slug maps to a real
// field-of-study filter against the universities data set. Only universities
// that genuinely list that field are surfaced.

const FIELDS = {
  "computer-science": {
    label: "Computer Science",
    keywords: ["Computer Science", "Informatics", "Information Technology"],
    intro:
      "Germany is a global computer science powerhouse — home to TUM, RWTH Aachen, KIT, Saarland and the Max Planck Institute for Software Systems. Most programmes are taught in English at Master's level, with industry pipelines into SAP, Bosch, Siemens, BMW and the growing Berlin startup scene.",
  },
  engineering: {
    label: "Engineering",
    keywords: ["Engineering"],
    intro:
      "Germany is the world's engineering capital — mechanical, automotive, aerospace, electrical, chemical. The country's industrial economy means a German engineering degree leads to one of Europe's strongest job markets, often before you graduate.",
  },
  business: {
    label: "Business",
    keywords: ["Management", "Economics", "Business", "Finance"],
    intro:
      "Germany's business schools combine rigorous economics with strong ties to industry. Mannheim, Frankfurt, and Cologne are top hubs for finance; LMU and TUM for management; and the country has 30+ accredited business schools offering English Master's.",
  },
  medicine: {
    label: "Medicine",
    keywords: ["Medicine"],
    intro:
      "Studying medicine in Germany is highly competitive but extremely affordable — tuition-free at most public universities. International students typically need a converted GPA equivalent of ~85%+ and German B2/C1 (medicine is taught in German).",
  },
};

export function generateStaticParams() {
  return Object.keys(FIELDS).map((field) => ({ field }));
}

export async function generateMetadata({ params }) {
  const { field } = await params;
  const info = FIELDS[field];
  if (!info) return {};
  const url = `https://studyingermanyguide.com/universities/best-for/${field}`;
  const title = `Best German Universities for ${info.label}`;
  const description = `Top public universities in Germany for ${info.label} — fees, ranking, English programmes, application route.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "website" },
  };
}

export default async function BestForFieldPage({ params }) {
  const { field } = await params;
  const info = FIELDS[field];
  if (!info) notFound();

  const matches = [...universities]
    .filter((u) =>
      (u.fields || []).some((f) =>
        info.keywords.some((k) => f.toLowerCase().includes(k.toLowerCase()))
      )
    )
    .sort((a, b) => (a.worldRanking || 999) - (b.worldRanking || 999))
    .slice(0, 12);

  return (
    <>
      <PageHero
        eyebrow={`🎓 ${info.label}`}
        title={`Best German Universities for ${info.label}`}
        subtitle={info.intro}
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-2xl font-bold text-ink-900">
          Top 12 universities for {info.label}
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {matches.map((u, i) => (
            <Link
              key={u.slug}
              href={`/universities/${u.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-bold text-brand-700">
                  #{i + 1} for {info.label}
                </span>
                <span className="text-xs text-slate-500">
                  World #{u.worldRanking || "—"}
                </span>
              </div>
              <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-700">
                {u.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{u.city}</p>
              <p className="mt-3 text-sm text-slate-700 line-clamp-3">
                {u.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500">
                <span>
                  Tuition: {u.tuitionPerSemester === 0 ? "Free" : euro(u.tuitionPerSemester)}/sem
                </span>
                <span>{u.englishPrograms ? "English programmes ✓" : "Limited English"}</span>
              </div>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-600 group-hover:underline">
                Full profile →
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
