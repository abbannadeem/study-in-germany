import PageHero from "@/components/PageHero";
import ScholarshipExplorer from "@/components/ScholarshipExplorer";
import JourneyNav from "@/components/JourneyNav";
import { scholarships } from "@/data/scholarships";

export const metadata = {
  title: "Scholarships",
  description:
    "Major scholarships for international students in Germany — DAAD, Deutschlandstipendium, Erasmus+ and political/religious foundations, with amounts, eligibility and deadlines.",
};

export default function ScholarshipsPage() {
  return (
    <>
      <PageHero
        eyebrow={`💰 ${scholarships.length} funding options`}
        title="Scholarships in Germany"
        subtitle="Tuition is already free at public universities — but these scholarships can also cover your living costs, insurance and travel. Most are open to international students."
      />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <ScholarshipExplorer />

        <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
          ⚠️ Stipend amounts, deadlines and eligibility criteria are updated every year.
          Always confirm on the official scholarship website before applying.
        </div>

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          💡 <strong className="text-ink-900">Tip:</strong> The DAAD scholarship database lists{" "}
          <a
            href="https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-brand-600 hover:underline"
          >
            thousands of additional scholarships
          </a>{" "}
          filterable by country, subject and degree.
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/programs", label: "Find your programme" }}
        next={{ href: "/cities", label: "Choose a city" }}
      />
    </>
  );
}
