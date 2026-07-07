import { BulletGrid } from "@/components/bullet-grid";
import { ButtonLink } from "@/components/button-link";
import { CaseStudyCard } from "@/components/case-study-card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { GlassPanel } from "@/components/glass-panel";
import { LeadForm } from "@/components/lead-form";
import { MetricCard } from "@/components/metric-card";
import { ProcessStep } from "@/components/process-step";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  featuredProjects,
  outcomes,
  painPoints,
  process7Days,
  siteConfig,
  testimonials,
  trustBadges,
  whyRaul,
} from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Raúl López | IA y automatización para empresas que quieren ejecutar mejor",
  "Diseño agentes de IA, automatizaciones, funnels y sistemas operativos para empresas que quieren ahorrar tiempo, responder más rápido y crecer con mejores procesos.",
  "/",
);

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Arquitecto de soluciones IA / automatización / sistemas comerciales
              </div>
              <div className="space-y-5">
                <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  {siteConfig.heroMessage}
                </h1>
                <p className="max-w-3xl text-pretty text-xl leading-9 text-slate-300">
                  Diseño agentes de IA, automatizaciones, funnels y sistemas
                  conectados a tus herramientas para reducir trabajo manual,
                  responder antes y operar con más velocidad.
                </p>
                <p className="max-w-2xl text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/90">
                  {siteConfig.authorityLine}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href={siteConfig.calendlyUrl} external>
                  Agendar diagnóstico IA
                </ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary">
                  Ver proyectos
                </ButtonLink>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {trustBadges.map((badge) => (
                  <GlassPanel key={badge} className="p-4">
                    <p className="text-sm font-medium text-slate-200">{badge}</p>
                  </GlassPanel>
                ))}
              </div>
            </div>
            <LeadForm source="home-hero" />
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-4 md:grid-cols-3">
          <MetricCard
            value="30 % - 60 %"
            label="Trabajo repetitivo sustituible"
            description="Procesos administrativos, seguimiento y tareas internas que pueden salir del equipo humano."
          />
          <MetricCard
            value="7 días"
            label="Primera implementación"
            description="Trabajo para dejar un sistema funcionando rápido y luego optimizar con datos reales."
          />
          <MetricCard
            value="$1.500 - $10.000+"
            label="Rango de proyecto"
            description="Trabajo con empresas que quieren implementación real, no pruebas vacías."
          />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Problemas que resuelvo"
            title="La mayoría de empresas no necesita más personas para todo. Necesita mejores sistemas."
            description="Estos son algunos de los puntos donde normalmente encuentro más tiempo perdido, respuesta lenta o dependencia excesiva de procesos manuales."
          />
          <BulletGrid items={painPoints} />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Resultados que puedo generar"
            title="No vendo tecnología por moda. Construyo sistemas que ahorran horas, reducen errores y aceleran ingresos."
            description="El objetivo siempre es mover una métrica operativa o comercial: menos fricción, más velocidad, mejor conversión o más control."
          />
          <BulletGrid items={outcomes} columns="md:grid-cols-2" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Agentes de IA"
            title="Construyo agentes de IA que trabajan como empleados digitales."
            description="No como demos genéricas, sino como sistemas con tareas, reglas, herramientas, memoria e integración con tu flujo real de trabajo."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-white">Captan y siguen leads</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Responden, clasifican, agendan, recuerdan y empujan el lead
                hacia el siguiente paso sin que tu equipo persiga todo manualmente.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-white">Ejecutan tareas internas</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Generan reportes, mueven información, notifican, validan datos
                y reducen carga administrativa repetitiva.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-white">Conectan herramientas</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Formularios, WhatsApp, email, CRM, dashboards, bases de datos,
                documentos y APIs trabajando como un solo sistema.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-white">Escalan con control</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Diseñados para dar trazabilidad, velocidad operativa y menos
                dependencia de personas para microtareas repetidas.
              </p>
            </GlassPanel>
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Proyectos destacados"
            title="Casos que prueban ejecución tecnológica y criterio de negocio."
            description="No presento los proyectos solo como desarrollo. Los presento como sistemas, producto, operaciones y crecimiento."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.title} {...project} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Por qué yo"
            title="Combino IA, automatización, marketing, ventas y experiencia real operando negocios."
            description="Eso cambia la forma de construir. No pienso solo como desarrollador. Pienso como alguien que entiende tiempo, cuello de botella, conversión, operación y margen."
          />
          <BulletGrid items={whyRaul} columns="md:grid-cols-1" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Proceso en 7 días"
            title="En una semana puedes tener un sistema funcionando, no una presentación bonita."
            description="La lógica es simple: detectar impacto rápido, implementar una primera versión útil y mejorar desde uso real."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {process7Days.map((step) => (
              <ProcessStep
                key={step.day}
                step={step.day}
                title={step.title}
                text={step.text}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Testimonios"
            title="Espacio preparado para prueba social orientada a resultados."
            description="La prueba social correcta aquí no es “me gustó trabajar con él”. Es ahorro de tiempo, mejor seguimiento, mejor operación y velocidad de ejecución."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Si tu empresa está perdiendo tiempo en tareas repetitivas, leads fríos o procesos manuales, podemos arreglarlo."
        text="Trabajo con empresas que quieren implementar soluciones reales de IA y automatización. Si buscas velocidad, criterio y sistema, agenda un diagnóstico."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
        secondary={{ href: "/contacto", label: "Ir a contacto" }}
      />
    </div>
  );
}
