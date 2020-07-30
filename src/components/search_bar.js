import React, { Component } from 'react';
import { render } from 'react-dom';


class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}

export default SearchBar;
