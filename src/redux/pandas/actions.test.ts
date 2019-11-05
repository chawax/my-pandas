import pandas from '../../pandas';
import { loadPandasSuccess } from './actions';

test('loadPandasSuccess', () => {
  const action = loadPandasSuccess(pandas);
  expect(action).toEqual({
    type: '@app/LOAD_PANDAS_SUCCESS',
    payload: pandas,
  });
});
