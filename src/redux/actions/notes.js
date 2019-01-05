import uuid from 'uuid';
import { notes as actionTypes } from './action-types.js';
import getLastEditedTime from '../../utils/get-last-edited-time.js';


export const addNote = (initalContent = '') => ({
    type: actionTypes.addNote,
    //  Generate uuid here in the action creator
    id: uuid(),
    initalContent,
    lastEdited: getLastEditedTime(),
});

export const deleteNote = (id) => ({
    type: actionTypes.addNote,
    id,
});

export const updateNoteContent = (id, content) => ({
    type: actionTypes.updateNoteContent,
    id,
    content,
    lastEdited: getLastEditedTime(),
});

export const setActiveNote = (id) => ({
    type: actionTypes.setActiveNote,
    id
});
