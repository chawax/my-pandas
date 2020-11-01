import { Meta } from '@storybook/react';
import React from 'react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
} as Meta;

export const Francais = () => <Header />;
Francais.storyName = 'Français par défaut';
