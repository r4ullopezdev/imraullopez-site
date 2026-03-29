export function ArchitectureVisual() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_35%),linear-gradient(180deg,#09111b,#07101a)] p-6 shadow-[0_40px_110px_rgba(0,0,0,0.35)]">
      <div className="pulse-orbit absolute left-1/4 top-8 h-20 w-20 rounded-full bg-cyan-300/8 blur-2xl" />
      <div className="pulse-orbit absolute bottom-10 right-16 h-24 w-24 rounded-full bg-sky-400/10 blur-2xl [animation-delay:1.8s]" />
      <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr_1fr]">
        <div className="space-y-4 rounded-[24px] border border-cyan-400/20 bg-cyan-400/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Control layer</p>
          <h3 className="text-xl font-semibold text-white">Orchestrator / executive intent</h3>
          <p className="text-sm leading-6 text-slate-300">
            Defines workflow boundaries, enforces policy, chooses provider strategy, and preserves the overall execution trace.
          </p>
        </div>
        <div className="space-y-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand)]">Department layer</p>
          <h3 className="text-xl font-semibold text-white">Managers coordinate departments</h3>
          <p className="text-sm leading-6 text-slate-300">
            Research, content, support, or internal operations can each own tasks and route them to the right workers.
          </p>
        </div>
        <div className="space-y-4 rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand)]">Execution layer</p>
          <h3 className="text-xl font-semibold text-white">Workers invoke skills and emit outputs</h3>
          <p className="text-sm leading-6 text-slate-300">
            Skills, tools, memory adapters, and trace hooks turn a workflow into inspectable operational infrastructure.
          </p>
        </div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-center">
        {["CEO / Orchestrator", "Department Manager", "Worker Agents", "Skills / Outputs"].map((label, index) => (
          <div key={label} className="contents">
            <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0e1724] px-4 py-5 text-center text-sm font-medium text-white shimmer-line">
              {label}
            </div>
            {index < 3 ? <div className="hidden h-px bg-gradient-to-r from-cyan-300/0 via-cyan-300/80 to-cyan-300/0 md:block" /> : null}
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">Policies</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Govern run size, approval gates, and fallback behavior.</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">Memory interfaces</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Persist shared state without fusing storage into agent behavior.</p>
        </div>
        <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">Trace hooks</p>
          <p className="mt-2 text-sm leading-6 text-slate-400">Preserve chronology, actor flow, and review checkpoints.</p>
        </div>
      </div>
    </div>
  );
}
