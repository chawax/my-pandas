import { Panda } from '../../types/Pandas';

export interface PandasState {
  data: Panda[];
  fetching: boolean;
  error?: Error;
}

export const LOAD_PANDAS_REQUEST = '@app/LOAD_PANDAS_REQUEST';
export const LOAD_PANDAS_SUCCESS = '@app/LOAD_PANDAS_SUCCESS';
export const LOAD_PANDAS_FAILURE = '@app/LOAD_PANDAS_FAILURE';
export const CREATE_PANDA_REQUEST = '@app/CREATE_PANDA_REQUEST';
export const CREATE_PANDA_SUCCESS = '@app/CREATE_PANDA_SUCCESS';
export const CREATE_PANDA_FAILURE = '@app/CREATE_PANDA_FAILURE';

// We export actions that will be used to trigger a saga
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

// We export actions that will be used to trigger a saga
export interface CreatePandaRequestAction {
  type: typeof CREATE_PANDA_REQUEST;
  payload: Panda;
}

interface CreatePandaSuccessAction {
  type: typeof CREATE_PANDA_SUCCESS;
  payload: Panda;
}

interface CreatePandaFailureAction {
  type: typeof CREATE_PANDA_FAILURE;
  payload: Error;
}

export type PandasActionTypes =
  | LoadPandasRequestAction
  | LoadPandasSuccessAction
  | LoadPandasFailureAction
  | CreatePandaRequestAction
  | CreatePandaSuccessAction
  | CreatePandaFailureAction;
