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
      "A modular orchestration framework for modeling departments, managers, workers, skills, approval gates, provider boundaries, memory adapters, and traceable execution in multi-agent systems.",
    href: "/projects/nano-agent-stack",
    repoUrl: "https://github.com/r4ullopezdev/nano-agent-stack",
    status: "Alpha",
    highlights: ["Human approval gates", "SQLite memory", "Traceable execution"],
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
