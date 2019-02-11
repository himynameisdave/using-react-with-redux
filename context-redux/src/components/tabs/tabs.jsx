import React from 'react';
import classnames from 'classnames';
import Notelist from '../../containers/notelist.jsx';
import Tab from './tabs-tab.jsx';
import ThemeContext from '../../theme-context.js';
import TabsContext from '../../tabs-context.js';
import './tabs.css';


const Tabs = () => (
    <ThemeContext.Consumer>
        {({ theme }) => (
            <TabsContext.Consumer>
                {({ tabs, onSetActiveTab }) => (
                    <div className={classnames('tabs', {
                        'tabs--theme-dark': theme === 'dark'
                    })}>
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
                            activeTabId={tabs.find(tab => tab.isActive).id}
                            theme={theme}
                        />
                    </div>
                )}
            </TabsContext.Consumer>
        )}
    </ThemeContext.Consumer>
);

export default Tabs;
