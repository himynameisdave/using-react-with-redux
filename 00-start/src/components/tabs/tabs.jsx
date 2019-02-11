import React from 'react';
import Notelist from '../notelist/notelist.jsx';
import Tab from './tabs-tab.jsx';
import './tabs.css';


const Tabs = ({ activeTabId, notes, tabs, onSetActiveTab, onSetActiveNote }) => {
    return (
        <div className="tabs">
            <ul className="tabs__menu">
                {tabs.map(tab => (
                    <Tab
                        key={tab.id}
                        {...tab}
                        onSetActiveTab={onSetActiveTab(tab.id)}
                    />
                ))}
            </ul>
            <Notelist
                notes={notes}
                onSetActiveNote={onSetActiveNote}
            />
        </div>
    );
}

export default Tabs;
