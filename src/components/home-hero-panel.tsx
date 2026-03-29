export function HomeHeroPanel() {
  return (
    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_35%),linear-gradient(180deg,#0b1321,#08111b)] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />
      <div className="pulse-orbit absolute left-6 top-8 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
      <div className="pulse-orbit absolute bottom-8 right-10 h-28 w-28 rounded-full bg-blue-400/10 blur-2xl [animation-delay:1s]" />
      <div className="relative space-y-5">
        <div className="float-slow rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Current focus</p>
          <h2 className="mt-4 text-2xl font-semibold text-white">NANO Agent Stack</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            A modular ecosystem for organizations-as-systems: departments, managers, workers, skills, trace hooks, and human checkpoints for serious agentic workflows.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-white">Open-source ecosystem</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Core runtime, skills, templates, observability, docs, and benchmark harness.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <p className="text-sm font-semibold text-white">Builder positioning</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">Developer-oriented architecture with a premium presentation layer for collaborators and evaluators.</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {["orchestration", "observability", "human checkpoints"].map((item, index) => (
            <div
              key={item}
              className={`rounded-full border border-white/10 bg-[#0f1826] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 ${
                index === 1 ? "float-slower" : "float-slow"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
