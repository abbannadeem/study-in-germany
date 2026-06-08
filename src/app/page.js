import Link from "next/link";
import { universities } from "@/data/universities";
import { cities } from "@/data/cities";
import { testimonials } from "@/data/testimonials";
import UniversityCard from "@/components/UniversityCard";
import CityCard from "@/components/CityCard";
import NewsletterSignup from "@/components/NewsletterSignup";

const stats = [
  { value: "400+", label: "Public universities" },
  { value: "€0", label: "Tuition in most states" },
  { value: "2,000+", label: "English programmes" },
  { value: "18 mo", label: "Post-study stay" },
];

// Iconic Germany landmarks for the "Discover Germany" gallery
const landmarks = [
  { slug: "berlin", name: "Brandenburg Gate", city: "Berlin", emoji: "🏛️" },
  { slug: "munich", name: "Marienplatz", city: "Munich", emoji: "🍺" },
  { slug: "cologne", name: "Cologne Cathedral", city: "Cologne", emoji: "⛪" },
  { slug: "hamburg", name: "Elbphilharmonie", city: "Hamburg", emoji: "🎵" },
  { slug: "heidelberg", name: "Heidelberg Castle", city: "Heidelberg", emoji: "🏰" },
  { slug: "dresden", name: "Frauenkirche", city: "Dresden", emoji: "⛪" },
  { slug: "frankfurt", name: "Römer", city: "Frankfurt", emoji: "🏦" },
  { slug: "aachen", name: "Aachen Cathedral", city: "Aachen", emoji: "👑" },
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
    href: "/scholarships",
    emoji: "💰",
    title: "Scholarships",
    text: "DAAD, Deutschlandstipendium, Erasmus+ and 11 more — find funding.",
  },
  {
    href: "/cities",
    emoji: "🏙️",
    title: "Cities",
    text: "Compare student cities by cost of living, lifestyle and job opportunities.",
  },
  {
    href: "/calculator",
    emoji: "🧮",
    title: "Cost Calculator",
    text: "Estimate monthly + yearly costs in EUR, PKR, INR, BDT or USD.",
  },
  {
    href: "/visa",
    emoji: "📋",
    title: "Visa & Process",
    text: "Follow the full step-by-step student visa and application process.",
  },
  {
    href: "/blog",
    emoji: "📚",
    title: "Blog & Guides",
    text: "In-depth articles: TUM application, DAAD scholarship, SOP writing.",
  },
  {
    href: "/guides/pakistan",
    emoji: "🇵🇰",
    title: "Country guides",
    text: "Pakistan, India, Bangladesh — APS, embassy, country-specific tips.",
  },
];

