import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy — Study in Germany Guide",
  description:
    "Our privacy policy explains exactly what information we collect, how we use it, our use of cookies and analytics, and your rights. Last updated June 2026.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="🔒 Privacy"
        title="Privacy Policy"
        subtitle="Last updated: June 2026 — kept simple and honest. Here's exactly what we do (and don't do) with your data."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 text-slate-700">
        <div className="space-y-6 leading-relaxed">
          <p>
            This Privacy Policy explains how Study in Germany Guide
            (&quot;we&quot;, &quot;our&quot;, or &quot;the site&quot;) collects,
            uses, and protects your information when you visit{" "}
            <strong>studyingermanyguide.com</strong> or any related pages.
          </p>

          {/* Short summary box */}
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 p-5">
            <p className="font-bold text-emerald-900">
              ✅ The 30-second version
            </p>
            <ul className="mt-2 space-y-1 text-sm text-emerald-900">
              <li>• We do NOT collect any sensitive personal data.</li>
              <li>• We do NOT require accounts, logins, or registration.</li>
              <li>• We do NOT sell your data to anyone, ever.</li>
              <li>• We use anonymous analytics to know which pages help readers.</li>
              <li>• We use minimal cookies for analytics and your country preference.</li>
              <li>• Your email (if you subscribe) is used only to send you guides.</li>
            </ul>
          </div>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            1. What we collect
          </h2>
          <p>We deliberately collect very little. Specifically:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Anonymous analytics:</strong> page views, your country
              (general — not city-level), browser type, device type, and how you
              found us (search engine, social, direct). This is processed via
              Google Analytics 4 and Vercel Analytics. None of this is linked
              to your identity.
            </li>
            <li>
              <strong>Local browser storage (localStorage):</strong> your
              selected country (e.g., Pakistan) so the site can personalise
              content, and a flag if you&apos;ve already seen our country
              picker. This data stays on <em>your</em> device — it is not sent
              to our servers.
            </li>
            <li>
              <strong>Email address (only if you subscribe):</strong> if you
              sign up for our newsletter via Formspree, we store only your
              email address for the purpose of sending you guides and updates.
              You can unsubscribe at any time.
            </li>
            <li>
              <strong>Form submissions (if you contact us):</strong> if you
              email us or submit a form, we receive your message and email
              address — used only to reply to you.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            2. What we explicitly do NOT collect
          </h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>No sensitive personal data.</strong> We do not collect
              passport numbers, ID numbers, financial details, visa application
              details, or any other sensitive information.
            </li>
            <li>
              <strong>No account information.</strong> We do not require
              accounts, logins, or registration.
            </li>
            <li>
              <strong>No cross-site tracking.</strong> We do not track you
              across other websites or build advertising profiles.
            </li>
            <li>
              <strong>No data sale.</strong> We do not sell, rent, or transfer
              your data to third parties for marketing purposes.
            </li>
            <li>
              <strong>No precise location data.</strong> We see your country
              (anonymously) but not your exact location.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            3. Cookies & similar technologies
          </h2>
          <p>
            We use a minimal set of cookies and similar storage technologies to
            run the site:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Essential / functional cookies:</strong> these are
              technically necessary for the site to function (e.g., remembering
              you&apos;ve dismissed the country picker, storing your saved
              checklist progress). No consent required.
            </li>
            <li>
              <strong>Analytics cookies:</strong> Google Analytics 4 sets
              cookies (typically prefixed <code>_ga</code> and{" "}
              <code>_gid</code>) to count page visits anonymously. These help
              us understand which guides help students most.
            </li>
            <li>
              <strong>Advertising cookies (future):</strong> if and when we
              activate Google AdSense, ads displayed may use cookies to serve
              non-personalised or personalised ads. You can opt out of
              personalised advertising at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-600 hover:underline"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              <strong>localStorage:</strong> we use browser localStorage to
              save your country preference and your application checklist
              progress. This is stored only on your device — never sent to us.
            </li>
          </ul>
          <p className="mt-4">
            You can clear cookies and localStorage at any time from your
            browser settings. You can also use private/incognito mode to avoid
            them entirely.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            4. Google Analytics
          </h2>
          <p>
            We use Google Analytics 4 (GA4) to understand how visitors use the
            site so we can improve the content. GA4 collects anonymous usage
            data including page views, time on page, country, and the source
            that brought you to the site (e.g., Google search, Instagram). This
            data is aggregated and does not identify individual visitors.
          </p>
          <p className="mt-3">
            You can opt out of Google Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-600 hover:underline"
            >
              official Google Analytics opt-out browser add-on
            </a>
            .
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            5. Google AdSense (when active)
          </h2>
          <p>
            We may display ads from Google AdSense or similar networks. When
            this is active:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Google and its partners use cookies to serve ads based on your
              prior visits to this site and other sites.
            </li>
            <li>
              You can opt out of personalised advertising at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-600 hover:underline"
              >
                google.com/settings/ads
              </a>
              .
            </li>
            <li>
              For more information about how Google uses data, see{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-600 hover:underline"
              >
                Google&apos;s policies
              </a>
              .
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            6. Affiliate links
          </h2>
          <p>
            Some links on this site (especially on the{" "}
            <Link href="/blocked-account" className="font-medium text-brand-600 hover:underline">
              blocked account
            </Link>
            ,{" "}
            <Link href="/insurance" className="font-medium text-brand-600 hover:underline">
              insurance
            </Link>{" "}
            and within blog articles) are affiliate links. If you click them and
            sign up for the service, we may receive a small commission at no
            extra cost to you. The merchant&apos;s privacy policy applies once
            you visit their site. We only recommend services we genuinely
            consider useful for international students. This helps us keep the
            site free.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            7. Third-party services we use
          </h2>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Vercel</strong> — hosts the site and provides anonymous
              performance + analytics data.
            </li>
            <li>
              <strong>Google Analytics 4</strong> — anonymous visitor
              analytics.
            </li>
            <li>
              <strong>Formspree</strong> — processes newsletter signups and
              contact form submissions. Stores only the email + message you
              submit.
            </li>
            <li>
              <strong>External links</strong> — when you click out to DAAD,
              Expatrio, university websites, or any other third-party site,
              their privacy policy applies, not ours.
            </li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            8. Your rights (GDPR + global)
          </h2>
          <p>You always have the right to:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Access:</strong> know what data (if any) we have about
              you.
            </li>
            <li>
              <strong>Rectification:</strong> correct any inaccurate data.
            </li>
            <li>
              <strong>Erasure:</strong> request deletion of your email from our
              newsletter list.
            </li>
            <li>
              <strong>Object:</strong> opt out of analytics tracking using the
              tools mentioned above.
            </li>
            <li>
              <strong>Withdraw consent:</strong> unsubscribe from emails at any
              time.
            </li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, email{" "}
            <a
              href="mailto:studyingermanyguide@gmail.com"
              className="font-medium text-brand-600 hover:underline"
            >
              studyingermanyguide@gmail.com
            </a>
            .
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">9. Children</h2>
          <p>
            Our site is intended for students aged 17 and above who are
            exploring higher education in Germany. We do not knowingly collect
            information from anyone under 13. If you believe a child under 13
            has used the site, please contact us so we can remove any data.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            10. Data storage and security
          </h2>
          <p>
            We store newsletter emails via Formspree. Analytics data is stored
            by Google and Vercel under their respective privacy policies. We
            take reasonable measures to protect any data we receive (HTTPS,
            access controls), but no online transmission is 100% secure.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            11. Changes to this policy
          </h2>
          <p>
            We may update this policy occasionally. We will post the new
            version here with the updated date. Continued use of the site after
            changes means you accept the updated policy. Last updated:{" "}
            <strong>June 2026</strong>.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">12. Contact</h2>
          <p>
            Questions about this Privacy Policy or your data? Email{" "}
            <a
              href="mailto:studyingermanyguide@gmail.com"
              className="font-medium text-brand-600 hover:underline"
            >
              studyingermanyguide@gmail.com
            </a>
            .
          </p>

          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
            <p>
              📜 See also our{" "}
              <Link
                href="/terms"
                className="font-semibold text-brand-600 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/disclaimer"
                className="font-semibold text-brand-600 hover:underline"
              >
                Disclaimer
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
