import { icon, iconNames } from '../../lib/icons.js';

export default {
  title: 'Components/Filter Chip',
  argTypes: {
    label:    { control: 'text' },
    glyph:    { control: 'select', options: iconNames },
    selected: { control: 'boolean' },
  },
  args: { label: 'Featured', glyph: 'target', selected: true },
  render: ({ label, glyph, selected }) => `
    <button class="chip chip--on-dark" role="tab" aria-selected="${selected}">
      ${icon(glyph, { cls: 'chip__icon' })}${label}
    </button>`,
};

export const Selected = {};
export const Idle = { args: { selected: false, label: 'Apps & APIs', glyph: 'laptop' } };

export const Row = {
  parameters: { docs: { description: { story: 'Exactly one chip in a row is selected at a time.' } } },
  render: () => {
    const chips = [['Featured','target'],['Apps & APIs','laptop'],['Agent Swarms','users'],
                   ['PowerPoint','presentation'],['Browser Use','monitor'],['Code','code'],
                   ['Videos','video'],['Audio','audioLines'],['Data Analysis','chart'],
                   ['Trading','trending'],['Research','leaf'],['Chatbots','messageSquare']];
    return `<div class="chips" style="justify-content:center">${chips.map(([l, g], i) =>
      `<button class="chip chip--on-dark" role="tab" aria-selected="${i === 0}">
         ${icon(g, { cls: 'chip__icon' })}${l}</button>`).join('')}</div>`;
  },
};
