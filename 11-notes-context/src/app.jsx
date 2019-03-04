import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './containers/controls.jsx';
import Notepad from './containers/notepad.jsx';
import Tabs from './containers/tabs.jsx';
import ThemeContext from './theme-context.js';

class App extends Component {

    static propTypes = {
        activeTabId: PropTypes.string.isRequired,
    };

    state = {
        theme: 'light'
    }

    toggleTheme = () => this.setState(({ theme }) => ({
        theme: theme === 'light'
            ? 'dark'
            : 'light'
    }))

    render() {
        const { activeTabId } = this.props;
        return (
            <ThemeContext.Provider
                value={{
                    theme: this.state.theme,
                    onToggleTheme: this.toggleTheme,
                }}
            >
                <div className="main__controls">
                    <Controls activeTabId={activeTabId} />
                </div>
                <div className="main__body">
                    <Tabs />
                    <Notepad />
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App;
