import { Formik, FormikErrors, FormikProps } from 'formik';
import React from 'react';
import { Button } from 'reactstrap';
import FormikInput from './FormikInput';

export interface FormValues {
  name: string;
  interests: string;
  image: string;
}

interface OtherProps {
  onCancel(): void;
  onSubmit(values: any): void;
}

type Props = OtherProps & FormikProps<FormValues>;

const validate = (values: FormValues) => {
  const errors: FormikErrors<FormValues> = {};
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

const CreatePandaForm = (props: Props) => {
  const initialValues = {
    name: '',
    interests: '',
    image: '',
  };
  const { onCancel } = props;
  return (
    <Formik initialValues={initialValues} onSubmit={props.onSubmit} validate={validate}>
      {props => (
        <form noValidate onSubmit={props.handleSubmit}>
          <FormikInput name="name" label="Nom" type="text" placeholder="Saisissez le nom du panda" />
          <FormikInput
            name="interests"
            label="Centres d'intérêt"
            type="text"
            placeholder="Saisissez les centres d'intérêts, séparés par des virgules"
          />
          <FormikInput name="image" label="Image" type="text" placeholder="Saisissez l'URL de l'image" />
          <Button color="primary" style={{ marginRight: 10 }}>
            Valider
          </Button>
          <Button onClick={onCancel}>Annuler</Button>
        </form>
      )}
    </Formik>
  );
};

export default CreatePandaForm;
