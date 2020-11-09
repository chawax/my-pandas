import React from 'react';
import { ReactQueryDevtools } from 'react-query-devtools';
import PandasListPage from '../PandasListPage';

const App = () => {
  return (
    <>
      <PandasListPage />
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </>
  );
};

export default App;
