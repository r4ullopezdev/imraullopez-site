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
    "border border-[#0e2b47] bg-[#102c46] text-white shadow-[0_18px_40px_rgba(16,44,70,0.18)] hover:bg-[#0c2439]",
  secondary:
    "border border-[#cdd7e4] bg-white text-[#102033] hover:border-[#9db5d1] hover:bg-[#f8fbff]",
  ghost:
    "border border-[#d8d2c8] bg-[#fffaf3] text-[#5a6472] hover:border-[#c0b6a8] hover:bg-white",
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
