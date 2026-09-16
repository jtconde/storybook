import { icon } from '../../lib/icons.js';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    tone:  { control: 'inline-radio', options: ['primary', 'blue'],
             description: 'Blue is a demotion, not a second brand colour.' },
    arrow: { control: 'boolean', description: 'Optional, and always trailing.' },
    state: { control: 'inline-radio', options: ['rest', 'hover', 'active', 'disabled'] },
  },
  args: { label: 'Get Started', tone: 'primary', arrow: false, state: 'rest' },
  parameters: {
    docs: { description: { component:
      'One fill, **one size**. `--brand` purple at 56px carries every call to action on the ' +
      'page. There is no secondary, outline or ghost button, and no small variant — the ' +
      'smaller pill in the Navbar is chrome, not a Button size. At ≤640px a button spans the ' +
      'full width of its container.' } },
  },
  render: ({ label, tone, arrow, state }) => {
    const cls = ['btn', `btn--${tone}`, state !== 'rest' ? `is-${state}` : ''].filter(Boolean).join(' ');
    return `<a class="${cls}" href="#">${label}${arrow ? icon('arrowUpRight', { cls: 'btn__arrow' }) : ''}</a>`;
  },
};

export const Primary = {};
export const Blue = { args: { tone: 'blue', label: 'Learn More', arrow: true } };
export const WithArrow = { args: { arrow: true } };
export const States = {
  render: () => ['rest', 'hover', 'active', 'disabled'].map(s =>
    `<div class="sb-row" style="margin-bottom:14px">
       <a class="btn btn--primary ${s !== 'rest' ? `is-${s}` : ''}" href="#">Get Started</a>
       <span class="sb-note" style="margin:0">State=${s}</span>
     </div>`).join(''),
};
export const NavbarChrome = {
  parameters: { docs: { description: { story:
    '`.nav__cta` overrides height, padding and type rather than selecting a size the Button ' +
    'offers. Nothing outside the navbar may use those values, and the two never appear side by side.' } } },
  render: () => `<a class="btn btn--primary nav__cta" href="#">Sign In</a>`,
};
