# Brand typefaces

The Flinders Brand Guidelines (Ver 11.0) specify two licensed typefaces:

- **Circular** (Lineto) — the primary face. "This font should always be used." (p.50)
- **Reckless Neue** (Displaay) — the serif companion, for italic secondary
  headings, sub headings and pull quotes. (p.52)

Neither is on a public CDN, so both are self-hosted from this folder. The
`@font-face` rules live in `src/styles/global.css`.

**This folder is intentionally empty of font files** — they are licensed and are
not committed. Until they are added, every face falls through to **DM Sans**,
which is what the guideline itself prescribes "where Circular is unavailable"
(p.54). The site is on-brand either way; adding the files just upgrades it.

## Adding the fonts

Get the web (`.woff2`) files from the Flinders University marketing team, then
drop them in here under exactly these names:

| File                                | Weight | Style  |
| ----------------------------------- | ------ | ------ |
| `circular-book.woff2`               | 400    | normal |
| `circular-medium.woff2`             | 500    | normal |
| `circular-bold.woff2`               | 700    | normal |
| `circular-black.woff2`              | 900    | normal |
| `reckless-neue-regular.woff2`       | 400    | normal |
| `reckless-neue-regular-italic.woff2`| 400    | italic |
| `reckless-neue-medium.woff2`        | 500    | normal |
| `reckless-neue-medium-italic.woff2` | 500    | italic |

No code change is needed — they are picked up on the next build.

If you only have desktop `.otf`/`.ttf` files, convert them first (e.g. with
`fonttools`: `pyftsubset font.otf --flavor=woff2 --output-file=out.woff2`).
Check the licence covers web embedding before deploying.

## Notes

- The CSS lists `local()` before the URL, so a copy installed on the viewer's
  machine is used without a download.
- The site uses weight 600 in a few places; above 500 the browser searches
  heavier first, so 600 resolves to Bold and 800 to Black. That is deliberate —
  Circular has no 600 or 800 cut.
