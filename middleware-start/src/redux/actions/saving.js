import { saving as actionTypes } from './action-types.js';
import saveToBackend from '../../utils/save-to-backend.js';


const savingPending = () => ({
    type: actionTypes.pending
});

const savingSuccess = (data) => ({
    type: actionTypes.success,
    data,
});

const savingFailed = (error) => ({
    type: actionTypes.failed,
    error,
});

export const save = () => {
    return (dispatch, getState) => {
        dispatch(savingPending());
        saveToBackend({})
            .then((data) => {
                dispatch(savingSuccess(data));
            })
            .catch((error) => {
                dispatch(savingFailed(error));
            });
    };
}
