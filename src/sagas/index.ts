import { all, takeLatest } from 'redux-saga/effects';
import { loadPandas } from './pandas';
import { LOAD_PANDAS_REQUEST } from '../redux/pandas/types';

export default function* rootSaga() {
  yield all([takeLatest(LOAD_PANDAS_REQUEST, loadPandas)]);
}
