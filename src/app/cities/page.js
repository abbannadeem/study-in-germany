import { cities } from "@/data/cities";
import CityCard from "@/components/CityCard";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";

export const metadata = {
  title: "Cities",
  description:
    "Compare popular student cities in Germany by cost of living, lifestyle and job opportunities.",
};

export default function CitiesPage() {
  const sorted = [...cities].sort((a, b) => a.monthlyBudget - b.monthlyBudget);

  return (
    <>
      <PageHero
        eyebrow={`🏙️ ${cities.length} student cities`}
        title="Student Cities"
        subtitle="From affordable Leipzig to high-flying Munich — compare Germany's best student cities by cost of living, lifestyle and career prospects."
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <p className="mb-4 text-sm text-slate-500">
          {cities.length} cities · sorted from most affordable to most expensive
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((c) => (
            <CityCard key={c.slug} city={c} />
          ))}
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/scholarships", label: "Check scholarships" }}
        next={{ href: "/calculator", label: "Plan your budget" }}
      />
    </>
  );
}
