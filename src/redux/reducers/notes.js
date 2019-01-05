import { notes as actionTypes } from '../actions/action-types.js';
import createReducer from './create-reducer.js';



const initalState = [];

const actionsMap = {
    [actionTypes.addNote]: (state, action) => state.concat([{
        id: action.id,
        content: '',
        lastEdited: null,
    }]),
    [actionTypes.deleteNote]: (state, action) => state.filter(note => note.id !== action.id),
    [actionTypes.updateNoteContent]: (state, action) => state.map(note => note.id !== action.id
        ? note
        : ({
            ...note,
            content: action.content,
            lastEdited: action.lastEdited.printed,
            lastEditedRaw: action.lastEdited.raw,
        })
    )
};

export default createReducer(initalState, actionsMap);
