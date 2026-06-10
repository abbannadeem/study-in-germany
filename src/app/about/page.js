import Link from "next/link";
import PageHero from "@/components/PageHero";
import { universities } from "@/data/universities";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { ALL_PROGRAMS } from "@/lib/programs";

export const metadata = {
  title: "About Us",
  description:
    "Study in Germany Guide is a free, independent platform built to help international students navigate German university applications, visas, and life in Germany.",
};

const values = [
  {
    icon: "🎯",
    title: "Free & honest",
    text: "Everything is free to read. We mark affiliate links clearly and only recommend what we'd recommend to a friend.",
  },
  {
    icon: "🌍",
    title: "Truly global",
    text: "Generic study-abroad sites skip country-specific details. We cover APS, embassy specifics, document chains and currency conversion for every region.",
  },
  {
    icon: "📚",
    title: "Research-backed",
    text: "Every number — fees, blocked account, deadlines — links to its official source so you can verify.",
  },
  {
    icon: "🤝",
    title: "Community-driven",
    text: "We update the site based on questions from real students applying right now, not from theory.",
  },
];

export default function AboutPage() {
  const stats = [
    { value: `${universities.length}`, label: "Universities covered" },
    { value: `${ALL_PROGRAMS.length}+`, label: "English programmes" },
    { value: `${cities.length}`, label: "Student cities" },
    { value: "12", label: "Country guides" },
  ];

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Why this site exists"
        subtitle="When I applied, I wasted 6 weeks on outdated info. This guide gives international students the truth about tuition-free German degrees, real deadlines, and real costs — updated every month."
      />

      {/* Founder note */}
      <section className="mx-auto max-w-3xl px-4 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
            {/* Photo placeholder — replace src with your real photo */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-amber-600 text-3xl font-bold text-white shadow-md">
              TA
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                A note from the founder
              </p>
              <h2 className="mt-1 text-2xl font-bold text-ink-900">
                Hi, I'm Talha
              </h2>
              <p className="mt-3 text-slate-700">
                I am Talha, an international student who applied to German universities.
                Like you, I was drowning in confusion — information was either too
                general ("you'll need a blocked account") or buried in 50-page German
                government PDFs.
              </p>
              <p className="mt-3 text-slate-700">
                So I started writing it down — step by step, in plain English,
                with real numbers and timelines. That side project became this
                site. Today it covers{" "}
                <strong>{universities.length} German public universities</strong>,{" "}
                <strong>{ALL_PROGRAMS.length}+ English programmes</strong>, twelve
                country guides, a cost calculator with multi-currency conversion,
                and detailed visa and scholarship walk-throughs.
              </p>
              <p className="mt-3 text-slate-700">
                It's still free. It always will be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-brand-600">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-3xl px-4 py-14 text-center">
        <h2 className="text-3xl font-bold text-ink-900">Our mission</h2>
        <p className="mx-auto mt-4 text-lg leading-relaxed text-slate-600">
          Make the German education-consultant industry unnecessary by giving
          international students the truth for free.
        </p>
      </section>

      {/* Values */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-ink-900">What we stand for</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold text-ink-900">{v.title}</h3>
                <p className="text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we make money */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-2xl font-bold text-ink-900">How we keep this free</h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          We don't charge readers and we never will. To pay for hosting and our
          time, we use:
        </p>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>
              <strong>Affiliate commissions</strong> — when you sign up for a
              service we recommend (like a blocked account provider) via our
              link, the company pays us a small fee at no extra cost to you.
              These links are clearly marked.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>
              <strong>Advertising</strong> — minimal, non-intrusive ads on some
              pages.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>
              <strong>No paywalls.</strong> No "premium tier". No locking
              students out of information they need.
            </span>
          </li>
        </ul>
        <p className="mt-5 text-sm text-slate-500">
          Read more in our{" "}
          <Link href="/privacy" className="font-medium text-brand-600 hover:underline">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="font-medium text-brand-600 hover:underline">
            Terms of Service
          </Link>
          .
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-ink-900 to-slate-800">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Have a question? Get in touch.</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">
            We read every message. If you spot incorrect information, want a
            specific guide added, or just want to share your experience —
            reach out.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-brand-500 px-6 py-3 font-semibold text-ink-900 shadow transition-all duration-200 hover:bg-brand-400"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
