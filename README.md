# The Engineer's Journey — Riham Tahir

A complete responsive cybersecurity portfolio built with React, Vite, Tailwind CSS v4, Motion, React Router, and Lucide. No backend is required.

## Run locally

Install Node.js 22.12+ or 24 LTS, then run:

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The generated `dist` directory is ready for static hosting. For Vercel, import this directory as a project, select Vite, use `npm run build`, and set the output directory to `dist`. The included `vercel.json` rewrites client-side project routes to `index.html` while preserving built assets. Publishing is not performed by this project.

## Edit content and add official assets

- All biography, education, projects, professional experience, credentials, and skill relationships live in `src/data.js`.
- Set `profile.github` to the supplied GitHub URL. Until configured, the UI labels it as pending.
- Put the official CV at `public/riham-tahir-cv.pdf`, then set `profile.cv` to `/riham-tahir-cv.pdf`. The reusable download buttons automatically become working links. They are disabled while the file is missing.
- The portrait is an abstract CSS placeholder, not a photograph. Replace the `Portrait` component in `src/main.jsx` with the official portrait and descriptive alt text when provided.
- Credential badges and verification links are explicitly pending. Replace placeholders with official assets and URLs; no IDs are fabricated.
- Project diagrams are labeled conceptual placeholders. Replace them with verified diagrams or screenshots. Repository URLs are not invented; add supplied links to the data and detail component as needed.
- Confirm supplied academic status, credential information, and career availability before public release.

## Included interactions

Responsive navigation and active-section tracking; two expanding education stages; eight-domain Knowledge Universe; category filters; six dedicated project routes; five expanding experience entries; hard/soft competency tabs with arrow-key navigation; skill-to-project explorer; persistent dark/light theme; accessible focus states and skip link; reduced-motion support; mailto and LinkedIn links.

## Structure

- `src/main.jsx`: reusable UI, pages, interactions, and routes
- `src/data.js`: editable professional content and relationships
- `src/styles.css`: responsive design, themes, Tailwind import, reduced-motion rules
- `vite.config.js`: Vite and Tailwind integration
- `vercel.json`: production SPA routing

The only persistent browser data is the chosen theme in localStorage. No analytics, tracking, form backend, or external image dependencies are included.
