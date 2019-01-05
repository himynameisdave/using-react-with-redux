import React from 'react';
import PropTypes from 'prop-types';


const NotelistItem = ({ title, lastEdited }) => (
    <li className="notelist__item">
        <div className="notelist__item__title">
            {title}
        </div>
        <div className="notelist__item__last-edited">
            {lastEdited}
        </div>
    </li>
);

NotelistItem.propTypes = {
    title: PropTypes.string,
    lastEdited: PropTypes.string,
};

export default NotelistItem;
