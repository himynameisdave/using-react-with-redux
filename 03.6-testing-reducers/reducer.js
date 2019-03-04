import initialState from './initial-state.js';


const reducer = (state = initialState, action) => {
    if (action.type === actionTypes.INCREMENT) {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === actionTypes.DECREMENT) {
        return {
            counter: state.counter - 1
        };
    }
    return state;
};

export default reducer;
