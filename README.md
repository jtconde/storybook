# Abacus Subpage Design System — Storybook

Storybook for the dark subpage system documented in `../subpage-design-system.html`.

## Run it

Node is not installed on this machine yet. Once it is (Node 20+):

```bash
cd storybook
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # static build into storybook-static/
```

If the pinned Storybook versions ever drift, `npx storybook@latest init --type html`
reconciles `package.json` and `.storybook/` without touching anything in `src/`.

## How it is wired

| Path | What it is |
| --- | --- |
| `src/styles/design-system.css` | **Extracted verbatim from `../subpage.html`** — the same rules the reference pages render with |
| `src/styles/fonts.css` | The twelve Matter `@font-face` rules, pointed at `/Fonts` |
| `src/styles/storybook.css` | Canvas chrome. Never ships with the system |
| `src/lib/icons.js` | The inlined Lucide v1.44 paths the pages use |
| `.storybook/preview.js` | Wraps every story in `.theme-dark` and registers the band backgrounds |
| `.storybook/main.js` | Serves `../Fonts` and `../Images` straight out of the repo root |

**There is one source of truth for CSS.** `design-system.css` is a copy of the
stylesheet in `subpage.html`, so a change to the design system must be re-extracted:

```bash
python3 - <<'PY'
import re
css = open('../subpage.html').read().split('<style>')[1].split('</style>')[0]
rest = re.sub(r'@font-face\{[^}]*\}\n?', '', css).lstrip('\n')
head = open('src/styles/design-system.css').read().split('*/\n\n', 1)[0] + '*/\n\n'
open('src/styles/design-system.css','w').write(head + rest)
PY
```

Stories are plain template strings using the real BEM classes — nothing is
re-implemented, so a story cannot drift from the page it documents.

## Structure

- **Foundations** — Colour, Typography, Radius & Elevation
- **Components** — Button, Filter Chip, Avatar, Badge, Icon Tile, Thumbnail,
  Artwork Slot, Icon List, Price Line, Footnote, Capability Banner, Carousel
  Controls, Logo, Content Card, Feature Card, Model Tile, Product Card
- **Patterns** — Navbar, Page Hero, Section Head, Card Grid, Carousel,
  CTA Panel, Video Dialog, Footer

Variant axes match the Figma property tables in `subpage-design-system.html`, so
`Tone`, `Align`, `Size` and `Play` are the same names in both places.

## Known gaps

- `design-system.css` also carries homepage-only rules that ride along in
  `subpage.html` (`.quicklinks`, `.composer`, `.plan`, `.press`, `.award`, …).
  They are inert here and flagged in the file header.
- Nothing has been run. No `npm install` was possible on this machine, so the
  config is written against the documented Storybook 9 API but unverified.
