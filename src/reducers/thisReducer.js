// thisReducer.js

import * as actionType from '../actions/ActionType';

const thisReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionType.JASON:
      return newState = action.stuff;
    case actionType.CASS:
      return newState = action.stuff;

    default:
      return state
  }
}

export default thisReducer;
