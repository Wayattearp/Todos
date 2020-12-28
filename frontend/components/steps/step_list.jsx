import React from 'react';
import StepListItemContainer from './step_list_item_container'

const StepList = ({ steps, todo_id, receiveStep }) => {
    const stepItems = steps.map(step => (
        <StepListItemContainer
            key={step.id}
            step={step} />
    ));

    return (
        <div>
            <ul> {stepItems}</ul>
            <div>stepForm</div>
        </div>
    )
}

export default StepList;