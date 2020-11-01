import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';
import React from 'react';
import CreatePandaWithReactHookForm from './CreatePandaWithReactHookForm';

export default {
  title: 'Forms/CreatePandaWithReactHookForm',
  component: CreatePandaWithReactHookForm,
} as Meta;

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
