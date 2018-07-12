const Note = props => {
    return (
        <div>
            <p>{props.children}</p>
            <button onClick={props.remove}>del</button>
        </div>
    );
};


export default Note;
