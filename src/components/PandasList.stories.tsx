import { action } from '@storybook/addon-actions';
import React from 'react';
import pandas from '../pandas';
import PandasList from './PandasList';

export default {
  title: 'PandasList',
};

export const withPandas = () => (
  <div style={{ padding: 20 }}>
    <PandasList pandas={pandas} onPress={action('on press')} />
  </div>
);
