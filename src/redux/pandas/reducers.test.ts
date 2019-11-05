import pandas from '../../pandas';
import { loadPandasSuccess } from './actions';
import { pandasReducer } from './reducers';

test('LOAD_PANDAS_SUCCESS', () => {
  const action = loadPandasSuccess(pandas);
  expect(pandasReducer(undefined, action)).toEqual({
    data: pandas,
    fetching: false,
    error: undefined,
  });
});
