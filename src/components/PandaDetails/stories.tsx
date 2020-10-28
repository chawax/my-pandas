import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import PandaDetails from '.';
import { Panda } from '../../types';

export default {
  title: 'PandaDetails',
  component: PandaDetails,
} as Meta;

export const sansCentresInteret = () => {
  const panda: Panda = {
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
sansCentresInteret.storyName = "Sans centres d'intérêt";

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
avecCentresInteret.storyName = "Avec centres d'intérêt";
