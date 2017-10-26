// index.js

import * as actionType from './ActionType';

export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});

export const doubleCounter = () => ({
	type: actionType.DOUBLE_COUNTER,
	payload: 2,
	stuff: 'that'
});

export const jason = () => ({
	type: actionType.JASON,
	stuff: 'jason'
});
export const cass = () => ({
	type: actionType.CASS,
	stuff: 'cass'
});
