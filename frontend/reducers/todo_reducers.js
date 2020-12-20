const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        default:
            return state;
    }
};

export default todosReducer;