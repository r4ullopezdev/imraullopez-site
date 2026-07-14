import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { GlassPanel } from "@/components/glass-panel";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = {
  ...buildMetadata(
    "Pago confirmado — agenda tu Diagnóstico Estratégico IA™",
    "Tu diagnóstico está pagado. Elige el día y la hora de tu sesión de 45 minutos.",
    "/lp/diagnostico-ia/gracias",
  ),
  robots: { index: false, follow: false },
};

const pasos = [
  {
    n: "1",
    t: "Agenda tu sesión (ahora)",
    d: "Elige el día y la hora que te sirvan en el calendario de abajo. Son 45 minutos por videollamada.",
  },
  {
    n: "2",
    t: "Te llega la confirmación",
    d: "Recibirás el recibo de tu pago y la invitación con el enlace de la videollamada en tu correo.",
  },
  {
    n: "3",
    t: "Recibes tu informe en 24 h",
    d: "Tras la sesión te enviamos tu AI Infrastructure Score™, tus 3 fugas principales y el plan por escrito.",
  },
];

export default function GraciasDiagnostico() {
  return (
    <div className="pb-24 pt-16 sm:pt-24">
      <Container className="max-w-3xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-3xl text-accent">
          ✓
        </span>
        <h1 className="mt-7 text-4xl font-semibold leading-tight text-copy sm:text-5xl">
          Pago confirmado. Ya solo falta un paso.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted">
          Tu Diagnóstico Estratégico IA™ está reservado.{" "}
          <span className="font-semibold text-copy">Agenda ahora tu sesión de 45 minutos</span> — es lo único
          que necesitamos de ti.
        </p>

        <div className="mt-9">
          <ButtonLink href={siteConfig.calendlyUrl} external className="px-8 py-4 text-base">
            Agendar mi sesión de 45 minutos
          </ButtonLink>
          <p className="mt-3 text-xs text-muted">Elige el horario que te sirva. Puedes cambiarlo después.</p>
        </div>
      </Container>

      <Container className="mt-16 max-w-3xl">
        <GlassPanel className="p-8">
          <h2 className="text-xl font-semibold text-copy">Qué pasa a partir de ahora</h2>
          <ol className="mt-6 space-y-6">
            {pasos.map((p) => (
              <li key={p.n} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-sm font-bold text-accent">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-semibold text-copy">{p.t}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 border-t border-line pt-6 text-sm leading-7 text-muted">
            ¿Alguna duda o problema con el pago? Escríbenos a{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium text-accent hover:underline">
              {siteConfig.email}
            </a>{" "}
            y te respondemos el mismo día.
          </p>
        </GlassPanel>
      </Container>
    </div>
  );
}
