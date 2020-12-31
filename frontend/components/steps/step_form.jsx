import React from 'react';
import { uniqueId } from '../../util/unique_id';

class StepForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false,
            todo_id: this.props.todo_id
        };

        this.handleSave = this.handleSave.bind(this);
    }

    update(property) {
        return e => this.setState({ [property]: e.target.value });
    }

    handleSave(event) {
        event.preventDefault();
        const step = Object.assign({}, this.state, { id: uniqueId() });
        this.props.receiveStep(step);
        this.setState({
            body: "",
            title: "",
        })
    }

    render() {
        return (
            <form className="stepForm">
                <label>Titile
                    <input placeholder="step 1 is..." value={this.state.title}
                        onChange={this.update('title')} required />
                </label>
                <label >Description:
                    <textarea placeholder="getting done" value={this.state.body}
                        onChange={this.update('body')} cols='20' rows='5' required />
                </label>
                <button onClick={this.handleSave}> Add Step </button>
            </form>
        )
    }
}

export default StepForm;