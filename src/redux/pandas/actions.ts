import { Panda } from '../../types/Pandas';
import {
  CREATE_PANDA_FAILURE,
  CREATE_PANDA_REQUEST,
  CREATE_PANDA_SUCCESS,
  LOAD_PANDAS_FAILURE,
  LOAD_PANDAS_REQUEST,
  LOAD_PANDAS_SUCCESS,
  PandasActionTypes,
} from './types';

export function loadPandasRequest(): PandasActionTypes {
  return {
    type: LOAD_PANDAS_REQUEST,
    payload: undefined,
  };
}

export function loadPandasSuccess(pandas: Panda[]): PandasActionTypes {
  return {
    type: LOAD_PANDAS_SUCCESS,
    payload: pandas,
  };
}

export function loadPandasFailure(error: Error): PandasActionTypes {
  return {
    type: LOAD_PANDAS_FAILURE,
    payload: error,
  };
}

export function createPandaRequest(panda: Panda): PandasActionTypes {
  return {
    type: CREATE_PANDA_REQUEST,
    payload: panda,
  };
}

export function createPandaSuccess(panda: Panda): PandasActionTypes {
  return {
    type: CREATE_PANDA_SUCCESS,
    payload: panda,
  };
}

export function createPandaFailure(error: Error): PandasActionTypes {
  return {
    type: CREATE_PANDA_FAILURE,
    payload: error,
  };
}
