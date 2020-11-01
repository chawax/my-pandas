import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import PandaItem from './PandaItem';

export default {
  title: 'PandaItem',
  component: PandaItem,
} as Meta;

export const sansCentresInteret = () => (
  <div style={{ padding: 20 }}>
    <PandaItem name="Nom du panda" onPress={action('on press')} />
  </div>
);
sansCentresInteret.storyName = "Sans centres d'intérêt";

export const avecCentresInteret = () => (
  <div style={{ padding: 20 }}>
    <PandaItem name="Nom du panda" interests={['cinéma', 'sport']} onPress={action('on press')} />
  </div>
);
avecCentresInteret.storyName = "Avec centres d'intérêt";
