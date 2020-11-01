import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import { Panda } from '../../types';
import PandaDetails from './PandaDetails';

export default {
  title: 'PandaDetails',
  component: PandaDetails,
} as Meta;

export const withNoInterests = () => {
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
withNoInterests.storyName = "Sans centres d'intérêt";

export const withInterest = () => {
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
withInterest.storyName = "Avec centres d'intérêt";
