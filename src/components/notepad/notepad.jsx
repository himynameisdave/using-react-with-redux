import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import './notepad.css';


class Notepad extends Component {

    static propTypes = {
        content: PropTypes.string,
        lastEdited: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            lastEdited: props.lastEdited,
        }
    }

    get updatedLastEdited() {
        const date = dayjs();
        const dayEdited = date.format('MMMM D, YYYY');
        const timeEdited = date.format('h:mm A');
        return `${dayEdited} at ${timeEdited}`;
    }

    handleChange = (e) => {
        const content = e.target.value;
        return this.setState(() => ({
            content,
            lastEdited: this.updatedLastEdited,
        }));
    }

    render() {
        const { content, lastEdited } = this.state;
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
