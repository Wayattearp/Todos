import React from 'react';
import { uniqueId } from '../../util/unique_id';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            body: "",
            done: false
        };
        this.handleSave = this.handleSave.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSave(event) {
        event.preventDefault();
        const todo = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveTodo(todo);
        this.setState({
            title: "",
            body: ""
        });
    }

    render() {
        return (
            <form
                className="todoForm"
                onSubmit={this.handleSave}>
                <label className="todoTitleBox">Title:
                    <input
                        className="input"
                        placeholder="My Goal" value={this.state.title}
                        onChange={this.update('title')} required />
                </label>

                <label className="todoBodyBox">
                    <textarea
                        className="textArea"
                        placeholder="How am I going to achieve it...🤔" value={this.state.body}
                        onChange={this.update('body')} cols='35' rows='6' required />
                </label>
                <button
                className="button"
                > I will do it! </button>
            </form>
        )
    }
}

export default TodoForm;