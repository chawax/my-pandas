import { PandasState, PandasActionTypes, LOAD_PANDAS_SUCCESS, LOAD_PANDAS_REQUEST, LOAD_PANDAS_FAILURE } from './types';

const initialState: PandasState = {
  data: [],
  fetching: false,
  error: undefined,
};

export function pandasReducer(state = initialState, action: PandasActionTypes): PandasState {
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
    default:
      return state;
  }
}
