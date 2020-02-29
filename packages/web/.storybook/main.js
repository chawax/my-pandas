module.exports = {
  stories: ['../src/**/*.stories.(js|tsx)', '../src/**/stories.(js|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-a11y/register',
    '@storybook/addon-links/register',
  ],
};
