import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-line bg-surface p-6 shadow-[0_1px_3px_rgba(24,20,15,0.05),0_18px_44px_-26px_rgba(24,20,15,0.16)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
