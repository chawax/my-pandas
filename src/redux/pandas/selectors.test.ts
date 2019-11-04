import pandas from '../../pandas';
import { AppState } from '../store';
import { setPandas } from './actions';
import { getPandas } from './selectors';

test('getPandas', () => {
  const state: AppState = {
    pandas: {
      data: pandas,
    },
  };
  const action = setPandas(pandas);
  expect(getPandas(state)).toEqual(pandas);
});
