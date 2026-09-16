/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.js'],
  addons: ['@storybook/addon-docs'],
  framework: { name: '@storybook/html-vite', options: {} },
  /* Fonts and Images are not copied — they are served straight out of the repo
     root, so the reference pages and Storybook share one set of assets. */
  staticDirs: [
    { from: '../../Fonts', to: '/Fonts' },
    { from: '../../Images', to: '/Images' },
  ],
};
export default config;
