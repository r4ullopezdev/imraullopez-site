import { Badge } from "@/components/badge";
import { BulletGrid } from "@/components/bullet-grid";
import { ButtonLink } from "@/components/button-link";
import { CaseStudyCard } from "@/components/case-study-card";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { GlassPanel } from "@/components/glass-panel";
import { MetricCard } from "@/components/metric-card";
import { PricingCard } from "@/components/pricing-card";
import { ProcessStep } from "@/components/process-step";
import { ScoreVisual } from "@/components/score-visual";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import {
  faqs,
  featuredProjects,
  offerLadder,
  outcomes,
  painPoints,
  siteConfig,
  testimonials,
  trustBadges,
} from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Infraestructura IA | IA, automatizacion y agentes para empresas que quieren crecer",
  "Construimos la infraestructura digital que tu empresa necesita: agentes de IA, automatizaciones, funnels y sistemas comerciales. Empezamos midiendo tu madurez con el AI Infrastructure Score.",
  "/",
);

const funnel = [
  {
    day: "01",
    title: "Diagnóstico",
    text: "En 45 min evaluamos tu empresa y calculamos tu AI Infrastructure Score™.",
  },
  {
    day: "02",
    title: "Roadmap",
    text: "Recibes un informe con tu puntuación y las 3 prioridades de mayor impacto.",
  },
  {
    day: "03",
    title: "Implementación",
    text: "Instalamos la infraestructura del Starter Setup en 7–10 días.",
  },
  {
    day: "04",
    title: "Escala",
    text: "Sumamos automatización, agentes y dirección IA cuando el negocio lo pide.",
  },
];

const agentCapabilities = [
  {
    title: "Captan y siguen leads",
    text: "Responden, califican, agendan y empujan cada lead al siguiente paso sin seguimiento manual.",
  },
  {
    title: "Ejecutan tareas internas",
    text: "Generan reportes, mueven información, validan datos y reducen la carga administrativa repetitiva.",
  },
  {
    title: "Conectan tus herramientas",
    text: "WhatsApp, email, CRM, formularios, dashboards y APIs funcionando como un solo sistema.",
  },
  {
    title: "Escalan con control",
    text: "Con trazabilidad y reglas, para que crezcas sin depender de personas para microtareas.",
  },
];

