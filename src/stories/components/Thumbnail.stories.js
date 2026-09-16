export default {
  title: 'Components/Thumbnail',
  argTypes: {
    tone: { control: 'inline-radio', options: ['gold', 'matrix', 'night', 'magenta'] },
    play: { control: 'boolean', description: 'Marks the card as video. The badge is the signal, not the hit area.' },
    text: { control: 'text' },
  },
  args: { tone: 'gold', play: true, text: 'Stripe<br>Integrated<br>Website' },
  parameters: { docs: { description: { component:
    'A fixed 165 × 120px poster slot, and the only place on the page where colour is allowed ' +
    'to be loud. With `Play=True` a brand-purple badge sits over the centre — the halo is the ' +
    'fill at low alpha, never a shadow token, and the triangle is nudged to `translate(-42%,-50%)` ' +
    'because a triangle\'s optical centre sits left of its box.' } } },
  render: ({ tone, play, text }) =>
    `<div class="thumb thumb--${tone}${play ? ' thumb--play' : ''}" aria-hidden="true">${text}</div>`,
};

export const Gold = {};
export const Tones = {
  render: () => `<div class="sb-row">
    <div class="thumb thumb--gold thumb--play">Stripe<br>Integrated<br>Website</div>
    <div class="thumb thumb--matrix">Self-Improving<br>Bug Fixing<br>Agent</div>
    <div class="thumb thumb--night thumb--play">Abacus AI Agent<br>Builds a Fitness App</div>
    <div class="thumb thumb--magenta">Vibe Code<br>a CRM</div>
  </div>`,
};
