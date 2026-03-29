export function NanoHeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(96,165,250,0.18),transparent_35%),linear-gradient(180deg,#08111a,#07101a)] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      <div className="relative grid gap-5 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 rounded-[28px] border border-white/10 bg-[#0c1522]/80 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Operational topology</p>
          <div className="space-y-3">
            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-white">Executive intent / orchestrator</div>
            <div className="pl-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white">Research Department Manager</div>
            </div>
            <div className="grid gap-3 pl-12 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">Market Research Worker</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">Report Writer</div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand)]">Infrastructure seams</p>
            <div className="mt-4 grid gap-3">
              {["Skills", "Policies", "Memory", "Trace hooks", "Human checkpoints"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-[#101927] px-4 py-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-sand)]">Run artifacts</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-[#101927] px-4 py-3">Markdown report</div>
              <div className="rounded-2xl border border-white/10 bg-[#101927] px-4 py-3">JSON trace</div>
              <div className="rounded-2xl border border-white/10 bg-[#101927] px-4 py-3">Visual inspector</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
