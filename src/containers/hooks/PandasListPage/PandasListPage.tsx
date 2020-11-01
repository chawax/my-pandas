import { History } from 'history';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Alert, Button, Spinner } from 'reactstrap';
import PandasList from '../../../components/PandasList';
import { getError, getPandas, isFetching, slice as pandasSlice } from '../../../redux';
import { Panda } from '../../../types';

// Hook personnalisé pour charger la liste des pandas et récupérer
// les flags depuis le store Redux
const usePandas = () => {
  const dispatch = useDispatch();

  // Le hook useEffect permet
  useEffect(() => {
    dispatch(pandasSlice.actions.loadPandasRequest());
  }, [dispatch]);

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
  const { t } = useTranslation();
  return (
    <div>
      <Alert color="danger">{error!.message}</Alert>
      <Button color="secondary" onClick={onRetry}>
        {t('common.retry')}
      </Button>
    </div>
  );
};

const PandasListPage = () => {
  const { pandas, fetching, error } = usePandas();
  const dispatch = useDispatch();
  const history: History = useHistory();
  const { t } = useTranslation();

  const handleSelectPanda = (key: string) => {
    history.push('/hooks/pandas/' + key);
  };

  const handleNewPandaWithFormik = () => {
    history.push('/hooks/createPandaWithFormik');
  };

  const handleNewPandaWithReactHookForm = () => {
    history.push('/hooks/createPandaWithReactHookForm');
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
            {t('pandasList.addWithFormik')}
          </Button>
          <Button color="primary" style={{ marginTop: 10, marginRight: 10 }} onClick={handleNewPandaWithReactHookForm}>
            {t('pandasList.addWithReactHookForm')}
          </Button>
          <Button color="secondary" style={{ marginTop: 10 }} onClick={handleHome}>
            {t('common.home')}
          </Button>
        </>
      )}
    </div>
  );
};

export default PandasListPage;
