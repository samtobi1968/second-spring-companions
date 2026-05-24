import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookiePolicySection from "@/components/CookiePolicySection";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy | Second Spring Companions",
  description:
    "How Second Spring Companions uses cookies and similar technologies on our website, including essential Tally form storage.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pb-24 pt-28 md:pt-36">
        <CookiePolicySection variant="page" />
      </main>

      <SiteFooter />
    </div>
  );
}
