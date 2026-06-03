import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-ink-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="mb-3 flex items-center gap-2 font-bold text-white">
            <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded">
              <span className="h-full w-1/3 bg-black" />
              <span className="h-full w-1/3 bg-red-600" />
              <span className="h-full w-1/3 bg-brand-400" />
            </span>
            Study in Germany
          </div>
          <p className="text-sm text-slate-400">
            Your complete guide to studying in Germany — universities, cities,
            jobs and the visa process, all in one place.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/start" className="text-brand-400 hover:text-brand-300">🚀 Start Here</Link></li>
            <li><Link href="/universities" className="hover:text-brand-400">Universities</Link></li>
            <li><Link href="/programs" className="hover:text-brand-400">Programs</Link></li>
            <li><Link href="/scholarships" className="hover:text-brand-400">Scholarships</Link></li>
            <li><Link href="/blog" className="hover:text-brand-400">Blog &amp; Guides</Link></li>
            <li><Link href="/cities" className="hover:text-brand-400">Cities</Link></li>
            <li><Link href="/industries" className="hover:text-brand-400">Industries</Link></li>
            <li><Link href="/jobs" className="hover:text-brand-400">Jobs</Link></li>
            <li><Link href="/calculator" className="hover:text-brand-400">Cost Calculator</Link></li>
            <li><Link href="/visa" className="hover:text-brand-400">Visa & Process</Link></li>
            <li><Link href="/blocked-account" className="hover:text-brand-400">Blocked Account</Link></li>
            <li><Link href="/settle" className="hover:text-brand-400">Settle In</Link></li>
            <li><Link href="/guides/pakistan" className="hover:text-brand-400">🇵🇰 Pakistan guide</Link></li>
            <li><Link href="/guides/india" className="hover:text-brand-400">🇮🇳 India guide</Link></li>
            <li><Link href="/about" className="hover:text-brand-400">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Official resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.daad.de/en/" target="_blank" rel="noreferrer" className="hover:text-brand-400">DAAD</a></li>
            <li><a href="https://www.make-it-in-germany.com/en/" target="_blank" rel="noreferrer" className="hover:text-brand-400">Make it in Germany</a></li>
            <li><a href="https://www2.daad.de/deutschland/studienangebote/international-programmes/en/" target="_blank" rel="noreferrer" className="hover:text-brand-400">English programmes</a></li>
            <li><a href="https://www.study-in-germany.de/en/" target="_blank" rel="noreferrer" className="hover:text-brand-400">Study in Germany (gov)</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Good to know</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Tuition-free public universities</li>
            <li>Thousands of English programmes</li>
            <li>Work while you study</li>
            <li>18-month post-study stay</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <p className="mx-auto max-w-6xl text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Study in Germany. Educational guide only —
          figures and rules change, so always verify with official sources before
          making decisions.
        </p>
      </div>
    </footer>
  );
}
