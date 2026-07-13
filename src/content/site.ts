export const siteConfig = {
  name: "Infraestructura IA",
  legalName: "Infraestructura IA™",
  brandMark: "IA",
  founderName: "Raúl López",
  domain: "infraestructuraia.com",
  email: "hola@infraestructuraia.com",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  githubUrl: "https://github.com/r4ullopezdev",
  linkedinUrl: "https://www.linkedin.com",
  calendlyUrl: "https://calendly.com/imraullopez/diagnostico-personalizado-ia",
  primaryProjectUrl: "https://github.com/r4ullopezdev/nano-agent-stack",
  title:
    "Infraestructura IA™ | Infraestructura digital con IA, automatización y agentes para empresas",
  description:
    "Infraestructura IA construye la infraestructura digital —IA, automatización y agentes inteligentes— que las empresas necesitan para operar como organizaciones modernas. Empezamos midiéndola con el AI Infrastructure Score™.",
  shortTagline:
    "Infraestructura digital con IA, automatización, agentes, funnels y sistemas comerciales para empresas que quieren crecer.",
  heroMessage:
    "La infraestructura digital que tu empresa necesita para operar y crecer con IA.",
  authorityLine:
    "Dirigida por Raúl López — analista de datos por Microsoft, speaker internacional de IA y fundador respaldado por Microsoft.",
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  },
};

export const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export const leadBudgetOptions = [
  "Menos de $1.500",
  "$1.500 - $3.000",
  "$3.000 - $5.000",
  "$5.000 - $10.000",
  "$10.000+",
];

export const trustBadges = [
  "Respaldada por Microsoft (+$140k)",
  "Dirigida por un speaker internacional de IA",
  "Experiencia con bancos y gobiernos",
  "IA aplicada + automatización + funnels",
];

export const painPoints = [
  "Leads que se enfrían porque nadie responde en minutos.",
  "Equipos administrativos atrapados en tareas repetitivas, copiar y pegar y seguimiento manual.",
  "Procesos internos dispersos entre WhatsApp, email, formularios, hojas de cálculo y CRM mal actualizado.",
  "Operaciones que dependen demasiado de personas para tareas que ya deberían estar automatizadas.",
  "Empresas que hablan de IA, pero siguen ejecutando con sistemas lentos y poco fiables.",
  "Pérdida de tiempo directivo por falta de dashboards, alertas y flujos internos bien diseñados.",
];

export const outcomes = [
  "Menos trabajo manual en operaciones, atención y seguimiento.",
  "Respuesta más rápida a leads, clientes y solicitudes internas.",
  "Sistemas que clasifican, agendan, notifican y actualizan datos sin fricción.",
  "Más capacidad operativa sin aumentar estructura al mismo ritmo.",
  "Automatizaciones conectadas a herramientas reales, no demos bonitas.",
  "Visibilidad de procesos para detectar cuellos de botella y mejorar ejecución.",
];

