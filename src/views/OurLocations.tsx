import dynamic from "next/dynamic";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PRIMARY_SERVICE_HUBS } from "@/data/serviceAreas";

const OurLocationsMap = dynamic(() => import("@/components/locations/OurLocationsMap"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-full min-h-[inherit] w-full items-center justify-center rounded-xl border border-border bg-muted/30 text-sm font-medium text-muted-foreground"
      aria-hidden
    >
      Loading map…
    </div>
  ),
});

const OurLocations = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pb-24 pt-28 lg:pb-28 lg:pt-36">
        <div className="container">
          <header className="mb-10 max-w-2xl lg:mb-12">
            <div className="mb-5 flex items-center gap-3">
              <div className="rule" />
              <span className="eyebrow text-foreground/60">Coverage</span>
            </div>
            <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-6xl md:leading-[1.08]">
              Our <span className="italic text-sage-deep">Locations</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75 md:text-xl">
              Discreet, concierge-led companionship across our primary South East hubs — the same pins on the map as in
              the list beside it.
            </p>
          </header>

          {/* Mobile: map ~40vh then copy; desktop: two-column grid */}
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-14">
            <div className="order-1 h-[40vh] min-h-[260px] shrink-0 lg:order-none lg:col-span-7 lg:h-auto lg:min-h-[560px] lg:self-stretch">
              <OurLocationsMap />
              <p className="mt-3 text-center text-[11px] text-muted-foreground lg:text-left">
                Pins match our primary service hubs listed on the right. Map tiles © OpenStreetMap contributors · © CARTO.
              </p>
            </div>

            <aside className="order-2 flex flex-1 flex-col justify-center border-border lg:order-none lg:col-span-5 lg:border-l lg:pl-10 xl:pl-12">
              <div className="eyebrow mb-3 text-sage-deep">Primary service hubs</div>

              <h2 className="font-serif text-3xl leading-tight text-foreground md:text-5xl">Where we primarily service</h2>

              <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
                These four locations are our primary companionship hubs in the South East — aligned exactly with the map.
              </p>

              <ul className="mt-8 space-y-4 border-t border-border pt-8">
                {PRIMARY_SERVICE_HUBS.map((hub) => (
                  <li key={hub.name}>
                    <div className="rounded-lg border border-border bg-card px-5 py-4 shadow-card">
                      <span className="eyebrow mb-1 block text-[10px] tracking-[0.22em] text-sage-deep">Primary hub</span>
                      <span className="font-serif text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {hub.name}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-sm leading-relaxed text-foreground/75 md:text-base">
                <Link
                  href="/contact"
                  className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
                >
                  Don&apos;t see your area? We are constantly expanding! If you or your loved one lives elsewhere, please
                  don&apos;t hesitate to get in touch!
                </Link>
              </p>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default OurLocations;
