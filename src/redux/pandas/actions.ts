import { Panda } from '../../types/Pandas';
import { PandasActionTypes, LOAD_PANDAS_REQUEST, LOAD_PANDAS_SUCCESS, LOAD_PANDAS_FAILURE } from './types';

export function loadPandasRequest(): PandasActionTypes {
  return {
    type: LOAD_PANDAS_REQUEST,
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
