import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import store from '../../redux/store';
import history from '../../services/history';
import CreatePandaWithHocAndFormikPage from '../hoc/CreatePandaWithFormikPage';
import CreatePandaWithHocAndReduxFormPage from '../hoc/CreatePandaWithReduxFormPage';
import PandaDetailsWithHocPage from '../hoc/PandaDetailsPage';
import PandasListWithHocPage from '../hoc/PandasListPage';
import Home from '../Home';
import CreatePandaWithHooksAndFormikPage from '../hooks/CreatePandaWithFormikPage';
import PandaDetailsWithHooksPage from '../hooks/PandaDetailsPage';
import PandasListWithHooksPage from '../hooks/PandasListPage';
import './App.css';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Provider store={store}>
      <h2 className="text-danger" style={{ padding: 10 }}>
        {t('app.title')}
      </h2>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/hoc/pandas" exact component={PandasListWithHocPage} />
        <Route path="/hoc/pandas/:id" component={PandaDetailsWithHocPage} />
        <Route path="/hoc/createPandaWithReduxForm" component={CreatePandaWithHocAndReduxFormPage} />
        <Route path="/hoc/createPandaWithFormik" component={CreatePandaWithHocAndFormikPage} />
        <Route path="/hooks/pandas" exact component={PandasListWithHooksPage} />
        <Route path="/hooks/pandas/:id" component={PandaDetailsWithHooksPage} />
        <Route path="/hooks/createPandaWithFormik" component={CreatePandaWithHooksAndFormikPage} />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
