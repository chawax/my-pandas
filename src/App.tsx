import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import CreatePandaWithFormikPage from './containers/CreatePandaWithFormikPage';
import CreatePandaWithReduxFormPage from './containers/CreatePandaWithReduxFormPage';
import PandaDetailsPage from './containers/PandaDetailsPage';
import PandasListPage from './containers/PandasListPage';
import store from './redux/store';
import history from './services/history';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h2 className="text-danger" style={{ padding: 10 }}>
        My pandas
      </h2>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PandasListPage} />
        <Route path="/pandas/:id" component={PandaDetailsPage} />
        <Route path="/createPandaWithReduxForm" component={CreatePandaWithReduxFormPage} />
        <Route path="/createPandaWithFormik" component={CreatePandaWithFormikPage} />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
