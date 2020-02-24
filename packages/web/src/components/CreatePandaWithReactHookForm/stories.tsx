import { action } from '@storybook/addon-actions';
import React from 'react';
import CreatePandaWithReactHookForm from '.';

export default {
  title: 'CreatePandaWithReactHookForm',
};

export const noInitialValues = () => {
  return (
    <div style={{ padding: 20 }}>
      <CreatePandaWithReactHookForm onSubmit={action('on submit')} onCancel={action('on cancel')} />
    </div>
  );
};

export const withInitialValues = () => {
  return (
    <div style={{ padding: 20 }}>
      <CreatePandaWithReactHookForm
        onSubmit={action('on submit')}
        onCancel={action('on cancel')}
        initialValues={{ name: 'THIERRY', interests: 'football,photo', image: '' }}
      />
    </div>
  );
};
