import { FieldConfig, useField } from 'formik';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

interface OwnProps {
  label: string;
  placeholder: string;
  required?: boolean;
}

type ForminkInputProps = FieldConfig & OwnProps;

const FormikInput = (props: ForminkInputProps) => {
  const [field, meta] = useField(props.name);
  const { label } = props;
  let className = '';
  if (meta.touched) {
    className = meta.error ? 'is-invalid' : 'is-valid';
  }
  return (
    <FormGroup>
      <Label for={field.name}>{label}</Label>
      {/* 
       // @ts-ignore */}
      <Input {...field} {...props} className={className} />
      <div className="invalid-feedback">{meta.error}</div>
    </FormGroup>
  );
};

export default FormikInput;
