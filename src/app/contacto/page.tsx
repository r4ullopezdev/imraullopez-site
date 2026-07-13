import { Container } from "@/components/container";
import { GlassPanel } from "@/components/glass-panel";
import { LeadForm } from "@/components/lead-form";
import { PageHero } from "@/components/page-hero";
import { contactFilters, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Contacto | Agenda un diagnóstico IA para tu empresa",
  "Contacta con Infraestructura IA para proyectos de IA, automatización, seguimiento comercial y transformación operativa. Formulario orientado a empresas que quieren implementar soluciones reales.",
  "/contacto",
);

export default function ContactPage() {
  return (
    <div className="pb-24">
      <PageHero
        eyebrow="Contacto"
        title="Si quieres implementar una solución real, aquí empezamos."
        description="Cuéntame qué parte de tu operación, captación o seguimiento quieres resolver. Si hay encaje, te propondré una ruta clara de implementación."
        primaryCta={{ href: siteConfig.calendlyUrl, label: "Agendar diagnóstico IA", external: true }}
      />

      <section className="pt-24">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {contactFilters.map((item) => (
              <GlassPanel key={item} className="p-6">
                <p className="text-sm leading-7 text-copy/85">{item}</p>
              </GlassPanel>
            ))}
            <GlassPanel className="p-6">
              <p className="text-sm leading-7 text-muted">
                También puedes escribirme por email o agendar una llamada desde{" "}
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-accent underline decoration-accent/40 underline-offset-4"
                >
                  Calendly
                </a>{" "}
                {siteConfig.whatsappUrl ? (
                  <>
                    o por{" "}
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-accent underline decoration-accent/40 underline-offset-4"
                    >
                      WhatsApp
                    </a>
                  </>
                ) : null}
                .
              </p>
            </GlassPanel>
          </div>
          <LeadForm source="contact-page" />
        </Container>
      </section>
    </div>
  );
}
