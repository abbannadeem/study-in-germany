import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Our privacy policy explains what information we collect, how we use it, and your rights.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="🔒 Privacy"
        title="Privacy Policy"
        subtitle="Last updated: June 2026 — we keep this simple. Here's exactly what we do (and don't do) with your data."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 text-slate-700">
        <div className="prose-content space-y-6 leading-relaxed">
          <p>
            This Privacy Policy explains how Study in Germany ("we", "our", or
            "the site") collects, uses, and protects your information when you
            visit{" "}
            <strong>study-in-germany.pages.dev</strong> or any related pages.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            1. What we collect
          </h2>
          <p>
            We deliberately collect very little. Specifically:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Anonymous analytics:</strong> page views, country (general),
              browser type, and how you found us — through Vercel Analytics and
              (optionally) Google Analytics. We do not link this data to your
              identity.
            </li>
            <li>
              <strong>Local browser storage:</strong> your selected country (e.g.,
              Pakistan) so the site can personalise content. This stays on{" "}
              <em>your</em> device and is not sent to our servers.
            </li>
            <li>
              <strong>Email (only if you subscribe):</strong> if you sign up for
              our newsletter, we store your email address only for sending you
              updates.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            2. What we do NOT collect
          </h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>We do not require accounts or logins.</li>
            <li>We do not sell your data to third parties.</li>
            <li>We do not track you across other websites.</li>
            <li>
              We do not collect sensitive information (passport numbers, financial
              details, etc.).
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            3. Cookies & tracking
          </h2>
          <p>
            We use minimal cookies — only for analytics (so we know which pages
            help readers) and for remembering your country preference. You can
            clear these any time from your browser settings.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            4. Affiliate links
          </h2>
          <p>
            Some links on this site (especially on the{" "}
            <Link href="/blocked-account" className="text-brand-600 hover:underline">
              blocked account
            </Link>{" "}
            page and within blog articles) are affiliate links. If you sign up
            through them, we may receive a small commission at no extra cost to
            you. We only recommend services we genuinely consider useful for
            international students. This helps us keep the site free.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            5. Third-party services
          </h2>
          <p>
            We use the following third-party services that may collect their own
            anonymous data:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Vercel</strong> — hosts the site and provides anonymous
              analytics.
            </li>
            <li>
              <strong>Google Analytics</strong> (if enabled) — page-level
              analytics.
            </li>
            <li>
              <strong>External links</strong> — when you click out to DAAD,
              Expatrio, university websites, etc., their privacy policies apply.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            6. Your rights
          </h2>
          <p>You always have the right to:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Clear your local browser data at any time.</li>
            <li>Unsubscribe from any emails you receive from us.</li>
            <li>
              Contact us to request information about what (if anything) we
              store related to you.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            7. Children
          </h2>
          <p>
            Our site is intended for students aged 17 and above who are exploring
            higher education in Germany. We do not knowingly collect information
            from anyone under 13.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            8. Changes to this policy
          </h2>
          <p>
            We may update this policy occasionally. We will post the new version
            here with the updated date. Continued use of the site after changes
            means you accept the updated policy.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            9. Contact
          </h2>
          <p>
            Questions about privacy or your data?{" "}
            <Link href="/about" className="text-brand-600 hover:underline">
              Get in touch via our About page
            </Link>
            .
          </p>

          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
            <p>
              📜 See also our{" "}
              <Link href="/terms" className="font-semibold text-brand-600 hover:underline">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
