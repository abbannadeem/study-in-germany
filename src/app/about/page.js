import Link from "next/link";
import { universities } from "@/data/universities";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { ALL_PROGRAMS } from "@/lib/programs";

export const metadata = {
  title: "About Us",
  description:
    "We are a Germany-based team helping international students get admission to tuition-free public universities — guiding you through the entire procedure, from course selection to settling in.",
};

const steps = [
  {
    icon: "🎯",
    title: "University & course selection",
    text: "We help you shortlist the right public universities and English-taught programmes for your field, grades and budget.",
  },
  {
    icon: "📝",
    title: "Application & admission",
    text: "Guidance on uni-assist, document preparation and submitting strong applications to get your admission letter.",
  },
  {
    icon: "🗣️",
    title: "Language & APS support",
    text: "Help with IELTS/TOEFL or TestDaF/DSH requirements and the APS certificate where it's needed.",
  },
  {
    icon: "💳",
    title: "Blocked account & visa",
    text: "Step-by-step support with the blocked account, health insurance and the German student visa application.",
  },
  {
    icon: "🏠",
    title: "Accommodation",
    text: "Assistance finding a dorm or shared flat (WG) before you arrive, so you land with a place to stay.",
  },
  {
    icon: "🇩🇪",
    title: "After you arrive",
    text: "On-the-ground help with Anmeldung, tax ID, bank account, insurance and your residence permit.",
  },
];

const reasons = [
  {
    title: "Based in Germany",
    text: "We're located in Germany, so we know the system first-hand and can support you even after you arrive.",
  },
  {
    title: "End-to-end guidance",
    text: "From your first shortlist to your residence permit — one team for the entire journey, nothing left to guesswork.",
  },
  {
    title: "Public universities focus",
    text: "We specialise in tuition-free public universities, so you get a world-class degree without huge tuition costs.",
  },
  {
    title: "Honest, up-to-date info",
    text: "Everything we share is researched and regularly updated — and we always point you to official sources.",
  },
];

export default function AboutPage() {
  const stats = [
    { value: `${universities.length}`, label: "Public universities" },
    { value: `${ALL_PROGRAMS.length}+`, label: "English programmes" },
    { value: `${cities.length}`, label: "Student cities" },
    { value: `${industries.length}`, label: "States covered" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-german text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium ring-1 ring-white/20">
            🇩🇪 Based in Germany
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            We help you get admission to Germany's public universities
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-200">
            We're a Germany-based team that guides international students through the
            entire journey — from choosing the right course to getting your
            residence permit — so you can study at a world-class, tuition-free
            public university with confidence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-brand-600">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-ink-900">Our mission</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          Studying in Germany is one of the best opportunities in the world — but the
          process can feel overwhelming from abroad. Our mission is to make it
          simple and transparent: clear information, the right choices, and hands-on
          support at every step, all the way until you're settled in your new home.
        </p>
      </section>

      {/* What we help with */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-ink-900">
            How we help — the full procedure
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-slate-500">
            We support you across every stage of getting admission and moving to
            Germany.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="mb-1 font-semibold text-ink-900">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-ink-900">Why students choose us</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl text-brand-500">✓</span>
              <div>
                <h3 className="mb-1 font-semibold text-ink-900">{r.title}</h3>
                <p className="text-sm text-slate-600">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-german">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to start your journey?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">
            Explore universities and programmes, understand the visa process, or ask
            our assistant anything — we're with you from your first question to your
            first day in Germany.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/universities"
              className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-ink-900 shadow transition hover:bg-brand-400"
            >
              Explore Universities
            </Link>
            <Link
              href="/visa"
              className="rounded-lg bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
            >
              See the Visa Process →
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-300">📍 Proudly based in Germany</p>
        </div>
      </section>
    </>
  );
}
