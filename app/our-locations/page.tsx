import type { Metadata } from "next";
import OurLocations from "@/views/OurLocations";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Locations | Second Spring Companions",
  description:
    "Primary companionship hubs: Harpenden, St Albans, Redbourn, and London — interactive map and service details aligned.",
  path: "/our-locations",
});

export default function OurLocationsPage() {
  return <OurLocations />;
}
