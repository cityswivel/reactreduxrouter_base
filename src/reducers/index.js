// index.js

import counterReducer from './counterReducer';
import thisReducer from './thisReducer';
import fetchReducer from './fetchReducer';
import { items, itemsHasErrored, itemsIsLoading } from './itemReducer';

export default {counterReducer, thisReducer, fetchReducer,items, itemsHasErrored,itemsIsLoading}