export default function Home() {
  const topUnis = [...universities].sort((a, b) => a.worldRanking - b.worldRanking).slice(0, 6);
  const topCities = cities.slice(0, 3);

  return (
    <>
      {/* Hero — with real Germany photo background */}
      <section className="relative overflow-hidden text-white">
        {/* Background photo (Brandenburg Gate) */}
        <div className="absolute inset-0">
          <img
            src="/cities/berlin.jpg"
            alt="Berlin Brandenburg Gate"
            className="h-full w-full object-cover"
          />
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/95 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:py-28">
          <span className="mb-5 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium ring-1 ring-white/30 backdrop-blur">
            🇩🇪 Your complete guide to studying in Germany
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight drop-shadow-lg sm:text-6xl">
            World-class education,{" "}
            <span className="text-brand-400">tuition-free</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow sm:text-xl">
            Everything you need to know about studying in Germany — universities,
            cities, jobs, scholarships and the complete visa process, all in one
            place.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/start"
              className="rounded-lg bg-brand-500 px-7 py-3.5 text-lg font-bold text-ink-900 shadow-xl transition hover:scale-105 hover:bg-brand-400"
            >
              🚀 Start Here — Your Journey
            </Link>
            <Link
              href="/universities"
              className="rounded-lg bg-white/15 px-6 py-3 font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/25"
            >
              Or browse universities →
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/80 drop-shadow">
            New here? The 9-step guided journey is the fastest way to know what to do next.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-brand-600">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Discover Germany — Photo gallery */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="mb-2 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
              🇩🇪 Discover Germany
            </span>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">
              Study where history meets innovation
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              From medieval castles to modern tech hubs — Germany's 37 student
              cities offer some of Europe's most iconic places to live and study.
            </p>
          </div>

          {/* Photo grid — bento style */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {landmarks.map((l, i) => (
              <Link
                key={l.slug}
                href={`/cities/${l.slug}`}
                className={`group relative overflow-hidden rounded-xl shadow-md transition-all hover:-translate-y-1 hover:shadow-xl ${
                  i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={`/cities/${l.slug}.jpg`}
                  alt={`${l.name}, ${l.city}`}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    i === 0 ? "h-full min-h-[320px]" : "h-44 sm:h-52"
                  }`}
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <p className="text-xs font-medium text-white/80 sm:text-sm">
                    {l.emoji} {l.city}
                  </p>
                  <p className={`font-bold text-white drop-shadow ${i === 0 ? "text-xl sm:text-2xl" : "text-sm sm:text-base"}`}>
                    {l.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/cities"
              className="inline-block rounded-lg bg-ink-900 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-ink-700"
            >
              Explore all 37 cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-ink-900 sm:text-4xl">
          Everything in one place
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
          Browse curated, up-to-date information across all the topics that matter
          for your application.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* Services CTA — paid 1-on-1 help (primary income source) */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-400 to-brand-500 p-8 shadow-xl sm:p-12">
          <div className="grid items-center gap-8 sm:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-block rounded-full bg-ink-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-400">
                🤝 1-on-1 Services
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-ink-900 sm:text-4xl">
                Need personal help?
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-900/80">
                The free guide gets you 80% there. For the rest — university shortlist, SOP review, visa interview prep — get 1-on-1 help from a real Pakistani student already in Germany.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm text-ink-900/80">
                <span className="rounded-full bg-white/40 px-3 py-1">✓ Honest pricing</span>
                <span className="rounded-full bg-white/40 px-3 py-1">✓ Free 10-min call first</span>
                <span className="rounded-full bg-white/40 px-3 py-1">✓ Refund guarantee</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-lg bg-ink-900 px-6 py-3 font-bold text-white transition hover:bg-ink-800"
                >
                  See all services →
                </Link>
                <a
                  href="https://wa.me/491706963809?text=Hi! I want to discuss services."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-emerald-500 px-6 py-3 font-bold text-white transition hover:bg-emerald-600"
                >
                  💬 WhatsApp now
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-2xl">🎯</p>
                <p className="mt-2 font-bold text-ink-900">University shortlist</p>
                <p className="text-sm text-slate-600">Rs 2,000 · 30 min</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-md ring-2 ring-ink-900/20">
                <p className="text-2xl">✍️</p>
                <p className="mt-2 font-bold text-ink-900">SOP review <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] text-white">POPULAR</span></p>
                <p className="text-sm text-slate-600">Rs 3,000 · 1-2 days</p>
              </div>
              <div className="rounded-xl bg-white/90 p-4 shadow-sm">
                <p className="text-2xl">🎤</p>
                <p className="mt-2 font-bold text-ink-900">Visa interview prep</p>
                <p className="text-sm text-slate-600">Rs 5,000 · 1 hour</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead magnet — Free PDF + Newsletter signup */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <NewsletterSignup />
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <span className="mb-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              💬 Reader stories
            </span>
            <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">
              From students who made it to Germany
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              These are representative experiences from South Asian students who
              used the site to plan their move.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name + t.university}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Quote */}
                <p className="text-sm leading-relaxed text-slate-700">
                  <span className="text-2xl text-brand-400">"</span>
                  {t.quote}
                  <span className="text-2xl text-brand-400">"</span>
                </p>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-sm font-bold text-white`}
                  >
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink-900">
                      {t.flag} {t.name}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {t.program}
                    </p>
                    <p className="truncate text-xs text-slate-500">
                      {t.university}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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

      {/* CTA — with photo background */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/cities/heidelberg.jpg"
            alt="Heidelberg Castle"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/95 via-ink-900/80 to-ink-900/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold drop-shadow-lg sm:text-4xl">
            Ready to start your journey?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 drop-shadow">
            Understand each step — from choosing a course to getting your residence
            permit — with our complete visa and application guide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/start"
              className="rounded-lg bg-brand-500 px-7 py-3.5 text-lg font-bold text-ink-900 shadow-xl transition hover:scale-105 hover:bg-brand-400"
            >
              🚀 Start Your Journey
            </Link>
            <Link
              href="/visa"
              className="rounded-lg bg-white/15 px-6 py-3 font-semibold text-white ring-1 ring-white/40 backdrop-blur transition hover:bg-white/25"
            >
              See visa process →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
