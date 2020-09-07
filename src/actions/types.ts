import { FetchQuotesAction } from './quotes';

export enum ActionTypes {
  fetchQuotes = 'FETCH_QUOTES',
  fetchQuote = 'FETCH_QUOTE',
}

export type Action = FetchQuotesAction;
