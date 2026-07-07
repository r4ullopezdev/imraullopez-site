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
    "IA para empresas",
    "automatizacion empresarial",
    "agentes de IA",
    "funnels",
    "desarrollo web",
    "automatizacion comercial",
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
      <body className="min-h-full bg-ink text-[color:var(--color-copy)]">
        <AnalyticsScripts />
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,199,151,0.35),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(126,180,255,0.24),transparent_22%),linear-gradient(180deg,#fcfaf6,#f5efe6_38%,#f7f3ec_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[linear-gradient(180deg,rgba(255,255,255,0.72),transparent)]" />
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
