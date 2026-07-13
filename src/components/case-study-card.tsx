import { GlassPanel } from "./glass-panel";

type CaseStudyCardProps = {
  label: string;
  title: string;
  summary: string;
  impact: string[];
};

export function CaseStudyCard({
  label,
  title,
  summary,
  impact,
}: CaseStudyCardProps) {
  return (
    <GlassPanel className="card-hover h-full p-7">
      <div className="space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          {label}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-copy">
          {title}
        </h3>
        <p className="text-sm leading-7 text-muted">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {impact.map((item) => (
            <span
              key={item}
              className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs text-copy/80"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </GlassPanel>
  );
}
