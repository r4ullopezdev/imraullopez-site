import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-line bg-surface p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03),0_24px_60px_-32px_rgba(0,0,0,0.85)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
