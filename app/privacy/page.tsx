import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PrivacyPolicySection from "@/components/PrivacyPolicySection";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Customer Privacy Notice | Second Spring Companions",
  description:
    "Customer Privacy Notice for Second Spring Companions Limited — non-CQC regulated social companionship and home support. Version 1.1.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FDFCF7] font-sans">
      <SiteHeader />

      <main className="pb-24 pt-28 md:pt-36">
        <PrivacyPolicySection />
      </main>

      <SiteFooter />
    </div>
  );
}
