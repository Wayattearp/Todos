import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.toggleTodo = this.toggleTodo.bind(this);
        this.state = {
            detail: false
        }
        this.handleDetail = this.handleDetail.bind(this)
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

    handleDetail() {
        this.setState({ detail: !this.state.detail });
    }

    render() {
        const todo = this.props.todo;
        const { title, done } = todo;
        let detail;
        if (this.state.detail) {
            detail = <TodoDetailViewContainer todo={todo} />
        }
        return <div
            className="todoItemContainer">
            <li className="todoItem"
                onClick={this.handleDetail}>
                {title}
            </li>
            <div>
                {detail}
            </div>
            <button
                className="todoBotton"
                onClick={this.toggleTodo}>{done ? 'Done' : 'In Progress'}
            </button>

        </div>
    }
}

export default TodoListItem