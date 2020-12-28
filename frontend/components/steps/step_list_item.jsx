import React from 'react'

class StepListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const step = this.props.step;
        const { title, body } = step;
        return (
            <div>
                {title}
                <br/>
                {body}
            </div>
        )
    }
}

export default StepListItem;