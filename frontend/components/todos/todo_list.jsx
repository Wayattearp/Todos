import React, { useState } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function TodoList(props) {
    const { todos, receiveTodo } = props;
    const doneTodoItems = [];
    const inProgressTodoItems = [];
    todos.map((todo) => {
        if (todo.done)
            doneTodoItems.push(<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />);
        else {
            inProgressTodoItems.push(<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />)
        }
    });

    const [todosInProgress, updateTodosInProgress] = useState(inProgressTodoItems);
    const [todosDone, updateDoneTodoItems] = useState(doneTodoItems);

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
                        transitionEnterTimeout={2000}
                        transitionLeaveTimeout={500}>
                        {inProgressTodoItems}
                    </ReactCSSTransitionGroup>
                </ul>
                <TodoForm receiveTodo={receiveTodo} />
                <ul className="todoList">
                    <ReactCSSTransitionGroup
                        transitionName='autodone'
                        transitionEnterTimeout={2000}
                        transitionLeaveTimeout={500}>
                        {doneTodoItems}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        </div>
    </div>
}

export default TodoList;
