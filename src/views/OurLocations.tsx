import dynamic from "next/dynamic";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { MapPin } from "lucide-react";

const OurLocationsMap = dynamic(() => import("@/components/locations/OurLocationsMap"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-[500px] w-full items-center justify-center rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-100 to-indigo-50/40 text-sm font-medium text-slate-500 lg:h-[calc(100vh-10rem)] lg:min-h-[560px]"
      aria-hidden
    >
      Loading map…
    </div>
  ),
});

const SERVICE_AREAS = [
  "St Albans",
  "Harpenden",
  "Hatfield",
  "Radlett",
  "Wheathampstead",
  "Redbourn",
  "Sandridge",
  "Cambridge",
  "London",
] as const;

const OurLocations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50/25">
      <SiteHeader />

      <main className="pb-24 pt-28 lg:pb-28 lg:pt-36">
        <div className="container">
          <header className="mb-12 max-w-2xl lg:mb-14">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-10 bg-indigo-400/70" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Coverage
              </span>
            </div>
            <h1 className="font-serif text-4xl tracking-tight text-slate-900 md:text-6xl md:leading-[1.08]">
              Our <span className="italic text-indigo-950">Locations</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">
              Discreet, concierge-led companionship across the South East and East of England — plotted
              precisely where our Springers are active today.
            </p>
          </header>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
            <div className="lg:col-span-7 lg:min-h-0">
              <OurLocationsMap />
              <p className="mt-3 text-center text-[11px] text-slate-400 lg:text-left">
                Map tiles © OpenStreetMap contributors · © CARTO · Zoom with toolbar or pinch; scroll wheel disabled so the page stays easy to read.
              </p>
            </div>

            <aside className="flex flex-col justify-center rounded-2xl border border-slate-200/90 bg-white/90 p-8 shadow-[0_24px_70px_-28px_rgba(49,46,129,0.28)] backdrop-blur-sm md:p-11 lg:col-span-5">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-gradient-to-r from-indigo-50 to-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-950">
                <MapPin className="h-3.5 w-3.5 text-indigo-600" aria-hidden />
                Service area
              </div>

              <h2 className="font-serif text-3xl text-slate-900 md:text-[2.15rem] md:leading-snug">
                Where we primarily service
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600">We cover these areas in the UK:</p>

              <ul className="mt-8 space-y-4 border-t border-slate-100 pt-8">
                {SERVICE_AREAS.map((area) => (
                  <li key={area} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-900 shadow-sm ring-2 ring-indigo-100"
                      aria-hidden
                    />
                    <span className="font-semibold tracking-tight text-slate-900">{area}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-sm leading-relaxed text-slate-600">
                <Link
                  href="/contact"
                  className="font-medium text-indigo-800 underline decoration-indigo-200 underline-offset-[5px] transition-colors hover:text-indigo-950 hover:decoration-indigo-400"
                >
                  Don’t see your area? We are constantly expanding so if you or your loved one lives
                  elsewhere, please don’t hesitate to get in touch!
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
