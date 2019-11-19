import { FormikProps, useFormik, FormikErrors } from 'formik';
import React from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
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
  const formik = useFormik({
    initialValues,
    onSubmit: props.onSubmit,
    validate,
  });
  const { onCancel } = props;
  console.log(formik.getFieldProps('name'));
  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <FormikInput
        name="name"
        label="Nom"
        type="text"
        placeholder="Saisissez le nom du panda"
        {...formik.getFieldProps('name')}
      />
      <FormGroup>
        <Label for="name">Nom</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Saisissez le nom du panda"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          className={formik.touched.name && formik.errors.name ? 'is-invalid' : 'is-valid'}
          required
        />
        <div className="invalid-feedback">{formik.errors.name}</div>
      </FormGroup>
      <FormGroup>
        <Label for="interests">Centres d'intérêt</Label>
        <Input
          type="text"
          name="interests"
          id="interests"
          placeholder="Saisissez les centres d'intérêts, séparés par des virgules"
          required
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.interests}
          className={formik.touched.interests && formik.errors.interests ? 'is-invalid' : 'is-valid'}
        />
        <div className="invalid-feedback">{formik.errors.interests}</div>
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input
          type="text"
          name="image"
          id="image"
          placeholder="Saisissez l'url de l'image"
          required
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.image}
          className={formik.touched.image && formik.errors.image ? 'is-invalid' : 'is-valid'}
        />
        <div className="invalid-feedback">{formik.errors.image}</div>
      </FormGroup>
      <Button color="primary" style={{ marginRight: 10 }}>
        Valider
      </Button>
      <Button onClick={onCancel}>Annuler</Button>
    </form>
  );
};

export default CreatePandaForm;
