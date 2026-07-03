import Link from "next/link";
import { universities } from "@/data/universities";
import { cities } from "@/data/cities";
import { ALL_PROGRAMS } from "@/lib/programs";

export const metadata = {
  title: "About Us — A Pakistani Student's Honest Guide to Germany",
  description:
    "Study in Germany Guide was built by a Pakistani student in Germany — a free, independent platform to help international students navigate German university applications, visas, and life in Germany. No agents. No fees. Honest information.",
};

const values = [
  {
    icon: "🎯",
    title: "Free & honest",
    text: "Everything is free to read. Affiliate links are marked clearly and we only recommend what we'd use ourselves.",
  },
  {
    icon: "🌍",
    title: "Built for everyone",
    text: "Pakistan, India, Bangladesh, Syria, UAE, Egypt — country-specific guides cover APS, embassy details, document chains, currencies. Generic study-abroad sites skip this. We don't.",
  },
  {
    icon: "📚",
    title: "Verified, not guessed",
    text: "Every number — fees, blocked account, deadlines — links to its official source. Updated June 2026. If something's wrong, we fix it in days.",
  },
  {
    icon: "🤝",
    title: "Written by someone who's been there",
    text: "I'm a Pakistani student in Germany right now. Every guide is what I wish I had when I was starting.",
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
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — personal, photo-led, honest
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img
            src="/cities/heidelberg.jpg"
            alt="Heidelberg, Germany"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink-900/92 via-ink-900/75 to-brand-900/60" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:py-20">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-bold uppercase tracking-wide ring-1 ring-white/25 backdrop-blur">
              🇩🇪 About
            </span>
            <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-400/40 backdrop-blur">
              ✓ Updated June 2026
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight drop-shadow-lg sm:text-5xl">
            Built by a Pakistani student in Germany — for students like you.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90 drop-shadow sm:text-xl">
            studyingermanyguide.com is the website I wish I had when I started
            applying. No agents, no fees, no fluff — just the honest path from
            wherever you are to studying in Germany.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FOUNDER STORY — real, specific, personal
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-[180px_1fr]">
            {/* Photo block */}
            <div className="bg-gradient-to-br from-brand-500 to-amber-600 p-6 sm:p-8">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-white shadow-xl ring-4 ring-white/40 sm:mx-0">
                <img
                  src="/founder/abban.jpg"
                  alt="Abban Nadeem, founder"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-wide text-white/80">
                  Founder
                </p>
                <p className="text-xl font-bold text-white">Abban Nadeem</p>
                <p className="text-sm text-white/85">
                  🇵🇰 Pakistan → 🇩🇪 Germany
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-brand-700">
                The honest story
              </p>
              <h2 className="mt-1 text-2xl font-bold text-ink-900">
                Hi, I&apos;m Abban 👋
              </h2>

              <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
                <p>
                  I&apos;m from Lahore. Before Germany, I was working as a data
                  analyst — comfortable job, predictable life. But I knew I
                  wanted to do a Master&apos;s in something more technical, and
                  Germany kept coming up: tuition-free, world-class engineering,
                  18-month work visa after graduation. The math made sense.
                </p>

                <p>
                  The application process almost broke me before it began.
                </p>

                <p>
                  Six different blog posts told me six different things about
                  the blocked account amount. Uni-assist&apos;s portal looked
                  like it was designed in 2008. The German embassy in Islamabad
                  gave one answer over the phone and a different one in person.
                  Every &quot;consultant&quot; in Lahore wanted Rs 50,000 to
                  tell me things that should have been free.
                </p>

                <p>
                  I started keeping notes — what really happens at each step,
                  the actual numbers, the real deadlines, what the embassy
                  actually asks. Just for me. Then a friend asked if she could
                  read them. Then her friend. Then a cousin in India who was
                  applying too.
                </p>

                <p>
                  In 2025 I landed in Ilmenau — a small university town in
                  Thuringia — to start the{" "}
                  <strong>Research in Computer &amp; Systems Engineering (RCSE)</strong>{" "}
                  Master&apos;s programme at{" "}
                  <strong>TU Ilmenau</strong>. The notes I had been keeping for
                  myself turned out to be more useful than I&apos;d expected. So
                  I rebuilt them as this website.
                </p>

                <p>
                  Today it&apos;s{" "}
                  <strong>{universities.length} universities</strong>,{" "}
                  <strong>{ALL_PROGRAMS.length}+ English programmes</strong>,{" "}
                  <strong>12 country-specific guides</strong>, a cost calculator
                  in your own currency, step-by-step visa walkthroughs, an
                  insurance comparison, and a blocked-account comparison so you
                  don&apos;t get scammed by your provider.
                </p>

                <p>
                  It&apos;s free. It will stay free. If I figure out how to make
                  enough from affiliates and small ads to pay for hosting and
                  my time — that&apos;s enough. I&apos;m not building a startup
                  to exit. I&apos;m building a resource so the next Pakistani,
                  Indian, Syrian, Vietnamese, Nigerian student doesn&apos;t
                  have to learn this the hard way.
                </p>

                <p className="font-medium text-ink-900">
                  If anything on this site is wrong or unclear, tell me. I read
                  every message.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-sm">
                <a
                  href="https://wa.me/923021045296?text=Hi%20Talha!%20Saw%20your%20site."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white transition hover:bg-emerald-600"
                >
                  💬 WhatsApp me
                </a>
                <a
                  href="mailto:studyingermanyguide@gmail.com"
                  className="rounded-lg border border-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  📧 Email
                </a>
                <a
                  href="https://instagram.com/studyingermanyguide_"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-200 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          WHO THIS IS FOR — direct, specific
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-ink-900">Who this is for</h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-600">
            If you're an international student trying to apply to a German public
            university — this site is built for you.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                ✓ This site WILL help you if…
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• You're from Pakistan, India, Bangladesh, Nepal, Sri Lanka, Vietnam, UAE, Saudi Arabia, Iran, Turkey, Egypt, Syria — or anywhere else</li>
                <li>• You want to apply to a public German university (tuition-free)</li>
                <li>• You're confused about visa, blocked account, APS, insurance, costs</li>
                <li>• You want honest info without paying a consultant Rs 50K+</li>
                <li>• You're researching your shortlist and need real comparison</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-rose-700">
                ✗ This site WON'T help you if…
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>• You want a paid agent to do your full application</li>
                <li>• You're applying to private universities with €15K+/year tuition</li>
                <li>• You want guaranteed admission (no one can guarantee this)</li>
                <li>• You're looking for a job/work visa (different track)</li>
                <li>• You want shortcuts that bypass the legal process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-brand-600 sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MISSION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
          The mission
        </p>
        <h2 className="mt-2 text-3xl font-bold text-ink-900 sm:text-4xl">
          Make the consultant industry unnecessary.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Information about studying in Germany shouldn't cost Rs 50,000 (or any
          amount). The honest version of "how to apply" should be free. So we
          made it free.
        </p>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          VALUES
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-ink-900">
            What we stand for
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:shadow-md"
              >
                <p className="text-2xl">{v.icon}</p>
                <h3 className="mt-3 font-semibold text-ink-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW WE MAKE MONEY — transparent, upfront
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-2xl font-bold text-ink-900">
          How we keep this free (honestly)
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          A website like this costs money to run — hosting, domains, time. So
          here's exactly how we cover it:
        </p>
        <ul className="mt-4 space-y-4 text-slate-700">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>
              <strong>Affiliate commissions</strong> — when you sign up for a
              recommended service (like a blocked account or insurance
              provider) via our link, the company pays us a small fee at no
              extra cost to you. All affiliate links are clearly marked.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>
              <strong>Optional 1-on-1 services</strong> — university shortlist,
              SOP review, visa interview prep. Only if you want personal help —
              free 10-min call first to make sure it's worth it.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>
              <strong>Small, non-intrusive ads</strong> on some pages. Never
              between you and the information you need.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
            <span>
              <strong>No paywalls. No "premium" tier. No locking students out
              of essential information.</strong> If we ever charge for the
              guides, this whole thing fails its purpose.
            </span>
          </li>
        </ul>
        <p className="mt-5 text-sm text-slate-500">
          Full disclosure in our{" "}
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

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CONTACT CTA — direct to founder
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gradient-to-br from-ink-900 to-slate-800">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Got a question? Just ask.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-200">
            I read every message personally — no bots, no canned replies. If
            something's wrong on the site, if a guide is missing, or if you just
            want to share your story — message me.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/923021045296"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
            >
              💬 WhatsApp
            </a>
            <Link
              href="/contact"
              className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-ink-900 shadow transition hover:bg-brand-400"
            >
              All contact methods
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
