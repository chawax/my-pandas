import { PandasState, PandasActionTypes, SET_PANDAS } from './types';

const initialState: PandasState = {
  data: [],
};

export function pandasReducer(state = initialState, action: PandasActionTypes): PandasState {
  switch (action.type) {
    case SET_PANDAS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
