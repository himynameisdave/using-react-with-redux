import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import Controls from './containers/controls.jsx';
import Notepad from './containers/notepad.jsx';
import Tabs from './components/tabs/tabs.jsx';
import ThemeContext from './theme-context.js';
import TabsContext from './tabs-context.js';


const tabFactory = (title = 'New tab', isActive = false) => ({
    id: uuid(),
    title,
    notes: [],
    isActive,
});

class App extends Component {

    static propTypes = {
        activeTabId: PropTypes.string.isRequired,
    }

    state = {
        tabs: [
            tabFactory('Personal', true),
            tabFactory('Work'),
            tabFactory('Other'),
        ],
        theme: 'light',
    }

    toggleTheme = () => this.setState(({ theme }) => ({
        theme: theme === 'light'
            ? 'dark'
            : 'light'
    }));

    setActiveTab = (tabId) => () => this.setState(({ tabs }) => ({
        tabs: tabs.map(tab => ({
            ...tab,
            isActive: tab.id === tabId
        }))
    }));

    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.state.theme,
                toggleTheme: this.toggleTheme,
            }}>
                <TabsContext.Provider value={{
                    tabs: this.state.tabs,
                    onSetActiveTab: this.setActiveTab
                }}>
                    <div className="main__controls">
                        <Controls activeTabId={this.props.activeTabId} />
                    </div>
                    <div className="main__body">
                        <Tabs />
                        <Notepad />
                    </div>
                </TabsContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

export default App;
