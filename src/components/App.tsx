import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes, Quote, fetchOneQuote } from '../actions/quotes';
import { StoreState } from '../reducers/index';

interface AppProps {
  quotes: { quotes: Quote[] };
  fetchQuotes(): any;
}
class _App extends Component<AppProps> {
  handleFetchQuotes = (): void => {
    this.props.fetchQuotes();
  };

  renderQuotes = (): JSX.Element[] => {
    return this.props.quotes.quotes.map((quote: Quote) => {
      return <li key={quote.id}>{quote.en}</li>;
    });
  };

  render(): JSX.Element {
    console.log(this.props.quotes.quotes);
    return (
      <div>
        <p>Hello World</p>
        <button onClick={this.handleFetchQuotes}>Press Me</button>
        <ul>{this.renderQuotes()}</ul>
        <button onClick={fetchOneQuote}>Display Chosen One</button>
      </div>
    );
  }
}

const mapStateToProps = (
  state: StoreState
): { quotes: { quotes: Quote[] } } => {
  return { quotes: state.quotes };
};

export const App = connect(mapStateToProps, { fetchQuotes })(_App);
