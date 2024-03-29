import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const preloadedState = localStorage.state ? 
    JSON.parse(localStorage.state) : {};
    const store = configureStore(preloadedState);

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root)
});



