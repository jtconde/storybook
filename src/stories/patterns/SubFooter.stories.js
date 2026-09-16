import { icon } from '../../lib/icons.js';

export default {
  title: 'Patterns/Sub-Footer',
  parameters: { flush: true, docs: { description: { component:
    'The support band, and the last thing above the Footer. It answers the reader who did *not* ' +
    'convert: one question as a heading, an address to write to, one link out. Structurally it is ' +
    'the CTA Panel\'s two-column shape with everything raised about it stripped away — **no panel, ' +
    'no gradient surface, no Price Line**. The copy sits straight on the band and the illustration ' +
    'sits beside it with nothing behind it, which is what tells a reader the page has stopped ' +
    'selling. Only the band fill is new: the heading is `.u-h2`, the button is the same 56px ' +
    '`.btn--primary` the hero uses, and the graphic is held open by an Artwork Slot.' } } },
};

export const Default = {
  parameters: { docs: { description: { story:
    'The **116px gap under the paragraph is the component**. Every other stack in the system runs ' +
    '18–34px between a paragraph and its button; here the button is thrown clear, so the eye ' +
    'crosses the illustration on the way down instead of reading heading → text → button as one ' +
    'tight block. Close that gap and this turns into a second, weaker CTA Panel directly above the ' +
    'footer — two pitches in a row, the later one losing.' } } },
  render: () => `
    <section class="band subfooter-band">
      <div class="container">
        <div class="subfooter">
          <div>
            <h2 class="u-h2">Have Questions?</h2>
            <p class="subfooter__text">If you have any questions or feedback, please don&rsquo;t hesitate to reach out to us at support@abacus.ai. Our team is ready to assist you with anything you need, and are always working to improve your experience.</p>
            <div class="subfooter__cta"><a class="btn btn--primary" href="#">ChatLLM FAQ</a></div>
          </div>
          <div class="subfooter__media">
            <span class="artslot" style="--slot:100%;--slot-h:clamp(240px,27vw,380px)"
                  role="img" aria-label="Support illustration — artwork to come">${icon('image')}</span>
          </div>
        </div>
      </div>
    </section>`,
};

export const CornerWash = {
  parameters: { docs: { description: { story:
    'The fill on its own. The core is `--subfooter` #1D212D, **one step under `--page`**, with a ' +
    'three-corner wash over it: `--wash` strong from the top right, `--wash-soft` faint from the ' +
    'top left and bottom left, and the bottom right left at the core. The dot field is the same ' +
    '1.4px / 39px / 6px one `.dotgrid` paints, baked into the band\'s own background stack because ' +
    'the wash needs layers both above and below it.\n\n' +
    'This runs the opposite way from the CTA Panel. The panel builds depth by stacking surfaces ' +
    'and cutting its well *darker* than the page; this band has no surfaces at all, so the light ' +
    'comes in from the edges instead. Never give it a gradient card, and never put the artwork in ' +
    'a `--panel-inset` well — either one re-raises a band whose whole job is to sit lower than the ' +
    'page above it.' } } },
  render: () => `
    <div class="subfooter-band" style="height:380px;display:grid;place-items:center">
      <span style="font-family:var(--font-body);font-size:12.5px;color:var(--on-dark-3)">.subfooter-band — core #1D212D + three-corner wash + dot field</span>
    </div>`,
};
