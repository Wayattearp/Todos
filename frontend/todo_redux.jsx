import React from "react";
import ReactDOM from "react-dom";

const Todo = () => (
    (
        <h1>Todos</h1>
    )
);




document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<Todo />, root)
});


