import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const todo = this.props.todo;
        const { title, body, done } = todo;
        return <div>
            <li>
                {title}
                <br />
                {body}
                <br />
                {done}
            </li>
            <TodoDetailViewContainer todo={todo} />

        </div>
    }
}

export default TodoListItem