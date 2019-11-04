import { Panda } from '../../types/Pandas';

export interface PandasState {
  data: Panda[];
}

export const SET_PANDAS = '@app/SET_PANDAS';

interface SetPandasAction {
  type: typeof SET_PANDAS;
  payload: Panda[];
}

export type PandasActionTypes = SetPandasAction;
