import { GlassPanel } from "./glass-panel";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <GlassPanel className="h-full p-7">
      <div className="space-y-5">
        <p className="text-base leading-8 text-slate-200">“{quote}”</p>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </GlassPanel>
  );
}
