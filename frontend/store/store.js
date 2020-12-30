import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

 const configureStore = (preloadedState = {}) => {
   const store = createStore(rootReducer, preloadedState);
   store.subscribe(() => {
     localStorage.setItem('todos', JSON.stringify((store.getState().todos)));
     localStorage.setItem('steps', JSON.stringify((store.getState().steps)));
   })
   return store;
};

export default configureStore;