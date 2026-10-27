<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Hammet Marketing Domain — Agent Instructions

## 1. Purpose

These instructions govern frontend work within Hammet's marketing domain.

The marketing domain represents Hammet to prospective learners, schools, partners, and other visitors. Its responsibility is to communicate the product, explain its value, and guide visitors towards relevant actions.

The marketing experience must remain consistent with Hammet's brand identity and design system.

## 2. Brand Identity

Use the existing Hammet brand palette.

| Token | Hex | Intended Use |
|---|---|---|
| Purple Dark | `#3B0764` | Strong brand surfaces, dark headers |
| Purple | `#5B21B6` | Primary buttons, active states |
| Purple Mid | `#6D28D9` | Hover states and emphasis |
| Purple Light | `#EDE9FE` | Soft backgrounds, badges |
| Cyan | `#06B6D4` | Action accents, highlights |
| Cyan Dark | `#0E7490` | Cyan text on light backgrounds |

These are the established brand colors. Do not invent replacement colors or introduce a competing palette.

### Color Usage

- Use purple as the primary brand color.
- Use cyan as a supporting accent for important actions and highlights.
- Use light purple for subtle backgrounds and supporting visual elements.
- Use appropriate foreground colors to maintain readable contrast.
- Use existing semantic design tokens for success, warning, danger, borders, and other interface states.
- Do not use cyan for every button or highlight. Preserve a clear visual hierarchy.
- Do not use the brand palette as a reason to color every section of a page.

Use the existing CSS variables or Tailwind theme tokens when available. Inspect the implementation before introducing new tokens.

Do not hardcode hex values repeatedly when the project already provides a token for that color.

