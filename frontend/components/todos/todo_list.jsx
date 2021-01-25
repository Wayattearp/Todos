import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class TodoList extends React.Component {

    render() {
        const { todos, receiveTodo } = this.props;
        const doneTodoItems = [];
        let InProgressTodoItems = [];
        todos.map((todo) => {
            if (todo.done)
                doneTodoItems.push(<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />);
            else {
                InProgressTodoItems.push(<TodoListItem key={todo.id} todo={todo} receiveTodo={receiveTodo} />)
            }
        }


        );
        return <div>
            <DragDropContext>
                <Droppable droppableId="todoList">
                    {(provided) => (
                        <ul className="todoList" {...provided.droppableProps} ref={provided.innerRef}>
                            <ReactCSSTransitionGroup
                                transitionName='auto'
                                transitionEnterTimeout={3000}
                                transitionLeaveTimeout={500}>
                                {InProgressTodoItems.map((todo, index) => {
                                    return (
                                        <Draggable key={todo.key} draggableId={todo.key} index={index}>

                                            {(provided) => (
                                                <span ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    {todo}
                                                </span>
                                            )}
                                        </Draggable>
                                    )
                                }
                                )}
                            </ReactCSSTransitionGroup>

                        </ul>
                    )}
                </Droppable>

                <TodoForm receiveTodo={receiveTodo} />

                <div className="todoList">
                    <ReactCSSTransitionGroup
                        transitionName='auto'
                        transitionEnterTimeout={3000}
                        transitionLeaveTimeout={500}>
                        {doneTodoItems}
                    </ReactCSSTransitionGroup>
                </div>
            </DragDropContext>
        </div>
    }
}

export default TodoList;