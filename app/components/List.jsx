import NoteForm from "./NoteForm";
import Note from "./Note";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: ["ANDROID", "IOS", "nodeJs"]
        };
        this.remove = this.remove.bind(this);
    }
    remove(i) {
        this.state.arr.splice(i, 1);
        this.setState(this.state);
    }
    render() {
        return (
            <div style={{ border: "solid red" }}>
                <NoteForm />
                {this.state.arr.map((item, i) => {
                    return (
                        <Note key={i} remove={()=>{this.remove(i)}}>
                            {item}
                        </Note>
                    );
                })}
            </div>
        );
    }
}
// module.export = List;
export default List;
