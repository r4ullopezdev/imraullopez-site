import { Badge } from "./badge";
import { ButtonLink } from "./button-link";
import { Container } from "./container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string; external?: boolean };
  secondaryCta?: { href: string; label: string; external?: boolean };
  aside?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] glow-accent" />
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="animate-fade-up space-y-7">
            <Badge>{eyebrow}</Badge>
            <div className="space-y-5">
              <h1 className="max-w-5xl text-balance text-4xl font-semibold tracking-tight text-copy sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                {title}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
                {description}
              </p>
            </div>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
                {primaryCta ? (
                  <ButtonLink href={primaryCta.href} external={primaryCta.external}>
                    {primaryCta.label}
                  </ButtonLink>
                ) : null}
                {secondaryCta ? (
                  <ButtonLink
                    href={secondaryCta.href}
                    external={secondaryCta.external}
                    variant="secondary"
                  >
                    {secondaryCta.label}
                  </ButtonLink>
                ) : null}
              </div>
            )}
          </div>
          {aside ? aside : null}
        </div>
      </Container>
    </section>
  );
}
