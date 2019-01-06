import React from 'react';
import PropTypes from 'prop-types';
import ControlsButton from './controls-button.jsx';
import './controls.css';


const Controls = ({ onAddNote, onDeleteNote }) => (
    <div className="controls">
        <ControlsButton
            text="Add note"
            onClick={onAddNote}
        />
        <ControlsButton
            text="Delete note"
            onClick={onDeleteNote}
        />
    </div>
);

Controls.propTypes = {
    onAddNote: PropTypes.func.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
};

export default Controls;
