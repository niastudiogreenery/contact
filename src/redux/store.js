import { createStore } from 'redux';
import reducer from './reducer/reducer';  // Correct the path to the reducer

// Create the Redux store using the reducer
const store = createStore(reducer);

export default store;
