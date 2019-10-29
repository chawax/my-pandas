import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import pandas from '../pandas';
import PandasList from './PandasList';

storiesOf('PandasList', module).add('with pandas', () => (
  <div style={{ padding: 20 }}>
    <PandasList pandas={pandas} onPress={action('on press')} />
  </div>
));
