import Link from "next/link";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-ink-900 text-slate-300">
      {/* Top strip: newsletter signup */}
      <FooterNewsletter />

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

          {/* Social icons */}
          <div className="mt-5">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Follow us
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/studyingermanyguide_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/15 text-white transition-all duration-200 hover:bg-white/25 hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.3.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.3-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.3-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.4-1.1-.4-2.3-.1-1.3-.1-1.7-.1-4.8s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.3.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .4-.2 1.1-.4 2.3-.4 1.3-.1 1.7-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 5 .3 4.2.6c-.8.3-1.5.7-2.2 1.4C1.3 2.7.9 3.4.6 4.2.3 5 .1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.1.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5 1.3.1 1.7.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.1-.3 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.3.1-1.7.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.1-.5-2.9-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.8-.3-1.6-.5-2.9-.5C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"/>
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@studyingermanyguide_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-black"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M19.6 6.8a5.6 5.6 0 01-3.3-1.1A5.6 5.6 0 0114 2h-3.5v13.5a2.6 2.6 0 11-2.6-2.6c.3 0 .6 0 .8.1V9.4c-.3 0-.5-.1-.8-.1A6.1 6.1 0 102.5 16a6.1 6.1 0 0011.5-2.5V8.8a8.9 8.9 0 005.6 1.9V7.2a5.4 5.4 0 010 0 5.6 5.6 0 010-.4z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/923021045296"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#25D366]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                </svg>
              </a>

              <a
                href="mailto:studyingermanyguide@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-500 hover:text-ink-900"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="M3 7l9 6 9-6"/>
                </svg>
              </a>
            </div>
          </div>
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
            <li><Link href="/guides" className="hover:text-brand-400">Country Guides</Link></li>
            <li><Link href="/about" className="hover:text-brand-400">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Official resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.daad.de/en/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">DAAD</a></li>
            <li><a href="https://www.make-it-in-germany.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Make it in Germany</a></li>
            <li><a href="https://www2.daad.de/deutschland/studienangebote/international-programmes/en/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">English programmes</a></li>
            <li><a href="https://www.study-in-germany.de/en/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">Study in Germany (gov)</a></li>
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
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Study in Germany. Educational guide only.</p>
          <Link href="/privacy" className="hover:text-brand-400">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-brand-400">Terms of Service</Link>
          <Link href="/about" className="hover:text-brand-400">About</Link>
          <Link href="/contact" className="hover:text-brand-400">Contact</Link>
          <Link href="/disclaimer" className="hover:text-brand-400">Disclaimer</Link>
        </div>
        <p className="mx-auto mt-2 max-w-6xl text-center text-xs text-slate-600">
          Figures and rules change — always verify with official sources before making decisions.
        </p>
      </div>
    </footer>
  );
}
