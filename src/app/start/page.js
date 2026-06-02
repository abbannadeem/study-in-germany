import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Start Here — Your Step-by-Step Journey",
  description:
    "New to studying in Germany? Follow this 9-step guided journey from picking a university to settling in.",
};

const steps = [
  {
    n: 1,
    icon: "🎓",
    title: "Pick a university",
    body: "Germany has ~400 tuition-free public universities. Use search & filters to find the right fit for your field and budget.",
    links: [
      { label: "Browse all 183 universities", href: "/universities" },
      { label: "Industries by state", href: "/industries" },
    ],
  },
  {
    n: 2,
    icon: "📖",
    title: "Find your programme",
    body: "Search 130+ English-taught Bachelor's and Master's programmes. Filter by field, degree and university.",
    links: [{ label: "Programs Finder", href: "/programs" }],
  },
  {
    n: 3,
    icon: "💰",
    title: "Check scholarships",
    body: "Tuition is free, but stipends help with living costs. DAAD, Deutschlandstipendium, Erasmus+ and 11 more.",
    links: [{ label: "All scholarships", href: "/scholarships" }],
  },
  {
    n: 4,
    icon: "🏙️",
    title: "Choose a city",
    body: "Cost of living varies hugely — from ~€800/month in Leipzig to ~€1,400 in Munich. Compare 37 student cities.",
    links: [
      { label: "Browse cities", href: "/cities" },
      { label: "Cost calculator", href: "/calculator" },
    ],
  },
  {
    n: 5,
    icon: "🧮",
    title: "Plan your budget",
    body: "Estimate your monthly + yearly cost in EUR or your home currency (PKR, INR, BDT, NPR, USD).",
    links: [{ label: "Open Cost Calculator", href: "/calculator" }],
  },
  {
    n: 6,
    icon: "📋",
    title: "Apply & get a visa",
    body: "Follow the 8-step visa process — choose course, get admission, blocked account, embassy appointment.",
    links: [
      { label: "Visa & Process", href: "/visa" },
      { label: "🇵🇰 Pakistan guide", href: "/guides/pakistan" },
      { label: "🇮🇳 India guide", href: "/guides/india" },
    ],
  },
  {
    n: 7,
    icon: "💳",
    title: "Open a blocked account",
    body: "Deposit ~€11,904 as proof of funds. Compare Expatrio, Fintiba, Coracle, Deutsche Bank, ICICI.",
    links: [{ label: "Compare providers", href: "/blocked-account" }],
  },
  {
    n: 8,
    icon: "🇩🇪",
    title: "Travel & settle in",
    body: "Anmeldung, tax ID, bank account, health insurance, dorm — everything you do in your first weeks.",
    links: [{ label: "Settle In guide", href: "/settle" }],
  },
  {
    n: 9,
    icon: "💼",
    title: "Work & build your career",
    body: "Part-time jobs (Amazon, DHL, Flink, kitchen, tutoring) and post-study career paths in German industry.",
    links: [
      { label: "Jobs & careers", href: "/jobs" },
      { label: "Industries by state", href: "/industries" },
    ],
  },
];

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="🚀 Start here"
        title="Your step-by-step journey"
        subtitle="New to studying in Germany? Follow these 9 steps in order — from picking a university all the way to your first job after graduation."
      />

      {/* Quick chooser at top */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="mb-2 text-sm font-semibold text-ink-900">
            💬 Got a specific question?
          </p>
          <p className="text-sm text-slate-600">
            Open the floating chat assistant (bottom-right 💬 button) — it can answer
            anything about tuition, jobs, the visa or settling in, and link you to the
            right page.
          </p>
        </div>
      </section>

      {/* The 9-step timeline */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="space-y-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-2xl">
                  {s.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 text-xs font-bold uppercase tracking-wide text-brand-600">
                    Step {s.n} of {steps.length}
                  </div>
                  <h2 className="text-lg font-bold text-ink-900">{s.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">{s.body}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:bg-brand-400"
                      >
                        {l.label} →
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="ml-6 mt-4 h-6 w-0.5 border-l-2 border-dashed border-slate-300" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-sm">
          <p className="text-2xl">🎉</p>
          <p className="mt-2 text-lg font-bold text-ink-900">
            That's the whole journey!
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Bookmark this page and come back to it whenever you're not sure what to do
            next.
          </p>
        </div>
      </section>
    </>
  );
}
