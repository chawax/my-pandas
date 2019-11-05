import { AppState } from '../store';
import { Panda } from '../../types/Pandas';

export const getPandas = (state: AppState): Panda[] => {
  return state.pandas.data;
};

export const isFetching = (state: AppState): boolean => {
  return state.pandas.fetching;
};

export const getError = (state: AppState): Error | undefined => {
  return state.pandas.error;
};
