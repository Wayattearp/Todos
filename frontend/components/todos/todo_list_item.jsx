import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.toggleTodo = this.toggleTodo.bind(this);
    }


    toggleTodo(e) {
        e.preventDefault();
        const toggledTodo = Object.assign(
            {},
            this.props.todo,
            { done: !this.props.todo.done }
        );

        this.props.receiveTodo(toggledTodo);
    }

    render() {
        const todo = this.props.todo;
        const { title, done } = todo;
        return <div>
            <li>
                {title}
            </li>
            <TodoDetailViewContainer todo={todo} />
            <button
                onClick={this.toggleTodo}>{done ? 'Done' : 'Undo'}
            </button>

        </div>
    }
}

export default TodoListItem