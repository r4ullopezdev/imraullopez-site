import Link from "next/link";
import { navItems, siteConfig } from "@/content/site";
import { ButtonLink } from "./button-link";
import { Container } from "./container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e6ddd1] bg-[rgba(250,247,241,0.84)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#c7d3e0] bg-white text-sm font-semibold tracking-[0.18em] text-[#102c46]">
            {siteConfig.brandMark}
          </span>
          <div className="space-y-0.5">
            <div className="text-sm font-semibold tracking-wide text-[#102033]">
              {siteConfig.name}
            </div>
            <div className="text-xs text-[#5a6472]">
              Infraestructura digital con IA para empresas
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[#5a6472] md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#102033]"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={siteConfig.calendlyUrl} external className="px-4 py-2">
            Agendar diagnostico IA
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
