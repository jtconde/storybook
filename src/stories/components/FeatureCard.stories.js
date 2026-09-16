import { icon, iconNames } from '../../lib/icons.js';

export default {
  title: 'Components/Feature Card',
  argTypes: {
    align: { control: 'inline-radio', options: ['left', 'center'],
             description: 'Alignment and marker shape only, never type.' },
    label: { control: 'text' },
    glyph: { control: 'select', options: iconNames },
  },
  args: { align: 'left', label: 'Ability to understand complex docs in minutes', glyph: 'clock' },
  parameters: { docs: { description: { component:
    'A marker and a claim, nothing else — no body copy, no link, no thumbnail. It carries the ' +
    'raised gradient rather than the flat card surface, because at this size a flat fill reads ' +
    'as a dead rectangle. Left leads with an Icon Tile, centred with an Avatar — and both use ' +
    'the same shared card-title step.' } } },
  render: ({ align, label, glyph }) => `
    <div class="fcard${align === 'center' ? ' fcard--center' : ''}" style="max-width:380px">
      ${align === 'center' ? `<span class="avatar">${icon(glyph)}</span>`
                           : `<span class="icontile">${icon(glyph)}</span>`}
      <span class="fcard__label">${label}</span>
    </div>`,
};

export const AlignLeft = {};
export const AlignCenter = {
  args: { align: 'center', glyph: 'shield',
          label: 'Your data is your own. We won\u2019t use your data for training our and others\u2019 LLMs' },
};

export const Grid = {
  render: () => {
    const cards = [['clock','Ability to understand complex docs in minutes'],
                   ['mail','Generate content to respond to emails and other requests'],
                   ['info','Find external and internal information in one place'],
                   ['network','Analysis of your data and spreadsheets almost instantly'],
                   ['terminal','Code examples for developers to increase productivity'],
                   ['settings','Create agents to automate tasks in the organization']];
    return `<div class="fcardgrid">${cards.map(([g, l]) =>
      `<div class="fcard"><span class="icontile">${icon(g)}</span><span class="fcard__label">${l}</span></div>`
    ).join('')}</div>`;
  },
};
