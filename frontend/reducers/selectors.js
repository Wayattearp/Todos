import { bindActionCreators } from "redux";

export const allTodos = ({ todos }) =>
    Object.keys(todos).map(
        id => todos[id]
    )


export const stepsByTodoId = ({steps}, todoID) => {
    const result = [];
    Object.keys(steps).forEach(
        stepId => {
            const step = steps[stepId];
            if (steps[stepId].todoID === todoID)
            result.push(step);
        })
        return result;
    };