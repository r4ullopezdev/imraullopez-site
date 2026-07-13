import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const variants = {
  primary:
    "bg-accent text-[color:var(--color-accent-ink)] shadow-[0_10px_40px_-10px_rgba(45,212,191,0.6)] hover:bg-accent-2 hover:shadow-[0_14px_50px_-8px_rgba(45,212,191,0.7)]",
  secondary:
    "border border-line bg-white/[0.02] text-copy hover:border-accent/50 hover:bg-white/[0.05]",
  ghost: "text-muted hover:text-copy",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

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
