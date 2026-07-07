# imraullopez-site

Web comercial de `imraullopez.com` para posicionar a **Raúl López** como arquitecto de soluciones IA y automatización para empresas.

La web está diseñada para captar leads cualificados interesados en:

- agentes de IA para empresas
- automatización de procesos
- seguimiento comercial y captación de leads
- integraciones con CRM, WhatsApp, email y bases de datos
- desarrollo web y landings de conversión
- consultoría IA orientada a ROI

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React 19

## Arquitectura del sitio

- `/` : Home principal orientada a captación
- `/sobre-mi` : historia, autoridad y posicionamiento
- `/servicios` : oferta de servicios
- `/portfolio` : casos y experiencia operativa
- `/contacto` : formulario principal de captación
- `/lp/automatizacion-7-dias` : landing para automatización rápida
- `/lp/seguimiento-leads` : landing para empresas de servicios y equipos comerciales
- `/lp/automatizacion-interna` : landing para procesos internos
- `/gracias` : confirmación tras envío
- `/api/contact` : endpoint preparado para conectar CRM, email o automatización

Rutas heredadas:

- `/projects` redirige a `/portfolio`
- `/projects/nano-agent-stack` redirige a `/portfolio`

## Estructura

```text
src/
  app/
    api/contact/route.ts
    contacto/
    gracias/
    lp/
    portfolio/
    servicios/
    sobre-mi/
    layout.tsx
    page.tsx
    sitemap.ts
  components/
    analytics.tsx
    lead-form.tsx
    service-card.tsx
    case-study-card.tsx
    cta-band.tsx
    ...
  content/
    site.ts
  lib/
    metadata.ts
    utils.ts
```

## Variables públicas

Copia `.env.example` si vas a conectar analítica o WhatsApp:

```bash
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_WHATSAPP_URL=
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Validación

```bash
npm run lint
npm run build
```

## Formularios

El formulario envía datos a `/api/contact`.

Ahora mismo el endpoint:

- valida campos requeridos
- devuelve respuesta JSON
- está listo para conectarse a CRM, email, webhook o automatización externa

Integraciones recomendadas para siguiente paso:

- Resend o Postmark para email
- HubSpot / GoHighLevel / Pipedrive / Close
- n8n webhook para calificación y enrutamiento

## SEO y tracking

El proyecto incluye:

- metadata por página
- Open Graph por ruta
- `robots.txt`
- `sitemap.xml`
- estructura lista para Google Analytics
- estructura lista para Meta Pixel

## Despliegue en Vercel

1. Importa el repo en Vercel.
2. Añade las variables públicas si vas a usar tracking o WhatsApp.
3. Verifica que el dominio principal sea `imraullopez.com`.
4. Haz deploy.

## Conexión de dominio

En Vercel:

1. Ve a `Settings -> Domains`.
2. Añade `imraullopez.com`.
3. Añade `www.imraullopez.com` si quieres redirigirlo.
4. Configura los DNS que Vercel indique en tu proveedor.
5. Marca `imraullopez.com` como dominio principal.
6. Redeploy para refrescar metadata, sitemap y OG routes sobre el dominio final.

## Próximos pasos recomendados para conversión

- conectar el formulario a CRM y secuencia automática
- instalar GA4 y Meta Pixel reales
- añadir testimonios reales y resultados cuantificados
- añadir casos con cifras y screenshots
- grabar video corto de diagnóstico/oferta
- crear campañas específicas por sector con UTMs
