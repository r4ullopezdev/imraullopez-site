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
  "Infraestructura IA | IA, automatizacion y agentes para empresas que quieren crecer",
  "Construimos la infraestructura digital que tu empresa necesita: agentes de IA, automatizaciones, funnels y sistemas comerciales. Empezamos midiendo tu madurez con el AI Infrastructure Score.",
  "/",
);

const heroPoints = [
  "Automatizacion operativa en 7 dias",
  "Sistemas de seguimiento y conversion de leads",
  "Integraciones reales con CRM, WhatsApp, email y dashboards",
];

const buyerSignals = [
  "Empresas con procesos repetitivos y cuello de botella operativo",
  "Equipos comerciales que responden tarde o hacen seguimiento manual",
  "Negocios que quieren implementar IA con retorno, no experimentar sin rumbo",
];

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="space-y-8">
              <div className="inline-flex rounded-full border border-[#cde4ea] bg-[#e8f7f7] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#28606d]">
                Infraestructura digital · IA · automatizacion · agentes
              </div>

              <div className="space-y-5">
                <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-[#102033] sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
                  Construimos la infraestructura digital que tu empresa necesita
                  para operar y crecer con IA.
                </h1>

                <p className="max-w-3xl text-pretty text-xl leading-9 text-[#495668]">
                  En dias implementamos agentes de IA, automatizaciones e
                  integraciones que sustituyen entre un 30 % y un 60 % del
                  trabajo administrativo repetitivo y conectan tu operacion real.
                </p>

                <p className="max-w-3xl text-base leading-8 text-[#5a6472]">
                  No vendemos tecnologia por moda. Empezamos midiendo tu madurez
                  digital con el AI Infrastructure Score™ y construimos los
                  cimientos para responder leads mas rapido, reducir tareas
                  manuales y darle a tu equipo mas tiempo para vender y crecer.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <ButtonLink href={siteConfig.calendlyUrl} external>
                  Agendar diagnostico IA
                </ButtonLink>
                <ButtonLink href="/portfolio" variant="secondary">
                  Ver proyectos
                </ButtonLink>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroPoints.map((point) => (
                  <GlassPanel key={point} className="p-4">
                    <p className="text-sm font-medium leading-6 text-[#233142]">
                      {point}
                    </p>
                  </GlassPanel>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-[#d9e2ec] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#556274]"
                  >
                    {badge}
                  </div>
                ))}
              </div>

              <p className="max-w-3xl text-sm font-medium uppercase tracking-[0.18em] text-[#8a5320]">
                Fundador de NANOTEC / NANO, con mas de 10.000 usuarios y apoyo
                de Microsoft for Startups.
              </p>
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
            value="7 dias"
            label="Primera implementacion"
            description="La prioridad es dejar un sistema util funcionando rapido y optimizar despues con uso real."
          />
          <MetricCard
            value="$1.500 - $10.000+"
            label="Rango de proyecto"
            description="Trabajo con empresas que quieren implementacion real, no presentaciones vacias."
          />
        </Container>
      </section>

      <section className="pt-24">
        <Container>
          <div className="rounded-[32px] border border-[#cde4ea] bg-gradient-to-br from-[#eef7f9] to-[#f7f3ec] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#28606d]">
                  Empieza aqui
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#102033] sm:text-4xl">
                  Diagnostico Estrategico IA™: mide tu empresa sobre 100 puntos.
                </h2>
                <p className="text-base leading-8 text-[#4a5768]">
                  En 45 minutos evaluamos tu presencia digital, captacion,
                  seguimiento, automatizacion y uso de IA con el AI
                  Infrastructure Score™. Recibes un informe profesional, tu
                  puntuacion y un roadmap priorizado. $149 (normal $300) y se
                  descuenta integramente si avanzas con un proyecto.
                </p>
                <div className="flex flex-wrap gap-4">
                  <ButtonLink href="/lp/diagnostico-ia">
                    Ver el diagnostico
                  </ButtonLink>
                  <ButtonLink
                    href={siteConfig.calendlyUrl}
                    external
                    variant="secondary"
                  >
                    Agendar ahora
                  </ButtonLink>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [
                    "10 categorias",
                    "Presencia, captacion, seguimiento, IA, datos, procesos y mas.",
                  ],
                  [
                    "Score 0-100",
                    "Un numero claro y una banda de madurez digital.",
                  ],
                  [
                    "Informe + roadmap",
                    "Prioridades Ahora / Proximo / Despues.",
                  ],
                  [
                    "Credito de $149",
                    "Se descuenta si contratas un proyecto.",
                  ],
                ].map(([title, text]) => (
                  <GlassPanel key={title} className="p-5">
                    <p className="text-base font-semibold text-[#102033]">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#5a6472]">
                      {text}
                    </p>
                  </GlassPanel>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Que resuelvo"
            title="Si tu operacion depende de seguimiento manual, tareas repetitivas y respuesta lenta, ahi es donde entro."
            description="Normalmente trabajo en puntos donde se pierde dinero, tiempo comercial o control operativo por falta de sistema."
          />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <BulletGrid items={painPoints} />
            <GlassPanel className="p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5320]">
                Empresas para las que encaja mejor
              </p>
              <div className="mt-5 space-y-4">
                {buyerSignals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-2xl border border-[#e7edf4] bg-[#fbfdff] px-4 py-4 text-sm leading-7 text-[#435164]"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Resultados"
            title="El objetivo no es tener IA. El objetivo es operar con menos friccion y mas rendimiento."
            description="Cada implementacion tiene que mover una metrica real: tiempo, velocidad comercial, calidad de seguimiento, control o capacidad operativa."
          />
          <BulletGrid items={outcomes} columns="md:grid-cols-2" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Agentes de IA"
            title="Construyo agentes de IA que trabajan como empleados digitales dentro de tu negocio."
            description="Con reglas, memoria, herramientas e integraciones. No como un chatbot bonito aislado, sino como parte de tu flujo real."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-[#102033]">
                Captan y siguen leads
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5a6472]">
                Responden, clasifican, agendan, recuerdan y empujan cada lead
                hacia el siguiente paso sin depender de seguimiento manual.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-[#102033]">
                Ejecutan tareas internas
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5a6472]">
                Generan reportes, mueven informacion, validan datos, notifican
                al equipo y reducen carga administrativa repetitiva.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-[#102033]">
                Conectan herramientas
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5a6472]">
                Formularios, WhatsApp, email, CRM, bases de datos, dashboards y
                APIs funcionando como un solo sistema.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-[#102033]">
                Escalan con control
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#5a6472]">
                Disenados para darte trazabilidad, velocidad operativa y menos
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
            title="Casos que demuestran ejecucion tecnica y criterio de negocio."
            description="No presento solo desarrollo. Presento sistemas, producto, operacion y crecimiento."
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
            eyebrow="Por que yo"
            title="Combino tecnologia, IA, marketing, ventas y experiencia real operando negocios."
            description="Eso cambia la forma de construir. No pienso solo como desarrollador. Pienso en conversion, cuello de botella, operacion, margen y velocidad de ejecucion."
          />
          <BulletGrid items={whyRaul} columns="md:grid-cols-1" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Proceso en 7 dias"
            title="En una semana puedes tener un sistema funcionando, no una presentacion bonita."
            description="La logica es simple: detectar impacto rapido, implementar una primera version util y mejorar desde datos de uso."
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
            eyebrow="Prueba social"
            title="La confianza aqui se gana con implementacion, criterio y resultados."
            description="Esta seccion esta preparada para testimonios y casos medibles centrados en ahorro de tiempo, mejor seguimiento, mejor operacion y velocidad de entrega."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.quote} {...testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Si tu empresa esta perdiendo tiempo en tareas repetitivas, leads frios o procesos manuales, podemos corregirlo."
        text="Trabajo con empresas que quieren implementar soluciones reales de IA y automatizacion. Si buscas velocidad, criterio y sistema, agenda un diagnostico."
        primary={{
          href: siteConfig.calendlyUrl,
          label: "Agendar diagnostico IA",
          external: true,
        }}
        secondary={{ href: "/contacto", label: "Ir a contacto" }}
      />
    </div>
  );
}
