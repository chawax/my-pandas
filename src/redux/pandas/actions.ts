import { Panda } from '../../types/Pandas';
import { PandasActionTypes, SET_PANDAS } from './types';

export function setPandas(pandas: Panda[]): PandasActionTypes {
  return {
    type: SET_PANDAS,
    payload: pandas,
  };
}
