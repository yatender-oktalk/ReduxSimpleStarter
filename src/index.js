//create a new component to produce some HTML
import ReactDOM from "react-dom"
import React from "react"

import SearchBar from './components/search_bar'

// Youtube API key
const API_KEY = "AIzaSyD3a2tscmqaZ10nz44BXnmdMrckNXaUkGM";

let App = () => {
    return <div>
        <SearchBar />
    </div>;
}

ReactDOM.render(<App />, document.querySelector(".container"));