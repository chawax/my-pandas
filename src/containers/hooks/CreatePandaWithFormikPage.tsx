import { History } from 'history';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import CreatePandaForm, { FormValues as PandaFormValues } from '../../components/CreatePandaFormik';
import { createPandaRequest } from '../../redux/pandas/actions';

const CreatePandaWithFormikPage = () => {
  const dispatch = useDispatch();
  const history: History = useHistory();

  const handleCancel = () => {
    history.replace('/hoc/pandas');
  };

  const handleSubmit = (values: PandaFormValues) => {
    const panda = {
      name: values.name,
      interests: values.interests.split(','),
      image: values.image,
    };
    dispatch(createPandaRequest(panda));
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
