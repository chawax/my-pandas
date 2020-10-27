import { Meta } from '@storybook/react';
import React from 'react';
import ReactHookFormInput from '.';

export default {
  title: 'Design System/ReactHookFormInput',
  component: ReactHookFormInput,
} as Meta;

export const noInitialValue = () => {
  return (
    <div style={{ padding: 20 }}>
      <ReactHookFormInput name="name" label="Nom" type="text" placeholder="Saisissez votre nom" required={true} />
    </div>
  );
};
