import { combineReducers } from 'redux';
import categories from './categories.js';
import notes from './notes.js';


export default combineReducers({
    categories,
    notes,
});
