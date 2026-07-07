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
        <div className="inline-flex rounded-full border border-[#d7cab7] bg-[#fff6ea] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5320]">
          {step}
        </div>
        <h3 className="text-xl font-semibold text-[#102033]">{title}</h3>
        <p className="text-sm leading-7 text-[#5a6472]">{text}</p>
      </div>
    </GlassPanel>
  );
}
