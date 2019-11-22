import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import CreatePandaWithHocAndFormikPage from './containers/hoc/CreatePandaWithFormikPage';
import CreatePandaWithHocAndReduxFormPage from './containers/hoc/CreatePandaWithReduxFormPage';
import PandaDetailsWithHocPage from './containers/hoc/PandaDetailsPage';
import PandasListWithHocPage from './containers/hoc/PandasListPage';
import Home from './containers/Home';
import CreatePandaWithHooksAndFormikPage from './containers/hooks/CreatePandaWithFormikPage';
import PandaDetailsWithHooksPage from './containers/hooks/PandaDetailsPage';
import PandasListWithHooksPage from './containers/hooks/PandasListPage';
import store from './redux/store';
import history from './services/history';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h2 className="text-danger" style={{ padding: 10 }}>
        My pandas
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
