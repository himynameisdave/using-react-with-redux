import React, { Component } from 'react';
import uuid from 'uuid';
import Tab from './tabs-tab.jsx';
import TabsContent from './tabs-content.jsx';
import './tabs.css';


class Tabs extends Component {

    render() {
        return (
            <div className="tabs">
                <ul className="tabs__menu">
                    {this.state.tabs.map(tab => (
                        <Tab
                            key={tab.id}
                            {...tab}
                            onSetActiveTab={this.handleSetActiveTab(tab.id)}
                        />
                    ))}
                </ul>
                <TabsContent
                    className={this.activeTab.className}
                    content={this.activeTab.content}
                />
            </div>
        );
    }
};


export default Tabs;
