import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'
import { receiveTodo } from '../../actions/todo_actions';

class TodoList extends React.Component {

    render() {
        const { todos } = this.props;
        const todoItems = todos.map(todo =>
            <TodoListItem key={todo.id} todo={todo} />);
        return <div>
            <ul>
                {todoItems}
            </ul>
            <TodoForm receiveTodo={receiveTodo} />
        </div>
    }
}

export default TodoList;