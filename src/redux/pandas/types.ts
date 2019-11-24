import { Panda } from '../../types/Pandas';

export interface PandasState {
  data: Panda[];
  fetching: boolean;
  error?: Error;
}
