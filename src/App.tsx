import React from 'react';
import './App.css';
import PandasListPage from './containers/PandasListPage';
import { Provider } from 'react-redux';

import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PandasListPage />
    </Provider>
  );
};

export default App;
