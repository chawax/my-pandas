module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-essentials',
      options: {
        controls: false,
      },
    },
    '@storybook/addon-links',
    '@storybook/preset-create-react-app',
  ],
};
