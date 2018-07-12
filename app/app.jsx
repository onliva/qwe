import ReactDOM,{ render } from "react-dom";
import List from "./components/List";

const App = (props) => {
    return (
        <div>
            <List />
        </div>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
