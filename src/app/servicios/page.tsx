import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { siteConfig, coreServices } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Servicios | IA, automatización, agentes, funnels y sistemas para empresas",
  "Servicios de Infraestructura IA: agentes IA, automatización de procesos, seguimiento comercial, integraciones, chatbots, desarrollo web y consultoría IA para empresas.",
  "/servicios",
);

export default function ServicesPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Servicios"
        title="Sistemas IA y automatizaciones diseñados para vender más, ahorrar tiempo y operar mejor."
        description="Construyo soluciones a medida para empresas que tienen procesos repetitivos, seguimiento lento, mala integración entre herramientas o dependencia excesiva de trabajo manual."
        primaryCta={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
        secondaryCta={{ href: "/contacto", label: "Hablar de tu caso" }}
      />

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Oferta principal"
            title="Cada servicio está pensado como sistema de negocio, no como tarea suelta."
            description="Parto del problema, diseño la solución, conecto herramientas y aterrizo el beneficio para el negocio."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {coreServices.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Si ya sabes dónde está el cuello de botella, puedo ayudarte a convertirlo en sistema."
        text="Si todavía no está claro qué automatizar primero, el diagnóstico sirve precisamente para priorizar lo que más retorno puede darte."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
        secondary={{ href: "/lp/automatizacion-7-dias", label: "Ver landing de 7 días" }}
      />
    </div>
  );
}
