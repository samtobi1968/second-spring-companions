import type { Metadata } from "next";
import Index from "@/views/Index";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Second Spring Companions | Bespoke Companion Matching, Hertfordshire & London",
  description:
    "Companion matching with Springers chosen for shared interests and personality. Primary hubs: Harpenden, St Albans, Redbourn, and London — plus bespoke UK-wide search.",
  path: "/",
});

export default function HomePage() {
  return <Index />;
}
