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
          title="A focused project arena anchored by one flagship ecosystem."
          description="For now this page stays intentionally minimal and centered on the main open-source system in the portfolio: NANO Agent Stack."
        />
        <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-1">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </Container>
    </div>
  );
}
