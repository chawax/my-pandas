import pandas from '../../pandas';
import { getError, getPandas, isFetching } from './selectors';
import { AppState } from '../store';

test('getPandas', () => {
  const state: AppState = {
    pandas: {
      data: pandas,
      fetching: false,
    },
  };
  expect(getPandas(state)).toEqual(pandas);
});

test('isFetching', () => {
  const state: AppState = {
    pandas: {
      data: [],
      fetching: true,
    },
  };
  expect(isFetching(state)).toBeTruthy();
});

test('getError', () => {
  const error = new Error('an error for test');
  const state: AppState = {
    pandas: {
      data: [],
      fetching: false,
      error,
    },
  };
  expect(getError(state)).toEqual(error);
});
