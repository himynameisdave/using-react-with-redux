import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import NotelistEmpty from './notelist-empty.jsx';
import NotelistItem from './notelist-item.jsx';
import './notelist.css';


class Notelist extends Component {

    static propTypes = {
        notes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            isActive: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
            lastEdited: PropTypes.string.isRequired,
        })),
        theme: PropTypes.string.isRequired,
        onSetActiveNote: PropTypes.func.isRequired,
    };

    get hasNotes() {
        const { notes } = this.props;
        return notes && notes.length > 0;
    }

    render() {
        const { notes, theme, onSetActiveNote } = this.props;
        return (
            <div className={classnames('notelist', {
                'notelist--theme-dark': theme === 'dark'
            })}>
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
