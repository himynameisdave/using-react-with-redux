import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import Tab from './tabs-tab.jsx';
import './tabs.css';

const initalTabs = [
    {
        id: uuid(),
        title: 'Personal',
        isActive: true,
    },
    {
        id: uuid(),
        title: 'Work',
        isActive: false,
    },
    {
        id: uuid(),
        title: 'Other',
        isActive: false,
    },
];

const Tabs = () => {
    const [tabs, updateTabs] = useState(initalTabs);

    const setActiveTodo = (tabId) => () => updateTabs(tabs.map(tab => ({
        ...tab,
        isActive: tab.id === tabId,
    })));

    const activeTab = tabs.find(({ isActive }) => isActive);

    useEffect(() => {
        document.title = `Memos - ${activeTab.title}`;
    });

    return (
        <div className="tabs">
            <ul className="tabs__menu">
                {tabs.map(tab => (
                    <Tab
                        key={tab.id}
                        title={tab.title}
                        isActive={tab.isActive}
                        onSetActiveTab={setActiveTodo(tab.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Tabs;
