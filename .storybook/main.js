module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y/register',
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
  ],
};
