import React from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import ReduxFormInput from '.';

export default {
  title: 'Design System/ReduxFormInput',
};

const defaultMeta: WrappedFieldMetaProps = {
  active: true,
  autofilled: false,
  asyncValidating: false,
  dirty: false,
  dispatch: (): any => {},
  error: undefined,
  form: 'defaultForm',
  initial: undefined,
  invalid: false,
  pristine: false,
  submitting: false,
  submitFailed: false,
  touched: false,
  valid: true,
  visited: true,
};

const defaultInput: WrappedFieldInputProps = {
  value: undefined,
  name: 'name',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onDragStart: () => {},
  onDrop: () => {},
};

export const initial = () => {
  const input: WrappedFieldInputProps = {
    ...defaultInput,
  };
  const meta: WrappedFieldMetaProps = {
    ...defaultMeta,
  };
  return (
    <div style={{ padding: 20 }}>
      <ReduxFormInput
        input={input}
        name="name"
        label="Nom"
        placeholder="Saisissez votre nom"
        required={true}
        meta={meta}
      />
    </div>
  );
};

export const valid = () => {
  const input: WrappedFieldInputProps = {
    ...defaultInput,
    value: 'Une valeur',
  };
  const meta: WrappedFieldMetaProps = {
    ...defaultMeta,
    valid: true,
    touched: true,
  };
  return (
    <div style={{ padding: 20 }}>
      <ReduxFormInput
        input={input}
        name="name"
        label="Nom"
        placeholder="Saisissez votre nom"
        required={true}
        meta={meta}
      />
    </div>
  );
};

export const invalid = () => {
  const input: WrappedFieldInputProps = {
    ...defaultInput,
  };
  const meta: WrappedFieldMetaProps = {
    ...defaultMeta,
    error: 'Valeur obligatoire',
    valid: false,
    touched: true,
  };
  return (
    <div style={{ padding: 20 }}>
      <ReduxFormInput
        input={input}
        name="name"
        label="Nom"
        placeholder="Saisissez votre nom"
        required={true}
        meta={meta}
      />
    </div>
  );
};
