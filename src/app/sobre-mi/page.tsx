import { BulletGrid } from "@/components/bullet-grid";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBand } from "@/components/cta-band";
import { GlassPanel } from "@/components/glass-panel";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/container";
import { founderCredentials, siteConfig, whyRaul } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Dirección | Infraestructura IA está dirigida por Raúl López",
  "Infraestructura IA está dirigida por Raúl López: analista de datos por Microsoft, speaker internacional de IA, fundador de NANO (empresa patrocinada por Microsoft con más de $140.000), con experiencia junto a bancos, gobiernos y grandes empresas.",
  "/sobre-mi",
);

export default function AboutPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Dirección"
        title="Infraestructura IA está dirigida por Raúl López."
        description="Analista de datos por Microsoft y speaker internacional de IA. No solo desarrollo: criterio de negocio, ejecución real y experiencia trabajando de la mano con bancos, gobiernos y grandes empresas."
        primaryCta={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
        secondaryCta={{ href: "/servicios", label: "Ver servicios" }}
        aside={
          <GlassPanel className="space-y-5 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Quién dirige
            </p>
            <div className="space-y-4 text-sm leading-7 text-muted">
              <p>
                <span className="font-semibold text-copy">Analista de datos por Microsoft.</span>{" "}
                Fundó NANO, empresa que Microsoft patrocinó con más de{" "}
                <span className="font-semibold text-copy">$140.000</span>.
              </p>
              <p>
                <span className="font-semibold text-copy">Speaker internacional de IA:</span>{" "}
                conferencias en universidades de Panamá y ponente en el Congreso de
                Turismo de Venezuela (Hotel Meliá, Caracas).
              </p>
              <p>
                Fundador de <span className="font-semibold text-copy">NANO</span> y
                con experiencia trabajando junto a bancos y gobiernos.
              </p>
            </div>
          </GlassPanel>
        }
      />

      {/* VIDEO DE RAÚL — pegar aquí el embed cuando esté listo (formato vertical 9:16 para Reels/Historias). */}

      <section className="pt-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Trayectoria"
            title="No vengo solo del desarrollo. Vengo de construir, formar y ejecutar."
            description="Tecnología aplicada con entendimiento real de negocio: por eso Infraestructura IA piensa cada proyecto como un sistema comercial, no como una pieza técnica aislada."
          />
          <div className="space-y-4">
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-copy">Microsoft: datos y respaldo</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Analista de datos certificado por Microsoft. Fundó NANO, empresa
                seleccionada y patrocinada por Microsoft con más de $140.000, una
                validación real de la tecnología detrás de su trabajo.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-copy">Speaker internacional de IA</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Ha dado conferencias de inteligencia artificial en universidades de
                Panamá, cursos 1 a 1 de IA a grandes empresarios y fue ponente sobre
                tecnología aplicada al turismo en el Congreso de Turismo de Venezuela,
                en el Hotel Meliá de Caracas.
              </p>
            </GlassPanel>
            <GlassPanel className="p-6">
              <h3 className="text-xl font-semibold text-copy">Fundador de NANO · bancos y gobiernos</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Fundador de NANO, tecnología propia con miles de usuarios. Ha
                trabajado de la mano con bancos y gobiernos, con foco en ventas,
                procesos y operación real.
              </p>
            </GlassPanel>
          </div>
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Cómo trabaja"
            title="Ejecución rápida, criterio de negocio y profundidad técnica."
            description="Ese es el cruce que define a Infraestructura IA: construir sistemas útiles para empresas que quieren implementar ya."
          />
          <BulletGrid items={whyRaul} columns="md:grid-cols-2" />
        </Container>
      </section>

      <section className="pt-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Credenciales"
            title="Autoridad respaldada por Microsoft, escenarios internacionales y ejecución real."
            description="Una combinación poco común: tecnología validada, divulgación internacional y experiencia operando con bancos, gobiernos y grandes empresas."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {founderCredentials.map((cred) => (
              <CaseStudyCard key={cred.title} {...cred} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Si quieres a alguien que entienda tanto la tecnología como la operación, hablemos."
        text="Infraestructura IA trabaja mejor con founders, directores y empresas que quieren pasar rápido de idea a implementación útil."
        primary={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
      />
    </div>
  );
}
