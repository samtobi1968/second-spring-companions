import type { Metadata } from "next";
import Services from "@/views/Services";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Our Services | Second Spring Companions",
  description:
    "Springer companionship in four pillars: connection, hobbies, everyday support, and help with tech. Homecoming service and transparent introductory agency model.",
  path: "/services",
});

export default function ServicesPage() {
  return <Services />;
}
