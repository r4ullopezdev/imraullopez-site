import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { GlassPanel } from "@/components/glass-panel";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Portfolio | Casos de negocio, IA aplicada y ejecución operativa",
  "Portfolio de Infraestructura IA: proyectos tecnológicos, automatizaciones empresariales, IA aplicada, funnels y experiencia real operando negocios.",
  "/portfolio",
);

const highlightCases = [
  {
    title: "Presencia y captación digital",
    label: "Más leads, menos fugas",
    summary:
      "Webs, landings y funnels que hacen que la empresa aparezca cuando la buscan y conviertan visitas en oportunidades medibles.",
    impact: [
      "Aparecer cuando te buscan",
      "Leads calificados, no ruido",
      "Todo medible desde el primer clic",
    ],
  },
  {
    title: "Automatización de operaciones",
    label: "Menos trabajo manual",
    summary:
      "Sistemas que mueven datos, disparan alertas, generan reportes y quitan de manos humanas las tareas repetitivas del día a día.",
    impact: [
      "Menos tareas repetitivas",
      "Procesos con trazabilidad",
      "El equipo enfocado en lo importante",
    ],
  },
  {
    title: "IA aplicada a ventas",
    label: "Seguimiento que no se pierde",
    summary:
      "Agentes y automatizaciones conectados a CRM, WhatsApp y correo que responden, califican y dan seguimiento sin que nadie lo olvide.",
    impact: [
      "Respuesta inmediata a cada lead",
      "Seguimiento automático",
      "CRM siempre actualizado",
    ],
  },
];

const additionalCases = [
  {
    title: "Automatizaciones empresariales",
    text: "Sistemas para reducir trabajo administrativo, mover datos, disparar alertas, generar reportes y mantener actualizados procesos clave.",
  },
  {
    title: "Chatbots con voz y asistentes",
    text: "Experiencias de texto y voz conectadas a knowledge bases, agendas, formularios y operaciones comerciales.",
  },
  {
    title: "Webs, funnels y plataformas",
    text: "Landings y webs diseñadas para captar demanda, filtrar leads y llevarlos hacia acciones medibles.",
  },
  {
    title: "Sistemas internos de gestión",
    text: "Flujos internos, aprobación, documentación, seguimiento y dashboards para equipos que necesitan operar con más orden.",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Portfolio"
        title="Presento proyectos como casos de negocio, no solo como trabajos técnicos."
        description="Lo que me interesa demostrar no es solo que sé construir, sino que sé construir sistemas que encajan con crecimiento, ventas y operación."
        primaryCta={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
        secondaryCta={{ href: "/contacto", label: "Hablar de un proyecto" }}
      />

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Casos destacados"
            title="Producto propio, IA aplicada y experiencia real de operación."
            description="Este mix me posiciona más cerca de un arquitecto de soluciones de negocio que de un freelancer técnico tradicional."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {highlightCases.map((item) => (
              <CaseStudyCard key={item.title} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Más trabajo aplicable"
            title="Otras categorías de proyectos donde puedo aportar valor rápido."
            description="Desde captación hasta operación interna, el punto es construir sistemas donde antes había fricción."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {additionalCases.map((item) => (
              <GlassPanel key={item.title} className="p-7">
                <h3 className="text-2xl font-semibold text-copy">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Si quieres que tu próximo proyecto se piense como sistema de negocio y no como pieza aislada, agenda una llamada."
        text="Puedo ayudarte tanto a capturar demanda como a ordenar la operación que viene después."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
      />
    </div>
  );
}
