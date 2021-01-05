import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TodoList extends React.Component {

    render() {
        const { todos, receiveTodo } = this.props;
        const doneTodoItems = [];
        const InProgressTodoItems = [];
        todos.map(todo => {
            if (!todo.done)
                doneTodoItems.push(<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />);
            else {
                InProgressTodoItems.push(<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />)
            }
        }

        );
        return <div>

            <ol className="todoList">
                <ReactCSSTransitionGroup
                    transitionName='auto'
                    transitionEnterTimeout={3000}
                    transitionLeaveTimeout={500}>
                    {doneTodoItems}
                </ReactCSSTransitionGroup>
            </ol>
            <TodoForm receiveTodo={receiveTodo} />
            {InProgressTodoItems}
        </div>
    }
}

export default TodoList;