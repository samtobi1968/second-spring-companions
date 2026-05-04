import type { Metadata } from "next";
import Index from "@/views/Index";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Second Spring Companions | Bespoke Companion Matching, London & UK-Wide",
  description:
    "A boutique companion agency matching older adults with dedicated Springers — chosen for shared interests, intellect and personality. Greater London and surrounding areas.",
  path: "/",
});

export default function HomePage() {
  return <Index />;
}
