import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes, Quote } from '../actions/quotes';
import { StoreState } from '../reducers/index';

interface AppProps {
  quotes: { quotes: Quote[] };
  fetchQuotes(): any;
}
class _App extends Component<AppProps> {
  handleFetchQuotes = (): void => {
    this.props.fetchQuotes();
  };

  render(): JSX.Element {
    return (
      <div>
        <p>Hello World</p>
        <p onClick={this.handleFetchQuotes}>Press Me</p>
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
