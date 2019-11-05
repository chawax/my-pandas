import { PandasState, PandasActionTypes, LOAD_PANDAS_SUCCESS } from './types';

const initialState: PandasState = {
  data: [],
  fetching: false,
  error: undefined,
};

export function pandasReducer(state = initialState, action: PandasActionTypes): PandasState {
  switch (action.type) {
    case LOAD_PANDAS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
