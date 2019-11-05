import pandas from '../../pandas';
import { loadPandasSuccess, loadPandasRequest, loadPandasFailure } from './actions';
import { pandasReducer } from './reducers';

test('LOAD_PANDAS_REQUEST', () => {
  const action = loadPandasRequest();
  expect(pandasReducer(undefined, action)).toEqual({
    data: [],
    fetching: true,
    error: undefined,
  });
});

test('LOAD_PANDAS_SUCCESS', () => {
  const action = loadPandasSuccess(pandas);
  expect(pandasReducer(undefined, action)).toEqual({
    data: pandas,
    fetching: false,
    error: undefined,
  });
});

test('LOAD_PANDAS_FAILURE', () => {
  const error = new Error('An error for test');
  const action = loadPandasFailure(error);
  expect(pandasReducer(undefined, action)).toEqual({
    data: [],
    fetching: false,
    error: error,
  });
});
