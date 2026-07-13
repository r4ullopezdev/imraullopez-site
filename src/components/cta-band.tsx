import { ButtonLink } from "./button-link";
import { Container } from "./container";

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
        <div className="relative overflow-hidden rounded-[28px] border border-accent/25 bg-[linear-gradient(135deg,rgba(45,212,191,0.10),rgba(34,211,238,0.04)_45%,rgba(16,21,31,0.9))] p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-4">
              <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-copy sm:text-4xl">
                {title}
              </h2>
              <p className="max-w-2xl text-pretty text-base leading-8 text-muted">
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
        </div>
      </Container>
    </section>
  );
}
