import Link from "next/link";
import { Badge } from "@/components/badge";
import { Container } from "@/components/container";
import { HomeHeroPanel } from "@/components/home-hero-panel";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SupportCard } from "@/components/support-card";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

const featuredProjects = projects;

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <Badge>Founder-engineer / AI systems / Open-source infrastructure</Badge>
              <div className="space-y-6">
                <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Raul Lopez builds senior-grade AI systems, automation architecture, and open-source infrastructure.
                </h1>
                <p className="max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                  Founder-engineer focused on multi-agent orchestration, workflow architecture, observability, and technical execution built for real operational environments.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteConfig.paypalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/70 bg-[#ecfff8] px-6 py-3 text-sm font-semibold text-[#05111b] shadow-[0_18px_40px_rgba(16,185,129,0.18)] transition hover:bg-white"
                >
                  Donate via PayPal
                </a>
                <Link
                  href="/projects"
                  className="rounded-full border border-cyan-300/40 bg-[#0d1827] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/80 hover:bg-[#132338]"
                >
                  View Project Arena
                </Link>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-[#0a1422] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/35 hover:bg-[#0f1d2f]"
                >
                  GitHub
                </a>
              </div>
            </div>
            <HomeHeroPanel />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured projects"
            title="The flagship project in the current portfolio."
            description="NANO Agent Stack is the primary open-source system highlighted here. The site itself remains centered on Raul Lopez as the builder behind the work."
          />
          <div className="grid gap-5 lg:grid-cols-1">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
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
