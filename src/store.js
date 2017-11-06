/**
 * Created by rohitgirme on 8/9/17.
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
