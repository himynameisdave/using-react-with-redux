import { connect } from 'react-redux';
import Notelist from '../components/notelist/notelist.jsx';
import { setActiveNote } from '../redux/actions/notes.js';
import { getNotesList } from '../redux/selectors/notes.js';


const mapStateToProps = (state) => ({
    notes: getNotesList(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSetActiveNote: (id, isActive) => () => !isActive && dispatch(setActiveNote(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notelist);