export default function HomePage() {
  return (
    <div className="pb-24">
      {/* HERO */}
      <section className="relative pt-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] glow-accent" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-7">
              <Badge>Infraestructura digital · IA · Automatización · Agentes</Badge>

              <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-copy sm:text-5xl lg:text-6xl">
                Deja de perder clientes por no tener la{" "}
                <span className="text-accent">infraestructura</span> de una
                empresa moderna.
              </h1>

              <p className="max-w-xl text-pretty text-lg leading-8 text-muted">
                Medimos tu empresa sobre 100 puntos con el AI Infrastructure
                Score™ y construimos los cimientos —web, captación, seguimiento,
                automatización y agentes de IA— para que crezcas con criterio.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <ButtonLink href={siteConfig.calendlyUrl} external>
                  Agendar diagnóstico
                </ButtonLink>
                <ButtonLink href="#oferta" variant="secondary">
                  Ver la oferta
                </ButtonLink>
                <span className="text-sm text-faint">
                  Diagnóstico{" "}
                  <span className="font-semibold text-gold">$149</span> · se
                  descuenta si avanzas
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-copy/70"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <ScoreVisual />
          </div>
        </Container>
      </section>

      {/* METRICS */}
      <section className="pt-24">
        <Container className="grid gap-4 md:grid-cols-3">
          <MetricCard
            value="10.000+"
            label="Usuarios en NANOTEC / NANO"
            description="Producto propio validado, con apoyo de Microsoft for Startups."
          />
          <MetricCard
            value="7–10 días"
            label="Entrega del Starter Setup"
            description="Infraestructura funcionando rápido, no en meses."
          />
          <MetricCard
            value="0–100"
            label="AI Infrastructure Score™"
            description="Medimos tu madurez digital antes de construir nada."
          />
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="El problema"
            title="Si esto pasa en tu empresa, estás dejando dinero sobre la mesa cada semana."
            description="La mayoría de las PYMEs no tiene un problema de esfuerzo, sino de infraestructura: piezas sueltas que no capturan, no siguen y no miden."
          />
          <BulletGrid items={painPoints} />
        </Container>
      </section>

      {/* METHOD / SCORE */}
      <section className="pt-24">
        <Container>
          <div className="grid gap-10 rounded-[28px] border border-line bg-surface/60 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <Badge>El método</Badge>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-copy sm:text-4xl">
                Todo empieza con un número: tu AI Infrastructure Score™.
              </h2>
              <p className="text-base leading-8 text-muted">
                Antes de venderte nada, medimos tu empresa en 10 categorías y te
                damos una puntuación de 0 a 100. Ese número te dice exactamente
                dónde pierdes clientes o tiempo, y el roadmap para subirlo.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink href="/lp/diagnostico-ia">
                  Cómo funciona el diagnóstico
                </ButtonLink>
                <ButtonLink href={siteConfig.calendlyUrl} external variant="secondary">
                  Agendar ahora
                </ButtonLink>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Presencia Digital",
                "Captación de Clientes",
                "Seguimiento Comercial",
                "Experiencia del Cliente",
                "Automatización",
                "Uso de IA",
                "Procesos Operativos",
                "Datos y Analítica",
                "Comunicación Interna",
                "Escalabilidad",
              ].map((c) => (
                <div
                  key={c}
                  className="rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm text-copy/80"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* OFFER LADDER */}
      <section id="oferta" className="scroll-mt-24 pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cómo trabajamos contigo"
            title="Una escalera clara: mide, instala los cimientos y escala."
            description="Empiezas con un diagnóstico de bajo riesgo. Si el número lo justifica, instalamos tu infraestructura y luego sumamos automatización y agentes."
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

      {/* OUTCOMES */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Resultados"
            title="El objetivo no es tener IA. Es operar con menos fricción y más rendimiento."
            description="Cada implementación mueve una métrica real: tiempo, velocidad comercial, calidad de seguimiento o capacidad operativa."
          />
          <BulletGrid items={outcomes} columns="md:grid-cols-2" />
        </Container>
      </section>

      {/* AGENTS */}
      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Agentes de IA"
            title="Agentes que trabajan como empleados digitales dentro de tu negocio."
            description="Con reglas, memoria, herramientas e integraciones. No un chatbot aislado, sino parte de tu flujo real."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {agentCapabilities.map((a) => (
              <GlassPanel key={a.title} className="card-hover p-6">
                <h3 className="text-lg font-semibold text-copy">{a.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{a.text}</p>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS / FUNNEL */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="El proceso"
            title="De diagnóstico a sistema, sin consultorías eternas."
            description="Un camino simple y medible, diseñado para mover una parte real de tu operación rápido."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {funnel.map((step) => (
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

      {/* AUTHORITY / PROOF */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Autoridad"
            title="Detrás de Infraestructura IA hay producto, ventas y operación real."
            description="No solo desarrollo. Experiencia construyendo tecnología propia, vendiendo y operando negocios."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.title} {...project} />
            ))}
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Prueba social"
            title="La confianza se gana con implementación, criterio y resultados."
            description="Espacio preparado para testimonios y casos medibles de ahorro de tiempo, mejor seguimiento y velocidad de entrega."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Lo que suelen preguntar antes de empezar."
            description="Si te queda una duda, escríbenos y la resolvemos antes de agendar."
          />
          <FaqList items={faqs} />
        </Container>
      </section>

      <CtaBand
        title="No inviertas en IA a ciegas. Primero mide dónde estás."
        text="Agenda tu Diagnóstico Estratégico IA™, obtén tu AI Infrastructure Score™ y decide con datos tu siguiente paso."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico", external: true }}
        secondary={{ href: "/lp/diagnostico-ia", label: "Ver el diagnóstico" }}
      />
    </div>
  );
}