export const coreServices = [
  {
    slug: "agentes-ia-empresas",
    title: "Agentes IA para empresas",
    problem:
      "Tus equipos repiten decisiones, consultas, clasificación y seguimiento que ya pueden delegarse a sistemas entrenados.",
    solution:
      "Diseño agentes conectados a tus flujos, conocimiento y herramientas para ejecutar tareas concretas como empleados digitales.",
    benefit:
      "Menos carga operativa, más velocidad de respuesta y mejor consistencia en procesos críticos.",
    examples: [
      "Agentes que responden leads y filtran oportunidades.",
      "Agentes internos para soporte operativo y consultas del equipo.",
      "Agentes de seguimiento y recuperación comercial.",
    ],
  },
  {
    slug: "automatizacion-procesos",
    title: "Automatización de procesos",
    problem:
      "Tus procesos dependen de pasos manuales, recordatorios humanos y herramientas desconectadas.",
    solution:
      "Construyo flujos que conectan formularios, CRM, correo, WhatsApp, dashboards, documentos y bases de datos.",
    benefit:
      "Menos errores, menos retrasos y más tiempo del equipo para vender, atender mejor y crecer.",
    examples: [
      "Reportes automáticos y alertas operativas.",
      "Flujos de aprobación y documentación.",
      "Sincronización entre CRM, formularios y bases de datos.",
    ],
  },
  {
    slug: "chatbots-asistentes",
    title: "Chatbots y asistentes inteligentes",
    problem:
      "Responder siempre lo mismo consume tiempo y hace que clientes o pacientes esperen demasiado.",
    solution:
      "Creo asistentes de texto o voz que informan, califican, derivan y preparan el siguiente paso.",
    benefit:
      "Atención más rápida, menos carga humana y experiencia más consistente para el cliente.",
    examples: [
      "Chatbots para captación y soporte.",
      "Asistentes con voz usando ElevenLabs.",
      "Asistentes conectados a FAQs, documentos y sistemas internos.",
    ],
  },
  {
    slug: "automatizacion-comercial",
    title: "Automatización comercial y seguimiento de leads",
    problem:
      "Pierdes ventas por no responder rápido, no dar seguimiento y no priorizar bien los leads.",
    solution:
      "Diseño sistemas que capturan, responden, califican, agendan, nutren y actualizan el pipeline automáticamente.",
    benefit:
      "Más reuniones, menos leads perdidos y un proceso comercial más rápido y medible.",
    examples: [
      "Respuesta inmediata por WhatsApp o email.",
      "Secuencias de seguimiento automáticas.",
      "Agendado y actualización de CRM sin trabajo manual.",
    ],
  },
  {
    slug: "integraciones-crm-whatsapp",
    title: "Integraciones con CRM, WhatsApp, email, formularios y bases de datos",
    problem:
      "Tus herramientas están separadas y el equipo termina haciendo trabajo de integración a mano.",
    solution:
      "Conecto tus herramientas clave para que los datos fluyan y las acciones ocurran sin intervención constante.",
    benefit:
      "Un stack más ordenado, información más fiable y menos fricción entre áreas.",
    examples: [
      "CRM + WhatsApp + formularios + calendarios.",
      "Email + dashboards + reportes + documentos.",
      "n8n + APIs + sistemas propios o legacy.",
    ],
  },
  {
    slug: "web-landings-conversion",
    title: "Desarrollo web y landings de conversión",
    problem:
      "Muchas webs informan, pero no convierten ni se integran con el proceso comercial.",
    solution:
      "Creo sitios y landings orientadas a captar demanda, filtrar leads y conectar el tráfico con tu sistema comercial.",
    benefit:
      "Más claridad en la propuesta, mejor conversión y mejor aprovechamiento de campañas.",
    examples: [
      "Landings para campañas pagadas.",
      "Páginas de servicios con CTA claro.",
      "Webs conectadas a formularios, CRM y automatizaciones.",
    ],
  },
  {
    slug: "consultoria-ia-empresas",
    title: "Consultoría IA para empresas",
    problem:
      "Sabes que puedes automatizar, pero no tienes claro por dónde empezar ni qué dará ROI real.",
    solution:
      "Analizo el negocio, detecto cuellos de botella y priorizo una implementación de alto impacto en días, no en meses.",
    benefit:
      "Menos teoría, más foco en sistemas que reducen coste operativo y aceleran ingresos.",
    examples: [
      "Diagnóstico de operaciones repetitivas.",
      "Roadmap de automatización por impacto.",
      "Diseño de arquitectura y stack recomendado.",
    ],
  },
];

export const founderCredentials = [
  {
    title: "Analista de datos por Microsoft",
    label: "Respaldo tecnológico",
    summary:
      "Analista de datos certificado por Microsoft. Su empresa fue seleccionada y patrocinada por Microsoft con más de $140.000 en respaldo.",
    impact: [
      "+$140.000 de patrocinio de Microsoft",
      "Analista de datos certificado",
      "Tecnología validada, no teoría",
    ],
  },
  {
    title: "Speaker internacional de IA",
    label: "Autoridad y divulgación",
    summary:
      "Conferencista de inteligencia artificial en universidades de Panamá y ponente sobre tecnología aplicada al turismo en el Congreso de Turismo de Venezuela (Hotel Meliá, Caracas).",
    impact: [
      "Conferencias de IA en universidades de Panamá",
      "Ponente en el Congreso de Turismo de Venezuela",
      "Cursos 1 a 1 de IA a grandes empresarios",
    ],
  },
  {
    title: "Fundador y ejecutor real",
    label: "Producto y experiencia",
    summary:
      "Fundador de NANO, tecnología propia con miles de usuarios. Ha trabajado de la mano con bancos y gobiernos, con foco en ejecución, ventas y operación real.",
    impact: [
      "Fundador de NANO (producto propio)",
      "Experiencia con bancos y gobiernos",
      "Criterio de negocio, no solo técnico",
    ],
  },
];

export const whyRaul = [
  "No solo programo. Diseño sistemas que encajan con ventas, operaciones y atención al cliente.",
  "He construido tecnología propia, vendido, operado y tomado decisiones con presión real de negocio.",
  "Trabajo con herramientas modernas, pero el foco no es la herramienta: es el ahorro, la velocidad y el impacto.",
  "Puedo convertir una oportunidad de IA en un sistema usable en días, no en una consultoría eterna.",
];

