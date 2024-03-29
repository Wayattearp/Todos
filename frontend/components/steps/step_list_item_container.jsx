import StepListItem from './step_list_item'
import { connect } from 'react-redux';
import { removeStep, receiveStep } from '../../actions/steps_actions'

const mapDispatchToProps = (dispatch, { step }) => ({
    removeStep: () => dispatch(removeStep(step)),
    receiveStep: step => dispatch(receiveStep(step))

});


export default connect(
    null,
    mapDispatchToProps
)(StepListItem)