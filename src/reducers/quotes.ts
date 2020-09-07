import { Quote } from '../actions/quotes';
import { ActionTypes, Action } from '../actions/types';

export interface QuotesState {
  quotes: Quote[];
}

const initialState: QuotesState = {
  quotes: [],
};

export const quotesReducer = (
  state: QuotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchQuotes:
      return { ...state, quotes: action.payload };
    default:
      return { ...state };
  }
};
