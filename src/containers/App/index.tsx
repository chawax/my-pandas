import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from '../../components/Header';
import { store } from '../../redux';
import history from '../../services/history';
import theme from '../../theme';
import CreatePandaWithHocAndFormikPage from '../hoc/CreatePandaWithFormikPage';
import CreatePandaWithHocAndReduxFormPage from '../hoc/CreatePandaWithReduxFormPage';
import PandaDetailsWithHocPage from '../hoc/PandaDetailsPage';
import PandasListWithHocPage from '../hoc/PandasListPage';
import Home from '../Home';
import CreatePandaWithHooksAndFormikPage from '../hooks/CreatePandaWithFormikPage';
import CreatePandaWithHooksAndReactHookFormPage from '../hooks/CreatePandaWithReactHookFormPage';
import PandaDetailsWithHooksPage from '../hooks/PandaDetailsPage';
import PandasListWithHooksPage from '../hooks/PandasListPage';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
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
          <Route path="/hooks/createPandaWithReactHookForm" component={CreatePandaWithHooksAndReactHookFormPage} />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
