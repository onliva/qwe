import React, { Component } from "react";
import { render } from "react-dom";
import List from "./components/List";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <List />
            </div>
        );
    }
}

export default App;
render(<App />, document.getElementById("root"));
