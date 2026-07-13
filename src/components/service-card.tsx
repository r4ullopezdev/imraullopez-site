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
    <GlassPanel className="card-hover h-full p-7">
      <div className="space-y-5">
        <h3 className="text-2xl font-semibold tracking-tight text-copy">
          {title}
        </h3>
        <div className="space-y-3 text-sm leading-7 text-muted">
          <p>
            <span className="font-semibold text-copy">Problema:</span> {problem}
          </p>
          <p>
            <span className="font-semibold text-copy">Solución:</span> {solution}
          </p>
          <p>
            <span className="font-semibold text-accent">Beneficio:</span>{" "}
            {benefit}
          </p>
        </div>
        <div className="space-y-2 border-t border-line-soft pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Ejemplos de uso
          </p>
          <ul className="space-y-2 text-sm leading-7 text-muted">
            {examples.map((example) => (
              <li key={example} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlassPanel>
  );
}
