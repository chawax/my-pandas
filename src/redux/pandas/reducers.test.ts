import pandas from '../../pandas';
import { Panda } from '../../types/Pandas';
import slice, { State as PandasState } from './index';

describe('loadPandas', () => {
  const {
    actions: { loadPandasRequest, loadPandasSuccess, loadPandasFailure },
    reducer,
  } = slice;

  test('loadPandasRequest', () => {
    const action = loadPandasRequest();
    expect(reducer(undefined, action)).toEqual({
      data: [],
      fetching: true,
      error: undefined,
    });
  });

  test('loadPandasSuccess', () => {
    const action = loadPandasSuccess(pandas);
    expect(reducer(undefined, action)).toEqual({
      data: pandas,
      fetching: false,
      error: undefined,
    });
  });

  test('loadPandasFailure', () => {
    const error = new Error('An error for test');
    const action = loadPandasFailure(error);
    expect(reducer(undefined, action)).toEqual({
      data: [],
      fetching: false,
      error: error,
    });
  });
});

describe('createPanda', () => {
  const {
    actions: { createPandaRequest, createPandaSuccess, createPandaFailure },
    reducer,
  } = slice;

  test('createPandaRequest', () => {
    const panda: Panda = {
      name: 'panda',
      image: 'imageUrl',
      interests: ['interest1', 'interest2'],
    };
    const action = createPandaRequest(panda);
    expect(reducer(undefined, action)).toEqual({
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
      expect(reducer(undefined, action)).toEqual({
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
      expect(reducer(state, action)).toEqual({
        fetching: false,
        data: [existingPanda, panda],
        error: undefined,
      });
    });
  });

  test('createPandaFailure', () => {
    const error = new Error('An error for test');
    const action = createPandaFailure(error);
    expect(reducer(undefined, action)).toEqual({
      data: [],
      fetching: false,
      error: error,
    });
  });
});
