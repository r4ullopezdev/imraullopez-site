import { GlassPanel } from "./glass-panel";

type ProcessStepProps = {
  step: string;
  title: string;
  text: string;
};

export function ProcessStep({ step, title, text }: ProcessStepProps) {
  return (
    <GlassPanel className="card-hover h-full p-6">
      <div className="space-y-4">
        <div className="inline-flex rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          {step}
        </div>
        <h3 className="text-xl font-semibold text-copy">{title}</h3>
        <p className="text-sm leading-7 text-muted">{text}</p>
      </div>
    </GlassPanel>
  );
}
