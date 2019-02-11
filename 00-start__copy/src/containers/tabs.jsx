import { connect } from 'react-redux';
import Tabs from '../components/tabs/tabs.jsx';
import truncate from '../utils/truncate.js';


const mapStateToProps = (state) => {
    const activeTabId = state.tabs.find(tab => tab.isActive).id;
    return {
        activeTabId,
        tabs: state.tabs,
        notes: state.notes.filter(note => note.tabId === activeTabId)
            .sort((note1, note2) => note2.lastEdited.diff(note1.lastEdited))
            .map(note => ({
                ...note,
                title: truncate(note.content) || 'Untitled note',
            })),
    };
};

export default connect(
    mapStateToProps
)(Tabs);
