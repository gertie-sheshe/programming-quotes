import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import axios from 'axios';
// import { performance } from 'perf_hooks';

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
    const response = await axios.get<Quote[]>(`${BASE_URL}/quotes/page/2`);

    dispatch<FetchQuotesAction>({
      type: ActionTypes.fetchQuotes,
      payload: response.data,
    });
  };
};

// Playing around with some async concepts from this point
const capitalizeQuote = (quote: Quote) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve({ ...quote, en: quote.en.toUpperCase() });
    }, 8000);
  });
};

const capitalizeAuthor = (quote: Quote) => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve({ ...quote, author: quote.author.toUpperCase() });
    }, 600);
  });
};

// fetch all, then loop through, simulate two async calls with each loop
export const fetchOneQuote = async () => {
  let now = performance.now();

  const response = await axios.get<Quote[]>(`${BASE_URL}/quotes/page/2`);

  console.log('RES', response.data[0]);

  let data = response.data;

  // This runs sequentially
  for (let i = 0; i < data.length; i++) {
    const respData = await capitalizeQuote(data[i]);
    const respDataTwo = await capitalizeAuthor(data[i]);
  }

  // parallel. Less time using performance.now
  response.data.map(async (data) => {
    const respData = await capitalizeQuote(data);
    const respDataTwo = await capitalizeAuthor(data);
  });

  // If you need to assign to a variable when all the promises have resolved
  // Promise.all(
  //   response.data.map(async (data) => {
  //     const respData = await capitalizeQuote(data);
  //     const respDataTwo = await capitalizeAuthor(data);
  //   })
  // );
};
