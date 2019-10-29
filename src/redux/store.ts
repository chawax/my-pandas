import { createStore } from 'redux';
import pandas from '../pandas';

const reducer = (state: any) => state;

const initialState = {
  pandas,
};
const store = createStore(reducer, initialState);

export default store;
