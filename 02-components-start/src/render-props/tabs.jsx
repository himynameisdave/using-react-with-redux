import { Component } from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {

    static propTypes = {
        children: PropTypes.func.isRequired,
        stateReducer: PropTypes.func,
    }

    static defaultProps = {
        stateReducer: () => {},
    }

    state = {
        activeTabIndex: 0,
    };

    get renderProps() {
        return {
            activeTabIndex: this.state.activeTabIndex,
            getContentProps: this.getContentProps,
            getTabProps: this.getTabProps,
        };
    }

    getContentProps = () => ({
        className: 'tabs__content'
    });

    getTabProps = (tabIndex) => ({
        isActive: tabIndex === this.state.activeTabIndex,
        onSetActiveTab: this.handleSetActiveTab(tabIndex),
    });

    handleSetActiveTab = (activeTabIndex) => () => this.setState(
        this.props.stateReducer(activeTabIndex)
    );

    render() {
        return this.props.children(this.renderProps);
    }
}

export default Tabs;
