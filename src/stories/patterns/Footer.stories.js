export default {
  title: 'Patterns/Footer',
  parameters: { flush: true, backgrounds: { value: '#101116' } },
  render: () => `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div>
            <a class="logo" href="#" aria-label="Abacus.AI home">
              <img class="logo__img" src="/Images/logo_text80Light.webp" alt="Abacus.AI" width="676" height="92">
            </a>
            <p class="footer__tagline">An AI Super Assistant For Enterprises And Professionals</p>
          </div>
          ${[['Products', ['ChatLLM', 'Abacus.AI Enterprise']],
             ['Research', ['Research Areas', 'Publications', 'Open-Source AI']],
             ['Company', ['About Us', 'Culture', 'Press', 'Customers', 'Jobs']]].map(([head, links]) => `
            <nav>
              <h3 class="u-h5 footer__colhead">${head}</h3>
              <ul class="footer__list">${links.map(l => `<li><a href="#">${l}</a></li>`).join('')}</ul>
            </nav>`).join('')}
        </div>
      </div>
      <div class="footer__bar">
        <div class="container footer__bar-inner">
          <span class="footer__copy">Copyright © 2026 Abacus.AI. All Rights Reserved</span>
          <span class="footer__legal"><a href="#">Terms of Service</a><a href="#">Privacy</a><a href="#">Security</a></span>
        </div>
      </div>
    </footer>`,
};
export const Default = {};
