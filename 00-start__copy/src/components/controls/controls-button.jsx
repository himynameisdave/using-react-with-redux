import React from 'react'


const ControlsButton = ({ text, onClick }) => (
    <button
        className="controls__button"
        onClick={onClick}
        aria-label={text}
    >
        {text}
    </button>
);

export default ControlsButton;
