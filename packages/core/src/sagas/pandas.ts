import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, put, select } from 'redux-saga/effects';
import slice from '../redux/pandas';
import { isHooksEnabled } from '../redux/pandas/selectors';
import api from '../services/api';
import { Panda } from '../types/Pandas';

export function* loadPandas() {
  try {
    const response: Panda[] = yield call(api.loadPandas);
    yield put(slice.actions.loadPandasSuccess(response));
  } catch (error) {
    yield put(slice.actions.loadPandasFailure(error));
  }
}

export function* createPanda(action: PayloadAction<Panda>) {
  try {
    const response: Panda = yield call(api.createPanda, action.payload);
    yield put(slice.actions.createPandaSuccess(response));
    const navigateToHooks: boolean = yield select(isHooksEnabled);
    if (navigateToHooks) {
      yield put(push('/hooks/pandas'));
    } else {
      yield put(push('/hoc/pandas'));
    }
  } catch (error) {
    yield put(slice.actions.createPandaFailure(error));
  }
}
