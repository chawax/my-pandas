import { action } from '@storybook/addon-actions';
import React from 'react';
import CreatePandaFormik from '.';

export default {
  title: 'CreatePandaWithFormik',
};

export const creationForm = () => {
  return (
    <div style={{ padding: 20 }}>
      <CreatePandaFormik onSubmit={action('on submit')} onCancel={action('on cancel')} />
    </div>
  );
};
