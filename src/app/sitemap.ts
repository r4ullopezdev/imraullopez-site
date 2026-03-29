import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    {
      url: `${base}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${base}/projects/nano-agent-stack`,
      lastModified: new Date(),
    },
  ];
}

