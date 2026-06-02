import PageHero from "@/components/PageHero";
import CostCalculator from "@/components/CostCalculator";
import JourneyNav from "@/components/JourneyNav";

export const metadata = {
  title: "Cost of Living Calculator",
  description:
    "Estimate your monthly and yearly cost of studying in Germany — pick a city and lifestyle, view costs in EUR, PKR, INR, BDT or USD.",
};

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="🧮 Plan your budget"
        title="Cost of Living Calculator"
        subtitle="Pick a German city and a lifestyle to estimate your monthly and yearly costs — with conversion to your home currency."
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <CostCalculator />
      </section>

      <JourneyNav
        prev={{ href: "/cities", label: "Choose a city" }}
        next={{ href: "/visa", label: "Apply & get a visa" }}
      />
    </>
  );
}
