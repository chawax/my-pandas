import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import CreatePandaWithFormik from '.';

export default {
  title: 'Forms/CreatePandaWithFormik',
  component: CreatePandaWithFormik,
} as Meta;

export const noInitialValues = () => {
  return (
    <div style={{ padding: 20 }}>
      <CreatePandaWithFormik onSubmit={action('on submit')} onCancel={action('on cancel')} />
    </div>
  );
};
