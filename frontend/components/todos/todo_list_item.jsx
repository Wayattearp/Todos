import React, { useState } from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';
import { motion } from "framer-motion";

function TodoListItem (props) {

    function toggleTodo(e) {
        e.preventDefault();
        const toggledTodo = Object.assign(
            {},
            props.todo,
            { done: !props.todo.done }
        );

        props.receiveTodo(toggledTodo);
    }

    const [detail, handleDetail] = useState(false);
    
    let colors = ['e8efeb', 'adeecf', 'e8e8e4', 'ffd7ba', 'fae1dd', 'fdffb6', 'a9d6e5', 'fde2e4', 'e9edc9'];
    let randomColor = colors[Math.floor(Math.random() * 9)];

    const todo = props.todo;
    const { title, done } = todo;

    let todoView;

    if (detail) {
        todoView = <TodoDetailViewContainer todo={todo} color={randomColor} />
    }

    return <motion.div
        initial={{
            scale: 0
        }}
        animate={{
            scale: 1
        }}
        className="todoItemContainer">
        <li className="todoItem"
            style={{
                background: '#' + randomColor
            }}
            onClick={() => handleDetail(!detail)}>
            {title}
        </li>
        <div>
            {todoView}
        </div>
        <button className={done ? "todoButtonDone" : "todoButtonInProgress"}
            onClick={toggleTodo}>{done ? 'Done' : 'In Progress'}
        </button>

    </motion.div>
}

export default TodoListItem