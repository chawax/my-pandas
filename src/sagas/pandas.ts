import { call, put } from 'redux-saga/effects';
import { loadPandasFailure, loadPandasSuccess } from '../redux/pandas/actions';
import api from '../services/api';
import { Panda } from '../types/Pandas';

export function* loadPandas() {
  try {
    const response: Panda[] = yield call(api.loadPandas);
    yield put(loadPandasSuccess(response));
  } catch (error) {
    yield put(loadPandasFailure(error));
  }
}
