import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import AuthorByline, { AUTHOR_JSONLD } from "@/components/AuthorByline";
import { countries, getCountry } from "@/data/countries";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) return {};
  return {
    title: `Study in Germany from ${c.name}`,
    description: `A guide for students from ${c.name}: APS, embassy, documents, timeline and tips.`,
  };
}

export default async function CountryGuidePage({ params }) {
  const { country } = await params;
  const c = getCountry(country);
  if (!c) notFound();

  // Article + author JSON-LD: surfaces real authorship to Google so the
  // country guides earn E-E-A-T credit.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Study in Germany from ${c.name} — Country Guide`,
    description: `A step-by-step guide for students applying to German universities from ${c.name}: APS, embassy, documents and timeline.`,
    datePublished: "2026-06-01",
    dateModified: "2026-06-16",
    author: AUTHOR_JSONLD,
    publisher: {
      "@type": "Organization",
      name: "Study in Germany Guide",
      url: "https://studyingermanyguide.com",
      logo: {
        "@type": "ImageObject",
        url: "https://studyingermanyguide.com/founder/abban.jpg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://studyingermanyguide.com/guides/${c.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero
        eyebrow={`${c.flag} Country guide`}
        title={`Study in Germany from ${c.name}`}
        subtitle={`A step-by-step guide tailored for students applying from ${c.name} — APS, embassy, documents and timeline.`}
      />

      <section className="mx-auto max-w-4xl px-4 pt-6">
        <div className="text-sm text-slate-600">
          <AuthorByline date="Updated 16 June 2026" compact />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        {/* Other countries */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-slate-500">Other country guides:</span>
          {countries
            .filter((x) => x.slug !== c.slug)
            .map((x) => (
              <Link
                key={x.slug}
                href={`/guides/${x.slug}`}
                className="rounded-full bg-slate-100 px-3 py-1 hover:bg-brand-50 hover:text-brand-700"
              >
                {x.flag} {x.name}
              </Link>
            ))}
        </div>

        {/* Embassy + APS quick facts */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              🏛️ Visa application at
            </p>
            <p className="mt-1 text-ink-900">{c.embassyCity}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              📜 APS certificate
            </p>
            <p className="mt-1 text-ink-900">
              {c.apsRequired ? "Required (mandatory)" : "Not required"}
            </p>
            <p className="mt-1 text-xs text-slate-500">{c.apsNote}</p>
          </div>
        </div>

        {/* Key steps */}
        <h2 className="mb-3 text-2xl font-bold text-ink-900">Key steps</h2>
        <ol className="mb-10 relative border-l-2 border-brand-200">
          {c.keySteps.map((s, i) => (
            <li key={s.title} className="mb-6 ml-6">
              <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-ink-900 ring-4 ring-white">
                {i + 1}
              </span>
              <h3 className="font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>

        {/* Documents */}
        <h2 className="mb-3 text-2xl font-bold text-ink-900">📄 Documents checklist</h2>
        <div className="mb-10 grid gap-2 sm:grid-cols-2">
          {c.documents.map((d) => (
            <div
              key={d}
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            >
              <span className="mt-0.5 text-emerald-500">✓</span>
              {d}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="mb-3 text-2xl font-bold text-ink-900">⏳ Suggested timeline</h2>
        <div className="mb-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-2">When</th>
                <th className="px-4 py-2">What to do</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {c.timeline.map((t) => (
                <tr key={t.when}>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-brand-700">
                    {t.when}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{t.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tips */}
        <h2 className="mb-3 text-2xl font-bold text-ink-900">💡 Country tips</h2>
        <ul className="mb-10 space-y-2">
          {c.tips.map((tip) => (
            <li
              key={tip}
              className="flex items-start gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
            >
              <span className="mt-0.5 text-amber-500">💡</span>
              {tip}
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          Need help with the general process? See the full{" "}
          <Link href="/visa" className="font-medium text-brand-600 hover:underline">
            Visa &amp; Process guide
          </Link>{" "}
          and{" "}
          <Link href="/blocked-account" className="font-medium text-brand-600 hover:underline">
            blocked account comparison
          </Link>
          .
        </div>

        {/* Author bio card — E-E-A-T credibility signal */}
        <AuthorByline />
      </section>
    </>
  );
}
