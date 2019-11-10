import { push } from 'connected-react-router';
import { call, put } from 'redux-saga/effects';
import { createPandaFailure, createPandaSuccess, loadPandasFailure, loadPandasSuccess } from '../redux/pandas/actions';
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
    yield put(push('/'));
  } catch (error) {
    yield put(createPandaFailure(error));
  }
}
