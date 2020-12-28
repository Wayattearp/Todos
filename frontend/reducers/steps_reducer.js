import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/steps_actions';

const stepsReducer = (state = initialState, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STEPS:
            action.steps.forEach(step => {
                newState[step.id] = step;
            });
            return newState;
        case RECEIVE_STEP:
            const newStep = { [action.step.id]: action.step };
            return Object.assign({}, state, newStep);

        case REMOVE_STEP:
            delete newState[action.step.id];
            return newState;
        default:
            return state;
    }
};

const initialState =  {
  1: {
    id: 48,
    title: "walk to store",
    done: false,
    todo_id: 1
  },
  2: {
    id: 348,
    title: "buy soap",
    done: false,
    todo_id: 1
  },
  4: {
    id: 148,
    title: "buy the dog",
    done: false,
    todo_id: 2
  }
};


export default stepsReducer;