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
            <form onSubmit={this.handleSave}>
                <label >Title:
                    <input placeholder="get it done" value={this.state.title}
                        onChange={this.update('title')} required />
                </label>

                <label >Body:
                    <textarea placeholder="no excuses" value={this.state.body}
                        onChange={this.update('body')} cols='20' rows='5' required />
                </label>
                <button> I will do! </button>
            </form>
        )
    }
}

export default TodoForm;