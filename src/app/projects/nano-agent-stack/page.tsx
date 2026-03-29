import type { Metadata } from "next";
import Link from "next/link";
import { ArchitectureVisual } from "@/components/architecture-visual";
import { Badge } from "@/components/badge";
import { CodeWindow } from "@/components/code-window";
import { Container } from "@/components/container";
import { NanoHeroVisual } from "@/components/nano-hero-visual";
import { RepoCard } from "@/components/repo-card";
import { SectionHeading } from "@/components/section-heading";
import { SupportCard } from "@/components/support-card";
import { ecosystemRepos } from "@/content/projects";
import { siteConfig } from "@/content/site";

const quickstart = `npm install
npm run demo
npm run demo:content
npm run demo:support`;

const roadmap = [
  "v0.1 core runtime",
  "skills and package-level extensibility",
  "observability and trace exports",
  "workflow templates and examples",
  "public beta with stronger provider and memory boundaries",
];

export const metadata: Metadata = {
  title: "NANO Agent Stack | imraullopez.com",
  description:
    "A premium project page for NANO Agent Stack, an open-source ecosystem for modular multi-agent orchestration, auditability, and developer-oriented AI infrastructure.",
};

export default function NanoAgentStackPage() {
  return (
    <div className="pb-24">
      <section className="pt-20 sm:pt-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="space-y-8">
              <Badge>Flagship open-source project</Badge>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  NANO Agent Stack
                </h1>
                <p className="max-w-3xl text-balance text-2xl font-medium leading-9 text-[color:var(--color-sand)]">
                  Modular orchestration infrastructure for agent systems that need structure, auditability, and real operational topology.
                </p>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-300">
                  NANO Agent Stack is an open-source ecosystem for modeling departments, hierarchies, skills, policies,
                  memory boundaries, trace hooks, and human checkpoints as explicit infrastructure primitives.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/r4ullopezdev/nano-agent-stack"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  View GitHub
                </a>
                <a
                  href="#architecture"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/35 hover:bg-cyan-400/8"
                >
                  Explore architecture
                </a>
                <a
                  href="#quickstart"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  Quickstart
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Structure-first", "Departments, managers, workers, skills, and policies stay explicit."],
                  ["Auditability", "Runs emit traces, review artifacts, and inspection layers."],
                  ["Modular ecosystem", "Core runtime plus skills, templates, observability, docs, and benchmarks."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <NanoHeroVisual />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <SectionHeading
              eyebrow="What it is"
              title="An open-source ecosystem for modular multi-agent orchestration."
              description="NANO is built for builders who need systems that can represent organizational structure and still remain inspectable, composable, and open-source friendly."
            />
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <SectionHeading
              eyebrow="The problem"
              title="Most agent demos hide structure inside prompt chains and wrappers."
              description="That makes them hard to audit, hard to extend, and hard to map onto real workflows. NANO instead models departments, managers, workers, skills, policies, traces, and approval boundaries as explicit runtime seams."
            />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="How it works"
            title="A hierarchy-first runtime for representing organizations as systems."
            description="The design is intentionally narrow: routing, structure, policies, memory boundaries, and traces stay visible instead of disappearing into generic agent abstractions."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["Orchestrator", "Coordinates task execution, provider strategy, policy enforcement, and artifact generation."],
              ["Departments", "Own operational domains like research, content, support, or internal operations."],
              ["Managers and workers", "Managers decompose work, workers execute through skills and provider-assisted notes."],
              ["Skills, memory, and traces", "Reusable capabilities, pluggable state boundaries, and execution chronology."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="architecture" className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Architecture"
            title="From executive intent to department execution and traceable outputs."
            description="NANO models the chain from intent to work packets to artifacts as a visible system. The goal is to make agentic execution feel more like infrastructure architecture than hidden automation."
          />
          <ArchitectureVisual />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Repository ecosystem"
            title="A focused set of repositories around the core runtime."
            description="Each repository handles a clear layer of the ecosystem, keeping the overall stack modular instead of turning the core into a monolith."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {ecosystemRepos.map((repo) => (
              <RepoCard key={repo.name} {...repo} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Use cases"
            title="Patterns designed for workflows that resemble teams, not toy prompts."
            description="The current examples and templates focus on operational scenarios where structure, routing, and review boundaries matter."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              "Research workflows",
              "Content operations",
              "Support triage",
              "Marketing systems",
              "Internal operations assistants",
            ].map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-center text-sm font-medium text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container>
          <SupportCard
            title="Support NANO Agent Stack"
            description="If this project is useful to you, or if you want to support more open-source work around agent orchestration, observability, and developer-grade AI infrastructure, you can contribute directly."
            href={siteConfig.paypalUrl}
          />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Demo flow"
              title="Input becomes a routed workflow, then a department execution chain."
              description="A typical run starts with one intent, routes through a manager layer, fans out to workers and skills, and returns a reviewable artifact plus trace."
            />
            <div className="space-y-4">
              {[
                ["1. Input", "A request enters the orchestrator with a desired output and policy boundaries."],
                ["2. Routing", "The task is assigned to a department manager who owns the workflow domain."],
                ["3. Execution", "Workers invoke skills and provider-assisted notes to complete specialized subwork."],
                ["4. Result", "The run emits markdown, JSON trace data, checkpoints, and visual inspection artifacts."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <CodeWindow title="Quick demo" code={quickstart} />
            <div className="rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Artifacts</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["latest-run.md", "latest-run.json", "latest-trace.md", "latest-run-inspector.html"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#0d1623] px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="quickstart" className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Quickstart"
            title="A small but real developer path from install to demo run."
            description="The goal is not a fake landing page. The GitHub repo already includes a CLI, executable demos, tests, generated artifacts, and supporting satellite repositories."
          />
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <CodeWindow title="Local run" code={quickstart} />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Roadmap"
            title="A staged path from alpha runtime to broader public beta."
            description="The roadmap stays narrow and honest: stronger providers, better templates, richer observability, and more durable memory adapters without pretending the stack is already production-complete."
          />
          <div className="grid gap-5 md:grid-cols-5">
            {roadmap.map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <SectionHeading
              eyebrow="Why it matters"
              title="Agent systems become more trustworthy when their structure stays visible."
              description="Builders need more than a single prompt wrapper. They need the ability to represent authority, decomposition, traceability, and human review as composable system parts. That is the space NANO is aiming at."
            />
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <Badge>About the builder</Badge>
            <h3 className="mt-5 text-3xl font-semibold text-white">Raul Lopez</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Founder-engineer building AI infrastructure, open-source orchestration systems, and technical presentation layers
              that help serious engineering work travel further than GitHub alone.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/r4ullopezdev"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
              >
                GitHub
              </a>
              <Link
                href="/projects"
                className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/35 hover:bg-cyan-400/8"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
