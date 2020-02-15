import { history, store } from '@pandas/core';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import Header from '../../components/Header';
import CreatePandaWithHocAndFormikPage from '../hoc/CreatePandaWithFormikPage';
import CreatePandaWithHocAndReduxFormPage from '../hoc/CreatePandaWithReduxFormPage';
import PandaDetailsWithHocPage from '../hoc/PandaDetailsPage';
import PandasListWithHocPage from '../hoc/PandasListPage';
import Home from '../Home';
import CreatePandaWithHooksAndFormikPage from '../hooks/CreatePandaWithFormikPage';
import PandaDetailsWithHooksPage from '../hooks/PandaDetailsPage';
import PandasListWithHooksPage from '../hooks/PandasListPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      {/*
       // @ts-ignore */}
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
