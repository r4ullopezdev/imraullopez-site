import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <div className="pb-24 pt-20 sm:pt-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="Project index"
          title="Open-source systems, developer tooling, and AI infrastructure work."
          description="This index is designed as a scalable project layer. New case studies, product pages, and long-form technical writeups can slot into the same structure later."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
      </Container>
    </div>
  );
}
