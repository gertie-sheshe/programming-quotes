import { combineReducers } from 'redux';
import { quotesReducer } from './quotes';

// interface StoreState {
//   quotes: any;
// }

export const reducers = combineReducers({
  quote: quotesReducer,
});
