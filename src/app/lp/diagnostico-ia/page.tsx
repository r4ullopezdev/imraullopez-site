import { BulletGrid } from "@/components/bullet-grid";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { GlassPanel } from "@/components/glass-panel";
import { LeadForm } from "@/components/lead-form";
import { MetricCard } from "@/components/metric-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Diagnóstico Estratégico IA™ | Mide tu empresa sobre 100 puntos",
  "En 45 minutos medimos la madurez digital de tu empresa con el AI Infrastructure Score™: presencia, captación, seguimiento, automatización y uso de IA. Informe profesional, puntuación y roadmap. $149 y se descuenta si avanzas.",
  "/lp/diagnostico-ia",
);

const scoreCategories = [
  "Presencia Digital",
  "Captación de Clientes",
  "Seguimiento Comercial",
  "Experiencia del Cliente",
  "Automatización Administrativa",
  "Uso de IA",
  "Procesos Operativos",
  "Datos y Analítica",
  "Comunicación Interna",
  "Escalabilidad Tecnológica",
];

const includes = [
  "Reunión de diagnóstico de 45–60 minutos, estructurada y sin humo.",
  "AI Infrastructure Score™: tu puntuación de 0 a 100 y tu banda de madurez.",
  "Informe profesional con hallazgos por categoría en tus propias palabras.",
  "Roadmap priorizado: qué hacer Ahora, Próximo y Después.",
  "Propuesta recomendada con el primer proyecto y su retorno esperado.",
  "Crédito de $149 aplicable si avanzas con un proyecto.",
];

const forWho = [
  "Empresas que ya venden pero pierden clientes por mala captación o seguimiento.",
  "Negocios con presencia digital pobre o improvisada que no aparece en Google.",
  "Dueños que deciden rápido y quieren un plan claro, no una consultoría eterna.",
  "Equipos atrapados en tareas repetitivas que la automatización puede absorber.",
];

const steps = [
  ["1 · Agenda y paga", "Reservas tu diagnóstico con el pago de $149 (se descuenta si avanzas)."],
  ["2 · Reunión y Score", "En 45 min evaluamos tu empresa en las 10 categorías y calculamos tu Score."],
  ["3 · Informe y roadmap", "Recibes el informe con tu puntuación y las 3 prioridades de mayor impacto."],
  ["4 · Decides el siguiente paso", "Si avanzas, tu diagnóstico se descuenta del proyecto."],
];

const faqs = [
  {
    question: "¿Qué es el AI Infrastructure Score™?",
    answer:
      "Es nuestra metodología propietaria que evalúa tu empresa sobre 100 puntos en 10 categorías, desde presencia digital y captación hasta uso de IA y escalabilidad. Te da un número claro, una banda de madurez y una hoja de ruta.",
  },
  {
    question: "¿Cuánto cuesta y qué incluye?",
    answer:
      "El diagnóstico está en $149 (precio normal $300) e incluye la reunión, tu Score, el informe profesional, el roadmap priorizado y la propuesta. Si contratas un proyecto, los $149 se descuentan íntegramente.",
  },
  {
    question: "¿Cuánto dura y cómo es la reunión?",
    answer:
      "Entre 45 y 60 minutos, por videollamada o presencial en Panamá. Es una conversación estructurada: escuchamos tu operación, puntuamos en vivo y te mostramos dónde estás perdiendo tiempo o clientes.",
  },
  {
    question: "¿Y si después no quiero contratar nada?",
    answer:
      "No hay problema. El diagnóstico es un entregable de valor por sí mismo: te quedas con tu Score, el informe y el roadmap, aunque decidas ejecutarlo por tu cuenta.",
  },
];

