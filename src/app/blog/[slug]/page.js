import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";
import NewsletterSignup from "@/components/NewsletterSignup";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

// Renders a single body section based on its type.
function Section({ section }) {
  switch (section.type) {
    case "h2":
      return (
        <h2 className="mt-10 mb-3 text-2xl font-bold text-ink-900">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-7 mb-2 text-xl font-semibold text-ink-900">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p className="mb-4 leading-relaxed text-slate-700">{section.text}</p>
      );
    case "ul":
      return (
        <ul className="mb-5 space-y-2">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-700">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-6 rounded-xl border border-brand-200 bg-brand-50 p-5">
          <p className="flex items-start gap-3 text-sm leading-relaxed text-ink-900">
            <span className="text-xl">{section.emoji}</span>
            <span>{section.text}</span>
          </p>
        </div>
      );
    case "quote":
      return (
        <blockquote className="my-6 border-l-4 border-brand-400 bg-slate-50 px-5 py-4 italic text-slate-700">
          {section.text}
        </blockquote>
      );
    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                {section.headers.map((h) => (
                  <th key={h} className="px-4 py-3">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {section.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(slug, 3);

  // JSON-LD Article schema for richer Google search results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://studyingermanyguide.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Study in Germany Guide",
      url: "https://studyingermanyguide.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://studyingermanyguide.com/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero with gradient cover */}
      <section
        className={`bg-gradient-to-br ${post.coverGradient} text-white`}
      >
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-16">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"
          >
            ← All articles
          </Link>
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-white/15 px-2.5 py-1 font-semibold ring-1 ring-white/20">
              {post.category}
            </span>
            <span className="text-white/80">⏱️ {post.readTime}</span>
            <span className="text-white/80">· {post.date}</span>
          </div>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            {post.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-3 text-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-lg">
              {post.coverEmoji}
            </div>
            <span className="text-white/80">By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="mx-auto max-w-3xl px-4 py-10">
        {post.body.map((section, i) => (
          <Section key={`${section.type}-${i}`} section={section} />
        ))}

        {/* Tags */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6">
          <span className="text-xs uppercase tracking-wide text-slate-500">Tags:</span>
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-8">
          <NewsletterSignup
            variant="compact"
            title="📚 Like this article? Get more in your inbox"
            description="Weekly Germany application tips, scholarship deadlines and visa updates. Free forever."
            cta="Subscribe"
          />
        </div>

        {/* Share / CTA */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6">
          <p className="text-2xl">🤝</p>
          <h3 className="mt-2 text-lg font-bold text-ink-900">
            Found this helpful?
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Share this article with friends who are applying to Germany. The more
            students we help, the bigger our community gets.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`Check out: ${post.title} https://studyingermanyguide.com/blog/${post.slug}`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
            >
              Share on WhatsApp
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://studyingermanyguide.com/blog/${slug}`)}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Share on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-ink-900">
              Related articles
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-md"
                >
                  <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
                    <span>{r.category}</span>
                    <span>·</span>
                    <span>⏱️ {r.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-ink-900 group-hover:text-brand-700">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
