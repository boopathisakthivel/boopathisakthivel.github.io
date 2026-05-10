# boopathisakthivel.github.io

Personal portfolio site for **Boopathi Sakthivel** — AI Application Engineering · RAG · Multi-Agent Systems · MCP Tools.

Live site: [boopathisakthivel.github.io](https://boopathisakthivel.github.io)

## Tech stack

- **Next.js 16** with the App Router (static export)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui**-style component primitives
- **Framer Motion** for animations
- **lucide-react** for icons

The site is a single-page experience composed of section components under `components/sections/` (Hero, About, Skills, Experience, Projects, Education, Contact) plus a navbar, animated background and footer.

## Local development

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` produces a fully static site under `out/`.

## Deployment

Deployment to GitHub Pages is handled by [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) on every push to `master`. The workflow installs dependencies, runs `next build` (with `output: 'export'`), and publishes the `out/` directory using the GitHub Pages action.

Pull requests are validated by [`.github/workflows/ci.yml`](./.github/workflows/ci.yml), which runs lint, typecheck and build.

## Project layout

```
app/                 Next.js App Router entry (layout, page, globals)
components/
  sections/          One file per page section
  ui/                Reusable UI primitives (button, card, badge)
  navbar.tsx         Top navigation
  footer.tsx         Footer
  animated-background.tsx   Particle / network animation
  section-heading.tsx       Shared section heading
lib/utils.ts         `cn` helper (clsx + tailwind-merge)
public/              Static assets served at the site root
```
