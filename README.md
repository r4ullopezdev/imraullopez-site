# imraullopez-site

Main web portfolio for `imraullopez.com`.

This project is a Next.js App Router site designed as the presentation layer for Raul Lopez's technical portfolio and open-source work. The current flagship page is a premium one-page presentation for **NANO Agent Stack**, supported by a broader home page and project index.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router

## Routes

- `/` - main home page
- `/projects` - project index
- `/projects/nano-agent-stack` - flagship one-page project landing

## Project structure

```text
src/
  app/
    page.tsx
    projects/
      page.tsx
      nano-agent-stack/page.tsx
  components/
    reusable UI building blocks
  content/
    editable project and site data
  lib/
    small helper utilities
```

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Edit points

- `src/content/site.ts` - personal metadata and primary links
- `src/content/projects.ts` - project cards and ecosystem repo data
- `src/app/page.tsx` - homepage structure and content
- `src/app/projects/page.tsx` - project index
- `src/app/projects/nano-agent-stack/page.tsx` - NANO landing page
- `src/components/*` - reusable visual sections

## Prepared for future growth

The site is intentionally structured so it can expand into:

- `/about`
- `/contact`
- `/blog`
- more project pages
- future GitHub API integrations

## Suggested next iteration

- add OG image generation
- add a lightweight CMS or MDX layer for blog and case studies
- connect GitHub API for dynamic repo stats
- add page transitions and section-level motion refinements
- add deployment config for Vercel or custom hosting
