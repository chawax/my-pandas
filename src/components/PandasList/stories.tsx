import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import PandasList from '.';
import pandas from '../../pandas';

export default {
  title: 'PandasList',
  component: PandasList,
} as Meta;

export const withPandas = () => {
  return (
    <div style={{ padding: 20 }}>
      <PandasList pandas={pandas} onSelectPanda={action('on press')} />
    </div>
  );
};
