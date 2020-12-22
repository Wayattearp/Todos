import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
            action.todos.forEach(todo => {
                newState[todo.id] = todo;
            });
            return newState;
        case RECEIVE_TODO:
            const newTodo = {[action.todo.id] : action.todo};
            return Object.assign({}, state, newTodo);

        case REMOVE_TODO: 
            newState.todos.delete(todo);
            return newState;
        default:
            return state;
    }
};

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};
export default todosReducer;