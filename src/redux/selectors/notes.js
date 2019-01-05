import { createSelector } from 'reselect';
import truncate from '../../utils/truncate.js';


export const getNotes = state => state.notes;

export const getNotesList = createSelector(
    getNotes,
    notes => notes.map(note => ({
        id: note.id,
        isActive: note.isActive,
        title: truncate(note.content),
        lastEdited: note.lastEdited,
    }))
);

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

// export const getNoteById = createSelector(
//     getNotes,
//     // id => id, // To pass the given ID through
//     (notes, id) => notes.find(note => note.id === id) || null,
// );

// export const getNoteTitle = createSelector(
//     getNoteById,
//     note => truncate(note.content),
// );
