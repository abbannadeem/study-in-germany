import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Service",
  description:
    "The terms under which you may use the Study in Germany website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="📜 Terms"
        title="Terms of Service"
        subtitle="Last updated: June 2026 — the rules for using this site. Plain English, no legal traps."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 text-slate-700">
        <div className="space-y-6 leading-relaxed">
          <p>
            By visiting <strong>study-in-germany.pages.dev</strong> ("the site",
            "we", "our"), you agree to these Terms of Service. If you don't
            agree, please don't use the site.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            1. What this site is
          </h2>
          <p>
            Study in Germany is an <strong>educational information platform</strong>{" "}
            for international students considering Germany for higher education.
            We provide guides on universities, scholarships, costs, the visa
            process, and settling in.
          </p>
          <p>
            We are <strong>not</strong> an official German government website,
            DAAD, a university, an immigration consultant, or a legal advisor.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            2. Information accuracy
          </h2>
          <p>
            We work hard to keep all information accurate and up to date, but:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>
              Tuition fees, scholarship amounts, visa rules, and blocked account
              minimums change frequently.
            </li>
            <li>
              Cost estimates (e.g., in our Calculator) are approximations, not
              guarantees.
            </li>
            <li>
              Currency exchange rates are illustrative — they fluctuate daily.
            </li>
          </ul>
          <p>
            <strong>
              Always verify important details on the official source
            </strong>{" "}
            (DAAD, university website, German embassy in your country) before
            making decisions.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            3. No professional advice
          </h2>
          <p>
            Content on this site is for general information only. It is{" "}
            <strong>not</strong>:
          </p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Legal advice (consult an immigration lawyer for that)</li>
            <li>Financial advice (consult a financial advisor for that)</li>
            <li>Official admission counselling (contact the university directly)</li>
            <li>Visa guidance (the German embassy is the authority)</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            4. Affiliate links & advertising
          </h2>
          <p>
            Some links on this site are affiliate links (clearly stated on
            relevant pages). When you click them and sign up, we may receive a
            small commission at no extra cost to you. This income helps keep the
            site free.
          </p>
          <p>
            We only recommend services we believe are legitimately useful for
            international students. However, you should still do your own
            research before signing up for any third-party service.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            5. Acceptable use
          </h2>
          <p>You agree NOT to:</p>
          <ul className="ml-5 list-disc space-y-2">
            <li>Copy our content for commercial use without permission.</li>
            <li>Attempt to hack, disrupt, or overload the site.</li>
            <li>
              Use automated tools to scrape large amounts of content.
            </li>
            <li>Misrepresent yourself or use the site for fraud.</li>
          </ul>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            6. Intellectual property
          </h2>
          <p>
            All original content (text, layouts, code) on this site is our
            property and is protected by copyright. You may share links to our
            articles freely, but please don't republish full articles without
            permission.
          </p>
          <p>
            University and city photos are sourced from Wikipedia / Wikimedia
            Commons under their respective licenses.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            7. Third-party content & links
          </h2>
          <p>
            We link to external sites (DAAD, universities, embassies, providers).
            We are not responsible for the content, accuracy, or practices of
            those external sites. Use them at your own discretion.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            8. No guarantees
          </h2>
          <p>
            Reading our content does not guarantee university admission, visa
            approval, scholarship selection, or any specific outcome. Your
            individual application depends on many factors beyond this site.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            9. Limitation of liability
          </h2>
          <p>
            To the maximum extent permitted by law, we are not liable for any
            direct, indirect, incidental, or consequential damages arising from
            your use of (or inability to use) this site or any decisions you make
            based on its content.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            10. Changes to these terms
          </h2>
          <p>
            We may update these terms occasionally. We'll post the new version
            here with an updated date. Continued use of the site after changes
            means you accept the updated terms.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-ink-900">
            11. Contact
          </h2>
          <p>
            Questions about these terms?{" "}
            <Link href="/about" className="text-brand-600 hover:underline">
              Contact us via the About page
            </Link>
            .
          </p>

          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5 text-sm">
            <p>
              🔒 See also our{" "}
              <Link href="/privacy" className="font-semibold text-brand-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
