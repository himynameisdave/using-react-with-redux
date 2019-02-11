import React, { Component } from 'react';
import InputColors from './higher-order-components/input-colors.jsx';


const TextInput = ({ forwardedRef, ...rest }) => (
    <input
        ref={forwardedRef}
        {...rest}
    />
);

const ColorfulTextInput = InputColors(TextInput);


class App extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    onFocus = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div className="app">
                <h3>🎨 Add some color!</h3>
                <ColorfulTextInput
                    className="app__input"
                    ref={this.inputRef}
                />
                <button
                    className="app__button"
                    onClick={this.onFocus}
                >
                    Focus!
                </button>
            </div>
        );
    }
}


export default App;
