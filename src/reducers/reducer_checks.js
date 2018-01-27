import { FETCH_CHECKS, FETCH_ONE_CHECK } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CHECKS:
      return action.payload.data;
      
    case FETCH_ONE_CHECK:
      return action.payload.data;

    default:
      return state;
  }
}