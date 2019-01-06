import { connect } from 'react-redux';
import Controls from '../components/controls/controls.jsx';
import { addNote, deleteNote } from '../redux/actions/notes.js';


const mapDispatchToProps = (dispatch) => ({
    onAddNote: () => dispatch(addNote()),
    onDeleteNote: () => dispatch(deleteNote()),
});

export default connect(
    null,
    mapDispatchToProps,
)(Controls);
