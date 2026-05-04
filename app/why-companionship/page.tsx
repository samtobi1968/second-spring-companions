import type { Metadata } from "next";
import WhyCompanionship from "@/views/WhyCompanionship";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Why Companionship? | Second Spring Companions",
  description:
    "The case for companionship: how conversation, hobbies, light support, and tech help sustain independence and family connection in later life.",
  path: "/why-companionship",
});

export default function WhyCompanionshipPage() {
  return <WhyCompanionship />;
}
