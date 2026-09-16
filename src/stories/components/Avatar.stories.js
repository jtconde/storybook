import { icon, iconNames } from '../../lib/icons.js';

export default {
  title: 'Components/Avatar',
  argTypes: {
    size:  { control: 'inline-radio', options: ['default', 'lg', 'sm'] },
    fill:  { control: 'inline-radio', options: ['brand', 'mark'],
             description: 'A third-party mark sits on white, never on the blue ramp.' },
    glyph: { control: 'select', options: iconNames },
  },
  args: { size: 'default', fill: 'brand', glyph: 'bot' },
  render: ({ size, fill, glyph }) => {
    const cls = ['avatar', size !== 'default' ? `avatar--${size}` : '',
                 fill === 'mark' ? 'avatar--mark' : ''].filter(Boolean).join(' ');
    return `<span class="${cls}">${icon(glyph)}</span>`;
  },
};

export const Brand = {};
export const Mark = { args: { fill: 'mark', glyph: 'sparkles' } };
export const Sizes = {
  render: () => `<div class="sb-row">
    <span class="avatar">${icon('bot')}</span>
    <span class="avatar avatar--lg">${icon('bot')}</span>
    <span class="avatar avatar--sm">${icon('check')}</span>
  </div>`,
};
export const ImageMark = {
  parameters: { docs: { description: { story:
    'Model marks ship as their own circle, so `.avatar--mark:has(img)` drops the white plate ' +
    'and the image is overscaled 4% — otherwise the file\'s antialiased rim leaves a white ring.' } } },
  render: () => `<div class="sb-row">${
    ['gpt','opus','gemini','grok'].map(n =>
      `<span class="avatar avatar--lg avatar--mark"><img src="/Images/${n}.webp" alt=""></span>`).join('')
  }</div>`,
};
