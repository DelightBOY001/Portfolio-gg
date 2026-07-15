# Karan — Developer Portfolio

Reading this as: a premium developer/creator portfolio for gaming-community and Discord-native audiences, with a mature dark gaming-dashboard language, leaning toward custom Tailwind + GSAP choreography + shadcn-compatible primitives.

## Implementation plan shipped

1. Built a Vite + React + TypeScript + Tailwind project from scratch.
2. Installed and used `npx skills add Leonxlnx/taste-skill --yes` to guide visual restraint, spacing, hierarchy, and premium motion decisions.
3. Created a shadcn-compatible structure with `src/components/ui`, `src/lib/utils.ts`, path aliases, and Tailwind configuration.
4. Integrated the Dock primitive in `src/components/ui/dock.tsx` plus `src/components/ui/demo.tsx` with `AppleStyleDock`.
5. Built a custom Karan portfolio with:
   - full-screen cinematic hero
   - sticky/floating premium navbar
   - layered gaming/dev UI hero visual
   - GSAP intro, scroll, reveal, parallax, and hover systems
   - scroll-driven marquee/social-proof strip
   - about, services, featured projects, workflow, contact, dock, and footer sections
6. Avoided external image dependencies by using custom CSS/SVG-like mockups so the site previews cleanly without network access.
7. Added accessible semantic sections, focus states, responsive behavior, dark global background, and reduced-motion handling.
8. Validated with `npm run lint` and `npm run build`.

## File structure

```txt
.
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── src
    ├── App.tsx
    ├── main.tsx
    ├── styles.css
    ├── components
    │   ├── ui
    │   │   ├── dock.tsx
    │   │   └── demo.tsx
    │   └── portfolio
    │       ├── about-section.tsx
    │       ├── background-layers.tsx
    │       ├── contact-section.tsx
    │       ├── dock-nav.tsx
    │       ├── floating-stat-card.tsx
    │       ├── footer.tsx
    │       ├── hero-section.tsx
    │       ├── hero-visual.tsx
    │       ├── magnetic-button.tsx
    │       ├── marquee-section.tsx
    │       ├── navbar.tsx
    │       ├── project-card.tsx
    │       ├── project-mockup.tsx
    │       ├── projects-section.tsx
    │       ├── section-container.tsx
    │       ├── section-heading.tsx
    │       ├── services-section.tsx
    │       ├── status-badge.tsx
    │       ├── tech-badge.tsx
    │       ├── tilt-card.tsx
    │       └── workflow-section.tsx
    ├── data
    │   ├── nav.ts
    │   ├── projects.ts
    │   └── skills.ts
    ├── hooks
    │   ├── use-gsap-reveal.ts
    │   ├── use-magnetic.ts
    │   ├── use-parallax.ts
    │   └── use-prefers-reduced-motion.ts
    └── lib
        ├── gsap.ts
        └── utils.ts
```

## Setup instructions

Install dependencies:

```bash
npm install
```

Run the local Vite dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Final dependency commands used

```bash
npx skills add Leonxlnx/taste-skill --yes
npm install
npm install -D tailwindcss@3.4.17
npm install react react-dom
npm install -D globals
```

Primary runtime dependencies include:

- `react`
- `react-dom`
- `typescript`
- `vite`
- `tailwindcss`
- `gsap`
- `framer-motion`
- `lucide-react`
- `clsx`
- `tailwind-merge`
- `class-variance-authority`
- `@fontsource/space-grotesk`
- `@fontsource/manrope`

## shadcn/ui compatibility notes

This project includes the expected shadcn-style primitives path:

```txt
src/components/ui
```

That folder is important because it keeps reusable UI primitives separate from portfolio-specific sections, allows clean imports like `@/components/ui/dock`, and matches common shadcn conventions. The `cn` utility is implemented at:

```txt
src/lib/utils.ts
```

The Vite alias `@/* -> src/*` is configured in `vite.config.ts` and `tsconfig.app.json`.

## Dock integration

The dock primitive lives at:

```txt
src/components/ui/dock.tsx
```

It exports:

- `Dock`
- `DockItem`
- `DockLabel`
- `DockIcon`

The demo lives at:

```txt
src/components/ui/demo.tsx
```

The portfolio uses the dock in:

```txt
src/components/portfolio/dock-nav.tsx
```

Current dock actions include Home, About, Skills, Projects, Workflow, Contact, GitHub placeholder, Discord placeholder, and Resume/contact.

## Where to replace placeholders

Update these before publishing:

1. `src/data/nav.ts`
   - Replace GitHub and Discord placeholder URLs.
   - Add a real resume URL if available.

2. `src/data/projects.ts`
   - Replace placeholder demo and GitHub links.
   - Swap sample projects for Karan’s real builds if available.

3. `src/components/portfolio/contact-section.tsx`
   - Replace `karanjii190@gmail.com`.
   - Replace Discord CTA URL.

4. `src/data/projects.ts`
   - Update project titles, tech stacks, impact lines, and categories with real metrics.

## Project content included

Sample portfolio projects:

- Nexus Bot — Discord Automation
- CraftCore Admin — Minecraft Server Panel
- GuildFlow Dashboard — Community Platform
- Pulse Moderation Suite — Backend Tooling
- Ember Portfolio Engine — Interactive Web

Services/skills:

- Discord Bot Development
- Frontend Web Interfaces
- Full Stack Systems
- Game / Community Tooling
- UI Motion & Interaction
- Automation / Backend Integrations

## Quality checks

Passed:

```bash
npm run lint
npm run build
```

Build note: Vite reports a large chunk warning because GSAP, Framer Motion, React, and the full one-page experience ship in one bundle. This is acceptable for the current portfolio, but route-level or component-level code splitting can be added later if the site grows.
