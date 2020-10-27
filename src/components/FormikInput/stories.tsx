import { withA11y } from '@storybook/addon-a11y';
import { Meta } from '@storybook/react';
import { Formik } from 'formik';
import React from 'react';
import FormikInput from '.';

export default {
  title: 'Design System/FormikInput',
  component: FormikInput,
  decorators: [withA11y],
} as Meta;

export const noInitialValue = () => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={() => {}}>
      <div style={{ padding: 20 }}>
        <FormikInput name="name" label="Nom" type="text" placeholder="Saisissez votre nom" required={true} />
      </div>
    </Formik>
  );
};

export const withInitialValue = () => {
  return (
    <Formik initialValues={{ name: 'THIERRY' }} onSubmit={() => {}}>
      <div style={{ padding: 20 }}>
        <FormikInput name="name" label="Nom" type="text" placeholder="Saisissez votre nom" required={true} />
      </div>
    </Formik>
  );
};

export const withValidValue = () => {
  return (
    <Formik initialTouched={{ name: true }} initialValues={{ name: 'THIERRY' }} onSubmit={() => {}}>
      <div style={{ padding: 20 }}>
        <FormikInput name="name" label="Nom" type="text" placeholder="Saisissez votre nom" required={true} />
      </div>
    </Formik>
  );
};

export const withInvalidValue = () => {
  return (
    <Formik
      initialTouched={{ name: true }}
      initialValues={{ name: '' }}
      initialErrors={{ name: 'Valeur obligatoire' }}
      onSubmit={() => {}}
    >
      <div style={{ padding: 20 }}>
        <FormikInput name="name" label="Nom" type="text" placeholder="Saisissez votre nom" required={true} />
      </div>
    </Formik>
  );
};
