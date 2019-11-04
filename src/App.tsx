import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import PandasListPage from './containers/PandasListPage';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PandasListPage />
    </Provider>
  );
};

export default App;
