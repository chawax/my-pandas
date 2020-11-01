import { History } from 'history';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreatePandaForm, { FormValues as PandaFormValues } from '../../../components/CreatePandaWithReactHookForm';
import { slice as pandasSlice } from '../../../redux';

const CreatePandaWithReactHookFormPage = () => {
  const dispatch = useDispatch();
  const history: History = useHistory();

  const handleCancel = () => {
    history.replace('/hooks/pandas');
  };

  const handleSubmit = (values: PandaFormValues) => {
    const panda = {
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    dispatch(pandasSlice.actions.createPandaRequest(panda));
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        <CreatePandaForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </>
  );
};

export default CreatePandaWithReactHookFormPage;
