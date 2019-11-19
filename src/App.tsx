import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import './App.css';
import CreatePandaPage from './containers/CreatePandaPage';
import CreatePandaFormikPage from './containers/CreatePandaFormikPage';
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
        <Route path="/createPanda" component={CreatePandaPage} />
        <Route path="/createPandaWithFormik" component={CreatePandaFormikPage} />
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
