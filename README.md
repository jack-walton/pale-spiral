# Pale Spiral

A portfolio site built with Astro + Starlight to showcase technical writing, UX documentation, and prompt engineering.

## What’s included

- `src/content/docs/index.mdx` — homepage and portfolio overview
- `src/content/docs/venu/` — VENU mobile app user guide with task flows, screenshots, and navigation descriptions
- `src/content/docs/venu/case-study.mdx` — UX writing case study for VENU (in draft, not yet published)
- `src/content/docs/ai/` — prompt library for change logs, Vale rule generation, DITA task scaffolding, and quality assurance
- `.vale/` — Vale prose linter with custom Walton style rules
- `src/content/docs/resume.mdx` — resume, experience, education, and technical skills

## Project structure

```
.
├── .claude/
│   └── commands/
├── .vale/
│   └── styles/Walton/
├── public/
│   └── icons/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Local development

From the project root:

```bash
pnpm install
pnpm dev
```

Then open the local server shown in the terminal.

## Build and preview

```bash
pnpm build
pnpm preview
```

## Notes

- This site uses `@astrojs/starlight` for content layout, cards, steps, and documentation components.
- Static files and images are served from `public/` and `src/assets/`.
- The site metadata, sidebar, social links, and custom fonts are configured in `astro.config.mjs`.
- Pages marked `draft: true` render in `pnpm dev` but are excluded from production builds. To publish a draft, remove `draft: true` from its frontmatter and uncomment its sidebar entry in `astro.config.mjs` and its card on the section's overview page.