import { icon } from '../../lib/icons.js';

const slide = (title, peek) => `
  <div class="slide${peek ? ' slide--peek' : ''}"${peek ? ' aria-hidden="true" inert' : ''}>
    <div class="slide__title">${title}</div>
    <div class="slide__media">
      <span class="artslot artslot--on-light" style="--slot:100%;--slot-h:100%"
            role="img" aria-label="${title} — artwork to come">${icon('image')}</span>
    </div>
  </div>`;

export default {
  title: 'Patterns/Carousel',
  parameters: {
    flush: true,
    docs: { description: { component:
      'A heading standing alone, one slide at full size with its neighbours shrunk to 55% and ' +
      'thrown past the edge of the frame, dots, then a **single** pair of arrows beneath them — ' +
      'the heading carries no arrows. Slides are sized with `min(820px, 64cqi)` against the ' +
      'clipped viewport, not the page, which is what lets the neighbours run off both edges. ' +
      'At ≤640px there is no carousel at all: the track becomes a column and the controls go.' } },
  },
};

export const Default = {
  render: () => `
    <section class="band">
      <div class="container">
        <div class="carousel__head"><h2 class="u-h2" style="font-size:30px">Experience The Fundamentals</h2></div>
      </div>
      <div class="carousel__viewport">
        <div class="carousel__track">
          ${slide('Connect Your Tools', true)}
          ${slide('Build &amp; Scale Anything with Abacus AI SuperComputer', false)}
          ${slide('Build An Agent', true)}
        </div>
      </div>
      <div class="container">
        <div class="dots">${Array.from({ length: 14 }, (_, i) =>
          `<span class="dot${i === 0 ? ' is-on' : ''}"></span>`).join('')}</div>
        <div class="carousel__nav">
          <button class="carrow" aria-label="Previous slide">${icon('chevronLeft')}</button>
          <button class="carrow" aria-label="Next slide">${icon('chevronRight')}</button>
        </div>
      </div>
    </section>`,
};

export const Slide = {
  parameters: { flush: false },
  render: () => `<div style="width:520px">${slide('One AI Assistant To Rule Them All', false)}</div>`,
};
