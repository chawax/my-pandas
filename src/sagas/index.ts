import { all, takeLatest } from 'redux-saga/effects';
import { loadPandas, createPanda } from './pandas';
import { LOAD_PANDAS_REQUEST, CREATE_PANDA_REQUEST } from '../redux/pandas/types';

export default function* rootSaga() {
  yield all([
    takeLatest(LOAD_PANDAS_REQUEST, loadPandas), //
    takeLatest(CREATE_PANDA_REQUEST, createPanda),
  ]);
}
