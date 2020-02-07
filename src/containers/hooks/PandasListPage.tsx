import { History } from 'history';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Alert, Button, Spinner } from 'reactstrap';
import PandasList from '../../components/PandasList';
import pandasSlice from '../../redux/pandas';
import { getError, getPandas, isFetching } from '../../redux/pandas/selectors';
import { Panda } from '../../types/Pandas';

// Hook personnalisé pour charger la liste des pandas et récupérer
// les flags depuis le store Redux
const usePandas = () => {
  const dispatch = useDispatch();

  // Le hook useEffect permet
  useEffect(() => {
    dispatch(pandasSlice.actions.loadPandasRequest());
  }, []);

  const pandas: Panda[] = useSelector(getPandas);
  const fetching: boolean = useSelector(isFetching);
  const error: Error | undefined = useSelector(getError);

  return {
    pandas,
    fetching,
    error,
  };
};

type ErrorCardsProps = {
  error: Error;
  onRetry(): void;
};

const ErrorCard = ({ error, onRetry }: ErrorCardsProps) => {
  return (
    <div>
      <Alert color="danger">{error!.message}</Alert>
      <Button color="secondary" onClick={onRetry}>
        Réessayer
      </Button>
    </div>
  );
};

const PandasListPage = () => {
  const { pandas, fetching, error } = usePandas();
  const dispatch = useDispatch();

  const history: History = useHistory();

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

  return (
    <div style={{ padding: 20 }}>
      {fetching && <Spinner color="primary" />}
      {error && <ErrorCard error={error} onRetry={handleRetry} />}
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
  );
};

export default PandasListPage;
