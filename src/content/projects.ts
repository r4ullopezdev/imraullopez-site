export type Project = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  href: string;
  repoUrl: string;
  status: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "nano-agent-stack",
    name: "NANO Agent Stack",
    kicker: "Flagship open-source ecosystem",
    description:
      "A modular orchestration framework for modeling departments, managers, workers, skills, policies, memory boundaries, and traceable execution in multi-agent systems.",
    href: "/projects/nano-agent-stack",
    repoUrl: "https://github.com/r4ullopezdev/nano-agent-stack",
    status: "Alpha",
    highlights: ["Orchestrator runtime", "Provider abstraction", "Traceable execution"],
  },
  {
    slug: "nano-agent-observability",
    name: "nano-agent-observability",
    kicker: "Run tracing and auditability",
    description:
      "Structured logs, run exports, and a lightweight inspector for understanding how multi-agent workflows behave.",
    href: "/projects",
    repoUrl: "https://github.com/r4ullopezdev/nano-agent-observability",
    status: "Alpha",
    highlights: ["Run inspector", "Markdown and JSON exports", "Audit-oriented design"],
  },
  {
    slug: "nano-agent-skills",
    name: "nano-agent-skills",
    kicker: "Reusable capability layer",
    description:
      "A pluggable skill registry with demo skills and a clean authoring contract for reusable workflow capabilities.",
    href: "/projects",
    repoUrl: "https://github.com/r4ullopezdev/nano-agent-skills",
    status: "Alpha",
    highlights: ["Registry", "Demo skills", "Portable contracts"],
  },
  {
    slug: "nano-agent-bench",
    name: "nano-agent-bench",
    kicker: "Honest benchmark harness",
    description:
      "A small, transparent benchmark harness for comparing single-agent and department-based workflow structures.",
    href: "/projects",
    repoUrl: "https://github.com/r4ullopezdev/nano-agent-bench",
    status: "Experimental",
    highlights: ["Small datasets", "Explicit methodology", "Reproducible output"],
  },
];

export const ecosystemRepos = [
  {
    name: "nano-agent-stack",
    description: "Core runtime for orchestration, policies, providers, memory boundaries, and task execution.",
    url: "https://github.com/r4ullopezdev/nano-agent-stack",
  },
  {
    name: "nano-agent-skills",
    description: "Reusable skill registry and starter capability pack.",
    url: "https://github.com/r4ullopezdev/nano-agent-skills",
  },
  {
    name: "nano-agent-templates",
    description: "Operational templates for research, content, support, marketing, and internal assistants.",
    url: "https://github.com/r4ullopezdev/nano-agent-templates",
  },
  {
    name: "nano-agent-observability",
    description: "Trace exports, structured logging, and visual run inspection.",
    url: "https://github.com/r4ullopezdev/nano-agent-observability",
  },
  {
    name: "nano-agent-docs",
    description: "Architecture, design notes, glossary, and ecosystem-level documentation.",
    url: "https://github.com/r4ullopezdev/nano-agent-docs",
  },
];

