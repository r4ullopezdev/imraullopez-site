import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { coreServices, offerLadder, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Servicios | Infraestructura digital con IA, automatización y agentes",
  "Servicios de Infraestructura IA: agentes IA, automatización de procesos, seguimiento comercial, integraciones, chatbots, desarrollo web y consultoría IA para empresas.",
  "/servicios",
);

export default function ServicesPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Servicios"
        title="Sistemas de IA y automatización diseñados para vender más y operar mejor."
        description="Construimos soluciones a medida para empresas con procesos repetitivos, seguimiento lento, herramientas desconectadas o demasiada dependencia del trabajo manual."
        primaryCta={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico", external: true }}
        secondaryCta={{ href: "/contacto", label: "Hablar de tu caso" }}
      />

      {/* OFFER LADDER */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Planes y precios"
            title="Empieza midiendo, instala los cimientos y escala cuando el negocio lo pida."
            description="Un camino claro y sin sorpresas. El diagnóstico es la puerta de entrada de bajo riesgo; los proyectos se cotizan sobre lo que realmente necesitas."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {offerLadder.map((offer) => (
              <PricingCard key={offer.name} offer={offer} />
            ))}
          </div>
          <p className="text-center text-sm text-faint">
            El importe del diagnóstico ($149) se descuenta íntegramente si
            contratas un proyecto dentro de 30 días.
          </p>
        </Container>
      </section>

      {/* CAPABILITIES */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Capacidades"
            title="Cada servicio es un sistema de negocio, no una tarea suelta."
            description="Partimos del problema, diseñamos la solución, conectamos herramientas y aterrizamos el beneficio para el negocio."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {coreServices.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="¿No sabes qué automatizar primero? El diagnóstico lo resuelve."
        text="Medimos tu empresa, priorizamos por retorno y te decimos exactamente cuál es el primer sistema que deberías construir."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico", external: true }}
        secondary={{ href: "/lp/diagnostico-ia", label: "Ver el diagnóstico" }}
      />
    </div>
  );
}
