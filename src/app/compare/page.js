import PageHero from "@/components/PageHero";
import CompareUniversities from "@/components/CompareUniversities";

export const metadata = {
  title: "Compare Universities — Side-by-Side",
  description:
    "Compare up to 3 German universities side-by-side: ranking, fees, semester contribution, fields, programs and city.",
};

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="⚖️ Decision tool"
        title="Compare Universities"
        subtitle="Stuck between two options? Pick up to 3 German universities and see them side-by-side: rankings, fees, fields, and city info."
      />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <CompareUniversities />
      </section>
    </>
  );
}
