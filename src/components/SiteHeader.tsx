"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = { to: string; label: string; children?: { to: string; label: string }[] };

const nav: NavItem[] = [
  {
    to: "/services",
    label: "Our Services",
    children: [
      { to: "/services#pillars", label: "Springer Companionship" },
      { to: "/services#homecoming", label: "The Homecoming Service" },
    ],
  },
  { to: "/why-companionship", label: "Why Companionship?" },
  { to: "/our-springers", label: "Our Springers" },
  { to: "/faq", label: "FAQ" },
  { to: "/become-a-springer", label: "Become a Springer" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHome = pathname === "/";
  const transparent = onHome && !scrolled && !open;

  const isBecomeSpringerPage = pathname === "/become-a-springer";

  const desktopInactive = transparent ? "text-cream/90 hover:text-cream" : "text-foreground/70 hover:text-foreground";
  const desktopActive = transparent ? "text-cream font-semibold" : "text-foreground font-semibold";
  const servicesActive = pathname.startsWith("/services");

  const mobileInactive = "text-foreground/80 hover:text-foreground";
  const mobileActive = "text-foreground font-semibold";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
        transparent ? "bg-transparent" : "bg-background/85 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-none">
          <span className={`font-serif text-xl md:text-2xl ${transparent ? "text-cream" : "text-foreground"}`}>
            Second Spring
          </span>
          <span className={`eyebrow text-[10px] mt-1 ${transparent ? "text-cream/70" : "text-muted-foreground"}`}>
            Companions
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) =>
            n.children ? (
              <div key={n.label} className="relative group">
                <Link
                  href={n.to}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors ${
                    servicesActive ? desktopActive : desktopInactive
                  }`}
                >
                  {n.label}
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200">
                  <div className="bg-cream rounded-md shadow-elegant border border-border min-w-[260px] py-2">
                    {n.children.map((c) => (
                      <Link
                        key={c.to}
                        href={c.to}
                        className="block px-5 py-3 text-sm text-primary hover:bg-sage-soft transition-colors font-serif"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : n.to === "/become-a-springer" ? (
              <Link
                key={n.to}
                href={n.to}
                className={`inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium tracking-wide transition-colors ${
                  transparent
                    ? `border-cream/30 ${isBecomeSpringerPage ? "text-cream font-semibold" : "text-cream/90 hover:text-cream"}`
                    : `border-foreground/20 ${
                        isBecomeSpringerPage ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"
                      }`
                }`}
              >
                {n.label}
              </Link>
            ) : (
              <Link
                key={n.to}
                href={n.to}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === n.to ? desktopActive : desktopInactive
                }`}
              >
                {n.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="luxe" size="sm">
            <a href="/#kindred-spirit">Start Your Personality Match</a>
          </Button>
        </div>

        <button
          className={`lg:hidden p-2 ${transparent ? "text-cream" : "text-foreground"}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-2">
            {nav.map((n) =>
              n.children ? (
                <div key={n.label} className="py-2 border-b border-border/60">
                  <Link
                    href={n.to}
                    onClick={() => setOpen(false)}
                    className={`mb-2 block text-sm font-medium ${
                      servicesActive ? mobileActive : mobileInactive
                    }`}
                  >
                    {n.label}
                  </Link>
                  <div className="pl-4 flex flex-col gap-2">
                    {n.children.map((c) => (
                      <Link
                        key={c.to}
                        href={c.to}
                        onClick={() => setOpen(false)}
                        className="text-foreground/70 hover:text-foreground text-sm py-1"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={n.to}
                  href={n.to}
                  onClick={() => setOpen(false)}
                  className={`py-2 border-b border-border/60 text-sm font-medium ${
                    pathname === n.to ? mobileActive : mobileInactive
                  }`}
                >
                  {n.label}
                </Link>
              ),
            )}
            <Button asChild variant="luxe" className="mt-4">
              <a href="/#kindred-spirit" onClick={() => setOpen(false)}>
                Start Your Personality Match
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
