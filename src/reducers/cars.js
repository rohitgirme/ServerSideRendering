/**
 * Created by rohitgirme on 3/12/17.
 */

import {
  CARS_SUCCESS
} from '../actions/index';

const INITIAL_STATE = [];

export default function CarsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CARS_SUCCESS:
      console.log("reducer action success");
      return action.payload;
    default:
      return state;
  }
}
