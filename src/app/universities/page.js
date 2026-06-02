import UniversityExplorer from "@/components/UniversityExplorer";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";

export const metadata = {
  title: "Universities",
  description:
    "Browse top public universities in Germany — search and filter by state, field of study and tuition fees.",
};

export default function UniversitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="🎓 400+ public universities"
        title="Find your university"
        subtitle="Germany has over 400 public universities — most of them tuition-free. Search and filter to find the right fit for your field and budget."
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <UniversityExplorer />
      </section>

      <JourneyNav
        prev={{ href: "/start", label: "Start: Your Journey" }}
        next={{ href: "/programs", label: "Find your programme" }}
      />
    </>
  );
}
