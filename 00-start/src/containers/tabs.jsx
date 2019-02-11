import { connect } from 'react-redux';
import Tabs from '../components/tabs/tabs.jsx';
import truncate from '../utils/truncate.js';
import { setActiveTab } from '../redux/actions/tabs.js'
import { getActiveTabId } from '../redux/selectors/tabs.js';


const mapStateToProps = (state) => {
    return {
        activeTabId: getActiveTabId(state),
        tabs: state.tabs,
        notes: state.notes.filter(note => note.tabId === getActiveTabId(state))
            .sort((note1, note2) => note2.lastEdited.diff(note1.lastEdited))
            .map(note => ({
                ...note,
                title: truncate(note.content) || 'Untitled note',
            })),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSetActiveTab: (id) => () => dispatch(setActiveTab(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs);
