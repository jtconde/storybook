/* Every colour in the dark page scope, read straight off the custom properties
   so a token change here is a token change everywhere. */
const swatches = [
  ['--page',            'Primary band'],
  ['--page-alt',        'Alternating band'],
  ['--surface-on-dark', 'Flat card and chip surface'],
  ['--card-top',        'Raised ramp, top-left'],
  ['--card-bot',        'Raised ramp, bottom-right'],
  ['--panel-inset',     'Media well inside a raised card'],
  ['--dialog',          'Video dialog surface'],
  ['--dialog-well',     'The video itself — near black'],
  ['--badge-fill',      'Qualifier pill'],
  ['--slide-head',      'Carousel slide title bar'],
  ['--avatar-top',      'Product avatar, top'],
  ['--avatar-bot',      'Product avatar, bottom'],
  ['--banner-mid',      'Capability banner, centre'],
  ['--banner-end',      'Capability banner, both ends'],
  ['--brand',           'Every action on the page'],
  ['--brand-hi',        'Accent word in a display heading'],
  ['--blue',            'The one secondary fill'],
  ['--bracket',         'Frame corners, slot glyphs'],
  ['--accent-green',    'Inline links, the live node'],
  ['--dot-on',          'Current pagination dot'],
  ['--dot-off',         'Idle pagination dot'],
];

const chip = ([token, use]) => `
  <div style="display:flex;align-items:center;gap:14px">
    <span style="width:56px;height:56px;flex:none;border-radius:10px;
                 border:1px solid var(--line-on-dark);background:var(${token})"></span>
    <span>
      <code style="display:block;font-size:12.5px;color:var(--on-dark)">${token}</code>
      <span style="display:block;font-size:12px;color:var(--on-dark-3);margin-top:3px">${use}</span>
    </span>
  </div>`;

export default {
  title: 'Foundations/Colour',
  parameters: {
    docs: { description: { component:
      'Surfaces stack away from the page: a raised card is lighter than the band it sits on, ' +
      'and a media well cut into that card goes **darker than the page**. That inversion is ' +
      'what sells the depth — make the well lighter and the panel flattens into a grey slab.' } },
  },
};

export const Palette = {
  render: () => `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:18px">
    ${swatches.map(chip).join('')}
  </div>`,
};
