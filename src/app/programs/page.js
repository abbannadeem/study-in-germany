import ProgramExplorer from "@/components/ProgramExplorer";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";
import { ALL_PROGRAMS } from "@/lib/programs";

export const metadata = {
  title: "Programs Finder",
  description:
    "Search English-taught study programmes in Germany — filter by degree (Bachelor/Master) and field of study, and find which university offers them.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow={`📖 ${ALL_PROGRAMS.length}+ English-taught programmes`}
        title="Programs Finder"
        subtitle="Browse English-taught programmes across Germany's top public universities. Filter by degree and field to find your course, then click through to the university."
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <ProgramExplorer />
      </section>

      <JourneyNav
        prev={{ href: "/universities", label: "Pick a university" }}
        next={{ href: "/scholarships", label: "Check scholarships" }}
      />
    </>
  );
}
