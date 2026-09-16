export default {
  title: 'Components/Logo Lockup',
  argTypes: { height: { control: { type: 'range', min: 16, max: 48, step: 1 } } },
  args: { height: 28 },
  parameters: { docs: { description: { component: '20px is the minimum legible size.' } } },
  render: ({ height }) =>
    `<img class="logo__img" style="height:${height}px" src="/Images/logo_text80Light.webp"
          alt="Abacus.AI" width="676" height="92" decoding="async">`,
};
export const Light = {};
export const OnWhite = {
  parameters: { backgrounds: { value: '#ffffff' } },
  render: ({ height }) => `<img class="logo__img" style="height:${height}px" src="/Images/logo_text80Dark.webp" alt="Abacus.AI" width="676" height="92">`,
};
