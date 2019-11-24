import { push } from 'connected-react-router';
import { call, put, select } from 'redux-saga/effects';
import { createPandaFailure, createPandaSuccess, loadPandasFailure, loadPandasSuccess } from '../redux/pandas';
import { isHooksEnabled } from '../redux/pandas/selectors';
import { CreatePandaRequestAction } from '../redux/pandas/types';
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

export function* createPanda(action: CreatePandaRequestAction) {
  try {
    const response: Panda = yield call(api.createPanda, action.payload);
    yield put(createPandaSuccess(response));
    const navigateToHooks: boolean = yield select(isHooksEnabled);
    if (navigateToHooks) {
      yield put(push('/hooks/pandas'));
    } else {
      yield put(push('/hoc/pandas'));
    }
  } catch (error) {
    yield put(createPandaFailure(error));
  }
}
