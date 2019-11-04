import pandas from '../../pandas';
import { setPandas } from './actions';

test('setPandas', () => {
  const action = setPandas(pandas);
  expect(action).toEqual({
    type: '@app/SET_PANDAS',
    payload: pandas,
  });
});
