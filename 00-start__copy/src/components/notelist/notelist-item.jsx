import React from 'react';
import classnames from 'classnames';


const NotelistItem = ({ isActive, title, lastEdited, onSetActiveNote }) => (
    <li
        className={classnames('notelist__list__item', {
            'notelist__list__item--active': isActive,
        })}
        onClick={onSetActiveNote}
        role="button"
    >
        <div className="notelist__list__item__title">
            {title}
        </div>
        <div className="notelist__list__item__last-edited">
            {lastEdited}
        </div>
    </li>
);

export default NotelistItem;