export const process7Days = [
  {
    day: "Día 1",
    title: "Diagnóstico y mapa de cuellos de botella",
    text: "Reviso procesos, leads, tiempos muertos, puntos de fuga y tareas repetitivas que deben salir de manos humanas.",
  },
  {
    day: "Día 2",
    title: "Diseño del sistema",
    text: "Defino arquitectura, puntos de integración, reglas, stack y qué parte debe resolver IA y cuál automatización clásica.",
  },
  {
    day: "Día 3",
    title: "Conexión de herramientas",
    text: "Conecto formularios, CRM, WhatsApp, email, calendarios, dashboards, documentos y APIs necesarias.",
  },
  {
    day: "Día 4",
    title: "Construcción del flujo",
    text: "Monto agentes, lógica, seguimiento, clasificación, alertas y persistencia del proceso.",
  },
  {
    day: "Día 5",
    title: "Pruebas con casos reales",
    text: "Pruebo respuestas, rutas, aprobaciones, datos y fallos para dejar el sistema operativo.",
  },
  {
    day: "Día 6",
    title: "Ajustes y optimización",
    text: "Refino copy, reglas, prompts, tiempos y handoffs para que el sistema funcione mejor en producción.",
  },
  {
    day: "Día 7",
    title: "Entrega, entrenamiento y siguiente fase",
    text: "Entrego el sistema, explico operación y dejo claro el siguiente sprint si quieres escalarlo.",
  },
];

export const testimonials = [
  {
    name: "Espacio para testimonio",
    role: "Founder / Director comercial",
    quote:
      "Aquí irá un testimonio real centrado en ahorro de tiempo, mejora de seguimiento y velocidad de implementación.",
  },
  {
    name: "Espacio para testimonio",
    role: "Gerencia / Operaciones",
    quote:
      "Aquí irá un testimonio real sobre reducción de carga administrativa, claridad operativa y mejor coordinación.",
  },
];

export const faqs = [
  {
    question: "¿Con qué tipo de empresas trabajas?",
    answer:
      "Principalmente con empresas que ya venden, tienen equipo o volumen operativo, y quieren implementar sistemas reales para ahorrar tiempo o acelerar ventas.",
  },
  {
    question: "¿Cuánto tarda una primera implementación?",
    answer:
      "La primera versión funcional puede estar en días. El objetivo es desplegar rápido, validar y luego iterar donde realmente haya retorno.",
  },
  {
    question: "¿Qué presupuesto tiene sentido?",
    answer:
      "Trabajo en proyectos donde la empresa quiere una solución real y tiene capacidad de invertir entre 1.500 y 10.000 dólares o más según alcance.",
  },
  {
    question: "¿Solo haces IA?",
    answer:
      "No. Construyo el sistema completo cuando hace falta: IA, automatización, integración, web, funnels, seguimiento y estructura de operación.",
  },
];

export const contactFilters = [
  "Trabajamos con empresas que quieren implementar soluciones reales, no experimentos sin presupuesto.",
  "Si buscas una prueba barata o solo una charla sobre IA, probablemente no somos la opción correcta.",
  "Si quieres un sistema que reduzca trabajo manual y mejore operación o ventas, sí podemos hablar.",
];

export type Offer = {
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  features: string[];
  cta: { href: string; label: string; external?: boolean };
  highlight?: boolean;
  badge?: string;
};

export const offerLadder: Offer[] = [
  {
    name: "Diagnóstico Estratégico IA™",
    price: "$149",
    priceNote: "Normal $300 · se descuenta si avanzas",
    tagline: "Mide tu empresa sobre 100 puntos y recibe tu hoja de ruta.",
    features: [
      "Reunión de diagnóstico de 45–60 min",
      "AI Infrastructure Score™ (0–100)",
      "Informe profesional + roadmap priorizado",
      "Propuesta con crédito de $149 aplicado",
    ],
    cta: { href: "/lp/diagnostico-ia", label: "Empieza aquí" },
    badge: "Empieza aquí",
  },
  {
    name: "Starter Setup Sprint™",
    price: "$1.300",
    priceNote: "Único + $49/mes · entrega en 7–10 días",
    tagline:
      "La infraestructura digital mínima de una empresa moderna, instalada.",
    features: [
      "Web de conversión + hosting + dominio + SSL",
      "Google Business + Analytics + integración WhatsApp",
      "SEO técnico + velocidad + copias de seguridad",
      "Perfil Nano Pro + Directorio Digital de Panamá",
      "Lista para automatizaciones, CRM y agentes de IA",
    ],
    cta: {
      href: "https://calendly.com/imraullopez/diagnostico-personalizado-ia",
      label: "Agendar diagnóstico",
      external: true,
    },
    highlight: true,
    badge: "El más elegido",
  },
  {
    name: "Proyectos a medida",
    price: "Presupuesto",
    priceNote: "Comercial · Operativa · Enterprise · Director IA",
    tagline:
      "Cuando el sistema supera el Starter: automatización, agentes y dirección IA.",
    features: [
      "Infraestructura Comercial IA™",
      "Infraestructura Operativa IA™",
      "Infraestructura IA Enterprise™",
      "Director IA Externo™ (desde $500/mes)",
    ],
    cta: { href: "/contacto", label: "Hablar de tu caso" },
    badge: "Escala",
  },
];
