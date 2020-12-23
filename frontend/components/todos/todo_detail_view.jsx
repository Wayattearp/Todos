import React from 'react';

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { removeTodo } = this.props;

        return (
            <div>
                <button onClick={removeTodo}>Delete Todo</button>
            </div>
        );
    }
}

export default TodoDetailView;
