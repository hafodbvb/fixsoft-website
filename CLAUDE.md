# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start local dev server
pnpm build        # typecheck (astro check) + build + HTML minification
pnpm preview      # preview production build locally
pnpm format:check # check code formatting with Prettier
pnpm format:fix   # auto-format with Prettier
```

There are no unit tests. `pnpm build` runs `astro check` for TypeScript validation.

## Stack

- **Astro 6** — static site generator (SSG), file-based routing
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin. Use v4 syntax only (not v3).
- **Preline UI** — interactive components (modals, dropdowns, accordions); script loaded in MainLayout
- **Starlight** — docs section (`src/content/docs/`), supports 7 languages
- **Lenis** — smooth scroll (`src/assets/scripts/lenisSmoothScroll.js`)
- **GSAP** — animations on product and insights detail pages

## Path Aliases

Always use these aliases in imports (defined in [tsconfig.json](tsconfig.json)):

| Alias | Resolves to |
|---|---|
| `@components/*` | `src/components/*` |
| `@content/*` | `src/content/*` |
| `@data/*` | `src/data_files/*` |
| `@images/*` | `src/images/*` |
| `@scripts/*` | `src/assets/scripts/*` |
| `@styles/*` | `src/assets/styles/*` |
| `@utils/*` | `src/utils/*` |

Example: `import { SITE } from "@data/constants"` — not `@/data_files/constants`.

## Architecture

### Layout

[src/layouts/MainLayout.astro](src/layouts/MainLayout.astro) is the root wrapper for all pages. It accepts props `title`, `meta`, `structuredData`, `lang`, `customDescription`, `customOgTitle` and injects Navbar, FooterSection, Preline script, and Lenis. All pages use `<MainLayout>` as their outer shell.

### Components

- `src/components/sections/` — full-width page sections (landing, features, navbar&footer, testimonials, pricing, misc)
- `src/components/ui/` — smaller reusable pieces (buttons, cards, forms, icons, banners, feedback)
- `src/components/ui/starlight/` — custom Starlight overrides (SiteTitle, Head, MobileMenuFooter, ThemeSelect)
- French-locale variants live in `sections/fr/`

### Content Collections

Schemas are defined in [src/content.config.ts](src/content.config.ts). Collections:

- **blog** — `src/content/blog/{en,fr}/` — posts with author, pubDate, readTime, tags, cardImage
- **products** — `src/content/products/{en,fr}/` — rich schema with tabs, specs, blueprints, tableData
- **insights** — `src/content/insights/{en,fr}/` — lightweight schema (title, description, cardImage)
- **docs** — `src/content/docs/` — Starlight-managed, auto-sidebar from `guides/`, `construction/`, `tools/`, `advanced/`

Use `getCollection('blog')` etc. in pages to query content.

### i18n

Manual routing: French pages live under `src/pages/fr/` mirroring the English structure. Navigation strings are in [src/utils/navigation.ts](src/utils/navigation.ts) (English) and [src/utils/fr/navigation.ts](src/utils/fr/navigation.ts) (French). Navbar/Footer use `Astro.currentLocale` to select the correct strings. Static data (FAQs, features, pricing) has English files in `src/data_files/` and French in `src/data_files/fr/`.

### Static Data & Config

- [src/data_files/constants.ts](src/data_files/constants.ts) — `SITE`, `SEO`, `OG` metadata, `partnersData`
- `src/data_files/*.json` — `faqs.json`, `features.json`, `pricing.json`
- [src/data_files/mega_link.ts](src/data_files/mega_link.ts) — mega menu navigation data
- [src/utils/navigation.ts](src/utils/navigation.ts) — `navBarLinks`, `footerLinks`, `socialLinks`

### SEO

[src/components/Meta.astro](src/components/Meta.astro) reads from `SITE`/`SEO`/`OG` constants; per-page overrides go through MainLayout props.

## Conventions

- No global state — all data is passed as props at the page level.
- New reusable components go in `src/components/sections/` (full sections) or `src/components/ui/` (smaller pieces).
- New content goes in `src/content/` and must match the schemas in `content.config.ts`.
- Navigation/footer copy: edit `src/utils/navigation.ts` (and the `fr/` variant for French).
- Tailwind v4 only — do not use v3 class variants or config-based theming.
