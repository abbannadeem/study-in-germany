import Link from "next/link";
import PageHero from "@/components/PageHero";
import { countries } from "@/data/countries";

export const metadata = {
  title: "Country Guides: Study in Germany",
  description:
    "Country-by-country guides for studying in Germany — APS, embassy, attestation and timeline for Pakistan, India, Nigeria, Bangladesh, Nepal and more.",
};

export default function GuidesHubPage() {
  // Stable sort: APS-required countries first (more complex), then alphabetical
  const sorted = [...countries].sort((a, b) => {
    if (a.apsRequired !== b.apsRequired) return a.apsRequired ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <PageHero
        eyebrow="🌍 Country guides"
        title="Pick your country to start"
        subtitle="Each country has its own embassy, APS rules and document chain. These guides skip the generic advice and give you the actual route from your country to a German public university."
      />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Intro / "what's inside" strip
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
            What every country guide contains
          </p>
          <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>APS office details (mandatory for India, China, Vietnam, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>German embassy + consulate locations and processing times</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>Country-specific attestation chains (HEC, MOFA, MEA, MOHE, etc.)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>Realistic application timeline tailored to that country</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>Tips that only apply to applicants from this country</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>Blocked-account funding routes that work locally</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Country cards — APS-required first
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="mb-2 text-2xl font-bold text-ink-900 sm:text-3xl">
          {sorted.length} country guides
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          Tap a country to open its full step-by-step guide.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((c) => (
            <Link
              key={c.slug}
              href={`/guides/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-4xl">{c.flag}</span>
                <div>
                  <h3 className="text-lg font-bold text-ink-900 group-hover:text-brand-700">
                    {c.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    German embassy: {c.embassyCity}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 text-xs">
                {c.apsRequired ? (
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold text-amber-800">
                    APS required
                  </span>
                ) : (
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-semibold text-emerald-800">
                    No APS needed
                  </span>
                )}
                {c.keySteps && (
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
                    {c.keySteps.length}-step process
                  </span>
                )}
                {c.timeline && (
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">
                    {c.timeline.length}-stage timeline
                  </span>
                )}
              </div>

              <span className="mt-4 inline-block text-sm font-semibold text-brand-600 group-hover:underline">
                Open the {c.name} guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Country not listed CTA
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-3xl px-4 pb-12">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Country not listed?
          </p>
          <p className="mt-2 text-slate-700">
            We add new country guides regularly based on requests. If yours
            isn&apos;t here yet, message us — we&apos;ll prioritise it and let
            you know once it&apos;s ready.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://wa.me/923021045296?text=Hi%21%20Please%20add%20a%20country%20guide%20for%20"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-600"
            >
              💬 Request via WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              📧 All contact options
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          ⚠️ APS rules and embassy procedures change — always confirm the
          latest details with the German embassy in your country before
          applying.
        </p>
      </section>
    </>
  );
}
