import { icon } from '../../lib/icons.js';

const rows = [
  ['cloudDownload', 'Generate and host apps'],
  ['video',         'Create videos, slides and docs'],
  ['check',         'Automate with Tasks &amp; Triggers'],
  ['chart',         'Research and data analysis'],
];

export default {
  title: 'Components/Icon List',
  parameters: { docs: { description: { component:
    'The capability list inside a Product Card: a 26px glyph and a bold label, centre-aligned ' +
    'to each other. Rows are single-line by design — if a capability needs two lines it is ' +
    'really two capabilities, or a Feature Card.' } } },
  render: () => `<ul class="iconlist">${rows.map(([g, l]) =>
    `<li class="iconrow">${icon(g, { cls: 'iconrow__icon' })}<span class="iconrow__label">${l}</span></li>`
  ).join('')}</ul>`,
};

export const Default = {};
