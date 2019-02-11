import React, { Component } from 'react';
import NotelistEmpty from './notelist-empty.jsx';
import NotelistItem from './notelist-item.jsx';
import './notelist.css';


class Notelist extends Component {

    get hasNotes() {
        const { notes } = this.props;
        return notes && notes.length > 0;
    }

    render() {
        const { notes, onSetActiveNote } = this.props;
        return (
            <div className="notelist">
                {!this.hasNotes
                    ? (<NotelistEmpty />)
                    : (
                        <ul className="notelist__list">
                            {this.hasNotes && notes.map(note => (
                                <NotelistItem
                                    key={note.id}
                                    onSetActiveNote={onSetActiveNote(note.id, note.isActive)}
                                    {...note}
                                />
                            ))}
                        </ul>
                    )
                }
            </div>
        )
    }
}

export default Notelist;
