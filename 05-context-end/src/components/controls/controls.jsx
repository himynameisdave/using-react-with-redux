import React from 'react';
import PropTypes from 'prop-types';
import ControlsButton from './controls-button.jsx';
import ThemeContext from '../../theme-context.js';
import './controls.css';


const Controls = ({ activeTabId, onAddNote, onDeleteNote }) => (
    <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
            <div
                className="controls"
                style={{
                    backgroundColor: theme === 'dark' ? '#444444' : '#ffffff'
                }}
            >
                <ControlsButton
                    theme={theme}
                    text="Add note"
                    onClick={onAddNote(activeTabId)}
                />
                <ControlsButton
                    theme={theme}
                    text="Delete note"
                    onClick={onDeleteNote}
                />
                <ControlsButton
                    theme={theme}
                    text="Switch theme"
                    onClick={toggleTheme}
                    alignRight
                />
            </div>
        )}
    </ThemeContext.Consumer>
);

Controls.propTypes = {
    activeTabId: PropTypes.string.isRequired,
    onAddNote: PropTypes.func.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
};

export default Controls;
