import { notes as actionTypes } from '../actions/action-types.js';
import createReducer from './create-reducer.js';


const initalState = [];

const actionsMap = {
    [actionTypes.addNote]: (state, action) => state
        .map(note => ({ ...note, isActive: false })) // turn off the current active note
        .concat([{
            id: action.id,
            content: action.initalContent || '',
            lastEdited: action.lastEdited,
            lastEditedRaw: action.lastEditedRaw,
            isActive: true,
        }]),
    [actionTypes.deleteNote]: (state, action) => state.filter(note => !note.isActive),
    [actionTypes.updateNoteContent]: (state, action) => state.map(note => note.id !== action.id
        ? note
        : ({
            ...note,
            content: action.content,
            lastEdited: action.lastEdited.printed,
            lastEditedRaw: action.lastEdited.raw,
        })
    ),
    [actionTypes.setActiveNote]: (state, action) => state.map(note => ({
        ...note,
        isActive: note.id === action.id,
    }))
};

export default createReducer(initalState, actionsMap);
