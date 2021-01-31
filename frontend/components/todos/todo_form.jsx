import React from 'react';
import { uniqueId } from '../../util/unique_id';
import { motion } from "framer-motion"

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
                <motion.div 
                initial={{
                    scale: 0,
                    opacity: 0
                }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        duration: 0.3
                    }
                    
                }}
                className="formContainer">
                <form
                        className="todoForm"
                        onSubmit={this.handleSave}>
                        <label className="todoTitleBox">Title {': '}
                            <input
                                className="input"
                                placeholder="改善" value={this.state.title}
                                onChange={this.update('title')} required />
                        </label>

                        <label className="todoBodyBox">
                            <textarea
                                className="textArea"
                                placeholder="Imagine it done...🤔" value={this.state.body}
                                onChange={this.update('body')} cols='30' rows='5' required />
                        </label>
                        <img onClick={this.handleThinkingGuySave} src="../thinker.gif" width="200px" height="200px" frameBorder="0" className="giphyEmbed" allowFullScreen></img>
                        <button
                            className="saveButton"
                            id={"saveButton"}
                        > Save </button>
                    </form>

                </motion.div>

        )
    }
}

export default TodoForm;