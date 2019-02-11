import React from 'react';
import ControlsButton from './controls-button.jsx';
import './controls.css';


const Controls = ({ onAddNote, onDeleteNote }) => (
    <div className="controls">
        <ControlsButton
            text="Add note"
            onClick={() => onAddNote('New note')}
        />
        <ControlsButton
            text="Delete note"
            onClick={onDeleteNote}
        />
    </div>
);

export default Controls;
