import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/steps_actions';

const mapDispatchToProps = (dispatch, { todo }) => ({
    removeTodo: () => dispatch(removeTodo(todo)),
    receiveSteps: () => dispatch(receiveSteps)
});

export default connect(
    null, //(the first argument to connect must always be mapStateToProps)
    mapDispatchToProps
)(TodoDetailView);
