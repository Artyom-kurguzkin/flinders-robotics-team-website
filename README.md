# Flinders Robotics Team website

Static site for the Flinders Robotics Team and the TopCat autonomous surface vessel. Astro, styled
with Material Design 3 via [`@material/web`](https://github.com/material-components/material-web).

Rebuild of https://sites.flinders.edu.au/maritime-robotx-challenge/

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview the build locally |
| `npx astro check` | Typecheck |

## Structure

```
src/
├── assets/          images — optimised at build time by astro:assets
│   └── gallery/     the 18 gallery photos
├── components/      Footer, PageHeader
├── content/
│   └── competitions/  one markdown file per event (content collection)
├── data/            page prose (.md) and structured content (.json)
├── layouts/         Layout.astro — top app bar, nav drawer, fonts
├── pages/           one .astro file per route
└── styles/global.css  M3 design tokens + shared classes
```

### Editing content

Most text lives in `src/data/` as plain markdown — edit the `.md` file, no HTML involved.
Structured content is JSON in the same folder:

- `team.json` — the 24 photo cards: name, role, qualifications, email, LinkedIn
- `vessel-grid.json` — the nine photo tiles under The Vessel (Wam-V, Propulsion, …)
- `timeline.json` — development timeline
- `sponsors.json` — sponsors by tier
- `tasks.json` — the competition task breakdown, with nested steps
- `gallery.json` — gallery photos in source order, with their titles and a `category` (drives the filter chips on the home page)

Competition write-ups are a content collection in `src/content/competitions/`. Each
markdown file is one tab on the Competitions page: frontmatter names the tab and orders it,
the body is the whole write-up. The schema is in `src/content.config.ts`.

### Images

Images go in `src/assets/`, **not** `public/`. Astro optimises them at build time —
the source photos are up to 5 MB each and ship as ~30 kB webp thumbnails. Reference them
with a static `import` and the `<Image>` component.

Gallery images are picked up automatically by a glob; add the file to
`src/assets/gallery/` and an entry to `src/data/gallery.json`.

## Material Design

`@material/web` v2 ships no stable card or top app bar — those are `labs/` only. The app
bar, nav drawer and cards here are hand-rolled CSS reading the same `--md-sys-*` tokens
the components use, so they theme together. See the `ponytail:` comments marking these.

The colour scheme is a generated M3 palette in `src/styles/global.css`, light and dark.
Regenerate it with [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)
if the brand colour changes.

## Deployment

GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys to GitHub
Pages on push to `main`.

The site lives at `https://artyom-kurguzkin.github.io/flinders-robotics-team-website/`,
set by `site` and `base` in `astro.config.mjs`. Locally, `npm run dev` therefore serves at
`http://localhost:4321/flinders-robotics-team-website/`.

One-time setup: a brand-new empty repo cannot have a Pages source set until it has a commit.
Push first (that first deploy will fail, since Pages is not enabled yet), then repo
Settings → Pages → Source → **GitHub Actions**, then Actions → the failed run → **Re-run all
jobs**. After that every push to `main` deploys on its own. Moving to a custom domain (or a repo
named `<owner>.github.io`) means `base: '/'` and the new `site`.
