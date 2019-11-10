import pandas from '../../pandas';
import { Panda } from '../../types/Pandas';
import {
  createPandaFailure,
  createPandaRequest,
  createPandaSuccess,
  loadPandasFailure,
  loadPandasRequest,
  loadPandasSuccess,
} from './actions';
import { CREATE_PANDA_REQUEST, CREATE_PANDA_SUCCESS, CREATE_PANDA_FAILURE } from './types';

test('loadPandasRequest', () => {
  const action = loadPandasRequest();
  expect(action).toEqual({
    type: '@app/LOAD_PANDAS_REQUEST',
  });
});

test('loadPandasSuccess', () => {
  const action = loadPandasSuccess(pandas);
  expect(action).toEqual({
    type: '@app/LOAD_PANDAS_SUCCESS',
    payload: pandas,
  });
});

test('loadPandasFailure', () => {
  const error = new Error('An error for test');
  const action = loadPandasFailure(error);
  expect(action).toEqual({
    type: '@app/LOAD_PANDAS_FAILURE',
    payload: error,
  });
});

test('createPandaRequest', () => {
  const panda: Panda = {
    name: 'TEST',
    interests: ['interest1', 'interest2'],
    image: 'imageUrl',
  };
  const action = createPandaRequest(panda);
  expect(action).toEqual({
    type: CREATE_PANDA_REQUEST,
    payload: panda,
  });
});

test('createPandasSuccess', () => {
  const panda: Panda = {
    key: 'key',
    name: 'TEST',
    interests: ['interest1', 'interest2'],
    image: 'imageUrl',
  };
  const action = createPandaSuccess(panda);
  expect(action).toEqual({
    type: CREATE_PANDA_SUCCESS,
    payload: panda,
  });
});

test('createPandaFailure', () => {
  const error = new Error('An error for test');
  const action = createPandaFailure(error);
  expect(action).toEqual({
    type: CREATE_PANDA_FAILURE,
    payload: error,
  });
});
