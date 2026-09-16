import { icon } from '../../lib/icons.js';

const list = rows => `<ul class="iconlist productcard__list">${rows.map(([g, l]) =>
  `<li class="iconrow">${icon(g, { cls: 'iconrow__icon' })}<span class="iconrow__label">${l}</span></li>`
).join('')}</ul>`;

const card = (glyph, name, badge, rows) => `
  <article class="productcard">
    <header class="productcard__head">
      <span class="avatar">${icon(glyph)}</span>
      <div><h3 class="productcard__name">${name}</h3><span class="badge">${badge}</span></div>
    </header>
    ${list(rows)}
    <div class="productcard__foot">
      <a class="btn btn--blue" href="#">Learn More ${icon('arrowRight', { cls: 'btn__arrow' })}</a>
    </div>
  </article>`;

const agent = card('bot', 'Abacus AI Agent', 'A Very Powerful General Purpose Agent', [
  ['cloudDownload', 'Generate and host apps'], ['video', 'Create videos, slides and docs'],
  ['check', 'Automate with Tasks &amp; Triggers'], ['chart', 'Research and data analysis']]);

const desktop = card('sparkles', 'Abacus AI Desktop', 'State-of-the-art AI Desktop Assistant', [
  ['zap', 'Abacus CoWork'], ['code', 'Coding agent and CLI'],
  ['monitor', 'Desktop assistant and listener'], ['grid', 'Chrome extension for agentic browsing']]);

export default {
  title: 'Components/Product Card',
  parameters: { docs: { description: { component:
    'The heaviest card in the system. **Never more than two on a page** — the moment there is ' +
    'a third, the content wants a Feature Card grid instead. Its blue CTA is a demotion, not a ' +
    'second brand colour: the page\'s real call to action is the purple one in the hero.' } } },
};

export const Single = { render: () => `<div style="max-width:560px">${agent}</div>` };
export const Pair = {
  render: () => `<div class="productpair">${agent}${desktop}</div>`,
};
