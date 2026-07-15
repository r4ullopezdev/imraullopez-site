import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FaqList } from "@/components/faq-list";
import { GlassPanel } from "@/components/glass-panel";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Diagnóstico Estratégico IA™ | Descubre dónde pierde clientes tu empresa",
  "En 45 minutos medimos tu empresa sobre 100 puntos y te entregamos un informe con las 3 fugas que más te están costando clientes, y el plan para taparlas. $149 (normal $300) y se te descuenta si avanzas.",
  "/lp/diagnostico-ia",
);

// Un solo CTA en toda la página. Si ya existe el link de pago de Stripe, cobra
// directo; si no, lleva a agendar. Nunca dos acciones compitiendo.
const CTA_HREF = siteConfig.stripeDiagnosticoUrl || siteConfig.calendlyUrl;
const CTA_LABEL = siteConfig.stripeDiagnosticoUrl
  ? "Quiero mi diagnóstico — $149"
  : "Quiero mi diagnóstico — $149";

function Cta({ nota }: { nota?: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <ButtonLink href={CTA_HREF} external className="px-8 py-4 text-base">
        {CTA_LABEL}
      </ButtonLink>
      <p className="text-xs text-muted">{nota ?? "Pago seguro · Se te descuenta si avanzas · Cupos limitados de julio"}</p>
    </div>
  );
}

const entregables = [
  {
    n: "01",
    t: "Tu AI Infrastructure Score™ (0–100)",
    d: "Un número. El de tu empresa. Medido en 10 categorías: presencia, captación, seguimiento, atención, automatización, uso de IA, procesos, datos, comunicación y escalabilidad.",
  },
  {
    n: "02",
    t: "Las 3 fugas que más dinero te cuestan",
    d: "No una lista de 40 mejoras que nadie hará. Las tres cosas concretas por las que hoy estás perdiendo clientes, en orden de impacto.",
  },
  {
    n: "03",
    t: "Informe profesional por escrito",
    d: "Un documento tuyo, con tu puntuación, los hallazgos y el porqué de cada uno. Lo recibes en menos de 24 horas.",
  },
  {
    n: "04",
    t: "El plan para arreglarlo",
    d: "Qué hacer ahora, qué después y qué puede esperar. Con o sin nosotros: el plan es tuyo.",
  },
];

const pasos = [
  { n: "1", t: "Pagas los $149", d: "30 segundos. Te llega el recibo y el enlace para agendar automáticamente." },
  { n: "2", t: "Agendas tu sesión", d: "Eliges el día y la hora que te sirvan. 45 minutos, por videollamada." },
  { n: "3", t: "Recibes tu informe", d: "En menos de 24 horas tienes tu Score, tus 3 fugas y tu plan por escrito." },
];

const faqs = [
  {
    question: "¿Por qué cobran por un diagnóstico?",
    answer:
      "Porque no es una llamada de ventas disfrazada. Es trabajo real: medimos 10 categorías, redactamos un informe y armamos un plan. Cobrarlo garantiza que ambos lados lleguen en serio. Y si decides avanzar con nosotros, los $149 se te descuentan íntegros.",
  },
  {
    question: "¿Y si el diagnóstico me dice que estoy bien?",
    answer:
      "Perfecto: habrás pagado $149 por saber, con datos, que no necesitas gastar más. Eso también es un buen resultado. No inflamos problemas para vender proyectos.",
  },
  {
    question: "No soy técnico. ¿Voy a entender algo?",
    answer:
      "Todo. No hablamos de tecnología, hablamos de tu negocio: dónde entran los clientes, dónde se pierden y cuánto te cuesta. El informe está escrito para un dueño, no para un programador.",
  },
  {
    question: "¿Cuánto dura y qué necesito preparar?",
    answer:
      "45 minutos por videollamada. No necesitas preparar nada ni tener datos a mano. Preguntamos, tú respondes desde tu experiencia, y nosotros medimos.",
  },
  {
    question: "¿Esto termina en una venta agresiva?",
    answer:
      "No. Te entregamos el informe y el plan, sean cuales sean. Si encaja trabajar juntos, te lo proponemos una vez. Si no, te quedas con tu diagnóstico y listo.",
  },
];

