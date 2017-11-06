import { combineReducers } from 'redux';

import CarsReducer from './cars';

const rootReducer = combineReducers({
  cars: CarsReducer
});

export default rootReducer;
