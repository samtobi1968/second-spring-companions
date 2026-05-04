import type { Metadata } from "next";
import OurSpringers from "@/views/OurSpringers";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Springers | Second Spring Companions",
  description:
    "Meet our Springers: DBS-checked companions chosen through founder interviews. Intellectual companionship and genuine connection for older adults.",
  path: "/our-springers",
});

export default function OurSpringersPage() {
  return <OurSpringers />;
}
