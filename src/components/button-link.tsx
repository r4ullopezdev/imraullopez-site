import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "border border-cyan-200/70 bg-[#f3fbff] text-[#06111c] shadow-[0_18px_50px_rgba(125,211,252,0.2)] hover:bg-white",
  secondary:
    "border border-cyan-300/35 bg-[#0c1828] text-white hover:border-cyan-200/80 hover:bg-[#132338]",
  ghost:
    "border border-white/14 bg-white/[0.03] text-slate-200 hover:border-white/25 hover:bg-white/[0.06]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
