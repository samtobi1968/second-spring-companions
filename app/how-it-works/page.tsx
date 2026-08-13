import type { Metadata } from "next";
import HowItWorks from "@/views/HowItWorks";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "How It Works | Second Spring Companions",
  description:
    "Learn how Second Spring Companions matches you with a companion: questionnaire, private matching, video introduction, free trial, and ongoing support.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return <HowItWorks />;
}
