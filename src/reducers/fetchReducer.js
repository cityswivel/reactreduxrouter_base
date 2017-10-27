// thisReducer.js

import * as actionType from '../actions/ActionType';

const fetchReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case "EVENTS":
      return [ action.payload, ...state ];
    default:
      return state;
  }
}

export default fetchReducer;
