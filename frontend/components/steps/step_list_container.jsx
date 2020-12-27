import { receiveSteps } from "../../actions/steps_actions"

import { receiveStep } from '../../actions/steps_actions'

const mapDispatchToProps = (dispatch) => ({
    receiveStep: dispatch(receiveStep(step))

});

