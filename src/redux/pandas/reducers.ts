import { produce } from 'immer';
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

const initialState: PandasState = {
  data: [],
  fetching: false,
  error: undefined,
};

export const pandasReducer = (state: PandasState = initialState, action: PandasActionTypes) => {
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

// Ci-dessous le reducer sans utiliser Immer (seulement en utiliser le spread operator)

export function oldPandasReducer(state = initialState, action: PandasActionTypes): PandasState {
  switch (action.type) {
    case LOAD_PANDAS_REQUEST:
      return {
        ...state,
        data: [],
        error: undefined,
        fetching: true,
      };
    case LOAD_PANDAS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: undefined,
        fetching: false,
      };
    case LOAD_PANDAS_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
        fetching: false,
      };
    case CREATE_PANDA_REQUEST:
      return {
        ...state,
        fetching: true,
        error: undefined,
      };
    case CREATE_PANDA_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: state.data ? [...state.data, action.payload] : [action.payload],
        error: undefined,
      };
    case CREATE_PANDA_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
