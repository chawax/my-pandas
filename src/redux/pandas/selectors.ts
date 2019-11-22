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

export const findPanda = (state: AppState, key: string): Panda | undefined => {
  return (
    state.pandas.data &&
    state.pandas.data.find((item: Panda) => {
      return item.key === key;
    })
  );
};

export const isHooksEnabled = (state: AppState): boolean => {
  return state.router.location.pathname.split('/')[1] === 'hooks';
};
