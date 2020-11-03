import { History } from 'history';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CreatePandaForm, { FormValues as PandaFormValues } from '../../../components/CreatePandaWithReactHookForm';
import { slice as pandasSlice } from '../../../redux';

const CreatePandaWithReactHookFormPage = () => {
  const dispatch = useDispatch();
  const history: History = useHistory();

  const handleCancel = useCallback(() => {
    history.replace('/hooks/pandas');
  }, [history]);

  const handleSubmit = useCallback(
    (values: PandaFormValues) => {
      const panda = {
        name: values.name,
        interests: values.interests.split(','),
        image: values.image,
      };
      dispatch(pandasSlice.actions.createPandaRequest(panda));
    },
    [dispatch],
  );

  return (
    <>
      <div style={{ padding: 20 }}>
        <CreatePandaForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </>
  );
};

export default CreatePandaWithReactHookFormPage;
