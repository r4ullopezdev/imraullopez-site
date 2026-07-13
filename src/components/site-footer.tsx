import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line py-12">
      <Container className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-accent/10 text-xs font-bold tracking-[0.12em] text-accent">
              {siteConfig.brandMark}
            </span>
            <p className="text-sm font-semibold text-copy">
              {siteConfig.legalName}
            </p>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted">
            Construimos la infraestructura digital —IA, automatización, agentes
            inteligentes, funnels y sistemas comerciales— que permite a las
            empresas operar como organizaciones modernas y crecer con criterio.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-copy/80">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
              {siteConfig.email}
            </a>
            {siteConfig.whatsappUrl ? (
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent"
              >
                WhatsApp
              </a>
            ) : null}
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="grid gap-3 text-sm text-muted md:justify-self-end">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-copy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/lp/diagnostico-ia"
            className="transition hover:text-copy"
          >
            Diagnóstico Estratégico IA
          </Link>
        </div>
      </Container>
      <Container className="mt-10 border-t border-line-soft pt-6">
        <p className="text-xs text-faint">
          © {siteConfig.legalName} · Fundada por {siteConfig.founderName} ·{" "}
          {siteConfig.domain}
        </p>
      </Container>
    </footer>
  );
}
