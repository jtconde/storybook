import { icon } from '../../lib/icons.js';

export default { title: 'Components/Carousel Controls' };

export const Arrows = {
  argTypes: { disabled: { control: 'boolean' } },
  args: { disabled: false },
  render: ({ disabled }) => `<div class="carousel__nav">
    <button class="carrow"${disabled ? ' disabled' : ''} aria-label="Previous slide">${icon('chevronLeft')}</button>
    <button class="carrow"${disabled ? ' disabled' : ''} aria-label="Next slide">${icon('chevronRight')}</button>
  </div>`,
};

export const Dots = {
  argTypes: {
    count:   { control: { type: 'range', min: 2, max: 20, step: 1 } },
    current: { control: { type: 'range', min: 0, max: 19, step: 1 } },
  },
  args: { count: 14, current: 0 },
  render: ({ count, current }) => `<div class="dots">${
    Array.from({ length: count }, (_, i) => `<span class="dot${i === current ? ' is-on' : ''}"></span>`).join('')
  }</div>`,
};
