/* The documented ladder. Matter names things; IBM Plex Sans is everything you
   read or click. A description never takes Matter, a title never takes Plex. */
const rows = [
  ['.u-h1',              44, 1.15, 800, '-.018em', 'Matter'],
  ['.u-h2',              34, 1.2,  700, '-.015em', 'Matter'],
  ['.frame__title',      27, 1.25, 700, '-.012em', 'Matter'],
  ['.card__title',       20, 1.25, 600, '-.01em',  'Matter'],
  ['.fcard__label',      20, 1.25, 600, '-.01em',  'Matter'],
  ['.productcard__name', 20, 1.25, 600, '-.01em',  'Matter'],
  ['.modeltile__name',   20, 1.25, 600, '-.01em',  'Matter'],
  ['.slide__title',      20, 1.25, 600, '-.01em',  'Matter'],
  ['.u-h5',              20, 1.3,  700, 'normal',  'Matter'],
  ['.pagehero__text',    16, 1.6,  400, 'normal',  'IBM Plex'],
  ['.priceline',         15, 1.5,  700, 'normal',  'IBM Plex'],
  ['.quadrant__label',   15, 1.35, 600, 'normal',  'IBM Plex'],
  ['.card__text',        14.5, 1.55, 400, 'normal','IBM Plex'],
];

const row = ([cls, size, lh, weight, tracking, family]) => `
  <div style="display:grid;grid-template-columns:150px minmax(0,1fr);gap:24px;
              align-items:baseline;padding:18px 0;border-bottom:1px solid var(--line-on-dark)">
    <div style="font-size:11px;line-height:1.6;color:var(--on-dark-3)">
      <b style="display:block;color:var(--on-dark);font-weight:500;font-size:11.5px">${cls}</b>
      ${size} / ${lh}<br>${weight} · ${tracking}<br>
      <span style="color:${family === 'Matter' ? 'var(--bracket)' : 'var(--on-dark-3)'}">${family}</span>
    </div>
    <div style="min-width:0;overflow:hidden;white-space:nowrap;color:var(--on-dark);
                font-family:${family === 'Matter' ? 'var(--font-heading)' : 'var(--font-body)'};
                font-size:${size}px;line-height:${lh};font-weight:${weight};letter-spacing:${tracking}">
      The quick brown fox jumps over
    </div>
  </div>`;

export default {
  title: 'Foundations/Typography',
  parameters: {
    docs: { description: { component:
      'Every card in the system titles itself with the **same step — 20 / 600 / 1.25 / −.01em ' +
      'Matter**. `.card__title`, `.fcard__label`, `.productcard__name`, `.modeltile__name` and ' +
      '`.slide__title` are one type treatment under five names, so no card can out-shout another.' } },
  },
};

export const Scale = { render: () => rows.map(row).join('') };
