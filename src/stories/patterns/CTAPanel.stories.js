import { icon } from '../../lib/icons.js';

export default {
  title: 'Patterns/CTA Panel',
  parameters: { docs: { description: { component:
    'The closing argument: the Page Hero\'s two-column shape boxed into a raised panel, so it ' +
    'reads as a summary rather than a second opening. **Three surfaces stacked**, each a step ' +
    'further from the page: page `#1F232F` → panel `#4B505E→#292E3B` → well `#1D212C`. The ' +
    'well going *darker* than the page is what sells the depth.' } } },
  render: () => `
    <div class="ctapanel">
      <div>
        <h2 class="u-h2" style="font-size:30px">An AI Brain That<br>Connects All Your Tools</h2>
        <p class="ctapanel__text">Access all the state-of-the-art in one AI Assistant! Integrate with Slack or Teams, create custom chatbots and AI agents.</p>
        <p class="ctapanel__text">More powerful and accessible than ChatGPT.</p>
        <div class="ctapanel__cta"><a class="btn btn--primary" href="#">Get Started</a></div>
        <span class="priceline"><s>$10</s> $7 for the first month, then $10 billed monthly (<a href="#">Learn more</a>)</span>
      </div>
      <div class="ctapanel__media">
        <span class="artslot" style="--slot:100%;--slot-h:clamp(220px,26vw,300px)"
              role="img" aria-label="Integration diagram — artwork to come">${icon('image')}</span>
      </div>
    </div>`,
};
export const Default = {};
