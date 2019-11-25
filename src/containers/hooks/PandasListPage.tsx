import { History } from 'history';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Alert, Button, Spinner } from 'reactstrap';
import PandasList from '../../components/PandasList';
import pandasSlice from '../../redux/pandas';
import { getError, getPandas, isFetching } from '../../redux/pandas/selectors';
import { Panda } from '../../types/Pandas';

const PandasListPage = () => {
  const dispatch = useDispatch();
  const pandas: Panda[] = useSelector(getPandas);
  const fetching: boolean = useSelector(isFetching);
  const error: Error | undefined = useSelector(getError);
  const history: History = useHistory();

  useEffect(() => {
    dispatch(pandasSlice.actions.loadPandasRequest());
  }, []);

  const handleSelectPanda = (key: string) => {
    history.push('/hooks/pandas/' + key);
  };

  const handleNewPandaWithFormik = () => {
    history.push('/hooks/createPandaWithFormik');
  };

  const handleHome = () => {
    history.replace('/');
  };

  const handleRetry = () => {
    dispatch(pandasSlice.actions.loadPandasRequest());
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
            <Button color="primary" style={{ marginTop: 10, marginRight: 10 }} onClick={handleNewPandaWithFormik}>
              Ajouter un panda (avec Formik)
            </Button>
            <Button color="secondary" style={{ marginTop: 10 }} onClick={handleHome}>
              Accueil
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default PandasListPage;
