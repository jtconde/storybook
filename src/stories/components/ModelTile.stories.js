const models = [['gpt.webp', 135, 'GPT 6 Astra + GPT 5.6 Sol, Terra, Luna'],
                ['opus.webp', 132, 'Fable 5.1, Sonnet 5 + Opus 5'],
                ['gemini.webp', 135, 'Gemini 3.1 Pro + Gemini 3.8 Flash'],
                ['kimi_logo.webp', 216, 'DeepSeek v4 + Kimi K3, GLM 5.3'],
                ['abacus_smaug_logo.webp', 216, 'Abacus Smaug + OSS'],
                ['grok.webp', 129, 'Grok-4.6']];

const tile = ([file, dim, name]) => `
  <div class="modeltile">
    <span class="avatar avatar--lg avatar--mark">
      <img src="/Images/${file}" alt="" width="${dim}" height="${dim}" decoding="async">
    </span>
    <span class="modeltile__name">${name}</span>
  </div>`;

export default {
  title: 'Components/Model Tile',
  parameters: { docs: { description: { component:
    'Six across at full width, stepping to three and then two as the tiles narrow. The marks are ' +
    'third-party logos, so they sit on `.avatar--mark` rather than the blue ramp.\n\n' +
    '**The grid reflows on its own width, not the viewport\'s** — one tile falling under ' +
    '**127.48px** is what triggers each step, which with the 16px gap is 844.88px of grid at six ' +
    'columns and 414.44px at three. Six goes straight to three and three straight to two; four or ' +
    'five across would leave an orphan row out of six tiles. Drag the docs pane narrower and the ' +
    'grid below steps without the window moving. Every instance must be wrapped in ' +
    '`.modelgrid-shell` — with no query container the grid is stuck at six across.' } } },
};

export const Single = { render: () => tile(models[0]) };
export const Grid = {
  render: () => `
    <div class="modelgrid-shell">
      <div class="modelgrid">${models.map(tile).join('')}</div>
    </div>`,
};

/* The same six tiles in a column too narrow for six or three. Nothing about the
   viewport changes between this story and the one above — only the box the grid
   is handed, which is the whole point of the shell. */
export const NarrowColumn = {
  parameters: { docs: { description: { story:
    'The wall at 380px, below the 414.44px three-column floor. The viewport is unchanged from ' +
    '`Grid` above; only the container is narrower, and the grid steps on its own.' } } },
  render: () => `
    <div class="modelgrid-shell" style="width:380px">
      <div class="modelgrid">${models.map(tile).join('')}</div>
    </div>`,
};
