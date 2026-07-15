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
import {
  faqs,
  founderCredentials,
  offerLadder,
  outcomes,
  painPoints,
  siteConfig,
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
            <div className="animate-fade-up space-y-7">
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
                <ButtonLink
                  href={siteConfig.calendlyUrl}
                  external
                  className="px-7 py-4 text-base"
                >
                  Quiero mi evaluación IA →
                </ButtonLink>
                <ButtonLink href="/lp/diagnostico-ia" variant="secondary">
                  Ver cómo funciona
                </ButtonLink>
              </div>
              <p className="text-sm text-faint">
                <span className="font-semibold text-gold">$149</span>{" "}
                <span className="line-through">$300</span> · se descuenta si
                avanzas · sin compromiso
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted"
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
            value="+$140k"
            label="Su fundador, respaldado por Microsoft"
            description="Raúl López es analista de datos por Microsoft y fundó NANO, empresa que Microsoft patrocinó con más de $140.000."
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

      {/* CENTRAL EVALUATION CTA */}
      <section id="evaluacion" className="scroll-mt-24 pt-24">
        <Container>
          <div className="reveal relative overflow-hidden rounded-[32px] border border-accent/30 bg-[linear-gradient(135deg,rgba(13,148,136,0.12),rgba(180,83,9,0.06)_55%,#ffffff)] p-8 text-center shadow-[0_40px_90px_-50px_rgba(13,148,136,0.45)] sm:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative mx-auto max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                El primer paso · sin riesgo
              </span>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-copy sm:text-5xl">
                Descubre en 45 minutos por qué tu empresa pierde clientes.
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-muted">
                El{" "}
                <span className="font-semibold text-copy">
                  Diagnóstico Estratégico IA™
                </span>{" "}
                mide tu negocio sobre 100 puntos con el AI Infrastructure Score™
                y te entrega un informe con las 3 prioridades que más te frenan y
                tu roadmap para crecer.
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl font-bold text-gold sm:text-5xl">
                  $149
                </span>
                <div className="text-left text-sm text-muted">
                  <p className="text-faint line-through">$300</p>
                  <p>se descuenta si avanzas</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink
                  href={siteConfig.calendlyUrl}
                  external
                  className="px-8 py-4 text-base"
                >
                  Quiero mi evaluación IA →
                </ButtonLink>
                <ButtonLink
                  href="/lp/diagnostico-ia"
                  variant="secondary"
                  className="px-8 py-4 text-base"
                >
                  Ver todo lo que incluye
                </ButtonLink>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-sm text-muted">
                <span>✓ 45 minutos</span>
                <span>✓ Informe en 24 h</span>
                <span>✓ Crédito de $149</span>
                <span>✓ Sin compromiso</span>
              </div>
            </div>
          </div>
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

      {/* DIRECCIÓN / RAÚL LÓPEZ */}
      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Dirección"
            title="Infraestructura IA está dirigida por Raúl López."
            description="Analista de datos por Microsoft, speaker internacional de IA y fundador de NANO (empresa patrocinada por Microsoft con +$140.000). No solo desarrollo: criterio de negocio, ejecución real y experiencia con bancos, gobiernos y grandes empresas."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {founderCredentials.map((cred) => (
              <CaseStudyCard key={cred.title} {...cred} />
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
