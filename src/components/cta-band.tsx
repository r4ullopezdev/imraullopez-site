import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { GlassPanel } from "./glass-panel";

type CtaBandProps = {
  title: string;
  text: string;
  primary: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
};

export function CtaBand({ title, text, primary, secondary }: CtaBandProps) {
  return (
    <section className="pt-24">
      <Container>
        <GlassPanel className="overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-8 text-slate-300">
                {text}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={primary.href} external={primary.external}>
                {primary.label}
              </ButtonLink>
              {secondary ? (
                <ButtonLink
                  href={secondary.href}
                  external={secondary.external}
                  variant="secondary"
                >
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </GlassPanel>
      </Container>
    </section>
  );
}
