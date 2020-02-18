import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'reactstrap';
import { Field, FormErrors, InjectedFormProps, reduxForm } from 'redux-form';
import ReduxFormInput from '../ReduxFormInput';

interface OwnProps {
  onCancel(): void;
}

export interface FormData {
  name: string;
  interests: string;
  image: string;
}

type Props = InjectedFormProps<FormData, OwnProps> & OwnProps;

const CreatePandaForm: React.FC<Props> = (props: Props) => {
  const { valid, onCancel, handleSubmit } = props;
  const { t } = useTranslation();
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Field
        component={ReduxFormInput}
        label={t('pandaForm.name.label')}
        type="text"
        name="name"
        placeholder={t('pandaForm.name.placeholder')}
        required
      />
      <Field
        component={ReduxFormInput}
        label={t('pandaForm.interests.label')}
        type="text"
        name="interests"
        placeholder={t('pandaForm.interests.placeholder')}
        required
      />
      <Field
        component={ReduxFormInput}
        label={t('pandaForm.image.label')}
        type="text"
        name="image"
        placeholder={t('pandaForm.image.placeholder')}
        required
      />
      <Button color="primary" style={{ marginRight: 10 }} disabled={!valid}>
        {t('common.submit')}
      </Button>
      <Button onClick={onCancel}>{t('common.cancel')}</Button>
    </Form>
  );
};

const validateForm = (values: FormData): FormErrors<FormData> => {
  const errors: FormErrors<FormData> = {};
  if (!values.name) {
    errors.name = 'Valeur obligatoire'; // FIXME
  }
  if (!values.interests) {
    errors.interests = 'Valeur obligatoire'; // FIXME
  }
  if (!values.image) {
    errors.image = 'Valeur obligatoire'; // FIXME
  }
  return errors;
};

export default reduxForm<FormData, OwnProps>({
  form: 'createPanda',
  validate: validateForm,
})(CreatePandaForm);
