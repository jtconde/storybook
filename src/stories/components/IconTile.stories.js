import { icon, iconNames } from '../../lib/icons.js';

export default {
  title: 'Components/Icon Tile',
  argTypes: {
    tone:  { control: 'inline-radio', options: ['brand', 'blue'] },
    size:  { control: 'inline-radio', options: ['default', 'xs'] },
    glyph: { control: 'select', options: iconNames },
  },
  args: { tone: 'brand', size: 'default', glyph: 'clock' },
  parameters: { docs: { description: { component:
    'The only place a solid purple block appears at small size, which is what makes a grid of ' +
    'Feature Cards scan as one family rather than six unrelated cards.' } } },
  render: ({ tone, size, glyph }) => {
    const cls = ['icontile', tone === 'blue' ? 'icontile--blue' : '',
                 size === 'xs' ? 'icontile--xs' : ''].filter(Boolean).join(' ');
    return `<span class="${cls}">${icon(glyph)}</span>`;
  },
};

export const Brand = {};
export const Blue = { args: { tone: 'blue', glyph: 'zap' } };
export const ExtraSmall = { args: { size: 'xs', glyph: 'code' } };
