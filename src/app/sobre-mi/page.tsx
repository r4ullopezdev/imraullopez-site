import { BulletGrid } from "@/components/bullet-grid";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import { GlassPanel } from "@/components/glass-panel";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { featuredProjects, siteConfig, whyRaul } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Sobre Raúl López | Fundador tecnológico y arquitecto de soluciones IA",
  "Conoce la trayectoria de Raúl López: fundador de NANOTEC / NANO, apoyo de Microsoft for Startups y experiencia real construyendo sistemas, negocios y automatizaciones.",
  "/sobre-mi",
);

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Sobre mí"
        title="De fundador tecnológico a arquitecto de soluciones IA para empresas."
        description="He construido producto, ventas, operaciones y tecnología. Esa mezcla me permite diseñar sistemas IA y automatizaciones con criterio de negocio, no solo con criterio técnico."
        primaryCta={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
        secondaryCta={{ href: "/portfolio", label: "Ver portfolio" }}
        aside={
          <GlassPanel className="space-y-5 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
              Autoridad
            </p>
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                Fundé <span className="font-semibold text-white">NANOTEC / NANO</span>,
                un proyecto tecnológico con tarjetas NFC y más de 10.000 usuarios.
              </p>
              <p>
                El proyecto recibió apoyo de{" "}
                <span className="font-semibold text-white">Microsoft for Startups</span>.
              </p>
              <p>
                También he construido soluciones IA, automatizaciones, webs,
                funnels e integraciones para clientes y negocios propios.
              </p>
            </div>
          </GlassPanel>
        }
      />

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Mi historia"
            title="No vengo solo del desarrollo. Vengo de construir, vender y operar."
            description="He trabajado en producto, automatización, adquisición, atención, operaciones y tecnología. Por eso cuando veo un proceso, pienso en margen, tiempo, fricción, conversión y escalabilidad."
          />
          <div className="space-y-4">
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-white">NANOTEC / NANO</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Construí un proyecto tecnológico orientado a adopción real,
                experiencia conectada y ejecución comercial, no solo desarrollo
                técnico aislado.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-white">Microsoft for Startups</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Haber recibido apoyo del programa refuerza credibilidad, pero lo
                importante es que hubo producto, usuarios y capacidad real de ejecución.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-white">Negocios reales</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                He operado proyectos comerciales, incluyendo restaurantes y
                otros negocios, y eso me dio criterio práctico sobre ventas,
                procesos, tiempos muertos y operación diaria.
              </p>
            </GlassPanel>
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cómo trabajo"
            title="Mentalidad de ejecución rápida, criterio de negocio y profundidad técnica."
            description="Ese es el cruce que más me interesa ocupar: construir sistemas útiles para empresas que quieren implementar ya."
          />
          <BulletGrid items={whyRaul} columns="md:grid-cols-2" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Señales de experiencia"
            title="Mi propuesta se apoya en producto, IA, automatización y experiencia operativa."
            description="No necesito inflar el relato. Prefiero mostrar una combinación poco común: tecnología aplicada con entendimiento real de negocio."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <CaseStudyCard key={project.title} {...project} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Si quieres a alguien que entienda tanto la tecnología como la operación, podemos hablar."
        text="Trabajo mejor con founders, directores y empresas que quieren pasar rápido de idea a implementación útil."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
      />
    </div>
  );
}
