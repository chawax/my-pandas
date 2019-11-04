import { AppState } from '../store';
import { Panda } from '../../types/Pandas';

export const getPandas = (state: AppState): Panda[] => {
  return state.pandas.data;
};
