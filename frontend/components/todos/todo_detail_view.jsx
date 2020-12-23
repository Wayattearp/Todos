import React from 'react';

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { removeTodo } = this.props;
        const { body, done } = this.props.todo;

        return (
            <div>
                <div>{body} </div>
                <div> {done} </div>
                <button onClick={removeTodo}>Delete Todo</button>
            </div>
        );
    }
}

export default TodoDetailView;