export default function DiagnosticoLanding() {
  return (
    <div className="pb-24">
      {/* 1 · HERO — problema concreto + resultado tangible + un solo CTA */}
      <section className="pt-16 sm:pt-24">
        <Container className="max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Diagnóstico Estratégico IA™
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] text-copy sm:text-5xl">
            Tu empresa está perdiendo clientes ahora mismo.{" "}
            <span className="text-accent">En 45 minutos te decimos exactamente por dónde.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            Medimos tu empresa sobre 100 puntos y te entregamos por escrito las{" "}
            <span className="font-semibold text-copy">3 fugas que más dinero te están costando</span> — y
            el plan para taparlas. Sin tecnicismos. Sin humo.
          </p>
          <div className="mt-9">
            <Cta />
          </div>
          <p className="mt-8 text-sm text-muted">
            Dirigido por Raúl López · Analista de datos por Microsoft · Fundador de NANO (+$140.000 de Microsoft)
          </p>
        </Container>
      </section>

      {/* 2 · EL PROBLEMA — aversión a la pérdida, corto */}
      <section className="pt-20">
        <Container className="max-w-3xl">
          <GlassPanel className="p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-copy">
              El problema no es que no trabajes. Es que no lo ves.
            </h2>
            <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Alguien busca tu servicio en Google hoy.{" "}
                  <span className="font-medium text-copy">No te encuentra.</span> Nunca sabrás que existió.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Alguien te escribió preguntando precio.{" "}
                  <span className="font-medium text-copy">Nadie le dio seguimiento.</span> Compró en otro lado.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  Tu equipo repite a mano las mismas tareas cada día.{" "}
                  <span className="font-medium text-copy">Eso son horas que pagas</span> y no facturas.
                </span>
              </li>
            </ul>
            <p className="mt-6 text-base leading-7 text-copy">
              Cada una de esas fugas se puede medir. Y lo que se mide, se arregla.
            </p>
          </GlassPanel>
        </Container>
      </section>

      {/* 3 · QUÉ TE LLEVAS — la sección más importante */}
      <section className="pt-20">
        <Container className="max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Qué te llevas</p>
            <h2 className="mt-4 text-3xl font-semibold text-copy sm:text-4xl">
              No es una charla sobre IA. Es un entregable.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {entregables.map((e) => (
              <GlassPanel key={e.n} className="p-7">
                <span className="text-sm font-bold text-accent">{e.n}</span>
                <h3 className="mt-3 text-xl font-semibold text-copy">{e.t}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{e.d}</p>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </section>

      {/* 4 · CÓMO FUNCIONA — 3 pasos */}
      <section className="pt-20">
        <Container className="max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Cómo funciona</p>
            <h2 className="mt-4 text-3xl font-semibold text-copy">Tres pasos. Menos de 24 horas.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pasos.map((p) => (
              <div key={p.n} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-lg font-bold text-accent">
                  {p.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-copy">{p.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 · PRECIO + REVERSIÓN DEL RIESGO + ESCASEZ */}
      <section className="pt-20">
        <Container className="max-w-2xl">
          <GlassPanel className="p-8 text-center sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Precio de Cliente Fundador
            </p>
            <div className="mt-6 flex items-end justify-center gap-3">
              <span className="text-6xl font-semibold text-gold">$149</span>
              <span className="pb-2 text-xl text-muted line-through">$300</span>
            </div>
            <p className="mt-6 text-base leading-7 text-copy">
              Y si decides avanzar con nosotros,{" "}
              <span className="font-semibold">los $149 se te descuentan íntegros</span> del proyecto.
            </p>
            <p className="mt-2 text-sm leading-7 text-muted">
              O sea: si te sirve, no te costó nada. Si no te sirve, te quedas con tu informe y tu plan.
            </p>
            <div className="mt-8">
              <Cta nota="Cupos de julio limitados · El precio vuelve a $300 al cerrar el mes" />
            </div>
          </GlassPanel>
        </Container>
      </section>

      {/* 6 · AUTORIDAD — corta */}
      <section className="pt-20">
        <Container className="max-w-3xl">
          <GlassPanel className="p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Quién lo hace</p>
            <h2 className="mt-4 text-2xl font-semibold text-copy">
              El diagnóstico lo dirige Raúl López, en persona.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Analista de datos por Microsoft. Fundó NANO, empresa que Microsoft patrocinó con más de{" "}
              <span className="font-semibold text-copy">$140.000</span>. Speaker internacional de IA:
              conferencias en universidades de Panamá y ponente en el Congreso de Turismo de Venezuela. Ha
              trabajado de la mano con bancos y gobiernos.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              No te va a atender un becario con un guion. Te atiende quien construye los sistemas.
            </p>
          </GlassPanel>
        </Container>
      </section>

      {/* 7 · FAQ — mata objeciones */}
      <section className="pt-20">
        <Container className="max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Antes de que preguntes
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-copy">Lo que todos quieren saber.</h2>
          </div>
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </Container>
      </section>

      {/* 8 · CIERRE */}
      <section className="pt-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl font-semibold leading-tight text-copy sm:text-4xl">
            No inviertas en IA a ciegas. Primero mide dónde estás.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted">
            En 45 minutos vas a saber, con un número, qué tan lejos está tu empresa de operar como una
            organización moderna — y qué tres cosas hay que arreglar primero.
          </p>
          <div className="mt-9">
            <Cta />
          </div>
        </Container>
      </section>
    </div>
  );
}
