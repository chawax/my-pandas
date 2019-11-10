import pandas from '../../pandas';
import {
  loadPandasSuccess,
  loadPandasRequest,
  loadPandasFailure,
  createPandaRequest,
  createPandaSuccess,
  createPandaFailure,
} from './actions';
import { pandasReducer } from './reducers';
import { Panda } from '../../types/Pandas';
import { PandasState } from './types';

test('loadPandasRequest', () => {
  const action = loadPandasRequest();
  expect(pandasReducer(undefined, action)).toEqual({
    data: [],
    fetching: true,
    error: undefined,
  });
});

test('loadPandasSuccess', () => {
  const action = loadPandasSuccess(pandas);
  expect(pandasReducer(undefined, action)).toEqual({
    data: pandas,
    fetching: false,
    error: undefined,
  });
});

test('loadPandasFailure', () => {
  const error = new Error('An error for test');
  const action = loadPandasFailure(error);
  expect(pandasReducer(undefined, action)).toEqual({
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
  const action = createPandaRequest(panda);
  expect(pandasReducer(undefined, action)).toEqual({
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
    const action = createPandaSuccess(panda);
    expect(pandasReducer(undefined, action)).toEqual({
      fetching: false,
      data: [panda],
      error: undefined,
    });
  });

  test('déjà des pandas dans le store', () => {
    const action = createPandaSuccess(panda);
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
    expect(pandasReducer(state, action)).toEqual({
      fetching: false,
      data: [existingPanda, panda],
      error: undefined,
    });
  });
});

test('createPandaFailure', () => {
  const error = new Error('An error for test');
  const action = createPandaFailure(error);
  expect(pandasReducer(undefined, action)).toEqual({
    data: [],
    fetching: false,
    error: error,
  });
});
