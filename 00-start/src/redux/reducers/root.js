import { combineReducers } from 'redux';
import notesReducer from './notes.js';
import tabsReducer from './tabs.js';


export default combineReducers({
    notes: notesReducer,
    tabs: tabsReducer,
});
