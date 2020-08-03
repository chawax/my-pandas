import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

interface Props {
  input: WrappedFieldInputProps;
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  meta: WrappedFieldMetaProps;
}

const ReduxFormInputText = (props: Props) => {
  const {
    input,
    name,
    label,
    placeholder,
    required,
    meta: { error, touched },
  } = props;

  let className = '';
  if (touched) {
    className = error ? 'is-invalid' : 'is-valid';
  }
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input type="text" id={name} placeholder={placeholder} required={required} className={className} {...input} />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </FormGroup>
  );
};

export default ReduxFormInputText;
