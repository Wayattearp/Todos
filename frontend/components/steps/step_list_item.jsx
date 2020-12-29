import React from 'react'

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toggleStep = this.toggleStep.bind(this)
        
    }


    toggleStep(e) {
        e.preventDefault();
        const toggledStep = Object.assign(
            {},
            this.props.step,
            {done: !this.props.step.done}
        );
        this.props.receiveStep(toggledStep);
    }
    //receive step adds new step to the state
    // instead of replacing the existing one 
    //need to refactor mapdispatchtoprops ?

    render() {
        const step = this.props.step;
        const { title, body, done } = step;
        return (
            <div>
                {title}
                <br/>
                {body}
                <button
                    onClick={this.toggleStep}>{done ? 'Done' : 'Undo'}
                </button>
            </div>
        )
    }
}

export default StepListItem;