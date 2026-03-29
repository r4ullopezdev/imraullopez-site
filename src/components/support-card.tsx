import { Badge } from "./badge";

type SupportCardProps = {
  title?: string;
  description: string;
  href: string;
  compact?: boolean;
};

export function SupportCard({
  title = "Support the work",
  description,
  href,
  compact = false,
}: SupportCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-emerald-300/16 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] ${
        compact ? "p-5" : "p-7"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200/60 to-transparent" />
      <div className="relative space-y-4">
        <Badge>Donations</Badge>
        <div className="space-y-3">
          <h3 className={`${compact ? "text-xl" : "text-2xl"} font-semibold tracking-tight text-white`}>{title}</h3>
          <p className="max-w-xl text-sm leading-7 text-slate-300">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Donate via PayPal
          </a>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300">
            paypal.me/imraullopezpty
          </span>
        </div>
      </div>
    </div>
  );
}
