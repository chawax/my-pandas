import { all, takeLatest } from 'redux-saga/effects';
import pandasSlice from '../redux/pandas';
import { createPanda, loadPandas } from './pandas';

export default function* rootSaga() {
  yield all([
    takeLatest(pandasSlice.actions.loadPandasRequest, loadPandas),
    takeLatest(pandasSlice.actions.createPandaRequest, createPanda),
  ]);
}
