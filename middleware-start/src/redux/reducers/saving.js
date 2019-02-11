import { saving as actionTypes } from '../actions/action-types.js';


const initalState = {
    isSaving: false,
    error: null,
    data: {}
};

const savingReducer = (state = initalState, action) => {

    if (action.type === actionTypes.pending) {
        return {
            ...state,
            isSaving: true,
            error: null,
            data: {},
        };
    }

    if (action.type === actionTypes.success) {
        return {
            ...state,
            isSaving: false,
            data: action.data || {}
        };
    }

    if (action.type === actionTypes.failed) {
        return {
            ...state,
            isSaving: false,
            error: action.error
        };
    }

    return state;
}

export default savingReducer;
