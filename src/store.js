import {createStore} from 'redux';
import rootReducer from './reducer/index';

const store =createStore(rootReducer, window. _REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__());
export default store;