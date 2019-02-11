import React, { Component } from 'react';


class App extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    state = {
        value: '',
    }

    onChange = (event) => {
        const { value } = event.target;
        //  Change the input bg color to blue
        this.inputRef.current.style.backgroundColor = 'blue';
        if (value === 'blue') {
            this.inputRef.current.style.backgroundColor = 'blue';
        } else if (value === 'red') {
            this.inputRef.current.style.backgroundColor = 'red';
        } else if (value === 'green') {
            this.inputRef.current.style.backgroundColor = 'green';
        } else {
            this.inputRef.current.style.backgroundColor = '#fff';
        }
        this.setState(() => ({ value }));
    };

    onFocus = () => {
        console.log('here is the ref:', this.inputRef.current);
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div className="app">
                <h3>
                    <span role="img" aria-label="paint">🎨</span> Add some color!
                </h3>
                <input
                    type="text"
                    className="app__input"
                    ref={this.inputRef}
                    onChange={this.onChange}
                    value={this.state.value}
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
