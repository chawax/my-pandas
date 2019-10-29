import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import PandaItem from './PandaItem';

storiesOf('PandaItem', module)
  .add("sans centres d'intérêt", () => (
    <div style={{ padding: 20 }}>
      <PandaItem name="Nom du panda" onPress={action('on press')} />
    </div>
  ))
  .add("avec centres d'intérêt", () => (
    <div style={{ padding: 20 }}>
      <PandaItem name="Nom du panda" interests={['cinéma', 'sport']} onPress={action('on press')} />
    </div>
  ));
