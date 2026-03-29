import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.06] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-70" />
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/70">{project.kicker}</p>
            <h3 className="text-2xl font-semibold tracking-tight text-white">{project.name}</h3>
          </div>
          <span className="rounded-full border border-white/12 px-3 py-1 text-xs font-medium text-slate-300">{project.status}</span>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span key={highlight} className="rounded-full bg-[#0f2235] px-3 py-1 text-xs text-slate-300">
              {highlight}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={project.href}
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
          >
            Explore project
          </Link>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-white transition hover:border-cyan-400/35 hover:bg-cyan-400/8"
          >
            View GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

