import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  const routes = [
    "/",
    "/sobre-mi",
    "/servicios",
    "/portfolio",
    "/contacto",
    "/gracias",
    "/lp/diagnostico-ia",
    "/lp/automatizacion-7-dias",
    "/lp/seguimiento-leads",
    "/lp/automatizacion-interna",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
