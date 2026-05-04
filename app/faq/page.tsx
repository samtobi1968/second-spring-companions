import type { Metadata } from "next";
import Faq from "@/views/Faq";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ | Second Spring Companions",
  description:
    "Frequently asked questions about our London-based companionship service, Springers, safety, fees, and UK-wide bespoke matching.",
  path: "/faq",
});

export default function FaqPage() {
  return <Faq />;
}
