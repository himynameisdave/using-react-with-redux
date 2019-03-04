import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';


const ControlsButton = ({ alignRight, text, onClick }) => (
    <button
        className={classnames('controls__button', {
            'controls__button--right': alignRight
        })}
        onClick={onClick}
        aria-label={text}
    >
        {text}
    </button>
);

ControlsButton.propTypes = {
    alignRight: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

ControlsButton.defaultProps = {
    alignRight: false,
};

export default ControlsButton;
