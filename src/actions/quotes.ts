import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import axios from 'axios';

const BASE_URL = `https://programming-quotes-api.herokuapp.com`;

export interface Quote {
  id: string;
  author: string;
  rating: number;
  en: string;
}

export interface FetchQuotesAction {
  type: ActionTypes.fetchQuotes;
  payload: Quote[];
}

export const fetchQuotes = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Quote[]>(`${BASE_URL}/quotes/lang/en`);

    dispatch<FetchQuotesAction>({
      type: ActionTypes.fetchQuotes,
      payload: response.data,
    });
  };
};
