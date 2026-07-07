import { GlassPanel } from "./glass-panel";

type ProcessStepProps = {
  step: string;
  title: string;
  text: string;
};

export function ProcessStep({ step, title, text }: ProcessStepProps) {
  return (
    <GlassPanel className="h-full p-6">
      <div className="space-y-4">
        <div className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
          {step}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-7 text-slate-300">{text}</p>
      </div>
    </GlassPanel>
  );
}
