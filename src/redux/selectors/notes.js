import { createSelector } from 'reselect';

export const getNotes = state => state.notes;

export const getActiveNote = createSelector(
    getNotes,
    notes => notes.find(note => note.isActive) || null,
);

export const getActiveId = createSelector(
    getActiveNote,
    activeNote => activeNote ? activeNote.id : '',
);

export const getActiveContent = createSelector(
    getActiveNote,
    activeNote => activeNote ? activeNote.content : '',
);

export const getActiveLastEdited = createSelector(
    getActiveNote,
    activeNote => activeNote ? activeNote.lastEdited : '',
);
