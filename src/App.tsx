import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PandaDetailsPage from './containers/PandaDetailsPage';
import PandasListPage from './containers/PandasListPage';
import store from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h2 className="text-danger" style={{ padding: 10 }}>
        My pandas
      </h2>
      <Router>
        <Route path="/" exact component={PandasListPage} />
        <Route path="/pandas/:id" component={PandaDetailsPage} />
      </Router>
    </Provider>
  );
};

export default App;
