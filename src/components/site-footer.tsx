import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <p className="text-sm font-medium text-white">{siteConfig.name}</p>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Arquitectura de soluciones IA, automatización comercial, agentes
            inteligentes, funnels y sistemas operativos para empresas que
            quieren ahorrar tiempo, vender más y ejecutar mejor.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            {siteConfig.whatsappUrl ? (
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            ) : null}
            <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <div className="grid gap-3 text-sm text-slate-400 md:justify-self-end">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="/lp/automatizacion-7-dias" className="transition hover:text-white">
            Landing 7 días
          </Link>
          <Link href="/gracias" className="transition hover:text-white">
            Gracias
          </Link>
        </div>
      </Container>
    </footer>
  );
}
