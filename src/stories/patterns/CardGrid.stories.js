const cards = [
  ['Stripe Integrated Website', 'gold', 'Abacus AI Agent builds beautiful multi-page websites with Stripe integration—perfect for a quick go to market solution and validating the appetite'],
  ['Self-Improving Agent That Fixes Bugs', 'matrix', 'An always-on agent that keeps your app bug-free 24/7 — finding and fixing bugs autonomously and getting better with every run.'],
  ['Build a Mobile App', 'night', 'Abacus AI Agent builds a fitness app that tracks your daily goals, workouts, and progress.'],
  ['Vibe Code a CRM', 'magenta', 'Vibe-code a CRM for contact and deal management using Abacus AI Agent'],
];

export default {
  title: 'Patterns/Card Grid',
  parameters: { docs: { description: { component:
    'Two columns at 18px, collapsing to one at ≤900px. Every tile is clickable.' } } },
  render: () => `<div class="cardgrid" style="margin-top:0">${cards.map(([title, tone, text]) => `
    <article class="card card--on-dark">
      <button class="card__hit" type="button" aria-label="Play video: ${title}"></button>
      <div class="card__body"><h3 class="card__title">${title}</h3><p class="card__text">${text}</p></div>
      <div class="thumb thumb--${tone} thumb--play" aria-hidden="true">${title.replace(/ /g, '<br>')}</div>
    </article>`).join('')}</div>`,
};
export const Default = {};
