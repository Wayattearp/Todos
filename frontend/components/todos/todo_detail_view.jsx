import React from 'react';
import StepListContainer from '../steps/step_list_container';
import { motion } from "framer-motion";

class TodoDetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        };

        this.toggleStepsForm = this.toggleStepsForm.bind(this);
    }

    toggleStepsForm() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const { removeTodo, todo } = this.props;
        return (
            <div className={this.state.visible ? "todoDetailVisible" : "todoDetailHidden"}>

                <motion.div className="StepsBackground"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.5
                        }
                    }}
                >

                    <motion.div className="todoView"
                    // style={{ background: '#' + this.props.color }}
                    >
                        <button
                            className="closeStepsButton"
                            onClick={this.toggleStepsForm}>×</button>
                        <motion.div className="todoBody"
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1,
                                transition: {
                                    duration: 0.4
                                }
                            }}>
                            {todo.body}
                        </motion.div>
                        <motion.div className="stepListContainer"
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1,
                                transition: {
                                    duration: 0.6
                                }
                            }}>
                            <StepListContainer
                                todo_id={todo.id} />
                        </motion.div>
                        <div class="deleteStepMain" title="Delete Step">
                            <span class="fas fa-trash"
                                onClick={removeTodo}>
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        );
    }
}

export default TodoDetailView;
