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
            { done: !this.props.step.done }
        );
        this.props.receiveStep(toggledStep);
    }


    render() {
        const step = this.props.step;
        const { title, body, done } = step;
        return (
            <div>
                {title}
                <br />
                {body}
                <button
                    onClick={this.toggleStep}>{done ? 'Done' : 'Undo'}
                </button>
                <button
                    onClick={this.props.removeStep}>
                    Delete
                </button>
            </div>
        )
    }
}

export default StepListItem;