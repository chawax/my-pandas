import { action } from '@storybook/addon-actions';
import React from 'react';
import PandaItem from './PandaItem';

export default {
  title: 'PandaItem',
};

export const sansCentresInteret = () => (
  <div style={{ padding: 20 }}>
    <PandaItem name="Nom du panda" onPress={action('on press')} />
  </div>
);
sansCentresInteret.story = {
  name: "Sans centres d'intérêt",
};

export const avecCentresInteret = () => (
  <div style={{ padding: 20 }}>
    <PandaItem name="Nom du panda" interests={['cinéma', 'sport']} onPress={action('on press')} />
  </div>
);
avecCentresInteret.story = {
  name: "Avec centres d'intérêt",
};
