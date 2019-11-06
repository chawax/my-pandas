import { applyMiddleware, combineReducers, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagasMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import { pandasReducer } from './pandas/reducers';

const rootReducer = combineReducers({
  pandas: pandasReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialState = {};
const sagaMiddleware = createSagasMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];
const store: Store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;
