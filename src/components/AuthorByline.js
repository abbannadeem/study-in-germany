import Link from "next/link";

// Reusable author byline card — used at the bottom of blog posts and
// country guides to surface the real founder's credibility (E-E-A-T).
// Keeping the canonical author info in one place so JSON-LD and visual
// rendering stay in sync.

export const AUTHOR = {
  name: "Abban Nadeem",
  role: "Founder, Study in Germany Guide",
  bio: "Pakistani student at TU Ilmenau (Research in Computer & Systems Engineering, 2025). Writes from first-hand experience of the Lahore → Germany application journey, not theory.",
  url: "https://studyingermanyguide.com/about",
  image: "https://studyingermanyguide.com/founder/abban.jpg",
  sameAs: [
    "https://www.instagram.com/studyingermanyguide_",
    "https://www.tiktok.com/@studyingermanyguide_",
  ],
};

// Person-shaped JSON-LD object usable inside Article schema as author.
export const AUTHOR_JSONLD = {
  "@type": "Person",
  name: AUTHOR.name,
  jobTitle: AUTHOR.role,
  description: AUTHOR.bio,
  url: AUTHOR.url,
  image: AUTHOR.image,
  sameAs: AUTHOR.sameAs,
};

export default function AuthorByline({ date, readTime, compact = false }) {
  if (compact) {
    // Inline version for the article header strip
    return (
      <span className="inline-flex items-center gap-2">
        <img
          src={AUTHOR.image}
          alt={AUTHOR.name}
          className="h-6 w-6 rounded-full ring-1 ring-white/30"
        />
        <span>
          By{" "}
          <Link href="/about" className="font-semibold hover:underline">
            {AUTHOR.name}
          </Link>
        </span>
        {date && <span className="opacity-75">· {date}</span>}
        {readTime && <span className="opacity-75">· {readTime}</span>}
      </span>
    );
  }

  // Full bio card — used at the end of articles
  return (
    <div className="my-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col items-start gap-5 sm:flex-row">
        <img
          src={AUTHOR.image}
          alt={AUTHOR.name}
          className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-brand-100"
        />
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-700">
            About the author
          </p>
          <Link
            href="/about"
            className="mt-1 inline-block text-lg font-bold text-ink-900 hover:text-brand-700"
          >
            {AUTHOR.name}
          </Link>
          <p className="text-sm font-medium text-slate-500">{AUTHOR.role}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            {AUTHOR.bio}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <Link
              href="/about"
              className="font-semibold text-brand-700 hover:underline"
            >
              Full bio →
            </Link>
            <a
              href="https://wa.me/923021045296"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-700 hover:underline"
            >
              WhatsApp Abban →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
