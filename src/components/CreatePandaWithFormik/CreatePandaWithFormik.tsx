import { Formik, FormikErrors } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import FormikInput from '../FormikInput';

export type FormValues = {
  name: string;
  interests: string;
  image: string;
};

interface Props {
  onCancel(): void;
  onSubmit(values: any): void;
}

const CreatePandaForm = (props: Props) => {
  const { t } = useTranslation();

  const initialValues: FormValues = {
    name: '',
    interests: '',
    image: '',
  };

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.name) {
      errors.name = t('errors.mandatory');
    }
    if (!values.interests) {
      errors.interests = t('errors.mandatory');
    }
    if (!values.image) {
      errors.image = t('errors.mandatory');
    }
    return errors;
  };

  const { onCancel } = props;
  return (
    <Formik initialValues={initialValues} onSubmit={props.onSubmit} validate={validate}>
      {(props) => (
        <form noValidate onSubmit={props.handleSubmit}>
          <FormikInput
            name="name"
            label={t('pandaForm.name.label')}
            type="text"
            placeholder={t('pandaForm.name.placeholder')}
            required
          />
          <FormikInput
            name="interests"
            label={t('pandaForm.interests.label')}
            type="text"
            placeholder={t('pandaForm.interests.placeholder')}
            required
          />
          <FormikInput
            name="image"
            label={t('pandaForm.image.label')}
            type="text"
            placeholder={t('pandaForm.image.placeholder')}
            required
          />
          <Button color="primary" style={{ marginRight: 10 }}>
            {t('common.submit')}
          </Button>
          <Button onClick={onCancel}>{t('common.cancel')}</Button>
        </form>
      )}
    </Formik>
  );
};

export default CreatePandaForm;
