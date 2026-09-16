import { icon } from '../../lib/icons.js';

const navbar = () => `
  <div class="nav-wrap nav-shell">
    <nav class="nav">
      <a class="nav__logo logo" href="#" aria-label="Abacus.AI home">
        <img class="logo__img" src="/Images/logo_text80Light.webp" alt="Abacus.AI" width="676" height="92">
      </a>
      <div class="nav__menu">
        <a class="nav__link" href="#">Abacus Enterprise</a>
        <a class="nav__link" href="#">Products ${icon('chevronDown', { cls: 'nav__chev' })}</a>
        <a class="nav__link" href="#">Research ${icon('chevronDown', { cls: 'nav__chev' })}</a>
        <a class="nav__link" href="#">Company ${icon('chevronDown', { cls: 'nav__chev' })}</a>
      </div>
      <a class="btn btn--primary nav__cta" href="#">Sign In</a>
    </nav>
  </div>`;

export default {
  title: 'Patterns/Navbar',
  parameters: {
    docs: { description: { component:
      'The bar must never wrap. Every child is `flex:0 0 auto` and `nowrap`, so the row can ' +
      'only get tighter, never taller. The thresholds are **container queries, not viewport ' +
      'ones** — the bar behaves identically at 1224px on the page and at 806px inside a narrow ' +
      'canvas, which is exactly what the two stories below show.' } },
  },
};

export const Default = { render: navbar };

export const MenuDropped = {
  parameters: { docs: { description: { story:
    'Below a 900px *container*, the links are dropped rather than wrapped.' } } },
  render: () => `<div style="width:720px">${navbar()}</div>`,
};

export const Tightened = {
  parameters: { docs: { description: { story:
    'Below 520px the bar drops to 54px and the CTA tightens to 28px.' } } },
  render: () => `<div style="width:460px">${navbar()}</div>`,
};
