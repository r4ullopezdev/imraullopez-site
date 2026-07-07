import { BulletGrid } from "@/components/bullet-grid";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata(
  "Tu equipo no necesita trabajar más horas. Necesita mejores sistemas.",
  "Landing orientada a empresas con procesos repetitivos que necesitan automatización administrativa, reportes, flujos internos, dashboards y sistemas conectados.",
  "/lp/automatizacion-interna",
);

export default function InternalAutomationLandingPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Landing de automatización interna"
        title="Tu equipo no necesita trabajar más horas. Necesita mejores sistemas."
        description="Si tu operación sigue dependiendo de seguimiento manual, reportes tardíos, tareas repetitivas y herramientas desconectadas, puedo ayudarte a reestructurarla con automatización e IA."
        primaryCta={{ href: "#form", label: "Agendar diagnóstico IA" }}
        secondaryCta={{ href: "/servicios", label: "Ver servicios" }}
        aside={<LeadForm source="landing-automatizacion-interna" compact />}
      />

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Qué tipo de solución"
            title="Automatización administrativa, flujos internos y visibilidad operativa."
            description="Aquí el foco es reducir fricción interna y liberar tiempo valioso del equipo."
          />
          <BulletGrid
            items={[
              "Reportes automáticos y dashboards.",
              "Notificaciones y alertas operativas.",
              "Gestión documental y flujos de aprobación.",
              "Sistemas de seguimiento interno.",
              "Integración entre herramientas existentes.",
              "Agentes conectados a información y procesos de la empresa.",
            ]}
          />
        </Container>
      </section>

      <section id="form" className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Resultado"
            title="Menos caos operativo. Más control y más capacidad para ejecutar."
            description="La automatización interna correcta no solo ahorra tiempo. También reduce errores, mejora seguimiento y ordena la empresa."
          />
          <LeadForm source="landing-automatizacion-interna-form" />
        </Container>
      </section>

      <CtaBand
        title="Si tu operación depende demasiado de personas haciendo tareas repetitivas, el siguiente paso es rediseñar el sistema."
        text="Puedo ayudarte a construir una primera capa de automatización útil y escalable sin frenar la operación actual."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
      />
    </div>
  );
}
