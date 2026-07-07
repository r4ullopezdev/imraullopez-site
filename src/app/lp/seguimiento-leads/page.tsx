import { BulletGrid } from "@/components/bullet-grid";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/site";

export const metadata = buildMetadata(
  "Deja de perder clientes por responder tarde o hacer seguimiento manual",
  "Landing para empresas de servicios que quieren responder leads más rápido, clasificarlos mejor, agendar reuniones y automatizar seguimiento comercial.",
  "/lp/seguimiento-leads",
);

export default function LeadsLandingPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Landing para empresas de servicios"
        title="Deja de perder clientes por responder tarde o hacer seguimiento manual."
        description="Diseño sistemas de IA y automatización para abogados, clínicas, consultores, inmobiliarias, agencias y equipos comerciales que no pueden seguir perdiendo leads por lentitud operativa."
        primaryCta={{ href: "#form", label: "Agendar diagnóstico IA" }}
        secondaryCta={{ href: "/contacto", label: "Hablar de tu caso" }}
        aside={<LeadForm source="landing-seguimiento-leads" compact />}
      />

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Qué vende esta landing"
            title="Sistemas que responden, clasifican, agendan y siguen sin perseguir todo manualmente."
            description="Si cada lead depende de que alguien vea el mensaje, conteste, recuerde seguir y actualice CRM, ya vas tarde."
          />
          <BulletGrid
            items={[
              "Respuesta inmediata por WhatsApp, email o formulario.",
              "Calificación automática de leads según interés, urgencia o presupuesto.",
              "Agendado de reuniones y envío de recordatorios.",
              "Secuencias de seguimiento para leads que no responden.",
              "Actualización de CRM sin copiar y pegar.",
              "Alertas al equipo comercial cuando un lead vale la pena.",
            ]}
          />
        </Container>
      </section>

      <section id="form" className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Beneficio de negocio"
            title="Más velocidad comercial. Menos leads perdidos. Mejor seguimiento."
            description="No se trata de meter un chatbot por moda. Se trata de cerrar mejor el hueco entre captación, respuesta y seguimiento."
          />
          <LeadForm source="landing-seguimiento-leads-form" />
        </Container>
      </section>

      <CtaBand
        title="Si tus leads se enfrían antes de que tu equipo actúe, el problema no es de tráfico. Es de sistema."
        text="Puedo ayudarte a construir el sistema comercial que falta entre la llegada del lead y la conversación útil."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
      />
    </div>
  );
}
