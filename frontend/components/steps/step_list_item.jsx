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
            <div className="stepItemContainer">
                <div className="stepItem">
                    <button className="stepStatus"
                        onClick={this.toggleStep}>{done ? 'Done' : 'In Progress'}
                    </button>
                    <div className="stepTitle">
                        {title}
                    </div>
                    <div className="stepBody">
                        {body}
                    </div>
                    <button className="deleteStep"
                        onClick={this.props.removeStep}>
                        Delete
                    </button>
                </div>
            </div>

        )
    }
}

export default StepListItem;