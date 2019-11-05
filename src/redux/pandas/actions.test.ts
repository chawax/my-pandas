import pandas from '../../pandas';
import { loadPandasFailure, loadPandasRequest, loadPandasSuccess } from './actions';

test('loadPandasRequest', () => {
  const action = loadPandasRequest();
  expect(action).toEqual({
    type: '@app/LOAD_PANDAS_REQUEST',
  });
});

test('loadPandasSuccess', () => {
  const action = loadPandasSuccess(pandas);
  expect(action).toEqual({
    type: '@app/LOAD_PANDAS_SUCCESS',
    payload: pandas,
  });
});

test('loadPandasFailure', () => {
  const error = new Error('An error for test');
  const action = loadPandasFailure(error);
  expect(action).toEqual({
    type: '@app/LOAD_PANDAS_FAILURE',
    payload: error,
  });
});
