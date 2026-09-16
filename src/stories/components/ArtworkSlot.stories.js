import { icon } from '../../lib/icons.js';

export default {
  title: 'Components/Artwork Slot',
  argTypes: {
    slot:    { control: 'text', description: '--slot: the width' },
    slotH:   { control: 'text', description: '--slot-h: defaults to square' },
    onLight: { control: 'boolean', description: 'For a placeholder on a light surface' },
    filled:  { control: 'boolean', description: 'Real artwork present — the dressing removes itself' },
  },
  args: { slot: '120px', slotH: '120px', onLight: false, filled: false },
  parameters: { docs: { description: { component:
    'Reserves the exact box a graphic will occupy and looks unmistakably unfinished until one ' +
    'arrives, so a placeholder is never mistaken for a finished state. Dropping in an `<img>` ' +
    'is the whole swap — `:has(img)` removes the dashed dressing and nothing around it moves.' } } },
  render: ({ slot, slotH, onLight, filled }) => `
    <span class="artslot${onLight ? ' artslot--on-light' : ''}"
          style="--slot:${slot};--slot-h:${slotH}"
          role="img" aria-label="Illustration placeholder">
      ${filled ? '<img src="/Images/chatllm.webp" alt="">' : icon('image')}
    </span>`,
};

export const Empty = {};
export const Filled = { args: { filled: true } };
export const OnLight = {
  args: { onLight: true },
  parameters: { backgrounds: { value: '#ffffff' } },
};
export const LandscapeWell = { args: { slot: '420px', slotH: '240px' } };
