import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Panda } from '../../types/Pandas';

// Typage du state

export interface State {
  data: Panda[];
  fetching: boolean;
  error?: Error;
}

// State initial

const initialState: State = {
  data: [],
  fetching: false,
  error: undefined,
};

// Export du slice Redux Toolkit
// Immer est utilisé en interne

export const slice = createSlice({
  name: '@@app/pandas',
  initialState: initialState,
  reducers: {
    loadPandasRequest: (state: State) => {
      state.data = [];
      state.error = undefined;
      state.fetching = true;
    },
    loadPandasSuccess: (state: State, action: PayloadAction<Panda[]>) => {
      state.data = action.payload;
      state.error = undefined;
      state.fetching = false;
    },
    loadPandasFailure: (state: State, action: PayloadAction<Error>) => {
      state.data = [];
      state.error = action.payload;
      state.fetching = false;
    },
    createPandaRequest: (state: State, action: PayloadAction<Panda>) => {
      state.fetching = true;
      state.error = undefined;
    },
    createPandaSuccess: (state: State, action: PayloadAction<Panda>) => {
      state.fetching = false;
      if (state.data) {
        state.data.push(action.payload);
      } else {
        state.data = [action.payload];
      }
      state.error = undefined;
    },
    createPandaFailure: (state: State, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.fetching = false;
    },
  },
});
