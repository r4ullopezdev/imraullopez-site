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
            <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#eef4fb] text-xs font-semibold text-[#0f3559]">
              +
            </span>
            <p className="text-sm leading-7 text-[#334155]">{item}</p>
          </div>
        </GlassPanel>
      ))}
    </div>
  );
}
