import StepItem from './step_list_item'
import { connect } from 'react-redux';
import { removeStep, receiveStep } from '../../actions/steps_actions'

const mapDispatchToProps = (dispatch) => ({
    removeStep: dispatch(removeStep(step)),
    receiveStep: dispatch(receiveStep(step))

});


export default connect(
    null,
    mapDispatchToProps
)(StepItem)