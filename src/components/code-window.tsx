type CodeWindowProps = {
  title: string;
  code: string;
};

export function CodeWindow({ title, code }: CodeWindowProps) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#08121f] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs uppercase tracking-[0.22em] text-slate-400">{title}</span>
      </div>
      <pre className="overflow-x-auto px-5 py-6 text-sm leading-7 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

