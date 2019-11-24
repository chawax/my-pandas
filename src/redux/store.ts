import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagasMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import history from '../services/history';
import pandasReducer from './pandas';

// Création du root reducer
const rootReducer = combineReducers({
  pandas: pandasReducer,
  form: formReducer,
  router: connectRouter(history),
});

// Configuration de Redux Persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form', 'router'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Création du state initial
const initialState = {};

// Initialisation de Saga
const sagaMiddleware = createSagasMiddleware();

// Création du store Redux
const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, routerMiddleware(history)],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

// La saga root doit être démarrée après la création du store
sagaMiddleware.run(rootSaga);

// Export du type décrivant la structure du store Redux
export type AppState = ReturnType<typeof rootReducer>;

// Export du persistor Redux Persist
export const persistor = persistStore(store);

export default store;
