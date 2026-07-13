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
        <GlassPanel key={item} className="card-hover h-full p-5">
          <div className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-accent/30 bg-accent/12 text-xs font-semibold text-accent">
              ✓
            </span>
            <p className="text-sm leading-7 text-copy/85">{item}</p>
          </div>
        </GlassPanel>
      ))}
    </div>
  );
}
