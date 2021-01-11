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
                <div className="stepItem" 
                    style={{ border: done ? '2px solid rgb(173, 238, 207)' : '2px solid #fee355' }}>
                    <button className="stepStatus"
                        onClick={this.toggleStep}
                        style={{ background: done ? 'rgb(173, 238, 207)' : '#fee355' }}>
                        {done ? 'Done' : 'Working'}

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