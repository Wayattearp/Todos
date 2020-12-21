import React from 'react';
import { Provider } from 'react-redux';
import App from './app'

//destructuring store from props.store
const Root = ({ store }) => (
        <Provider store={store}>
                <App />
        </Provider>
)



export default Root;