import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { AnalyticsScripts } from "@/components/analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/content/site";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(`https://${siteConfig.domain}`),
  keywords: [
    "Infraestructura IA",
    "AI Infrastructure Score",
    "diagnostico estrategico IA",
    "IA para empresas",
    "automatizacion empresarial",
    "agentes de IA",
    "funnels",
    "automatizacion comercial",
    "transformacion digital Panama",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.domain,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: {
    canonical: `https://${siteConfig.domain}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${headingFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-copy">
        <AnalyticsScripts />
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_15%_-5%,rgba(45,212,191,0.14),transparent_60%),radial-gradient(55%_45%_at_88%_-8%,rgba(34,211,238,0.10),transparent_55%),linear-gradient(180deg,#080b11,#0a0e15_60%,#080b11)]" />
          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
