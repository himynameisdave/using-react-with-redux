import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotelistEmpty from './notelist-empty.jsx';
import NotelistItem from './notelist-item.jsx';
import './notelist.css';


class Notelist extends Component {

    static propTypes = {
        notes: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            lastEdited: PropTypes.string,
        })),
    };

    get hasNotes() {
        const { notes } = this.props;
        return notes && notes.length > 0;
    }

    render() {
        return (
            <div className="notelist">
                {!this.hasNotes
                    ? (<NotelistEmpty />)
                    : (
                        <ul className="notelist__list">
                            {this.hasNotes && this.props.notes.map(note => (
                                <NotelistItem
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
