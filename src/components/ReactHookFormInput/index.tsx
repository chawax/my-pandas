import React from 'react';
import { FormGroup, Input as ReactstrapInput, Label, InputProps } from 'reactstrap';
import { FieldError } from 'react-hook-form';

interface OwnProps {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  error?: FieldError;
}

type Props = OwnProps & InputProps;

const Input = (props: Props) => {
  const { label, error } = props;
  let className = '';
  if (error) {
    className = error ? 'is-invalid' : 'is-valid';
  }
  return (
    <FormGroup>
      <Label for={props.name}>{label}</Label>
      <ReactstrapInput {...props} className={className} />
      {error && <div className="invalid-feedback">{error.message}</div>}
    </FormGroup>
  );
};

export default Input;