export default function DiagnosticoIAPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Diagnóstico Estratégico IA™"
        title="Mide la madurez digital de tu empresa sobre 100 puntos."
        description="Antes de invertir en IA o automatización, necesitas saber dónde estás. En 45 minutos medimos tu empresa con el AI Infrastructure Score™ y te entregamos un informe con las prioridades que más te están frenando. $149 (normal $300) y se descuenta si avanzas con un proyecto."
        primaryCta={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico ($149)", external: true }}
        secondaryCta={{ href: "#form", label: "Solicitar por formulario" }}
        aside={<LeadForm source="landing-diagnostico" compact />}
      />

      <section className="pt-20">
        <Container className="grid gap-4 md:grid-cols-3">
          <MetricCard
            value="$149"
            label="Precio de lanzamiento"
            description="Normal $300. Se descuenta íntegramente si contratas un proyecto."
          />
          <MetricCard
            value="45 min"
            label="Duración del diagnóstico"
            description="Una conversación estructurada, con tu Score puntuado en vivo."
          />
          <MetricCard
            value="0–100"
            label="AI Infrastructure Score™"
            description="Tu número, tu banda de madurez y tu hoja de ruta priorizada."
          />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="El instrumento"
            title="AI Infrastructure Score™: 10 categorías, 3 pilares, un número claro."
            description="Evaluamos tu empresa en las 10 dimensiones que determinan si operas como una empresa tradicional o como una organización moderna preparada para crecer con IA."
          />
          <BulletGrid items={scoreCategories} columns="md:grid-cols-2" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Qué incluye"
            title="No es una charla sobre IA. Es un entregable con Score, informe y plan."
            description="Sales del diagnóstico sabiendo exactamente dónde pierdes clientes o tiempo y qué resolver primero."
          />
          <BulletGrid items={includes} columns="md:grid-cols-1" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cómo funciona"
            title="Del pago al roadmap en menos de 24 horas tras la reunión."
            description="Un proceso simple, rápido y orientado a decisión."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(([title, text]) => (
              <GlassPanel key={title} className="p-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container>
          <div className="rounded-[32px] border border-[#cde4ea] bg-gradient-to-br from-[#eef7f9] to-[#f7f3ec] p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#28606d]">
                  Inversión
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#102033] sm:text-4xl">
                  $149 hoy. $0 de riesgo si avanzas.
                </h2>
                <p className="text-base leading-8 text-[#4a5768]">
                  El diagnóstico cuesta $149 (precio normal $300) como tarifa de
                  Cliente Fundador. Si contratas un proyecto, se descuenta
                  íntegramente. Cobramos por Stripe (internacional) o Yappy / ACH
                  (Panamá).
                </p>
                <div className="flex flex-wrap gap-4">
                  <ButtonLink href={siteConfig.calendlyUrl} external>
                    Agendar mi diagnóstico
                  </ButtonLink>
                  <ButtonLink href="#form" variant="secondary">
                    Prefiero el formulario
                  </ButtonLink>
                </div>
              </div>
              <GlassPanel className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5320]">
                  Para quién es
                </p>
                <div className="mt-4 space-y-3">
                  {forWho.map((item) => (
                    <p
                      key={item}
                      className="rounded-2xl border border-[#e7edf4] bg-[#fbfdff] px-4 py-3 text-sm leading-7 text-[#435164]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </GlassPanel>
            </div>
          </div>
        </Container>
      </section>

      <section id="form" className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Solicita tu diagnóstico"
            title="Cuéntanos tu empresa y te enviamos el enlace para agendar."
            description="Trabajamos con empresas que quieren medir, decidir y ejecutar, no solo hablar de IA."
          />
          <LeadForm source="landing-diagnostico-form" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Lo que suelen preguntar antes de agendar."
            description="Si te queda alguna duda, escríbenos y la resolvemos antes de que reserves."
          />
          <FaqList items={faqs} />
        </Container>
      </section>

      <CtaBand
        title="No inviertas en IA a ciegas. Primero mide dónde estás."
        text="Agenda tu Diagnóstico Estratégico IA™, obtén tu AI Infrastructure Score™ y decide con datos cuál es tu siguiente paso."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico ($149)", external: true }}
        secondary={{ href: "/contacto", label: "Ir a contacto" }}
      />
    </div>
  );
}
