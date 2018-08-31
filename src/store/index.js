import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import exampleReducer from '../reducers/example';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    exampleReducer
  }),
  composeEnhancers(applyMiddleware(promise))
);
