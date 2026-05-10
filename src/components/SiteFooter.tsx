import Link from "next/link";

const SiteFooter = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-20 grid md:grid-cols-4 gap-12">
      <div className="md:col-span-2 max-w-sm">
        <div className="font-serif text-2xl mb-2">Second Spring Companions</div>
        <p className="eyebrow text-cream/60 mb-6">Tailored companionship. Genuine connection.</p>
        <p className="text-cream/75 leading-relaxed text-sm">
          A London based Introductory Agency. Curating matches nationwide.
        </p>
      </div>

      <div>
        <div className="eyebrow text-cream/50 mb-4">Explore</div>
        <ul className="space-y-3 text-sm">
          <li><Link className="text-cream/80 hover:text-cream" href="/services">Our Services</Link></li>
          <li><Link className="text-cream/80 hover:text-cream" href="/our-springers">Our Springers</Link></li>
          <li><Link className="text-cream/80 hover:text-cream" href="/why-companionship">Why Companionship?</Link></li>
          <li><a className="text-cream/80 hover:text-cream" href="/#standard">The Standard</a></li>
          <li><Link className="text-cream/80 hover:text-cream" href="/faq">FAQ</Link></li>
          <li><Link className="text-cream/80 hover:text-cream" href="/our-locations">Our Locations</Link></li>
          <li><Link className="text-cream/80 hover:text-cream" href="/contact">Contact</Link></li>
          <li><Link className="text-cream/80 hover:text-cream" href="/become-a-springer">Become a Springer</Link></li>
        </ul>
      </div>

      <div>
        <div className="eyebrow text-cream/50 mb-4">Contact</div>
        <ul className="space-y-3 text-sm text-cream/80">
          <li>info@secondspringcompanions.co.uk</li>
          <li>Bespoke Search across the UK</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-cream/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/50">
        <div>© {new Date().getFullYear()} Second Spring Companions. All rights reserved.</div>
        <div className="flex gap-4 items-center">
          <span>ICO Registered</span>
          <span>GDPR Compliant</span>
          <span>Enhanced DBS</span>
          <Link href="/terms" className="text-xs text-cream/50 hover:text-cream transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="text-xs text-cream/50 hover:text-cream transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
