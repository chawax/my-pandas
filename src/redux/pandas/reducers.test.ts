import pandas from '../../pandas';
import { Panda } from '../../types/Pandas';
import slice from './index';
import { PandasState } from './types';

test('loadPandasRequest', () => {
  const action = slice.actions.loadPandasRequest();
  expect(slice.reducer(undefined, action)).toEqual({
    data: [],
    fetching: true,
    error: undefined,
  });
});

test('loadPandasSuccess', () => {
  const action = slice.actions.loadPandasSuccess(pandas);
  expect(slice.reducer(undefined, action)).toEqual({
    data: pandas,
    fetching: false,
    error: undefined,
  });
});

test('loadPandasFailure', () => {
  const error = new Error('An error for test');
  const action = slice.actions.loadPandasFailure(error);
  expect(slice.reducer(undefined, action)).toEqual({
    data: [],
    fetching: false,
    error: error,
  });
});

test('createPandaRequest', () => {
  const panda: Panda = {
    name: 'panda',
    image: 'imageUrl',
    interests: ['interest1', 'interest2'],
  };
  const action = slice.actions.createPandaRequest(panda);
  expect(slice.reducer(undefined, action)).toEqual({
    fetching: true,
    data: [],
    error: undefined,
  });
});

describe('createPandaSuccess', () => {
  const panda = {
    key: 'key',
    name: 'panda',
    image: 'imageUrl',
    interests: ['interest1', 'interest2'],
  };

  test('aucun panda dans le store', () => {
    const action = slice.actions.createPandaSuccess(panda);
    expect(slice.reducer(undefined, action)).toEqual({
      fetching: false,
      data: [panda],
      error: undefined,
    });
  });

  test('déjà des pandas dans le store', () => {
    const action = slice.actions.createPandaSuccess(panda);
    const existingPanda = {
      key: '1',
      name: 'panda 1',
      image: 'image 1',
      interests: ['interest1', 'interest2'],
    };
    const state: PandasState = {
      fetching: false,
      data: [existingPanda],
    };
    expect(slice.reducer(state, action)).toEqual({
      fetching: false,
      data: [existingPanda, panda],
      error: undefined,
    });
  });
});

test('createPandaFailure', () => {
  const error = new Error('An error for test');
  const action = slice.actions.createPandaFailure(error);
  expect(slice.reducer(undefined, action)).toEqual({
    data: [],
    fetching: false,
    error: error,
  });
});
