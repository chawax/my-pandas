import pandas from '../../pandas';
import { AppState } from '../store';
import { getPandas } from './selectors';

test('getPandas', () => {
  const state: AppState = {
    pandas: {
      data: pandas,
      fetching: false,
    },
  };
  expect(getPandas(state)).toEqual(pandas);
});
