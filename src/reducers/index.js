import { combineReducers } from 'redux';

import { SET_STACK, LOAD_STACKS, ADD_STACK } from '../actions';

function stacks(state = [], action) {
  switch(action.type) {
    case ADD_STACK:
      return [...state, {...action.stack, id: state.length }]
    case LOAD_STACKS:
      return action.stacks;
    default:
      return state;
  }
}

function stack(state = {}, action){
  switch(action.type) {
    case SET_STACK:
      return action.stack;
    default:
      return state;
  }
}

export default combineReducers({
  stack,
  stacks
});
