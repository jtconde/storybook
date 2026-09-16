import { icon } from '../../lib/icons.js';

/* An item is always the same object: a 40px tile, a name, and one line saying
   what is behind the link. Only the tile's contents change — a glyph for a
   section, a product mark for a product. */
const slot = name => `
  <span class="artslot" style="--slot:100%" role="img" aria-label="${name} mark — artwork to come">
    ${icon('image')}
  </span>`;

const tile = mark =>
  mark.glyph ? icon(mark.glyph)
  : mark.img ? `<img src="/Images/${mark.img[0]}" alt="" width="${mark.img[1]}" height="${mark.img[1]}" decoding="async">`
  : slot(mark.name);

const item = ([mark, name, desc]) => `
  <li>
    <a class="navmenu__item" href="#">
      <span class="menutile">${tile({ ...mark, name })}</span>
      <span>
        <span class="navmenu__name">${name}</span>
        <span class="navmenu__desc">${desc}</span>
      </span>
    </a>
  </li>`;

const list = rows => `<ul class="navmenu__list">${rows.map(item).join('')}</ul>`;

const RESEARCH = [
  [{ glyph: 'telescope' }, 'Research Areas', 'Explore our research initiatives'],
  [{ glyph: 'paperclip' }, 'Publications', 'Read our latest papers'],
  [{ glyph: 'aiBubble' }, 'Open-Source AI', 'Community-driven AI projects'],
];
const COMPANY = [
  [{ glyph: 'userSparkle' }, 'About Us', 'Learn about our mission'],
  [{ glyph: 'users' }, 'Culture', 'Our values and team'],
  [{ glyph: 'monitorStand' }, 'Press', 'News and media coverage'],
  [{ glyph: 'chartSquare' }, 'Customers', 'Success stories from customers'],
  [{ glyph: 'shieldDiamond' }, 'Security', 'Enterprise-grade security'],
  [{ glyph: 'goal' }, 'Jobs', 'Join our team'],
  [{ glyph: 'film' }, 'Blog', 'Latest news and updates'],
];
const PRODUCTS_L = [
  [{ img: ['chatllm_icon.webp', 440] }, 'ChatLLM', 'All-In-One AI Assistant'],
  [{ img: ['deepagent_icon_menu.webp', 213] }, 'Abacus AI Agent', 'General-Purpose Agent'],
  [{ img: ['powerful_computer_icon.webp', 246] }, 'Abacus AI SuperComputer', 'Powerful AI Computer'],
];
const PRODUCTS_R = [
  [{ img: ['iconEnterprise1.webp', 240] }, 'Abacus AI Enterprise', 'Enterprise-Class Agentic Platform'],
  [{ img: ['abacus_studio_icon.webp', 90] }, 'Abacus AI Studio', 'Multi-Media Studio'],
  [{ img: ['routellm_icon.webp', 38] }, 'RouteLLM API', 'Cache-Aware API to 100s of AI Models'],
];

export default {
  title: 'Components/Nav Menu',
  parameters: { docs: { description: { component:
    'The panel that drops out of a Navbar link. It is the only surface here that is neither a band ' +
    'nor a card: it **floats**, so it takes the navbar\'s own shadow and a visible 1px edge rather ' +
    'than a card\'s hairline — it has to hold its shape against the navbar gradient above it as well ' +
    'as the page below.\n\n' +
    '**A bare `.navmenu` is a panel and renders in place**, which is what the stories below show. ' +
    'It only becomes a dropdown inside `.navitem`, which anchors and hides it — see *Dropped From ' +
    'The Navbar*. Opening is pure CSS (`:hover` for pointers, `:focus-within` for keyboards), so no ' +
    'script can leave a panel stuck open.' } } },
};

export const Research = {
  parameters: { docs: { description: { story:
    'One column at a fixed 300px. Tiles sit 30px apart — 8px of item padding, a 14px list gap, 8px ' +
    'again. The padding is what lets the hover fill reach the panel\'s inner edge.' } } },
  render: () => `<div class="navmenu">${list(RESEARCH)}</div>`,
};

export const Company = {
  parameters: { docs: { description: { story:
    'Seven items, same 300px. The glyphs are Lucide except `userSparkle`, `monitorStand`, ' +
    '`chartSquare` and `shieldDiamond`, which are composed from Lucide primitives.' } } },
  render: () => `<div class="navmenu">${list(COMPANY)}</div>`,
};

export const Products = {
  parameters: { docs: { description: { story:
    'Split: two equal columns divided by a 1px rule with 24px either side — **a rule, not a gap**. ' +
    'Six items stacked in one column would push the panel past the fold on a laptop.\n\n' +
    'The tiles hold **product marks** instead of glyphs, and the ramp stays behind them. A mark gets ' +
    '**24px** where a glyph gets 20 — it is full-colour artwork carrying its own silhouette, so it ' +
    'needs the extra to read at this size. It is centred, never stretched: 8px of tile shows on ' +
    'every side, and that even margin is what makes six unrelated marks look like one row.' } } },
  render: () => `<div class="navmenu navmenu--split">${list(PRODUCTS_L)}${list(PRODUCTS_R)}</div>`,
};

export const ItemStates = {
  parameters: { docs: { description: { story:
    'Rest and hover. Hover fills `rgba(255,255,255,.05)` at `--r-lg`; nothing else moves — no lift, ' +
    'no tile change, no colour shift on the copy.' } } },
  render: () => `
    <div class="navmenu">
      <ul class="navmenu__list">
        ${item([{ glyph: 'telescope' }, 'Research Areas', 'Rest'])}
        ${item([{ glyph: 'paperclip' }, 'Publications', 'Hover']).replace('navmenu__item', 'navmenu__item is-hover')}
      </ul>
    </div>`,
};

export const DroppedFromTheNavbar = {
  parameters: { flush: true, docs: { description: { story:
    'The panel in its real context. Hover or tab to **Research** — `.navitem` is the only thing ' +
    'that positions and hides it, and the panel markup is unchanged from the stories above. It ' +
    'hides with `visibility` rather than `display`, so it can transition and still leave the tab ' +
    'order while closed.' } } },
  render: () => `
    <div style="padding-bottom:340px">
      <div class="nav-wrap nav-shell">
        <nav class="nav" aria-label="Primary">
          <a class="logo nav__logo" href="#" aria-label="Abacus.AI home">
            <img class="logo__img" src="/Images/logo_text80Light.webp" alt="Abacus.AI" width="676" height="92">
          </a>
          <div class="nav__menu">
            <a class="nav__link" href="#">Abacus Enterprise</a>
            ${[['Products', 'navmenu navmenu--split', list(PRODUCTS_L) + list(PRODUCTS_R)],
               ['Research', 'navmenu', list(RESEARCH)],
               ['Company', 'navmenu', list(COMPANY)]].map(([label, cls, inner]) => `
              <span class="navitem">
                <a class="nav__link" href="#">${label} ${icon('chevronDown', { cls: 'nav__chev' })}</a>
                <div class="${cls}" role="group" aria-label="${label}">${inner}</div>
              </span>`).join('')}
          </div>
          <a class="btn btn--primary nav__cta" href="#">Sign In</a>
        </nav>
      </div>
    </div>`,
};
