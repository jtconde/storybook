export default {
  title: 'Components/Price Line',
  parameters: { docs: { description: { component:
    'Sits under a call to action and carries anything softer than the button itself. The green ' +
    'link is the only inline link colour in the system.' } } },
  render: () => `<span class="priceline"><s>$10</s> $7 for the first month, then $10 billed monthly (<a href="#">Learn more</a>)</span>`,
};
export const Default = {};
