import { action } from '@storybook/addon-actions';
import React from 'react';
import Header from '.';

export default {
  title: 'Header',
};

export const francais = () => <Header onChangeLanguage={action('on change language')} language="fr" />;
francais.story = {
  name: 'Français par défaut',
};
