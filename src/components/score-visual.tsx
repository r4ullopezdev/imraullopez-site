const categories = [
  { label: "Presencia Digital", value: 40 },
  { label: "Captación de Clientes", value: 25 },
  { label: "Seguimiento Comercial", value: 20 },
  { label: "Datos y Analítica", value: 30 },
  { label: "Uso de IA", value: 12 },
];

export function ScoreVisual() {
  return (
    <div className="animate-fade-up delay-2 relative rounded-[24px] border border-line bg-surface p-7 shadow-[0_1px_3px_rgba(24,20,15,0.05),0_30px_70px_-38px_rgba(24,20,15,0.22)]">
      <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-accent/12 blur-3xl" />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            AI Infrastructure Score™
          </p>
          <span className="rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-faint">
            Ejemplo
          </span>
        </div>

        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-6xl font-bold tracking-tight text-copy">
                34
              </span>
              <span className="text-lg text-muted">/100</span>
            </div>
            <span className="mt-2 inline-flex rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-600">
              Empresa Tradicional
            </span>
          </div>
          <div className="text-right">
            <p className="font-mono text-sm text-faint">objetivo</p>
            <div className="flex items-baseline justify-end gap-1">
              <span className="text-4xl font-bold tracking-tight text-accent">
                72
              </span>
            </div>
            <span className="mt-2 inline-flex rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
              Empresa Moderna
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {categories.map((c, i) => (
            <div key={c.label} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted">{c.label}</span>
                <span className="font-mono text-faint">{c.value}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                <div
                  className="bar-fill h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  style={{
                    width: `${c.value}%`,
                    animationDelay: `${0.15 + i * 0.1}s`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="border-t border-line-soft pt-4 text-sm leading-6 text-copy/80">
          El salto de <span className="font-semibold text-copy">34</span> a{" "}
          <span className="font-semibold text-accent">72</span> es exactamente
          lo que construimos con el{" "}
          <span className="font-semibold text-gold">Starter Setup Sprint™</span>.
        </p>
      </div>
    </div>
  );
}
