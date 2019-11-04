import { createStore, Reducer, Store } from 'redux';
import pandas from '../pandas';
import { State } from './types';

const reducer: Reducer = (state: State) => state;

const initialState: State = {
  pandas,
};

const store: Store = createStore(reducer, initialState);
export default store;
