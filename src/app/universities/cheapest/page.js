import Link from "next/link";
import { universities } from "@/data/universities";
import PageHero from "@/components/PageHero";
import UniversityNextSteps from "@/components/UniversityNextSteps";
import { euro } from "@/lib/format";

export const metadata = {
  title: "Cheapest Universities in Germany",
  description:
    "Tuition-free public universities in Germany with the lowest total semester costs for international students. Compare semester fee, tuition and total annual cost.",
};

export default function CheapestUniversitiesPage() {
  // True "cheapest" = tuition free AND lowest semester contribution.
  // Filter out non-public arts schools that are tiny edge cases.
  const ranked = [...universities]
    .filter((u) => u.tuitionPerSemester === 0 && u.semesterFee > 0)
    .sort((a, b) => a.semesterFee - b.semesterFee)
    .slice(0, 25);

  const totalAnnual = (u) => u.tuitionPerSemester * 2 + u.semesterFee * 2;

  return (
    <>
      <PageHero
        eyebrow="💶 Cost ranking"
        title="Cheapest Universities in Germany"
        subtitle="The most affordable tuition-free public universities for international students — sorted by total semester contribution. All amounts in EUR, updated June 2026."
      />

      <section className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="text-xl font-bold text-emerald-900">
            All public universities in Germany are tuition-free
          </h2>
          <p className="mt-2 text-sm text-emerald-900">
            Except in Baden-Württemberg, where non-EU/EEA students pay €1,500
            per semester. Everywhere else, international students pay only the
            semester contribution (Semesterbeitrag) — which typically includes
            a regional public-transport ticket worth €100–200 alone. The
            universities below have the lowest combined annual cost.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="mb-4 text-2xl font-bold text-ink-900">
          Top 25 lowest-cost universities
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Rank</th>
                <th className="px-4 py-3">University</th>
                <th className="px-4 py-3">City</th>
                <th className="px-4 py-3 text-right">Semester fee</th>
                <th className="px-4 py-3 text-right">Total per year</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {ranked.map((u, i) => (
                <tr key={u.slug} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-mono text-slate-500">#{i + 1}</td>
                  <td className="px-4 py-3 font-semibold text-ink-900">{u.name}</td>
                  <td className="px-4 py-3 text-slate-600">{u.city}</td>
                  <td className="px-4 py-3 text-right text-slate-700">
                    {euro(u.semesterFee)}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-emerald-700">
                    {euro(totalAnnual(u))}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/universities/${u.slug}`}
                      className="rounded-md bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 hover:bg-brand-100"
                    >
                      Details →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Note: semester fees update periodically. Always confirm the current
          fee on the university&apos;s official site before applying.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12">
        <UniversityNextSteps uni={{ applyVia: null }} />
      </section>
    </>
  );
}
