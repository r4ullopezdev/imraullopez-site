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
        <p className="font-mono text-3xl leading-none text-accent">&ldquo;</p>
        <p className="text-base leading-8 text-copy/90">{quote}</p>
        <div>
          <p className="text-sm font-semibold text-copy">{name}</p>
          <p className="text-sm text-muted">{role}</p>
        </div>
      </div>
    </GlassPanel>
  );
}
