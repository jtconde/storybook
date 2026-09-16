import '../src/styles/fonts.css';
import '../src/styles/design-system.css';
import '../src/styles/storybook.css';

/* Every component in this system lives inside `.theme-dark` — it is the scope
   the whole token set hangs off, not an optional skin. Wrapping globally here
   means no story has to remember it. */
const themeDark = (story, context) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'theme-dark sb-canvas';
  if (context.parameters.flush) wrapper.classList.add('sb-canvas--flush');
  const rendered = story();
  if (typeof rendered === 'string') wrapper.innerHTML = rendered;
  else wrapper.appendChild(rendered);
  return wrapper;
};

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  decorators: [themeDark],
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    backgrounds: {
      options: {
        page:     { name: 'Page --page',      value: '#1f232f' },
        pageAlt:  { name: 'Band --page-alt',  value: '#1a1e29' },
        footer:   { name: 'Footer --footer',  value: '#101116' },
      },
    },
    options: {
      storySort: {
        order: ['Foundations', 'Components', 'Patterns'],
      },
    },
  },
  initialGlobals: { backgrounds: { value: 'page' } },
};
export default preview;
