import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          onChange={(event) => this.setState({ term: event.target.value })}
        />
        value of the term: {this.state.term}
      </div>);
  }
}

export default SearchBar;
