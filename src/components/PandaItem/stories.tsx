import { action } from '@storybook/addon-actions';
import React from 'react';
import PandaItem, { Props } from '.';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'PandaItem',
  component: PandaItem,
} as Meta;

export const NoWithNoInterests = () => (
  <div style={{ padding: 20 }}>
    <PandaItem name="Nom du panda" onPress={action('on press')} />
  </div>
);

const Template: Story<Props> = (args) => <PandaItem {...args} />;

export const WithNoInterests = Template.bind({});
WithNoInterests.args = {
  name: 'Nom du panda',
};

/*
export const WithNoInterests = () => (
  <div style={{ padding: 20 }}>
    <PandaItem name="Nom du panda" onPress={action('on press')} />
  </div>
);
*/
/*
sansCentresInteret.story = {
  name: "Sans centres d'intérêt",
};
*/

export const WithInterests = Template.bind({});
WithInterests.args = {
  name: 'Nom du panda',
  interests: ['cinéma', 'sport'],
};
/*
export const WithInterests = () => (
  <div style={{ padding: 20 }}>
    <PandaItem name="Nom du panda" interests={['cinéma', 'sport']} onPress={action('on press')} />
  </div>
);
*/
/*
avecCentresInteret.story = {
  name: "Avec centres d'intérêt",
};
*/
