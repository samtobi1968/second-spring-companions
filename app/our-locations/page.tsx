import type { Metadata } from "next";
import OurLocations from "@/views/OurLocations";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Locations | Second Spring Companions",
  description:
    "Primary service areas across Hertfordshire, Cambridge, and London — boutique companionship with a discreet, medical-concierge standard of care.",
  path: "/our-locations",
});

export default function OurLocationsPage() {
  return <OurLocations />;
}
