import { icon } from '../../lib/icons.js';

const body = () => `
  <div class="viddialog__head">
    ${icon('monitor', { cls: 'viddialog__icon' })}
    <h2 class="viddialog__title">Always-On Cloud Streaming App</h2>
  </div>
  <p class="viddialog__text">Create a cloud-hosted streaming station with uploads, playlists, server-side broadcast state, public viewing, and archive jobs.</p>
  <div class="viddialog__media">
    <span class="artslot" style="--slot:100%;--slot-h:100%"
          role="img" aria-label="Demo video — capture to come">${icon('video')}</span>
  </div>
  <div class="viddialog__foot"><button class="btn btn--primary" type="button" data-close>Close</button></div>`;

export default {
  title: 'Patterns/Video Dialog',
  parameters: { docs: { description: { component:
    'What a Content Card opens — the whole tile is the target. A native `<dialog>` opened with ' +
    '`showModal()` — the focus trap, Esc-to-close and the inert page behind it are the ' +
    'platform\'s, not script\'s. There is **one dialog per page**, filled from whichever card ' +
    'was clicked. `close()` does not stop playback, so a `close` listener must call `pause()`.' } } },
};

export const Inline = {
  parameters: { docs: { description: { story: 'Rendered inline so the surface is inspectable.' } } },
  render: () => `<div class="viddialog" style="width:auto">${body()}</div>`,
};

export const Modal = {
  parameters: { docs: { description: { story:
    'The real thing — opens in the top layer over its `::backdrop` scrim. Esc or Close dismisses it.' } } },
  render: () => {
    const wrap = document.createElement('div');
    wrap.innerHTML = `
      <button class="btn btn--primary" type="button" data-open>Open the dialog</button>
      <dialog class="viddialog" aria-label="Always-On Cloud Streaming App">${body()}</dialog>`;
    const dlg = wrap.querySelector('dialog');
    wrap.querySelector('[data-open]').addEventListener('click', () => dlg.showModal());
    wrap.querySelector('[data-close]').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('close', () => dlg.querySelector('video')?.pause());
    return wrap;
  },
};
