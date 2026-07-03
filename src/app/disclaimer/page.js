import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Disclaimer — Educational Resource, Not Official Consultancy",
  description:
    "Study in Germany Guide is an independent educational website. We are not an official visa consultancy, government agency, or accredited admissions service. All information is for educational purposes only.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="⚠️ Disclaimer"
        title="Important — please read"
        subtitle="Study in Germany Guide is an independent educational resource. We are not an official visa consultancy or government agency. Here's exactly what that means."
      />

      <section className="mx-auto max-w-3xl px-4 py-12">
        {/* Big notice */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 sm:p-8">
          <p className="text-base font-bold text-amber-900 sm:text-lg">
            ⚠️ We are NOT an official visa consultancy, government agency, or
            accredited admissions service.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-amber-900">
            All information on this site is provided for{" "}
            <strong>educational purposes only</strong>. We do our best to keep
            content accurate and up-to-date, but you must always verify critical
            information (visa rules, financial requirements, deadlines, document
            requirements) with the relevant official sources before making
            decisions.
          </p>
        </div>

        {/* What we are */}
        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-ink-900">What we are</h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              Study in Germany Guide (
              <Link href="/" className="font-medium text-brand-600 hover:underline">
                studyingermanyguide.com
              </Link>
              ) is an independent, educational website built and maintained by
              Abban Nadeem, a Pakistani student living in Germany. It is a
              compilation of research, personal experience, and publicly
              available information designed to help international students
              navigate the process of applying to German public universities.
            </p>
          </div>

          {/* What we are NOT */}
          <div>
            <h2 className="text-2xl font-bold text-ink-900">What we are NOT</h2>
            <ul className="mt-3 space-y-3 leading-relaxed text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>
                  <strong>Not a visa consultancy.</strong> We do not file, file
                  for, or guarantee approval of any visa application. Visa
                  decisions rest exclusively with the German embassy or
                  consulate handling your application.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>
                  <strong>Not a government agency.</strong> We have no
                  affiliation with the German Embassy, DAAD, uni-assist, any
                  university, or the German federal government.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>
                  <strong>Not an accredited education agent.</strong> We do not
                  process applications on behalf of universities. We have no
                  paid relationships with universities that would influence our
                  recommendations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>
                  <strong>Not a financial or legal advisor.</strong> Information
                  about blocked accounts, insurance, taxes, and immigration
                  status is provided for general guidance only. Consult a
                  qualified professional for personalised advice.
                </span>
              </li>
            </ul>
          </div>

          {/* Educational purpose */}
          <div>
            <h2 className="text-2xl font-bold text-ink-900">
              Information is for educational purposes only
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              Every guide, comparison, calculator and article on this site is
              intended to help you understand the application process. We do
              our best to keep facts accurate as of the publication date (shown
              on each article and as &quot;Updated June 2026&quot; sitewide), but:
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>
                  Visa fees, blocked account amounts, and document requirements
                  change frequently — always verify with the German embassy or
                  consulate before submitting.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>
                  University admission criteria are set by each university and
                  can change between intakes — always check the official
                  programme page.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>
                  Scholarship deadlines and eligibility change yearly — always
                  check the scholarship provider&apos;s official website.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>
                  Insurance and blocked account regulations are set by German
                  law and can change — confirm details with your provider.
                </span>
              </li>
            </ul>
          </div>

          {/* Verify with official sources */}
          <div>
            <h2 className="text-2xl font-bold text-ink-900">
              Always verify with official sources
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              For any major decision, cross-check the information on this site
              with these authoritative sources:
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>
                <strong>German Embassy / Consulate in your country</strong> — for
                visa rules, document requirements, processing times
              </li>
              <li>
                <strong>uni-assist.de</strong> — for university application
                process
              </li>
              <li>
                <strong>daad.de</strong> — for scholarship eligibility and
                university search
              </li>
              <li>
                <strong>study-in-germany.de</strong> — the official German
                government student information portal
              </li>
              <li>
                <strong>make-it-in-germany.com</strong> — official immigration
                and employment information
              </li>
              <li>
                <strong>The official website of your target university</strong> —
                for the most current admission criteria
              </li>
            </ul>
          </div>

          {/* Affiliate disclosure */}
          <div>
            <h2 className="text-2xl font-bold text-ink-900">
              Affiliate disclosure
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              Some links on this site (particularly to blocked-account providers
              like Expatrio, Fintiba, and Coracle, and insurance providers like
              DR-WALTER and Mawista) are affiliate links. If you sign up for
              their services through our links, we may receive a small
              commission at no extra cost to you. This does not influence our
              recommendations — we only feature providers we'd choose for
              ourselves. All affiliate relationships are disclosed clearly on
              the pages where they appear.
            </p>
          </div>

          {/* Limitation of liability */}
          <div>
            <h2 className="text-2xl font-bold text-ink-900">
              Limitation of liability
            </h2>
            <p className="mt-3 leading-relaxed text-slate-700">
              By using this site, you acknowledge that:
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>
                  Decisions you make based on information from this site are
                  your own responsibility.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>
                  We are not liable for visa rejections, application denials,
                  financial losses, or any other consequences resulting from
                  using information on this site.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                <span>
                  Third-party services (blocked accounts, insurance, language
                  schools, etc.) recommended on this site operate independently
                  — we are not responsible for their service quality or actions.
                </span>
              </li>
            </ul>
          </div>

          {/* Found a mistake */}
          <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-ink-900">
              Found something wrong? Tell us.
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              If you spot an inaccuracy, outdated information, or anything that
              could mislead a student, email us at{" "}
              <a
                href="mailto:studyingermanyguide@gmail.com"
                className="font-medium text-brand-700 hover:underline"
              >
                studyingermanyguide@gmail.com
              </a>{" "}
              or message{" "}
              <a
                href="https://wa.me/923021045296"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-brand-700 hover:underline"
              >
                +49 170 6963809 on WhatsApp
              </a>
              . We fix accurate reports within 24-48 hours.
            </p>
          </div>

          <p className="text-xs text-slate-500">
            Last updated: June 2026. See also our{" "}
            <Link href="/privacy" className="font-medium text-brand-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="font-medium text-brand-600 hover:underline">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
