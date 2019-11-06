import { action } from '@storybook/addon-actions';
import React from 'react';
import PandaDetails from './PandaDetails';

export default {
  title: 'PandaDetails',
};

export const sansCentresInteret = () => {
  const panda = {
    key: '1',
    name: 'Yuan Meng',
    image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
    interests: [],
  };
  return (
    <div style={{ padding: 20 }}>
      <PandaDetails panda={panda} onClose={action('on close')} />
    </div>
  );
};
sansCentresInteret.story = {
  name: "Sans centres d'intérêt",
};

export const avecCentresInteret = () => {
  const panda = {
    key: '1',
    name: 'Yuan Meng',
    image: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy-downsized.gif',
    interests: ['yoga', 'bambou'],
  };
  return (
    <div style={{ padding: 20 }}>
      <PandaDetails panda={panda} onClose={action('on close')} />
    </div>
  );
};
avecCentresInteret.story = {
  name: "Avec centres d'intérêt",
};
