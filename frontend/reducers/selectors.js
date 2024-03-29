
export const allTodos = ({ todos }) =>
    Object.keys(todos).map(
        id => todos[id]
    )


export const stepsByTodoId = ({steps}, todoId) => {
    const result = [];
    Object.keys(steps).forEach(
        stepId => {
            const step = steps[stepId];
            if (steps[stepId].todo_id === todoId)
            result.push(step);
        })
        return result;
    };
