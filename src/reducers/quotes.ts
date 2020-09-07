// to be changed, just for setup
interface QuoteState {
  quotes: any[];
}

const initialState: QuoteState = {
  quotes: [],
};

export const quotesReducer = (state = initialState, action = {}) => {
  return state;
};
