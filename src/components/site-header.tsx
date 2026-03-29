import Link from "next/link";
import { Container } from "./container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/projects/nano-agent-stack", label: "NANO Agent Stack" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07111d]/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-sm font-semibold tracking-[0.24em] text-cyan-200">
            RL
          </span>
          <div className="space-y-0.5">
            <div className="text-sm font-semibold tracking-wide text-white">Raul Lopez</div>
            <div className="text-xs text-slate-400">Founder-engineer / AI infrastructure</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/r4ullopezdev"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/12 bg-white/6 px-4 py-2 font-medium text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}
