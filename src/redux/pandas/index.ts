import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Panda } from '../../types/Pandas';
import { PandasState } from './types';

// Typage du state

export interface PandasState {
  data: Panda[];
  fetching: boolean;
  error?: Error;
}

// State initial

const initialState: PandasState = {
  data: [],
  fetching: false,
  error: undefined,
};

// Export du slice Redux Toolkit
// Immer est utilisé en interne

const slice = createSlice({
  name: 'pandas',
  initialState: initialState,
  reducers: {
    loadPandasRequest: state => {
      state.data = [];
      state.error = undefined;
      state.fetching = true;
    },
    loadPandasSuccess: (state, action: PayloadAction<Panda[]>) => {
      state.data = action.payload;
      state.error = undefined;
      state.fetching = false;
    },
    loadPandasFailure: (state, action: PayloadAction<Error>) => {
      state.data = [];
      state.error = action.payload;
      state.fetching = false;
    },
    createPandaRequest: (state, action: PayloadAction<Panda>) => {
      state.fetching = true;
      state.error = undefined;
    },
    createPandaSuccess: (state, action: PayloadAction<Panda>) => {
      state.fetching = false;
      if (state.data) {
        state.data.push(action.payload);
      } else {
        state.data = [action.payload];
      }
      state.error = undefined;
    },
    createPandaFailure: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.fetching = false;
    },
  },
});

export default slice;
