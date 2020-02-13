import { History } from 'history';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import CreatePandaForm, { FormValues as PandaFormValues } from '../../components/CreatePandaFormik';
import pandasSlice from '@pandas/core/src/redux/pandas';

const CreatePandaWithFormikPage = () => {
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

export default CreatePandaWithFormikPage;