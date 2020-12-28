import React from 'react';
import StepListItemContainer from './step_list_item_container'


// class StepList extends React.Component{
//     constructor(props){
//         super(props);
//     }
    
//     render() {

const StepList = ({ steps, todo_id, receiveStep }) => {
    const stepItems = steps.map(step => (
        console.log(step),
        <StepListItemContainer
            key={step.id}
            step={step} />
    ));

        return (
            <div>
                <ul> {stepItems}</ul>
                <div todo_id={todo_id}>stepForm</div>
            </div>
        )


    }





export default StepList;