import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-[#e6ddd1] bg-white p-6 shadow-[0_20px_70px_rgba(22,34,55,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
