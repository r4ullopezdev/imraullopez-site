import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function buildMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  const url = `https://${siteConfig.domain}${pathname}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.domain,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
