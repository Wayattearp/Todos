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
            <div className="stepListContainer">
                <StepForm
                    todo_id={todo_id}
                    receiveStep={receiveStep}
                /> <ul className="stepsContainer"
            > {stepItems}</ul></div>
           
        </div>
    )


}





export default StepList;