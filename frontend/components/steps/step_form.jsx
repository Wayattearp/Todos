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
                <label>
                    <input
                        className="inputStep"
                        placeholder="Next step is..."
                        value={this.state.title}
                        onChange={this.update('title')} required />
                </label>
                <label >
                    <textarea
                        className='inputStep'
                        placeholder="Details..."
                        value={this.state.body}
                        onChange={this.update('body')} cols='40' rows='5' required />
                </label>
                <button 
                className="saveStepButton"
                onClick={this.handleSave}> Add Step </button>
            </form>
        )
    }
}

export default StepForm;