import Link from "next/link";
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <Badge>Founder-engineer / Open-source systems</Badge>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Building premium open-source infrastructure for multi-agent orchestration.
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                  Raul Lopez builds modular AI systems with explicit runtime seams: orchestration, skills, memory, policies,
                  observability, and human review. The focus is infrastructure for builders, not prompt-chain theater.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects/nano-agent-stack"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Explore NANO Agent Stack
                </Link>
                <Link
                  href="/projects"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/35 hover:bg-cyan-400/8"
                >
                  View project index
                </Link>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-white/20 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),linear-gradient(180deg,#0b1321,#08111b)] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
              <div className="space-y-5">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Current focus</p>
                  <h2 className="mt-4 text-2xl font-semibold text-white">NANO Agent Stack</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    A modular ecosystem for organizations-as-systems: departments, managers, workers, skills, trace hooks,
                    and human checkpoints for serious agentic workflows.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm font-semibold text-white">Open-source ecosystem</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">Core runtime, skills, templates, observability, docs, and benchmark harness.</p>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-sm font-semibold text-white">Builder positioning</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">Developer-oriented architecture with a premium presentation layer for collaborators and evaluators.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Positioning"
            title="A technical portfolio designed like infrastructure, not a gallery."
            description="The site is structured to scale into a broader technical hub: new project pages, architecture notes, a future blog, and dynamic GitHub integrations can plug into the same content model."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Serious product-grade presentation for open-source work",
              "Reusable project architecture prepared for future routes",
              "Clear bridge between portfolio, GitHub, and technical narrative",
            ].map((item) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured projects"
            title="Selected work around agent infrastructure, workflow systems, and developer tooling."
            description="The current flagship is NANO Agent Stack, supported by satellite repositories for skills, observability, documentation, and benchmarking."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index === 0} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
