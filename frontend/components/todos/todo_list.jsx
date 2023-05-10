import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function TodoList(props) {
    const { todos, receiveTodo } = props;
    const doneTodoItems = [];
    const inProgressTodoItems = [];
    todos.map((todo) => {
        if (todo.done)
            doneTodoItems.unshift(<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />);
        else {
            inProgressTodoItems.unshift(<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />)
        }
    });

    return <div>
        <div className="AppContainerWrapper">
            <div className="titles">
                <h1 className="workingOn">In Progress</h1>
                <h1 className="accomplished">Done</h1>
            </div>
            <div className="appContainer">
                <ul className="todoList">
                    <ReactCSSTransitionGroup
                        transitionName='auto'
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        {inProgressTodoItems}
                    </ReactCSSTransitionGroup>
                </ul>
                <TodoForm receiveTodo={receiveTodo} />
                <ul className="todoList">
                    <ReactCSSTransitionGroup
                        transitionName='autodone'
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}>
                        {doneTodoItems}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        </div>
    </div>
}

export default TodoList;
