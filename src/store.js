/**
 * Redux store.
 * Used on server and client
 */

import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default function (initialState) {
  const middleware = applyMiddleware(
    thunk
  );
  let store = createStore(reducers, initialState, middleware);
  return store;
}
