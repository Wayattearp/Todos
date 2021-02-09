import React, { useState } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

    // function handleOnDragEndInProgress(result) {
    //     if (!result.destination) return;
    //     const [reorderedItem] = inProgressTodoItems.splice(result.source.index, 1);
    //     inProgressTodoItems.splice(result.destination.index, 0, reorderedItem);
    // }

    // function handleOnDragEndDone(result) {
    //     if (!result.destination) return;
    //     const [reorderedItem] = doneTodoItems.splice(result.source.index, 1);
    //     doneTodoItems.splice(result.destination.index, 0, reorderedItem);
    // }

    const [todosInProgress, updateTodosInProgress] = useState(inProgressTodoItems);
    const [todosDone, updateDoneTodoItems] = useState(doneTodoItems);

    function handleOnDragEndInProgress(result) {
        if (!result.destination) return;
        const [reorderedItem] = todosInProgress.splice(result.source.index, 1);
        todosInProgress.splice(result.destination.index, 0, reorderedItem);
        updateTodosInProgress(todosInProgress);
    }

    function handleOnDragEndDone(result) {
        if (!result.destination) return;
        const [reorderedItem] = todosDone.splice(result.source.index, 1);
        todosDone.splice(result.destination.index, 0, reorderedItem);
        updateDoneTodoItems(todosDone);
    }

    return <div>
        <h1 className="workingOn">Working on</h1>
        <div className="appContainer">
            <DragDropContext onDragEnd={handleOnDragEndInProgress}>
                <Droppable droppableId="todoList">
                    {(provided) => (
                        <ul className="todoList" {...provided.droppableProps} ref={provided.innerRef}>
                            <ReactCSSTransitionGroup
                                transitionName='auto'
                                transitionEnterTimeout={2000}
                                transitionLeaveTimeout={500}>
                                {inProgressTodoItems.map((todo, index) => {
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
                                {provided.placeholder}
                            </ReactCSSTransitionGroup>
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <h1 className="accomplished">Accomplished</h1>
            <TodoForm receiveTodo={receiveTodo} />
            <DragDropContext onDragEnd={handleOnDragEndDone}>
                <Droppable droppableId="todoList">

                    {(provided) => (
                        <ul className="todoList" {...provided.droppableProps} ref={provided.innerRef}>
                            <ReactCSSTransitionGroup
                                transitionName='autodone'
                                transitionEnterTimeout={2000}
                                transitionLeaveTimeout={500}>
                                {doneTodoItems.map((todo, index) => {
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
            </DragDropContext>
        </div>
    </div>

}

export default TodoList;