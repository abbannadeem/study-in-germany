import Link from "next/link";
import { universities } from "@/data/universities";
import { cities } from "@/data/cities";
import UniversityCard from "@/components/UniversityCard";
import CityCard from "@/components/CityCard";

const stats = [
  { value: "400+", label: "Public universities" },
  { value: "€0", label: "Tuition in most states" },
  { value: "2,000+", label: "English programmes" },
  { value: "18 mo", label: "Post-study stay" },
];

const features = [
  {
    href: "/universities",
    emoji: "🎓",
    title: "Universities",
    text: "Explore top tuition-free public universities, their programmes, fees and rankings.",
  },
  {
    href: "/programs",
    emoji: "📖",
    title: "Programs",
    text: "Search English-taught Bachelor's and Master's programmes by field.",
  },
  {
    href: "/cities",
    emoji: "🏙️",
    title: "Cities",
    text: "Compare student cities by cost of living, lifestyle and job opportunities.",
  },
  {
    href: "/industries",
    emoji: "🏭",
    title: "Industries",
    text: "Discover the key industries and top employers in each German state.",
  },
  {
    href: "/jobs",
    emoji: "💼",
    title: "Jobs",
    text: "Learn about working as a student, part-time rules and post-study careers.",
  },
  {
    href: "/visa",
    emoji: "📋",
    title: "Visa & Process",
    text: "Follow the full step-by-step student visa and application process.",
  },
];

export default function Home() {
  const topUnis = [...universities].sort((a, b) => a.worldRanking - b.worldRanking).slice(0, 6);
  const topCities = cities.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-german text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium ring-1 ring-white/20">
            🇩🇪 Your complete guide to studying in Germany
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            World-class education,{" "}
            <span className="text-brand-400">tuition-free</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-200">
            Everything you need to know about studying in Germany — universities,
            cities, part-time jobs, careers and the complete visa process, all in
            one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/start"
              className="rounded-lg bg-brand-500 px-7 py-3.5 text-lg font-bold text-ink-900 shadow-lg transition hover:bg-brand-400"
            >
              🚀 Start Here — Your Journey
            </Link>
            <Link
              href="/universities"
              className="rounded-lg bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
            >
              Or browse universities →
            </Link>
          </div>
          <p className="mt-3 text-sm text-slate-300">
            New here? The 9-step guided journey is the fastest way to know what to do next.
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

      {/* Feature cards */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-ink-900">
          Everything in one place
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-500">
          Browse curated, up-to-date information across four key areas.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
            >
              <div className="mb-3 text-4xl">{f.emoji}</div>
              <h3 className="mb-1 text-lg font-semibold text-ink-900 group-hover:text-brand-700">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500">{f.text}</p>
              <span className="mt-3 inline-block text-sm font-medium text-brand-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top universities */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-ink-900">Top universities</h2>
              <p className="mt-1 text-slate-500">Highest-ranked public universities in Germany.</p>
            </div>
            <Link href="/universities" className="hidden text-sm font-medium text-brand-600 hover:underline sm:block">
              View all {universities.length} →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topUnis.map((u) => (
              <UniversityCard key={u.slug} uni={u} />
            ))}
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/universities" className="text-sm font-medium text-brand-600 hover:underline">
              View all {universities.length} universities →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured cities */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-ink-900">Popular student cities</h2>
            <p className="mt-1 text-slate-500">Find the right city for your studies and budget.</p>
          </div>
          <Link href="/cities" className="hidden text-sm font-medium text-brand-600 hover:underline sm:block">
            View all {cities.length} →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topCities.map((c) => (
            <CityCard key={c.slug} city={c} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-german">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to start your journey?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">
            Understand each step — from choosing a course to getting your residence
            permit — with our complete visa and application guide.
          </p>
          <Link
            href="/visa"
            className="mt-6 inline-block rounded-lg bg-brand-500 px-6 py-3 font-semibold text-ink-900 shadow transition hover:bg-brand-400"
          >
            See the step-by-step process
          </Link>
        </div>
      </section>
    </>
  );
}
