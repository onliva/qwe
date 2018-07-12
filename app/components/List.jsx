import React, { Component } from "react";
import NoteForm from "./NoteForm";
import Note from "./Note";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <NoteForm />
                <Note />
            </div>
        );
    }
}

export default List;
