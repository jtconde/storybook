export default {
  title: 'Components/Content Card',
  argTypes: {
    title:     { control: 'text' },
    text:      { control: 'text' },
    tone:      { control: 'inline-radio', options: ['gold', 'matrix', 'night', 'magenta'] },
    play:      { control: 'boolean' },
  },
  args: {
    title: 'Stripe Integrated Website',
    text: 'Abacus AI Agent builds beautiful multi-page websites with Stripe integration—perfect for a quick go to market solution and validating the appetite',
    tone: 'gold', play: true,
  },
  parameters: { docs: { description: { component:
    'Copy left, thumbnail right, both top-aligned. The thumbnail never grows — the copy column ' +
    'absorbs all the flex. Every card is the control: a single transparent `.card__hit` button is ' +
    '**stretched** over the tile rather than wrapping it, because a `<button>` may not contain ' +
    'a heading or a paragraph. One control per card: the thumbnail stays a decorative `div`.' } } },
  render: ({ title, text, tone, play }) => `
    <article class="card card--on-dark" style="max-width:560px">
      <button class="card__hit" type="button" aria-label="Play video: ${title}"></button>
      <div class="card__body">
        <h3 class="card__title">${title}</h3>
        <p class="card__text">${text}</p>
      </div>
      <div class="thumb thumb--${tone}${play ? ' thumb--play' : ''}" aria-hidden="true">${title.replace(/ /g, '<br>')}</div>
    </article>`,
};

export const Default = {};
