import React, { Component } from 'react';
import Tab from './components/tabs/tabs-tab.jsx';
import Tabs from './render-props/tabs.jsx';
import './components/tabs/tabs.css';


class App extends Component {

    tabs = [
        {
            title: 'Personal',
            content: 'Personal Notes',
        },
        {
            title: 'Work',
            content: 'Work Notes',
        },
        {
            title: 'Other',
            content: 'Other Notes',
        },
    ];

    stateReducer = (clickedTabIndex, previousState) => {
        if (clickedTabIndex === 1) {
            alert('Hello from Tab #2');
        }
        return {
            activeTabIndex: clickedTabIndex,
        };
    };

    renderTabs = tabsProps => (
        <div className="tabs">
            <ul className="tabs__menu">
                {this.tabs.map((tab, index) => (
                    <Tab
                        key={tab.title}
                        title={tab.title}
                        {...tabsProps.getTabProps(index)}
                    />
                ))}
            </ul>
            <div {...tabsProps.getContentProps()}>
                {this.tabs.find((tab, index) => index === tabsProps.activeTabIndex).content}
            </div>
        </div>
    );

    render() {
        return (
            <Tabs
                stateReducer={this.stateReducer}
            >
                {this.renderTabs}
            </Tabs>
        );
    }
}

export default App;
