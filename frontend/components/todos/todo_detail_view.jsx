import React from 'react';
import StepListContainer from '../steps/step_list_container';

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };

        this.toggleStepsForm = this.toggleStepsForm.bind(this);
    }

    toggleStepsForm() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const { removeTodo, todo } = this.props;
        return (
            <div className={this.state.visible ? "todoDetailVisible" : "todoDetailHidden"}>
                <div className="StepsBackground">
                    <div className="todoView"
                        style={{background: '#' + this.props.color}}>
                        <button
                            className="closeStepsButton"
                            onClick={this.toggleStepsForm}>×</button>
                        <div className="todoBody">
                            {todo.body}
                        </div>
                        <button onClick={removeTodo}>Delete Todo</button>
                        <StepListContainer todo_id={todo.id} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoDetailView;
