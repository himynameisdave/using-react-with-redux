import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './notepad.css';


class Notepad extends Component {

    static propTypes = {
        id: PropTypes.string,
        content: PropTypes.string,
        lastEdited: PropTypes.string,
        onAddNote: PropTypes.func.isRequired,
        onUpdateNoteContent: PropTypes.func.isRequired,
    };


    get activeNoteExists() {
        return !!this.props.id;
    }

    handleChange = (e) => {
        const { id, onAddNote, onUpdateNoteContent } = this.props;
        const content = e.target.value;
        if (!this.activeNoteExists) {
            return onAddNote(content);
        }
        return onUpdateNoteContent(id, content);
    }

    render() {
        const { content, lastEdited } = this.props;
        return (
            <div className="notepad">
                {lastEdited && (
                    <div className="notepad__last-edit">
                        {lastEdited}
                    </div>
                )}
                <textarea
                    className="notepad__content"
                    onChange={this.handleChange}
                    value={content}
                />
            </div>
        );
    }
};

export default Notepad;
