import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blog";

export const metadata = {
  title: "Blog — Tips & Guides for Studying in Germany",
  description:
    "In-depth articles for international students applying to German universities — TUM application guides, DAAD scholarship tips, visa timelines, SOP writing and more.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow={`${blogPosts.length} in-depth articles`}
        title="Blog & Guides"
        subtitle="Detailed guides written for international students applying to German universities — from TUM applications to DAAD scholarships, visas, and writing winning SOPs."
      />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:border-brand-400"
            >
              {/* Cover */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-900/20" />
                <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-700">
                  {post.category}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-ink-900 group-hover:text-brand-700">
                  {post.title}
                </h2>

                <p className="mb-4 line-clamp-3 text-sm text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((t) => (
                    <span
                      key={`${post.slug}:${t}`}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <span className="mt-4 inline-block text-sm font-medium text-brand-600">
                  Read article
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
          <h3 className="text-lg font-bold text-ink-900">
            More articles coming weekly
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Bookmark this page or follow us on social media for new application
            guides, scholarship deadlines, and student success stories.
          </p>
        </div>
      </section>
    </>
  );
}
