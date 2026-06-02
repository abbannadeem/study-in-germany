import { industries } from "@/data/industries";
import IndustryCard from "@/components/IndustryCard";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Industries by State",
  description:
    "Explore the major industries and top employers of every German state — from automotive in Bavaria to chemicals in Rhineland-Palatinate and finance in Hesse.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow={`🏭 ${industries.length} federal states`}
        title="Industries by State"
        subtitle="Germany is Europe's largest economy, and each of its 16 states has its own industrial strengths. Knowing where the jobs are helps you choose the right place to study — and to build a career."
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="mb-4 text-sm text-slate-500">
          {industries.length} federal states · major industries and top employers
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <IndustryCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
