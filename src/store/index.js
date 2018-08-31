import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import promise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({}),
  composeEnhancers(applyMiddleware(promise))
);
