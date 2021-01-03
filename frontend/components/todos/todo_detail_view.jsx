import React from 'react';
import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { removeTodo, todo } = this.props;
        return (
            <div>
                {todo.body}
                <StepListContainer todo_id={todo.id} />
                <button onClick={removeTodo}>Delete Todo</button>
            </div>
        );
    }
}

export default TodoDetailView;
