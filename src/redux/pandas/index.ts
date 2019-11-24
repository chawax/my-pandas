import { produce } from 'immer';
import { Panda } from '../../types/Pandas';
import {
  CREATE_PANDA_FAILURE,
  CREATE_PANDA_REQUEST,
  CREATE_PANDA_SUCCESS,
  LOAD_PANDAS_FAILURE,
  LOAD_PANDAS_REQUEST,
  LOAD_PANDAS_SUCCESS,
  PandasActionTypes,
  PandasState,
} from './types';

// Action creators

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

// Reducer

const initialState: PandasState = {
  data: [],
  fetching: false,
  error: undefined,
};

const reducer = (state: PandasState = initialState, action: PandasActionTypes) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOAD_PANDAS_REQUEST:
        draft.data = [];
        draft.error = undefined;
        draft.fetching = true;
        break;
      case LOAD_PANDAS_SUCCESS:
        draft.data = action.payload;
        draft.error = undefined;
        draft.fetching = false;
        break;
      case LOAD_PANDAS_FAILURE:
        draft.data = [];
        draft.error = action.payload;
        draft.fetching = false;
        break;
      case CREATE_PANDA_REQUEST:
        draft.fetching = true;
        draft.error = undefined;
        break;
      case CREATE_PANDA_SUCCESS:
        draft.fetching = false;
        if (draft.data) {
          draft.data.push(action.payload);
        } else {
          draft.data = [action.payload];
        }
        draft.error = undefined;
        break;
      case CREATE_PANDA_FAILURE:
        draft.error = action.payload;
        draft.fetching = false;
        break;
    }
  });
};

export default reducer;
