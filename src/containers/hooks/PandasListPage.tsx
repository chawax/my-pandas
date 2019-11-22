import { History } from 'history';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Alert, Button, Spinner } from 'reactstrap';
import PandasList from '../../components/PandasList';
import { loadPandasRequest } from '../../redux/pandas/actions';
import { getError, getPandas, isFetching } from '../../redux/pandas/selectors';
import { Panda } from '../../types/Pandas';

const PandasListPage = () => {
  const dispatch = useDispatch();
  const pandas: Panda[] = useSelector(getPandas);
  const fetching: boolean = useSelector(isFetching);
  const error: Error | undefined = useSelector(getError);
  const history: History = useHistory();

  useEffect(() => {
    dispatch(loadPandasRequest());
  }, []);

  const handleSelectPanda = (key: string) => {
    history.push('/hooks/pandas/' + key);
  };

  const handleNewPandaWithFormik = () => {
    history.push('/hooks/createPandaWithFormik');
  };

  const handleRetry = () => {
    dispatch(loadPandasRequest());
  };

  const renderError = () => {
    return (
      <div>
        <Alert color="danger">{error!.message}</Alert>
        <Button color="secondary" onClick={handleRetry}>
          Réessayer
        </Button>
      </div>
    );
  };

  return (
    <>
      <div style={{ padding: 20 }}>
        {fetching && <Spinner color="primary" />}
        {error && renderError()}
        {pandas && (
          <>
            <PandasList pandas={pandas} onSelectPanda={handleSelectPanda} />
            <Button color="primary" style={{ marginTop: 10 }} onClick={handleNewPandaWithFormik}>
              Ajouter un panda (avec Formik)
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default PandasListPage;
