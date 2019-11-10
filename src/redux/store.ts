import { applyMiddleware, combineReducers, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagasMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { pandasReducer } from './pandas/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as formReducer } from 'redux-form';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['form'],
};

const rootReducer = combineReducers({
  pandas: pandasReducer,
  form: formReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export type AppState = ReturnType<typeof rootReducer>;

const initialState = {};
const sagaMiddleware = createSagasMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];
const store: Store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
