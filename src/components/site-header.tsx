import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";
import { ButtonLink } from "./button-link";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-sm font-bold tracking-[0.12em] text-accent">
            {siteConfig.brandMark}
          </span>
          <div className="space-y-0.5">
            <div className="text-sm font-semibold tracking-wide text-copy">
              {siteConfig.name}
            </div>
            <div className="text-[11px] text-muted">
              Infraestructura digital con IA
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-copy"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={siteConfig.calendlyUrl} external className="px-4 py-2">
            Agendar diagnóstico
          </ButtonLink>
        </nav>
        <ButtonLink
          href={siteConfig.calendlyUrl}
          external
          className="px-4 py-2 md:hidden"
        >
          Agendar
        </ButtonLink>
      </Container>
    </header>
  );
}
