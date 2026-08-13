import type { Metadata } from "next";
import BecomeASpringer from "@/views/BecomeASpringer";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Become a Springer | Second Spring Companions",
  description:
    "Apply to join our registry of self-employed companions. Founder-led onboarding, Basic DBS check, and flexible companionship work across the UK.",
  path: "/become-a-springer",
});

export default function BecomeASpringerPage() {
  return <BecomeASpringer />;
}
