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
        <p className="text-4xl font-semibold tracking-tight text-[#102033]">
          {value}
        </p>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5320]">
          {label}
        </p>
        {description ? (
          <p className="text-sm leading-7 text-[#5a6472]">{description}</p>
        ) : null}
      </div>
    </GlassPanel>
  );
}
