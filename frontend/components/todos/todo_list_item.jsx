import React from 'react';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { title, body, done } = this.props.todo;
        return <li>
            {title}
            <br/>
            {body}
            <br/>
            {done}
        </li>
    }
}

export default TodoListItem