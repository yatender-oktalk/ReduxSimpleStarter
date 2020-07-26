//create a new component to produce some HTML
import ReactDOM from "react-dom"
import React from "react"

let App = () => {
    return <div>hi</div>;
}

ReactDOM.render(<App />, document.querySelector(".container"));