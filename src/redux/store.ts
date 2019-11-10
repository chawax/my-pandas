import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, combineReducers, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagasMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import history from '../services/history';
import { pandasReducer } from './pandas/reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form'],
};

const rootReducer = combineReducers({
  pandas: pandasReducer,
  form: formReducer,
  router: connectRouter(history),
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

const initialState = {};
const sagaMiddleware = createSagasMiddleware();
const middlewares: Middleware[] = [sagaMiddleware, routerMiddleware(history)];
const store: Store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
