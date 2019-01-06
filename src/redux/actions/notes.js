import uuid from 'uuid';
import { notes as actionTypes } from './action-types.js';
import getLastEditedTime from '../../utils/get-last-edited-time.js';


export const addNote = (initalContent = '') => {
    const lastEdited = getLastEditedTime();
    return {
        type: actionTypes.addNote,
        //  Generate uuid here in the action creator
        id: uuid(),
        initalContent,
        lastEdited: lastEdited.printed,
        lastEditedRaw: lastEdited.raw,
    };
};

export const deleteNote = () => ({
    type: actionTypes.deleteNote
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
