import pandas from '../../pandas';
import { getError, getPandas, isFetching, findPanda } from './selectors';
import { AppState } from '../store';
import { Panda } from '../../types/Pandas';

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

test('findPanda', () => {
  const state: AppState = {
    pandas: {
      data: pandas,
      fetching: false,
    },
  };
  const panda: Panda | undefined = findPanda(state, '1');
  expect(panda).toBeDefined();
  expect(panda!.key).toEqual('1');
});
