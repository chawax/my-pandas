import { Panda } from '../../types/Pandas';

export interface PandasState {
  data: Panda[];
  fetching: boolean;
  error?: Error;
}

export const LOAD_PANDAS_REQUEST = '@app/LOAD_PANDAS_REQUEST';
export const LOAD_PANDAS_SUCCESS = '@app/LOAD_PANDAS_SUCCESS';
export const LOAD_PANDAS_FAILURE = '@app/LOAD_PANDAS_FAILURE';

interface LoadPandasRequestAction {
  type: typeof LOAD_PANDAS_REQUEST;
  payload: undefined;
}

interface LoadPandasSuccessAction {
  type: typeof LOAD_PANDAS_SUCCESS;
  payload: Panda[];
}

interface LoadPandasFailureAction {
  type: typeof LOAD_PANDAS_FAILURE;
  payload: Error;
}

export type PandasActionTypes = LoadPandasRequestAction | LoadPandasSuccessAction | LoadPandasFailureAction;
