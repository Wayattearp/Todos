import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form'

const StepList = ({ steps, todo_id, receiveStep }) => {
    const stepItems = steps.map(step => (
        <StepListItemContainer
            key={step.id}
            step={step} />
    ));

    return (
        <div>
            <ul> {stepItems}</ul>
            <div >
                <StepForm
                    todo_id={todo_id}
                    receiveStep={receiveStep}
                /></div>
        </div>
    )


}





export default StepList;