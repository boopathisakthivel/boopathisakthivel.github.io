# GitHub Copilot — Workspace Instructions

This is a Next.js 16 portfolio site for Boopathi Sakthivel. Full context is in [AGENTS.md](../AGENTS.md).

## Stack at a Glance

- Next.js 16 · App Router · `output: 'export'` (static, GitHub Pages)
- TypeScript · Tailwind CSS 3.4 · Framer Motion · Lucide React
- Install always with `npm install --legacy-peer-deps`

## File Map

| File | Purpose |
|---|---|
| `app/page.tsx` | Assembles all section components |
| `app/resume/page.tsx` | Printable resume — keep in sync with sections |
| `components/sections/*.tsx` | One file per portfolio section |
| `app/globals.css` | Custom tokens: `bg-ai-gradient`, `text-gradient`, `text-gradient-animated` |
| `tailwind.config.ts` | Custom colors: `ai-purple`, `ai-blue`, `ai-cyan` |

## Content Rules (apply to all edits)

1. **Tone**: Write as someone already operating at Staff+/Principal scope — not aspiring to it
2. **Wells Fargo focus**: SDLC developer experience, internal platform tooling, GenAI patterns — not "org-wide" mandates or document indexing scale claims
3. **Avoid**: "Principal Engineer" as a self-label, "∞ Lines of Code", "not toys", "org-wide", "industry leadership"
4. **Use**: "platform patterns", "engineering standards", "reusable abstractions", "developer enablement", "architectural ownership"
5. **Encoding**: Always use real Unicode `·` and `—` — never `Â·` or `â€"`
6. **Education**: MCA = Master of Computer Applications; M.Phil = research postgrad
7. **Resume sync**: Any section content change must be mirrored in `app/resume/page.tsx`

## Code Rules

- All components are `'use client'` (Framer Motion requires it)
- `suppressHydrationWarning` on `{new Date().getFullYear()}` in footer — do not remove
- Use `next/font/google` — do not add Google Fonts via `<link>`
- `Card`, `Badge`, `Button` are in `components/ui/` — use them, don't create new ones
- Section structure: `<section id="..." className="relative scroll-mt-20 py-24 sm:py-32">`
- Animations: `whileInView` with `viewport={{ once: true }}` — not `useEffect` scroll listeners

## Custom Tailwind Classes

```
bg-ai-gradient          fuchsia → blue → cyan gradient background
text-gradient           static gradient text (clip-path)
text-gradient-animated  animated version
font-display            Space Grotesk
text-ai-purple / text-ai-cyan / text-ai-blue
```
