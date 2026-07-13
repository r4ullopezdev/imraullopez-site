import type { Offer } from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./button-link";

export function PricingCard({ offer }: { offer: Offer }) {
  const { name, price, priceNote, tagline, features, cta, highlight, badge } =
    offer;

  return (
    <div
      className={cn(
        "card-hover reveal relative flex h-full flex-col rounded-[22px] border p-7",
        highlight
          ? "border-accent/40 bg-[linear-gradient(180deg,rgba(13,148,136,0.06),#ffffff)] shadow-[0_30px_70px_-40px_rgba(13,148,136,0.45)]"
          : "border-line bg-surface shadow-[0_1px_3px_rgba(24,20,15,0.05),0_18px_44px_-26px_rgba(24,20,15,0.16)]",
      )}
    >
      {badge ? (
        <span
          className={cn(
            "absolute -top-3 left-7 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]",
            highlight
              ? "bg-accent text-white shadow-[0_6px_20px_-6px_rgba(13,148,136,0.6)]"
              : "border border-line bg-surface-2 text-muted",
          )}
        >
          {badge}
        </span>
      ) : null}

      <h3 className="text-xl font-semibold text-copy">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{tagline}</p>

      <div className="mt-5 flex items-end gap-2">
        <span className="text-4xl font-bold tracking-tight text-gold">
          {price}
        </span>
      </div>
      <p className="mt-1 text-xs text-faint">{priceNote}</p>

      <ul className="mt-6 space-y-3 border-t border-line-soft pt-6">
        {features.map((f) => (
          <li key={f} className="flex gap-3 text-sm leading-6 text-copy/85">
            <span className="mt-0.5 flex-none text-accent">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 pt-1">
        <ButtonLink
          href={cta.href}
          external={cta.external}
          variant={highlight ? "primary" : "secondary"}
          className="w-full"
        >
          {cta.label}
        </ButtonLink>
      </div>
    </div>
  );
}
