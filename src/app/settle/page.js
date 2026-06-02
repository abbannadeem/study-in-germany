import Link from "next/link";
import { arrivalSteps } from "@/data/afterArrival";
import PageHero from "@/components/PageHero";
import JourneyNav from "@/components/JourneyNav";

export const metadata = {
  title: "Settle In — After You Arrive",
  description:
    "A practical guide to settling in Germany: applying for a dorm, address registration (Anmeldung), tax ID, opening a bank account and health insurance.",
};

export default function SettlePage() {
  return (
    <>
      <PageHero
        eyebrow="🇩🇪 After you arrive"
        title="Settle In: After You Arrive"
        subtitle="You've got your visa and landed in Germany — now set up your new life. Follow these practical steps in order, from finding a room to health insurance."
      />

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-6">
          {arrivalSteps.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-2xl">
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-brand-600">STEP {i + 1}</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
                      🕒 {s.when}
                    </span>
                  </div>
                  <h2 className="mt-1 text-xl font-bold text-ink-900">{s.title}</h2>
                  <p className="mt-1 text-slate-600">{s.summary}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 sm:pl-16">
                {s.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 text-brand-500">›</span>
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800 sm:ml-16">
                💡 <strong>Tip:</strong> {s.tip}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          Coming from outside the EU? Make sure you also convert your entry visa
          into a residence permit at the immigration office (Ausländerbehörde) —
          see the{" "}
          <Link href="/visa" className="font-medium text-brand-600 hover:underline">
            Visa &amp; Process
          </Link>{" "}
          guide for the full journey.
        </div>
      </section>

      <JourneyNav
        prev={{ href: "/blocked-account", label: "Open a blocked account" }}
        next={{ href: "/jobs", label: "Work & build your career" }}
      />
    </>
  );
}
