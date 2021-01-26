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

        function handleOnDragEnd(result) {
            if (!result.destination) return;
            const [reorderedItem] = InProgressTodoItems.splice(result.source.index, 1);
            // console.log(reorderedItem)
            // console.log(result)
            InProgressTodoItems.splice(result.destination.index, 0, reorderedItem);
            // receiveTodo(toggledTodo);
        }

        return <div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
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
                            {provided.placeholder}
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