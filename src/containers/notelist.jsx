import { connect } from 'react-redux';
import Notelist from '../components/notelist/notelist.jsx';
import { setActiveNote } from '../redux/actions/notes.js';
import { getNotesSorted } from '../redux/selectors/notes.js';


const mapStateToProps = (state) => ({
    notes: getNotesSorted(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSetActiveNote: (id, isActive) => () => !isActive && dispatch(setActiveNote(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notelist);
