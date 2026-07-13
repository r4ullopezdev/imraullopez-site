import { BulletGrid } from "@/components/bullet-grid";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { GlassPanel } from "@/components/glass-panel";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { faqs, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Automatiza el trabajo repetitivo de tu empresa en 7 días",
  "Landing de captación para empresas que quieren automatizar tareas administrativas y operativas en 7 días con IA y automatización a medida.",
  "/lp/automatizacion-7-dias",
);

const benefits = [
  "Menos carga administrativa para tu equipo.",
  "Procesos internos más rápidos y menos dependientes de recordatorios humanos.",
  "Integración entre formularios, correo, CRM, WhatsApp y documentos.",
  "Una primera versión funcional en días, no meses.",
];

const objections = [
  "No necesito cambiar todo de golpe: empezamos por el cuello de botella con mejor retorno.",
  "No hace falta que tengas un stack perfecto: también trabajo sobre procesos desordenados para ordenarlos.",
  "No vendo experimentos: si no veo impacto real posible, lo digo desde el principio.",
];

export default function Automation7DaysPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Landing de captación"
        title="Automatiza el trabajo repetitivo de tu empresa en 7 días."
        description="Si tu equipo está atrapado entre tareas manuales, seguimiento disperso y operación lenta, puedo diseñar e implementar un sistema que reduzca fricción y ahorre horas desde la primera semana."
        primaryCta={{ href: "#form", label: "Agendar diagnóstico IA" }}
        secondaryCta={{ href: siteConfig.calendlyUrl, label: "Hablar ahora", external: true }}
        aside={<LeadForm source="landing-7-dias" compact />}
      />

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Dolor claro"
            title="Tu equipo no debería seguir copiando, persiguiendo y recordando tareas todo el día."
            description="Cuando una empresa crece sin mejores sistemas, se llena de microtareas manuales, tiempos muertos y dependencia excesiva de personas para cosas repetitivas."
          />
          <BulletGrid items={benefits} columns="md:grid-cols-1" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Oferta"
            title="Implementación rápida orientada a impacto."
            description="Analizo el proceso, conecto herramientas, construyo la automatización o el agente y dejo una primera versión lista para usarse."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Paso 1", "Detecto la tarea repetitiva con mayor coste operativo."],
              ["Paso 2", "Diseño el flujo, las integraciones y la lógica de decisión."],
              ["Paso 3", "Implemento, pruebo y entrego una versión funcional."],
            ].map(([title, text]) => (
              <GlassPanel key={title} className="p-6">
                <h3 className="text-xl font-semibold text-copy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{text}</p>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Casos de uso"
            title="Qué tipo de trabajo repetitivo puedo sustituir."
            description="La idea no es automatizar por automatizar. Es liberar a tu equipo de trabajo de bajo valor."
          />
          <BulletGrid
            items={[
              "Seguimiento interno y recordatorios.",
              "Reportes y consolidación de datos.",
              "Actualización de CRM o bases de datos.",
              "Atención inicial de leads o clientes.",
              "Clasificación de solicitudes y tareas.",
              "Flujos de aprobación y documentación.",
            ]}
          />
        </Container>
      </section>

      <section id="form" className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Objeciones"
            title="Trabajo con empresas que quieren ejecutar, no solo hablar de IA."
            description="Si buscas una implementación real con criterio y velocidad, esta oferta está diseñada para ti."
          />
          <div className="space-y-4">
            <BulletGrid items={objections} columns="md:grid-cols-1" />
            <LeadForm source="landing-7-dias-form" />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Lo importante es mover una parte real de la operación."
            description="Estas son las preguntas que más suelen aparecer antes de arrancar."
          />
          <FaqList items={faqs} />
        </Container>
      </section>

      <CtaBand
        title="Si cada semana estás pagando horas de trabajo manual que un sistema puede absorber, este es el momento de corregirlo."
        text="Agenda un diagnóstico y te diré en qué proceso veo el mayor retorno en el menor tiempo."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
      />
    </div>
  );
}
