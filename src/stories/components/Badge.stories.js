export default {
  title: 'Components/Badge',
  argTypes: { label: { control: 'text' } },
  args: { label: 'A Very Powerful General Purpose Agent' },
  parameters: { docs: { description: { component:
    'A qualifier that positions a product in a phrase. On a dark page it is a solid pill; the ' +
    'light-page definition is a ghost chip and is kept for the homepage.' } } },
  render: ({ label }) => `<span class="badge">${label}</span>`,
};
export const Default = {};
