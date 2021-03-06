import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Button } from 'reactstrap';
import ReactHookFormInput from '../ReactHookFormInput';

export interface FormValues {
  name: string;
  interests: string;
  image: string;
}

interface Props {
  initialValues?: FormValues;
  onCancel(): void;
  onSubmit(values: any): void;
}

const CreatePandaForm = (props: Props) => {
  const { onCancel, initialValues } = props;

  const { t } = useTranslation();

  const { register, handleSubmit, errors, formState } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: initialValues,
  });
  const { isValid } = formState;

  return (
    <form noValidate onSubmit={handleSubmit(props.onSubmit)}>
      <ReactHookFormInput
        innerRef={register({ required: { value: true, message: t('errors.mandatory') } })}
        name="name"
        label={t('pandaForm.name.label')}
        type="text"
        placeholder={t('pandaForm.name.placeholder')}
        error={errors.name}
      />
      <ReactHookFormInput
        innerRef={register({ required: { value: true, message: t('errors.mandatory') } })}
        name="interests"
        label={t('pandaForm.interests.label')}
        type="text"
        placeholder={t('pandaForm.interests.placeholder')}
        error={errors.interests}
      />
      <ReactHookFormInput
        innerRef={register({ required: { value: true, message: t('errors.mandatory') } })}
        name="image"
        label={t('pandaForm.image.label')}
        type="text"
        placeholder={t('pandaForm.image.placeholder')}
        error={errors.image}
      />
      <Button color="primary" style={{ marginRight: 10 }} disabled={!isValid}>
        {t('common.submit')}
      </Button>
      <Button onClick={onCancel}>{t('common.cancel')}</Button>
    </form>
  );
};

export default CreatePandaForm;
