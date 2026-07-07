import { GlassPanel } from "./glass-panel";

type BulletGridProps = {
  items: string[];
  columns?: string;
};

export function BulletGrid({
  items,
  columns = "md:grid-cols-2 xl:grid-cols-3",
}: BulletGridProps) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {items.map((item) => (
        <GlassPanel key={item} className="h-full p-5">
          <div className="flex gap-3">
            <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-cyan-400/15 text-xs font-semibold text-cyan-200">
              +
            </span>
            <p className="text-sm leading-7 text-slate-200">{item}</p>
          </div>
        </GlassPanel>
      ))}
    </div>
  );
}
