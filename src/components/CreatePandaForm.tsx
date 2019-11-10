import React from 'react';
import { Button, Form } from 'reactstrap';
import { Field, FormErrors, InjectedFormProps, reduxForm } from 'redux-form';
import ReduxFormInput from './ReduxFormInput';

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
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Field
        component={ReduxFormInput}
        label="Nom"
        type="text"
        name="name"
        placeholder="Saisissez le nom du panda"
        required
      />
      <Field
        component={ReduxFormInput}
        label="Centres d'intérêt"
        type="text"
        name="interests"
        placeholder="Saisissez les centres d'intérêts, séparés par des virgules"
        required
      />
      <Field
        component={ReduxFormInput}
        label="Image"
        type="text"
        name="image"
        placeholder="Saisissez l'url de l'image"
        required
      />
      <Button color="primary" style={{ marginRight: 10 }} disabled={!valid}>
        Valider
      </Button>
      <Button onClick={onCancel}>Annuler</Button>
    </Form>
  );
};

const validateForm = (values: FormData): FormErrors<FormData> => {
  const errors: FormErrors<FormData> = {};
  if (!values.name) {
    errors.name = 'Valeur obligatoire';
  }
  if (!values.interests) {
    errors.interests = 'Valeur obligatoire';
  }
  if (!values.image) {
    errors.image = 'Valeur obligatoire';
  }
  return errors;
};

export default reduxForm<FormData, OwnProps>({
  form: 'createPanda',
  validate: validateForm,
})(CreatePandaForm);
