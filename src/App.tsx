import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import CreatePandaWithFormikPage from './containers/CreatePandaWithFormikPage';
import CreatePandaWithReduxFormPage from './containers/CreatePandaWithReduxFormPage';
import PandaDetailsWithHocPage from './containers/hoc/PandaDetailsPage';
import PandasListWithHocPage from './containers/hoc/PandasListPage';
import Home from './containers/Home';
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
        <Route path="/hoc/pandas" component={PandasListWithHocPage} />
        <Route path="/hoc/pandas/:id" component={PandaDetailsWithHocPage} />
        <Route path="/hooks/pandas" component={PandasListWithHooksPage} />
        <Route path="/hooks/pandas/:id" component={PandaDetailsWithHooksPage} />
        <Route path="/createPandaWithReduxForm" component={CreatePandaWithReduxFormPage} />
        <Route path="/createPandaWithFormik" component={CreatePandaWithFormikPage} />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
