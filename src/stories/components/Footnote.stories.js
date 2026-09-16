export default {
  title: 'Components/Footnote',
  parameters: { docs: { description: { component:
    'A centred line that qualifies the block above it, with the two or three terms that matter ' +
    'picked out in `--accent-green` and a smaller, dimmer link at the end. The quiet sibling of ' +
    'the Price Line — same green, half the weight.' } } },
  render: () => `<p class="footnote">100+ Top AI Models Including <b>Fable 5.1</b> and <b>GPT 6 Astra</b> <a href="#">(learn more)</a></p>`,
};
export const Default = {};
