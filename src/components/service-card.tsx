import { GlassPanel } from "./glass-panel";

type ServiceCardProps = {
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  examples: string[];
};

export function ServiceCard({
  title,
  problem,
  solution,
  benefit,
  examples,
}: ServiceCardProps) {
  return (
    <GlassPanel className="h-full p-7">
      <div className="space-y-5">
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        <div className="space-y-3 text-sm leading-7 text-slate-300">
          <p>
            <span className="font-semibold text-white">Problema:</span> {problem}
          </p>
          <p>
            <span className="font-semibold text-white">Solución:</span> {solution}
          </p>
          <p>
            <span className="font-semibold text-white">Beneficio:</span> {benefit}
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Ejemplos de uso
          </p>
          <ul className="space-y-2 text-sm leading-7 text-slate-300">
            {examples.map((example) => (
              <li key={example} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlassPanel>
  );
}
