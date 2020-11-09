import { History } from 'history';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { Alert, Button, Spinner } from 'reactstrap';
import PandasList from '../../../components/PandasList';
import api from '../../../services/api';

const usePandas = () => {
  return useQuery('pandas', () => api.loadPandas());
};

type ErrorCardsProps = {
  error: any;
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
  const { data, error, isLoading, isError, refetch } = usePandas();
  //const dispatch = useDispatch();
  const history: History = useHistory();
  const { t } = useTranslation();

  const handleSelectPanda = (key: string) => {
    //history.push('/hooks/pandas/' + key);
  };

  const handleNewPandaWithFormik = () => {
    //history.push('/hooks/createPandaWithFormik');
  };

  const handleNewPandaWithReactHookForm = () => {
    //history.push('/hooks/createPandaWithReactHookForm');
  };

  const handleHome = () => {
    history.replace('/');
  };

  return (
    <div style={{ padding: 20 }}>
      {isLoading && <Spinner color="primary" />}
      {isError && <ErrorCard error={error} onRetry={refetch} />}
      {data && (
        <>
          <PandasList pandas={data} onSelectPanda={handleSelectPanda} />
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
