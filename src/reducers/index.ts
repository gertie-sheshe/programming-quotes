import { combineReducers } from 'redux';
import { quotesReducer } from './quotes';
import { QuotesState } from './quotes';

export interface StoreState {
  quotes: QuotesState;
}

export const reducers = combineReducers<StoreState>({
  quotes: quotesReducer,
});
