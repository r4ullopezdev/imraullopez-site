import Link from "next/link";
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { HomeHeroPanel } from "@/components/home-hero-panel";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SupportCard } from "@/components/support-card";
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
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Open-source ecosystem", "NANO Agent Stack and its satellite repositories."],
                  ["Technical writing", "Architecture, design notes, docs, and visual project framing."],
                  ["Builder focus", "Agent systems, orchestration, observability, and reusable workflows."],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <HomeHeroPanel />
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

      <section className="pt-24">
        <Container>
          <SupportCard
            title="Support the open-source work behind the portfolio"
            description="If you want to support the continued development of NANO Agent Stack, the surrounding documentation, and future open-source infrastructure work, you can do it directly here."
            href={siteConfig.paypalUrl}
          />
        </Container>
      </section>
    </div>
  );
}
