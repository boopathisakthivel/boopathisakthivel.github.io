# AGENTS.md — AI Agent Instructions

This file provides context for AI coding agents (GitHub Copilot, Devin, Claude, etc.) working on this repository.

---

## Project Overview

Personal portfolio site for **Boopathi Sakthivel** — Lead Software Engineer with 14+ years of experience in enterprise platform engineering, GenAI systems, and banking infrastructure.

Built with **Next.js 16 (App Router, static export)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Deployed to GitHub Pages via GitHub Actions.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.6 (Turbopack, App Router) |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 3.4 with custom tokens |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Package manager | npm (use `--legacy-peer-deps` for installs) |
| Deployment | GitHub Pages via `output: 'export'` |

---

## Repository Structure

```
app/
  layout.tsx        # Root layout, metadata, fonts
  page.tsx          # Main page — assembles all sections
  globals.css       # Custom CSS tokens and Tailwind base
  resume/
    page.tsx        # Printable/downloadable resume page

components/
  sections/
    hero.tsx        # Hero with name, tagline, CTAs
    about.tsx       # About card + highlights + stats
    pe-readiness.tsx# Engineering leadership journey + competency pillars
    skills.tsx      # 3-domain skill cards + tech chip cloud
    experience.tsx  # Career timeline (6 roles)
    projects.tsx    # 6 featured projects
    education.tsx   # Education cards
    contact.tsx     # Contact info + links
  ui/
    badge.tsx       # Badge component (variants: gradient, soft, secondary)
    button.tsx      # Button component
    card.tsx        # Card component
  animated-background.tsx
  footer.tsx
  navbar.tsx
  section-heading.tsx

public/
  favicon.svg
  .nojekyll         # Required for GitHub Pages
  Boopathi-Sakthivel-LinkedIn.pdf

.github/
  workflows/
    deploy.yml      # Auto-deploy to GitHub Pages on push to main/master
    ci.yml          # Lint + typecheck on PRs
  copilot-instructions.md  # GitHub Copilot workspace instructions
```

---

## Key Design Tokens (globals.css + tailwind.config.ts)

- `--ai-purple` / `--ai-blue` / `--ai-cyan` — gradient palette (fuchsia → blue → cyan)
- `bg-ai-gradient` — fuchsia→blue→cyan gradient background
- `text-gradient` — static gradient text
- `text-gradient-animated` — animated gradient text
- `font-display` — Space Grotesk (headings)
- `font-mono` — JetBrains Mono (code / timestamps)
- Background: `#0a0a14` (deep dark navy)

---

## Build & Dev Commands

```bash
npm run dev        # Start dev server (Turbopack, port 3001 if 3000 busy)
npm run build      # Build static export to ./out/
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

Install: always use `npm install --legacy-peer-deps` (eslint v9 peer dep conflict).

---

## Content Guidelines

When editing portfolio content, follow these rules:

### Tone & Positioning
- **Do**: Write as someone who already operates at Staff+/Principal scope
- **Do**: Use: "platform patterns", "engineering standards", "reusable abstractions", "developer enablement", "architectural ownership", "cross-team influence"
- **Don't**: Use "targeting Principal Engineer", "I want to become", self-declarations of seniority
- **Don't**: Use "org-wide" (too strong), "industry leadership" (overclaiming), "millions of documents" (unverified)
- **Don't**: Add gimmicks like "∞ Lines of Code" or "not toys"

### Wells Fargo (current role)
- Focus: **SDLC developer experience, internal platform tooling, GenAI platform patterns**
- Correct: RAG integrations, MCP tooling, A2A orchestration, developer experience tooling
- Avoid: Claims about indexing millions of documents, "org-wide" mandate

### Technical Accuracy
- MCA = Master of Computer Applications (2009–2012) — **not** "Master's in Computer Programming"
- M.Phil = research postgraduate, 2015–2017
- Career started 2009 (college systems) → internship Nov 2011 (INPOTech, Coimbatore) → professional Sep 2012
- Total experience: 14+ years

### Character Encoding
- Always use proper Unicode: `·` (not `Â·`), `—` (not `â€"`)
- All string literals in TSX must use real Unicode characters, not HTML entities or corrupted encodings

---

## Resume Page (`/resume`)

- Client component (`'use client'`) — uses `window.print()` for PDF
- Wrapped in grey `bg-gray-200` shell to look like a PDF viewer
- White `max-w-[850px]` A4 card with `shadow-2xl`
- `@media print` strips the shell and renders clean for browser PDF save
- **Must stay in sync** with the main portfolio sections — any content change in a section should be reflected in the resume

---

## Deployment

Push to `main` or `master` → GitHub Actions builds and deploys automatically.

No manual build or `out/` commit needed. The workflow: checkout → install → `next build` → upload `out/` → deploy to Pages.

---

## What NOT to Do

- Do not `npm install` without `--legacy-peer-deps`
- Do not commit the `out/` or `.next/` directories
- Do not use `require()` — this is an ESM TypeScript project
- Do not remove `suppressHydrationWarning` from the year span in footer.tsx
- Do not add `'use server'` to client components
- Do not add phone number to public-facing contact section (spam risk)
