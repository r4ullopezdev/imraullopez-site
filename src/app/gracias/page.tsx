import Link from "next/link";
import { Container } from "@/components/container";
import { GlassPanel } from "@/components/glass-panel";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata(
  "Gracias | He recibido tu solicitud",
  "Página de confirmación tras enviar una solicitud de Diagnóstico Estratégico IA con Infraestructura IA.",
  "/gracias",
);

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const company =
    typeof params.empresa === "string" ? params.empresa : "tu empresa";

  return (
    <div className="pb-24 pt-24">
      <Container className="max-w-4xl">
        <GlassPanel className="space-y-6 p-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Solicitud recibida
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Gracias. Ya tengo el contexto inicial de {company}.
          </h1>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-8 text-slate-300">
            Revisaré tu solicitud con foco en impacto real. Si veo encaje,
            el siguiente paso será un diagnóstico donde priorizaremos el
            sistema con mejor retorno para implementar primero.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-200/70 bg-[#f3fbff] px-5 py-3 text-sm font-semibold text-[#06111c] transition hover:bg-white"
            >
              Reservar llamada ahora
            </a>
            <Link
              href="/"
              className="rounded-full border border-white/14 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              Volver al inicio
            </Link>
          </div>
        </GlassPanel>
      </Container>
    </div>
  );
}
