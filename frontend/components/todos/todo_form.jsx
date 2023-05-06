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

    handleThinkingGuySave() {
        document.getElementById("saveButton").click()
    }

    render() {
        return (
            <div
                className="formContainer">
                <form
                    className="todoForm"
                    onSubmit={this.handleSave}>
                    <label className="todoTitleBox">
                    <br/>
                        <input
                            className="input"
                            id="titleInput"
                            autoComplete="off"
                            placeholder="Title"  value={this.state.title}
                            onChange={this.update('title')} required />
                    </label>

                    <label className="todoBodyBox">
                        <textarea
                            className="textArea"
                            placeholder="If you can think it, you can do it" value={this.state.body}
                            onChange={this.update('body')} cols='30' rows='5' required />
                    </label>
                    <img onClick={this.handleThinkingGuySave} src="https://acegif.com/wp-content/gif/thinking-emoji-1.gif" width="200px" height="200px" frameBorder="0" className="giphyEmbed" allowFullScreen></img>
                    <button
                        className="saveButton"
                        id={"saveButton"}
                    > Save </button>
                </form>

            </div>

        )
    }
}

export default TodoForm;