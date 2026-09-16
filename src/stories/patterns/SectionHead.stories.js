export default {
  title: 'Patterns/Section Head',
  argTypes: { heading: { control: 'text' }, sub: { control: 'text' } },
  args: {
    heading: 'Abacus AI Agent In Action - Examples',
    sub: 'Route any task to the model that handles it best — switch mid-conversation, and never hold more than one subscription.',
  },
  render: ({ heading, sub }) => `
    <h2 class="u-h2 section-head">${heading}</h2>
    ${sub ? `<p class="section-sub">${sub}</p>` : ''}`,
};
export const WithSub = {};
export const HeadingOnly = { args: { sub: '' } };
