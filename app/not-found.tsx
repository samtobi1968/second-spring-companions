import type { Metadata } from "next";
import NotFound from "@/views/NotFound";
import { buildPageMetadata } from "@/lib/buildPageMetadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Page Not Found | Second Spring Companions",
  description: "The page you are looking for does not exist. Return to Second Spring Companions.",
  path: "/404",
});

export default function NotFoundPage() {
  return <NotFound />;
}
