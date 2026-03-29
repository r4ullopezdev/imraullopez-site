import Link from "next/link";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-white">Raul Lopez</p>
          <p className="max-w-xl text-sm text-slate-400">
            Building open-source infrastructure for multi-agent orchestration, reusable AI workflows, and human-supervised autonomous systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-400">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/projects/nano-agent-stack">NANO Agent Stack</Link>
          <a href="https://github.com/r4ullopezdev" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://github.com/r4ullopezdev/nano-agent-docs" target="_blank" rel="noreferrer">
            Docs
          </a>
        </div>
      </Container>
    </footer>
  );
}

