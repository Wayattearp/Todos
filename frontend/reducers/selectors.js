export const allTodos = ({ todos }) => 
    Object.keys(todos).map(
        id => todos[id]
    )


export const allSteps = ({ steps }) =>
    Object.keys(steps).map(
        id => steps[id]
    )