import pandas from '../../pandas';
import { setPandas } from './actions';
import { pandasReducer } from './reducers';

test('SET_PANDAS', () => {
  const action = setPandas(pandas);
  expect(pandasReducer(undefined, action)).toEqual({
    data: pandas,
  });
});
