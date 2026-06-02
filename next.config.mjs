/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — ideal for Cloudflare Pages, Netlify static, GitHub
  // Pages and any plain static host. Generates the production site into /out.
  output: "export",

  // Plain <img> tags are used everywhere; disable Next.js image optimisation
  // (it can't run on a fully-static host).
  images: { unoptimized: true },

  // Cosmetic — adds the trailing slash for better static host routing.
  trailingSlash: true,
};

export default nextConfig;
