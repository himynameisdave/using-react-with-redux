import React, { Children, Component } from 'react';
import Tab from './tabs-tab.jsx';
import './tabs.css';


class Tabs extends Component {

    static Tab = Tab;

    state = {
        activeTabIndex: 0,
    };

    handleUpdateActiveTab = (tabIndex) => () => this.setState(() => ({
        activeTabIndex: tabIndex
    }));

    render() {
        return (
            <div className="tabs">
                <ul className="tabs__menu">
                    {Children.map(this.props.children, (child, index) => {
                        return React.cloneElement(child, {
                            isActive: index === this.state.activeTabIndex,
                            onSetActiveTab: this.handleUpdateActiveTab(index),
                        });
                    })}
                </ul>
            </div>
        );
    }
};


export default Tabs;
