import PageHero from "@/components/PageHero";
import DocumentChecklist from "@/components/DocumentChecklist";

export const metadata = {
  title: "Application Checklist (Savable)",
  description:
    "A complete Pakistan-to-Germany application checklist with savable progress. Tick off items as you complete them — your progress is saved in your browser.",
};

export default function ChecklistPage() {
  return (
    <>
      <PageHero
        eyebrow="✅ Track your progress"
        title="Pakistan → Germany Application Checklist"
        subtitle="56 steps from research to your first weeks in Germany. Tick off each item as you complete it — your progress is automatically saved in this browser, so you can come back any time."
      />
      <section className="mx-auto max-w-4xl px-4 py-10">
        <DocumentChecklist />
      </section>
    </>
  );
}
