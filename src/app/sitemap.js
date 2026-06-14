import { universities } from "@/data/universities";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blog";
import { countries } from "@/data/countries";

const SITE = "https://studyingermanyguide.com";

export const dynamic = "force-static";

export default function sitemap() {
  const staticPages = [
    "",
    "/start",
    "/universities",
    "/programs",
    "/scholarships",
    "/cities",
    "/industries",
    "/jobs",
    "/calculator",
    "/compare",
    "/checklist",
    "/visa",
    "/blocked-account",
    "/insurance",
    "/settle",
    "/blog",
    "/services",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.8,
  }));

  const dynamicPages = [
    ...universities.map((u) => ({
      url: `${SITE}/universities/${u.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...cities.map((c) => ({
      url: `${SITE}/cities/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...industries.map((i) => ({
      url: `${SITE}/industries/${i.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    ...blogPosts.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
    ...countries.map((c) => ({
      url: `${SITE}/guides/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })),
  ];

  return [...staticPages, ...dynamicPages];
}
