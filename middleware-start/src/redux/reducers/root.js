import { combineReducers } from 'redux';
import tabs from './tabs.js';
import notes from './notes.js';
import saving from './saving.js';

export default combineReducers({
    tabs,
    notes,
    saving,
});
