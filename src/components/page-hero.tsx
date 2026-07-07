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
    <section className="pt-20 sm:pt-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-7">
            <Badge>{eyebrow}</Badge>
            <div className="space-y-5">
              <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-3xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                {description}
              </p>
            </div>
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4">
                {primaryCta ? (
                  <ButtonLink
                    href={primaryCta.href}
                    external={primaryCta.external}
                  >
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
