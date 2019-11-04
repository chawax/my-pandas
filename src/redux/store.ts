import { combineReducers, createStore, Store, applyMiddleware, Middleware } from 'redux';
import { pandasReducer } from './pandas/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  pandas: pandasReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const initialState = {};
const middlewares: Middleware[] = [];
const store: Store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
export default store;
