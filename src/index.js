//create a new component to produce some HTML
import ReactDOM from "react-dom";
import React, { Component } from "react";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = "AIzaSyD3a2tscmqaZ10nz44BXnmdMrckNXaUkGM";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] }

        YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
            this.setState({ videos: data });
        });
    }

    render() {
        return <div>
            <SearchBar />
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));
