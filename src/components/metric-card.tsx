import { GlassPanel } from "./glass-panel";

type MetricCardProps = {
  value: string;
  label: string;
  description?: string;
};

export function MetricCard({ value, label, description }: MetricCardProps) {
  return (
    <GlassPanel className="h-full">
      <div className="space-y-3">
        <p className="text-4xl font-semibold tracking-tight text-copy">{value}</p>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {label}
        </p>
        {description ? (
          <p className="text-sm leading-7 text-muted">{description}</p>
        ) : null}
      </div>
    </GlassPanel>
  );
}
