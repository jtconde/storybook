import { icon } from '../../lib/icons.js';

export default {
  title: 'Components/Capability Banner',
  argTypes: { label: { control: 'text' }, note: { control: 'text' } },
  args: { label: 'Create Full Stack And Mobile Apps', note: 'No Coding Required' },
  parameters: { docs: { description: { component:
    'A single claim, set as a floating pill between two sections. It is the one element on the ' +
    'page with a coloured glow, so it can only appear **once per page** — a second one turns ' +
    'the device into decoration.' } } },
  render: ({ label, note }) => `
    <div style="text-align:center">
      <span class="capbanner">
        <span class="icontile icontile--xs">${icon('code')}</span>
        <span class="capbanner__label">${label}</span>
        <span class="capbanner__note">${note}</span>
      </span>
    </div>`,
};
export const Default = {};
