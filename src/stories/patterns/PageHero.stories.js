import { icon } from '../../lib/icons.js';

const quadrant = () => `
  <div class="frame">
    <span class="frame__corner frame__corner--tl" aria-hidden="true"></span>
    <span class="frame__corner frame__corner--tr" aria-hidden="true"></span>
    <span class="frame__corner frame__corner--bl" aria-hidden="true"></span>
    <span class="frame__corner frame__corner--br" aria-hidden="true"></span>
    <h2 class="frame__title">Key Features</h2>
    <div class="quadrant">
      <span class="quadrant__node" aria-hidden="true"></span>
      ${[['AI-powered','app builder'], ['General-','purpose agent'],
         ['Access to a','powerful computer'], ['Doc and ppt','generator']].map(([a, b]) => `
        <div class="quadrant__cell">
          <span class="artslot" role="img" aria-label="Illustration placeholder">${icon('image')}</span>
          <span class="quadrant__label">${a}<br>${b}</span>
        </div>`).join('')}
    </div>
  </div>`;

export default { title: 'Patterns/Page Hero', parameters: { flush: true } };

export const Default = {
  parameters: { docs: { description: { story:
    'Copy left, a Bracket Frame right. The hero carries the page\'s single call to action.' } } },
  render: () => `
    <section class="band dotgrid">
      <div class="container">
        <div class="pagehero">
          <div class="pagehero__copy">
            <h1 class="u-h1">Abacus AI <em>Agent</em></h1>
            <p class="pagehero__text">Abacus AI Agent is capable of all types of complex tasks. It can build apps, write reports, create presentations, and automatically connect to all your systems and perform agentic tasks.</p>
            <div class="pagehero__cta"><a class="btn btn--primary" href="#">Get Started</a></div>
            <span class="priceline"><s>$10</s> $7 for the first month, then $10 billed monthly (<a href="#">Learn more</a>)</span>
          </div>
          ${quadrant()}
        </div>
      </div>
    </section>`,
};

export const BracketFrameOnly = {
  parameters: { flush: false, docs: { description: { story:
    'Built for four: with three or five the cross stops making sense, so use a plain list instead.' } } },
  render: () => `<div style="max-width:560px">${quadrant()}</div>`,
};
