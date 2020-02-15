import { all, takeLatest } from 'redux-saga/effects';
import { slice } from '../redux/pandas';
import { createPanda, loadPandas } from './pandas';

export function* rootSaga() {
  yield all([
    takeLatest(slice.actions.loadPandasRequest, loadPandas),
    takeLatest(slice.actions.createPandaRequest, createPanda),
  ]);
}

export * from './pandas';
