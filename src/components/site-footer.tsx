import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e6ddd1] py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <p className="text-sm font-medium text-[#102033]">{siteConfig.legalName}</p>
          <p className="max-w-2xl text-sm leading-7 text-[#5a6472]">
            Construimos la infraestructura digital —IA, automatizacion, agentes
            inteligentes, funnels y sistemas comerciales— que permite a las
            empresas operar como organizaciones modernas y crecer con criterio.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-[#334155]">
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
        <div className="grid gap-3 text-sm text-[#5a6472] md:justify-self-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#102033]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/lp/diagnostico-ia"
            className="transition hover:text-[#102033]"
          >
            Diagnostico Estrategico IA
          </Link>
          <Link
            href="/lp/automatizacion-7-dias"
            className="transition hover:text-[#102033]"
          >
            Landing 7 dias
          </Link>
          <Link href="/gracias" className="transition hover:text-[#102033]">
            Gracias
          </Link>
        </div>
      </Container>
    </footer>
  );
}
