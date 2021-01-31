import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';
import { motion } from "framer-motion";

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
        let colors = ['e8efeb', 'adeecf', 'e8e8e4', 'ffd7ba', 'fae1dd', 'fdffb6', 'a9d6e5', 'fde2e4', 'e9edc9' ];
        let randomColor = colors[Math.floor(Math.random() * 9)];

        const todo = this.props.todo;
        const { title, done } = todo;
        let detail;

        if (this.state.detail) {
            detail = <TodoDetailViewContainer todo={todo} color={randomColor} />
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
                    background: '#' + randomColor}}
                onClick={this.handleDetail}>
                {title}
            </li>
            <div>
                {detail}
            </div>
            <button className={done ? "todoButtonDone" : "todoButtonInProgress"}
                onClick={this.toggleTodo}>{done ? 'Done' : 'In Progress'}
            </button>

        </motion.div>
    }
}

export default TodoListItem